import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAreaDto } from './dto/area-create.dto';
import { Area } from './area.entity';
import { UpdateAreaDto } from './dto/area-update.dto';

@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAreaDto): Promise<Area> {
    try {
      return this.prisma.area.create({ data });
    } catch (error) {
      throw new InternalServerErrorException(
        `Error creating area: ${error.message}`,
      );
    }
  }

  async findAll(): Promise<Area[]> {
    const response = await this.prisma.area.findMany({
      include: {
        manager: true,
        users: true,
        warehouse: {
          include: {
            Kardex: true,
            Inventory: {
              include: {
                product: true,
              },
            },
          },
        },
      },
    });
    return response;
  }

  async findOne(id: number): Promise<Area | null> {
    try {
      return this.prisma.area.findUnique({
        where: { id },
        include: {
          manager: true,
          users: true,
          warehouse: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Error finding area: ${error.message}`,
      );
    }
  }

  async update(id: number, data: UpdateAreaDto): Promise<Area> {
    return this.prisma.area.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Area> {
    return this.prisma.area.update({
      where: { id },
      data: { status: false },
    });
  }
}
