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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require('bcrypt');
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
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
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error creating user: ${error.message}`);
        }
    }
    async findAll() {
        try {
            const response = await this.prisma.user.findMany({
                include: {
                    role: true,
                    area: true,
                },
            });
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error fetching users: ${error.message}`);
        }
    }
    async findOne(id) {
        try {
            const response = await this.prisma.user.findUnique({
                where: { id },
                include: {
                    role: true,
                    area: true,
                },
            });
            if (!response) {
                throw new common_1.NotFoundException(`User with ID ${id} not found`);
            }
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error finding user with id ${id}: ${error.message}`);
        }
    }
    async update(id, data) {
        try {
            const response = await this.prisma.user.update({
                where: { id },
                data,
            });
            return response;
        }
        catch (error) {
            throw new Error(`Error updating user with id ${id}: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const response = await this.prisma.user.update({
                where: { id },
                data: {
                    status: false,
                },
            });
            return response;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error removing user with id ${id}: ${error.message}`);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map