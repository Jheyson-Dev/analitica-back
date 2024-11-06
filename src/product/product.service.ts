import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import Decimal from 'decimal.js';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateKardexDto } from './dto/create-kardex.dto';
import { Kardex } from './entities/kardex.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { Inventory } from './entities/inventory.entity';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { NotificationsGateway } from 'src/notification/notifications.gateway';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from 'aws-sdk';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsGateway: NotificationsGateway,
  ) {}

  async create(data: CreateProductDto): Promise<Product> {
    try {
      const product = await this.prisma.product.create({
        data: {
          ...data,
          price: new Decimal(data.price),
        },
      });
      return product;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error creating product: ${error.message}`,
      );
    }
  }

  async findAll(user): Promise<Product[]> {
    console.log(user);
    try {
      let products;

      if (user.role === 'admin' || user.area === 'AREA GENERAL') {
        // Si el rol es admin, devolver todos los productos sin filtros
        products = await this.prisma.product.findMany({
          include: {
            inventory: {
              include: {
                warehouse: true,
              },
            },
            kardex: true,
            transfer: true,
          },
        });
      } else {
        // Si el rol no es admin, aplicar los filtros correspondientes
        const almacen = await this.prisma.area.findFirst({
          where: {
            name: user.area,
          },
        });

        products = await this.prisma.product.findMany({
          where: {
            inventory: {
              some: {
                warehouseId: almacen.id,
              },
            },
          },
          include: {
            inventory: {
              include: {
                warehouse: true,
              },
            },
            kardex: true,
            transfer: true,
          },
        });
      }

      return products;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error fetching products: ${error.message}`,
      );
    }
  }

  async findOne(id: number): Promise<Product> {
    try {
      const product = await this.prisma.product.findUnique({
        where: { id },
        include: {
          inventory: {
            include: {
              warehouse: true,
            },
          },
          kardex: true,
          transfer: true,
        },
      });
      return product;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error finding product with id ${error.message}`,
      );
    }
  }

  async update(id: number, data: UpdateProductDto): Promise<Product> {
    try {
      const product = await this.prisma.product.update({
        where: { id },
        data,
      });
      return product;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error updating product: ${error.message}`,
      );
    }
  }

  async remove(id: number): Promise<Product> {
    try {
      const product = await this.prisma.product.update({
        where: { id },
        data: {
          status: false,
        },
      });
      return product;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error removing product with id ${id}: ${error.message}`,
      );
    }
  }

  // FUNCIONALIDAD ADICIONAL

  async findAllKardex(): Promise<Kardex[]> {
    try {
      const kardexs = await this.prisma.kardex.findMany({
        include: {
          product: true,
          warehouse: true,
        },
      });
      return kardexs;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error fetching kardex: ${error.message}`,
      );
    }
  }

  async createKardex(data: CreateKardexDto): Promise<Kardex> {
    try {
      const inventory = await this.prisma.inventory.findFirst({
        where: {
          productId: data.productId,
          warehouseId: data.warehouseId,
        },
        include: {
          product: true,
          warehouse: true,
        },
      });

      if (!inventory) {
        if (data.movementType === 'OUT') {
          throw new BadRequestException(
            'No se puede realizar una salida de productos sin un registro de inventario existente.',
          );
        }

        await this.prisma.inventory.create({
          data: {
            productId: data.productId,
            warehouseId: data.warehouseId,
            quantity: data.quantity,
            minStock: 20,
          },
        });
      } else {
        if (data.movementType === 'OUT' && inventory.quantity < data.quantity) {
          throw new BadRequestException(
            'Cantidad de productos insuficiente en el almacen.',
          );
        }

        const inventario = await this.prisma.inventory.update({
          where: { id: inventory.id },
          data: {
            quantity: {
              increment:
                data.movementType === 'IN' ? data.quantity : -data.quantity,
            },
          },
          include: {
            product: true,
            warehouse: true,
          },
        });

        // Verificar si el inventario es menor o igual al stock mínimo
        if (inventory.quantity <= inventory.minStock) {
          const message = `El inventario del producto ${inventario.product.name} en el almacén ${inventario.warehouse.name} ha alcanzado el stock mínimo.`;
          const type = 'ALERT INVENTORY';

          const admin = await this.prisma.user.findFirst({
            where: {
              role: {
                name: 'admin',
              },
            },
          });
          const areaManager = await this.prisma.warehouse.findUnique({
            where: {
              id: inventario.warehouseId,
            },
            select: {
              area: {
                select: {
                  managerId: true,
                  name: true,
                },
              },
            },
          });

          console.log(areaManager.area.managerId);

          await this.notificationsGateway.sendNotificationToUser(
            admin.id, // Enviar notificación solo al administrador (usuario 1)
            message,
            type,
            1,
          ); // Enviar notificación solo al administrador (usuario 1)
          await this.notificationsGateway.sendNotificationToUser(
            areaManager.area.managerId, // Enviar notificación solo al administrador (usuario 1)
            message,
            type,
            1,
          ); // Enviar notificación solo al administrador (usuario 1)
        }
      }
      // Enviar notificación de actualización de inventario
      // const message = `El inventario del producto ${data.productId} en el almacén ${data.warehouseId} ha sido actualizado.`;
      // await this.notificationsGateway.sendNotificationToAll(message);

      const kardex = await this.prisma.kardex.create({
        data,
      });

      return kardex;
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException(
        `Error creating kardex: ${error.message}`,
      );
    }
  }

  async updateMinStock(
    id: number,
    data: UpdateInventoryDto,
  ): Promise<Inventory> {
    try {
      const inventory = await this.prisma.inventory.update({
        where: {
          id,
        },
        data,
      });
      return inventory;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error updating inventory: ${error.message}`,
      );
    }
  }
}
