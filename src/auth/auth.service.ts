import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInput } from './dto/login-input.dto';
import { Auth } from './auth.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import * as bcrypt from 'bcrypt';
import { ChangePasswordInput } from './dto/change-input.dto';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async login(data: LoginInput): Promise<Auth> {
    const user = await this.prisma.user.findUnique({
      where: {
        username: data.username,
      },
      include: {
        role: true,
        area: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.status) {
      throw new UnauthorizedException('User is not active');
    }

    const valid = await bcrypt.compare(data.password, user.password);

    if (!valid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = {
      id: user.id,
      // fullname: `${user.name} ${user.lastname}`,
      // email: user.email,
      role: user.role?.name ?? 'NO_ROLE',
      area: user.area?.name ?? 'NO_AREA',
      // dni: user.dni,
      status: user.status,
    };

    const accestoken = this.generateToken(payload, '100000h');

    // Implement login logic here
    return { accestoken };
  }

  async changePassword(data: ChangePasswordInput): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { username: data.username },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.status) {
      throw new UnauthorizedException('User is not active');
    }

    const valid = await bcrypt.compare(data.password, user.password);

    if (!valid) {
      throw new UnauthorizedException('Invalid password');
    }

    const saltRounds = 10;
    const newpassword = await bcrypt.hash(data.newPassword, saltRounds);

    const response = await this.prisma.user.update({
      where: { username: data.username },
      data: {
        password: newpassword,
      },
    });

    return response;
  }

  private generateToken(payload, expiresIn: string): string {
    const secret = this.configService.get<string>('JWT_SECRET'); // Debes almacenar esto en una variable de entorno
    return this.jwtService.sign(payload, { expiresIn, secret });
  }

  async profile(id: number): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { id },
      include: {
        role: true,
        area: true,
        log: true,
      },
    });
  }
}
