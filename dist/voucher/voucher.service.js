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
exports.VoucherService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_gateway_1 = require("../notification/notifications.gateway");
let VoucherService = class VoucherService {
    constructor(prisma, notificationsGateway) {
        this.prisma = prisma;
        this.notificationsGateway = notificationsGateway;
    }
    async create(data) {
        console.log(data);
        const immediateBossId = await this.prisma.user.findUnique({
            where: {
                id: data.requesterId,
            },
            include: {
                area: {
                    select: {
                        managerId: true,
                    },
                },
            },
        });
        const municipalManagerId = await this.prisma.user.findFirst({
            where: {
                role: {
                    name: 'gerente-municipal',
                },
            },
            select: {
                id: true,
            },
        });
        const supplyManagerId = await this.prisma.user.findFirst({
            where: {
                role: {
                    name: 'jefe-almacen',
                },
            },
            select: {
                id: true,
            },
        });
        const warehouseManagerId = await this.prisma.user.findFirst({
            where: {
                role: {
                    name: 'encargado-almacen',
                },
            },
            select: {
                id: true,
            },
        });
        try {
            const { items, ...copy } = data;
            const voucher = await this.prisma.voucher.create({
                data: {
                    ...copy,
                    immediateBossId: immediateBossId.area.managerId,
                    municipalManagerId: municipalManagerId.id,
                    supplyManagerId: supplyManagerId.id,
                    warehouseManagerId: warehouseManagerId.id,
                },
            });
            const userIds = [
                copy.operatorId,
                copy.requesterId,
                immediateBossId.area.managerId,
                municipalManagerId.id,
                supplyManagerId.id,
                warehouseManagerId.id,
            ];
            await this.notificationsGateway.sendNotificationToUser(userIds, 'Solicitud de Voucher Creado', 'VOUCHER', 1);
            if (items && items.length > 0) {
                const itemsWithVoucherId = items.map((item, index) => ({
                    description: item.description,
                    quantity: Number(item.quantity),
                    total: Number(item.total),
                    voucherId: voucher.id,
                    item: `${index + 1}`,
                }));
                await this.prisma.voucherItem.createMany({
                    data: itemsWithVoucherId,
                });
            }
            return voucher;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error creating voucher: ${error.message}`);
        }
    }
    async findOne(id, user) {
        let voucher;
        if (user.role === 'admin' ||
            user.role === 'gerente-municipal' ||
            user.role === 'operador' ||
            user.role === 'jefe-area' ||
            user.role === 'jefe-almacen' ||
            user.role === 'encargado-almacen') {
            voucher = await this.prisma.voucher.findUnique({
                where: { id },
                include: {
                    user: true,
                    items: true,
                },
            });
        }
        else {
            voucher = await this.prisma.voucher.findUnique({
                where: { id, requesterId: user.id },
                include: {
                    user: true,
                    items: true,
                },
            });
        }
        if (!voucher) {
            throw new Error('Voucher not found');
        }
        const operador = await this.prisma.user.findFirst({
            where: {
                id: voucher.operatorId,
            },
        });
        voucher.operador = operador;
        return voucher;
    }
    async findAll(user) {
        if (user.role === 'admin' ||
            user.role === 'gerente-municipal' ||
            user.role === 'operador' ||
            user.role === 'jefe-area' ||
            user.role === 'jefe-almacen' ||
            user.role === 'encargado-almacen') {
            return await this.prisma.voucher.findMany({
                include: {
                    items: true,
                    user: true,
                },
            });
        }
        else {
            return await this.prisma.voucher.findMany({
                where: {
                    requesterId: user.id,
                },
                include: {
                    items: true,
                    user: true,
                },
            });
        }
    }
    async update(id, data) {
        console.log(JSON.stringify(data));
        return this.prisma.voucher.update({
            where: { id },
            data,
        });
    }
    async remove(id) {
        return this.prisma.voucher.delete({
            where: { id },
        });
    }
};
exports.VoucherService = VoucherService;
exports.VoucherService = VoucherService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_gateway_1.NotificationsGateway])
], VoucherService);
//# sourceMappingURL=voucher.service.js.map