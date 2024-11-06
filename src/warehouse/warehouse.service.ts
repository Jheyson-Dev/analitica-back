import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Warehouse } from './warehouse.entity';

@Injectable()
export class WarehouseService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateWarehouseDto): Promise<Warehouse> {
    try {
      const warehouse = await this.prisma.warehouse.create({
        data,
      });
      return warehouse;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error creating warehouse: ${error.message}`,
      );
    }
  }

  async findAll(): Promise<Warehouse[]> {
    try {
      const warehouses = await this.prisma.warehouse.findMany();
      return warehouses;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error fetching warehouses: ${error.message}`,
      );
    }
  }

  async findOne(id: number): Promise<Warehouse> {
    try {
      const warehouse = await this.prisma.warehouse.findUnique({
        where: { id },
      });
      if (!warehouse) {
        throw new NotFoundException(`Warehouse with ID ${id} not found`);
      }
      return warehouse;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error finding warehouse with id ${id}: ${error.message}`,
      );
    }
  }

  async update(id: number, data: UpdateWarehouseDto): Promise<Warehouse> {
    try {
      const warehouse = await this.prisma.warehouse.update({
        where: { id },
        data,
      });
      return warehouse;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error updating warehouse: ${error.message}`,
      );
    }
  }

  async remove(id: number): Promise<Warehouse> {
    try {
      const warehouse = await this.prisma.warehouse.update({
        where: { id },
        data: {
          status: false,
        },
      });
      return warehouse;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error removing warehouse with id ${id}: ${error.message}`,
      );
    }
  }
}
