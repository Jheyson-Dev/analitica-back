import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAreaDto } from './dto/area-create.dto';
import { Area } from './area.entity';
import { UpdateAreaDto } from './dto/area-update.dto';

@Injectable()
export class AreaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAreaDto): Promise<Area> {
    return this.prisma.area.create({ data });
  }

  async findAll(): Promise<Area[]> {
    return this.prisma.area.findMany();
  }

  async findOne(id: number): Promise<Area | null> {
    return this.prisma.area.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateAreaDto): Promise<Area> {
    return this.prisma.area.update({ where: { id }, data });
  }

  async remove(id: number): Promise<string> {
    return 'No se puede eliminar un area';
  }
}
