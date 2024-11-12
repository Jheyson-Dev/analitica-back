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
exports.WarehouseService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let WarehouseService = class WarehouseService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            const warehouse = await this.prisma.warehouse.create({
                data,
            });
            return warehouse;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error creating warehouse: ${error.message}`);
        }
    }
    async findAll() {
        try {
            const warehouses = await this.prisma.warehouse.findMany();
            return warehouses;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error fetching warehouses: ${error.message}`);
        }
    }
    async findOne(id) {
        try {
            const warehouse = await this.prisma.warehouse.findUnique({
                where: { id },
            });
            if (!warehouse) {
                throw new common_1.NotFoundException(`Warehouse with ID ${id} not found`);
            }
            return warehouse;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error finding warehouse with id ${id}: ${error.message}`);
        }
    }
    async update(id, data) {
        try {
            const warehouse = await this.prisma.warehouse.update({
                where: { id },
                data,
            });
            return warehouse;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error updating warehouse: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const warehouse = await this.prisma.warehouse.update({
                where: { id },
                data: {
                    status: false,
                },
            });
            return warehouse;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error removing warehouse with id ${id}: ${error.message}`);
        }
    }
};
exports.WarehouseService = WarehouseService;
exports.WarehouseService = WarehouseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WarehouseService);
//# sourceMappingURL=warehouse.service.js.map