import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from './role.entity';
import { CreateRoleDto } from './dto/role-create.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async createRole(data: CreateRoleDto): Promise<Role> {
    const response = await this.prisma.role.create({
      data,
    });
    return response;
  }

  async findAll(): Promise<Role[]> {
    const response = await this.prisma.role.findMany();
    return response;
  }

  async findOne(id: number): Promise<Role> {
    const response = await this.prisma.role.findUnique({ where: { id } });
    return response;
  }

  async update(id: number): Promise<string> {
    return 'Nose puede actualizar un rol';
  }

  async remove(id: number): Promise<string> {
    return 'No se puede eliminar un rol';
  }
}
