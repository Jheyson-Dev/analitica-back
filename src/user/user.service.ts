import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.dni, saltRounds);

    const user = await this.prisma.user.create({
      data: {
        ...data,
        username: data.dni,
        password: hashedPassword,
      },
    });
    return user;
  }

  async findAll(): Promise<User[]> {
    const response = await this.prisma.user.findMany();
    return response;
  }

  async findOne(id: number): Promise<User> {
    const response = await this.prisma.user.findUnique({
      where: { id },
    });
    return response;
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const response = await this.prisma.user.update({
      where: { id },
      data,
    });
    return response;
  }

  async remove(id: number): Promise<User> {
    const response = await this.prisma.user.update({
      where: { id },
      data: {
        status: false,
      },
    });
    return response;
  }
}
