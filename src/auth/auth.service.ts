import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginInput } from './dto/login-input.sto';
import { Auth } from './auth.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import * as bcrypt from 'bcrypt';

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
      username: user.username,
    };

    const accestoken = this.generateToken(payload, '1h');

    // Implement login logic here
    return { accestoken };
  }

  private generateToken(payload, expiresIn: string): string {
    const secret = this.configService.get<string>('JWT_SECRET'); // Debes almacenar esto en una variable de entorno
    return this.jwtService.sign(payload, { expiresIn, secret });
  }
}
