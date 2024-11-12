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
exports.ReportesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportesService = class ReportesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPendingVouchersByRole() {
        const pendingVouchers = await this.prisma.voucher.findMany({
            where: {
                OR: [
                    { requesterSigned: false },
                    { immediateBossSigned: false },
                    { municipalManagerSigned: false },
                    { supplyManagerSigned: false },
                    { operatorSigned: false },
                    { warehouseManagerSigned: false },
                ],
            },
            select: {
                id: true,
                gasStation: true,
                address: true,
                meta: true,
                vehicle: true,
                createdAt: true,
                updatedAt: true,
                activity: true,
                requesterId: true,
                requesterSigned: true,
                immediateBossId: true,
                immediateBossSigned: true,
                municipalManagerId: true,
                municipalManagerSigned: true,
                supplyManagerId: true,
                supplyManagerSigned: true,
                operatorId: true,
                operatorSigned: true,
                warehouseManagerId: true,
                warehouseManagerSigned: true,
                aproved: true,
            },
        });
        return pendingVouchers;
    }
    async getApprovedVsRejectedVouchers() {
        const approvedVouchers = await this.prisma.voucher.count({
            where: { aproved: true },
        });
        const rejectedVouchers = await this.prisma.voucher.count({
            where: { aproved: false },
        });
        return { approvedVouchers, rejectedVouchers };
    }
    async getApprovalTime() {
        const approvalTimes = await this.prisma.voucher.findMany({
            select: {
                createdAt: true,
                updatedAt: true,
            },
            where: {
                aproved: true,
            },
        });
        const totalApprovalTime = approvalTimes.reduce((acc, voucher) => {
            const approvalTime = (voucher.updatedAt.getTime() - voucher.createdAt.getTime()) /
                (1000 * 60 * 60 * 24);
            return acc + approvalTime;
        }, 0);
        const averageApprovalTime = totalApprovalTime / approvalTimes.length;
        return { averageApprovalTime };
    }
    async getStockLevels() {
        const stockLevels = await this.prisma.product.findMany({
            include: {
                inventory: true,
            },
        });
        return stockLevels;
    }
    async getReplenishmentAlerts() {
        const lowStockProducts = await this.prisma.product.findMany({
            where: {
                inventory: {
                    some: {
                        quantity: {
                            lt: 10,
                        },
                    },
                },
            },
            include: {
                inventory: true,
            },
        });
        return lowStockProducts;
    }
    async getKardexMovements() {
        const kardexMovements = await this.prisma.kardex.findMany({
            include: {
                product: true,
                warehouse: true,
            },
        });
        return kardexMovements;
    }
};
exports.ReportesService = ReportesService;
exports.ReportesService = ReportesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportesService);
//# sourceMappingURL=reportes.service.js.map