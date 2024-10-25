import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LogActivityMiddleware implements NestMiddleware {
  constructor(
    private readonly prisma: PrismaService,
    private readonly JWTService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token is required' });
    }

    const secret = this.configService.get<string>('JWT_SECRET');
    try {
      const decoded: any = this.JWTService.verify(token, {
        secret,
      });

      const userId = decoded.id;
      let action: string;
      let description: string;
      console.log(JSON.stringify(req.method));
      switch (req.method) {
        case 'POST':
          action = 'create';
          description = `Se creó un recurso en ${req.path}`;
          break;
        case 'PUT':
          action = 'update';
          description = `Se actualizó un recurso en ${req.path}`;
          break;
        case 'DELETE':
          action = 'delete';
          description = `Se eliminó un recurso en ${req.path}`;
          break;
        default:
          return res.status(400).json({ error: 'Unsupported HTTP method' });
      }

      await this.prisma.log.create({
        data: {
          userId,
          action,
          description,
        },
      });
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to log activity' });
    }
  }
}
