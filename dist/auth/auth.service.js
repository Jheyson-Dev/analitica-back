"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async login(data) {
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
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.status) {
            throw new common_1.UnauthorizedException('User is not active');
        }
        const valid = await bcrypt.compare(data.password, user.password);
        if (!valid) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        const payload = {
            id: user.id,
            role: user.role?.name ?? 'NO_ROLE',
            area: user.area?.name ?? 'NO_AREA',
            status: user.status,
        };
        const accestoken = this.generateToken(payload, '100000h');
        return { accestoken };
    }
    async changePassword(data) {
        const user = await this.prisma.user.findUnique({
            where: { username: data.username },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.status) {
            throw new common_1.UnauthorizedException('User is not active');
        }
        const valid = await bcrypt.compare(data.password, user.password);
        if (!valid) {
            throw new common_1.UnauthorizedException('Invalid password');
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
    generateToken(payload, expiresIn) {
        const secret = this.configService.get('JWT_SECRET');
        return this.jwtService.sign(payload, { expiresIn, secret });
    }
    async profile(id) {
        return await this.prisma.user.findUnique({
            where: { id },
            include: {
                role: true,
                area: true,
                log: true,
            },
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map