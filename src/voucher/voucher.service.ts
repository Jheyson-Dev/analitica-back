import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateVoucherDto,
  CreateVoucherDtoComplete,
} from './dto/create-voucher.dto';
import { Voucher } from './entity/voucher.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { NotificationsGateway } from 'src/notification/notifications.gateway';

@Injectable()
export class VoucherService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationsGateway: NotificationsGateway,
  ) {}

  async create(data: CreateVoucherDtoComplete): Promise<Voucher> {
    console.log(data);

    // const area = await this.prisma.area.findFirst({
    //   where: {},
    // });

    const immediateBossId = await this.prisma.user.findUnique({
      where: {
        id: data.requesterId,
      },
      include: {
        area: {
          select: {
            managerId: true,
          },
        },
      },
    });

    const municipalManagerId = await this.prisma.user.findFirst({
      where: {
        role: {
          name: 'gerente-municipal',
        },
      },
      select: {
        id: true,
      },
    });
    const supplyManagerId = await this.prisma.user.findFirst({
      where: {
        role: {
          name: 'jefe-almacen',
        },
      },
      select: {
        id: true,
      },
    });
    const warehouseManagerId = await this.prisma.user.findFirst({
      where: {
        role: {
          name: 'encargado-almacen',
        },
      },
      select: {
        id: true,
      },
    });

    // const datos = {
    //   immediateBossId: immediateBossId.area.managerId,
    //   municipalManagerId: municipalManagerId.id,
    //   supplyManagerId: supplyManagerId.id,
    //   warehouseManagerId: warehouseManagerId.id,
    // };
    // console.log(datos);
    try {
      const { items, ...copy } = data;
      const voucher = await this.prisma.voucher.create({
        data: {
          ...copy,
          immediateBossId: immediateBossId.area.managerId,
          municipalManagerId: municipalManagerId.id,
          supplyManagerId: supplyManagerId.id,
          warehouseManagerId: warehouseManagerId.id,
        },
      });
      const userIds = [
        copy.operatorId,
        copy.requesterId,
        immediateBossId.area.managerId,
        municipalManagerId.id,
        supplyManagerId.id,
        warehouseManagerId.id,
      ];

      await this.notificationsGateway.sendNotificationToUser(
        userIds,
        'Solicitud de Voucher Creado',
        'VOUCHER',
        1,
      );
      // Crear los items asociados al voucher
      if (items && items.length > 0) {
        const itemsWithVoucherId = items.map((item, index) => ({
          description: item.description,
          quantity: Number(item.quantity),
          total: Number(item.total),
          voucherId: voucher.id,
          item: `${index + 1}`,
        }));

        await this.prisma.voucherItem.createMany({
          data: itemsWithVoucherId,
        });
      }

      return voucher;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error creating voucher: ${error.message}`,
      );
    }
  }

  async findOne(id: number, user): Promise<Voucher> {
    let voucher;

    if (
      user.role === 'admin' ||
      user.role === 'gerente-municipal' ||
      user.role === 'operador' ||
      user.role === 'jefe-area' ||
      user.role === 'jefe-almacen' ||
      user.role === 'encargado-almacen'
    ) {
      voucher = await this.prisma.voucher.findUnique({
        where: { id },
        include: {
          user: true,
          items: true,
        },
      });
    } else {
      voucher = await this.prisma.voucher.findUnique({
        where: { id, requesterId: user.id },
        include: {
          user: true,
          items: true,
        },
      });
    }

    if (!voucher) {
      throw new Error('Voucher not found');
    }

    const operador = await this.prisma.user.findFirst({
      where: {
        id: voucher.operatorId,
      },
    });
    (voucher as any).operador = operador; // Type assertion to bypass TypeScript error
    return voucher;
  }

  async findAll(user): Promise<Voucher[]> {
    if (
      user.role === 'admin' ||
      user.role === 'gerente-municipal' ||
      user.role === 'operador' ||
      user.role === 'jefe-area' ||
      user.role === 'jefe-almacen' ||
      user.role === 'encargado-almacen'
    ) {
      return await this.prisma.voucher.findMany({
        include: {
          items: true,
          user: true,
        },
      });
    } else {
      return await this.prisma.voucher.findMany({
        where: {
          requesterId: user.id,
        },
        include: {
          items: true,
          user: true,
        },
      });
    }
  }

  async update(id: number, data: UpdateVoucherDto): Promise<Voucher> {
    console.log(JSON.stringify(data));
    return this.prisma.voucher.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Voucher> {
    return this.prisma.voucher.delete({
      where: { id },
    });
  }
}
