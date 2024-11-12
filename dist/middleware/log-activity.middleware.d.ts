import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class LogActivityMiddleware implements NestMiddleware {
    private readonly prisma;
    private readonly JWTService;
    private readonly configService;
    constructor(prisma: PrismaService, JWTService: JwtService, configService: ConfigService);
    use(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
}
