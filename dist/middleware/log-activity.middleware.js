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
exports.LogActivityMiddleware = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let LogActivityMiddleware = class LogActivityMiddleware {
    constructor(prisma, JWTService, configService) {
        this.prisma = prisma;
        this.JWTService = JWTService;
        this.configService = configService;
    }
    async use(req, res, next) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: 'Token is required' });
        }
        const secret = this.configService.get('JWT_SECRET');
        try {
            const decoded = this.JWTService.verify(token, {
                secret,
            });
            req['user'] = decoded;
            const userId = decoded.id;
            console.log(req.baseUrl);
            if (['POST', 'PUT', 'DELETE'].includes(req.baseUrl)) {
                let action;
                let description;
                switch (req.method) {
                    case 'POST':
                        action = 'create';
                        description = `Se creó un recurso en ${req.baseUrl}`;
                        break;
                    case 'PUT':
                        action = 'update';
                        description = `Se actualizó un recurso en ${req.baseUrl}`;
                        break;
                    case 'DELETE':
                        action = 'delete';
                        description = `Se eliminó un recurso en ${req.baseUrl}`;
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
            }
            next();
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to log activity' });
        }
    }
};
exports.LogActivityMiddleware = LogActivityMiddleware;
exports.LogActivityMiddleware = LogActivityMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], LogActivityMiddleware);
//# sourceMappingURL=log-activity.middleware.js.map