import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(data.dni, saltRounds);
      console.log(data);

      const rol = await this.prisma.role.findFirst({
        where: {
          id: data.roleId,
        },
      });
      if (rol.name === 'jefe-area') {
        return await this.prisma.user.create({
          data: {
            ...data,
            managedId: data.areaId,
            username: data.dni,
            password: hashedPassword,
          },
        });
      }

      const user = await this.prisma.user.create({
        data: {
          ...data,
          username: data.dni,
          password: hashedPassword,
        },
      });
      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error creating user: ${error.message}`,
      );
    }
  }

  async findAll(): Promise<User[]> {
    try {
      const response = await this.prisma.user.findMany({
        include: {
          role: true,
          area: true,
        },
      });
      return response;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error fetching users: ${error.message}`,
      );
    }
  }

  async findOne(id: number): Promise<User> {
    try {
      const response = await this.prisma.user.findUnique({
        where: { id },
        include: {
          role: true,
          area: true,
        },
      });

      if (!response) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }

      return response;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error finding user with id ${id}: ${error.message}`,
      );
    }
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    try {
      const response = await this.prisma.user.update({
        where: { id },
        data,
      });
      return response;
    } catch (error) {
      // Manejo del error, puedes personalizar este mensaje o lanzar un error específico
      throw new Error(`Error updating user with id ${id}: ${error.message}`);
    }
  }

  async remove(id: number): Promise<User> {
    try {
      const response = await this.prisma.user.update({
        where: { id },
        data: {
          status: false,
        },
      });
      return response;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error removing user with id ${id}: ${error.message}`,
      );
    }
  }
}
