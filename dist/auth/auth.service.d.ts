import { LoginInput } from './dto/login-input.dto';
import { Auth } from './auth.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { ChangePasswordInput } from './dto/change-input.dto';
import { User } from 'src/user/user.entity';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly configService;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    login(data: LoginInput): Promise<Auth>;
    changePassword(data: ChangePasswordInput): Promise<User>;
    private generateToken;
    profile(id: number): Promise<User>;
}
