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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const decimal_js_1 = require("decimal.js");
const notifications_gateway_1 = require("../notification/notifications.gateway");
let ProductService = class ProductService {
    constructor(prisma, notificationsGateway) {
        this.prisma = prisma;
        this.notificationsGateway = notificationsGateway;
    }
    async create(data) {
        try {
            const product = await this.prisma.product.create({
                data: {
                    ...data,
                    price: new decimal_js_1.default(data.price),
                },
            });
            return product;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error creating product: ${error.message}`);
        }
    }
    async findAll(user) {
        console.log(user);
        try {
            let products;
            products = await this.prisma.product.findMany({
                include: {
                    inventory: {
                        include: {
                            warehouse: true,
                        },
                    },
                    kardex: true,
                    transfer: true,
                },
            });
            return products;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error fetching products: ${error.message}`);
        }
    }
    async findOne(id) {
        try {
            const product = await this.prisma.product.findUnique({
                where: { id },
                include: {
                    inventory: {
                        include: {
                            warehouse: true,
                        },
                    },
                    kardex: {
                        include: {
                            warehouse: true,
                        },
                    },
                    transfer: true,
                },
            });
            return product;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error finding product with id ${error.message}`);
        }
    }
    async update(id, data) {
        try {
            const product = await this.prisma.product.update({
                where: { id },
                data,
            });
            return product;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error updating product: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const product = await this.prisma.product.update({
                where: { id },
                data: {
                    status: false,
                },
            });
            return product;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error removing product with id ${id}: ${error.message}`);
        }
    }
    async findAllKardex() {
        try {
            const kardexs = await this.prisma.kardex.findMany({
                include: {
                    product: true,
                    warehouse: true,
                },
            });
            return kardexs;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error fetching kardex: ${error.message}`);
        }
    }
    async createKardex(data) {
        try {
            const inventory = await this.prisma.inventory.findFirst({
                where: {
                    productId: data.productId,
                    warehouseId: data.warehouseId,
                },
                include: {
                    product: true,
                    warehouse: true,
                },
            });
            if (!inventory) {
                if (data.movementType === 'OUT') {
                    throw new common_1.BadRequestException('No se puede realizar una salida de productos sin un registro de inventario existente.');
                }
                await this.prisma.inventory.create({
                    data: {
                        productId: data.productId,
                        warehouseId: data.warehouseId,
                        quantity: data.quantity,
                        minStock: 20,
                    },
                });
            }
            else {
                if (data.movementType === 'OUT' && inventory.quantity < data.quantity) {
                    throw new common_1.BadRequestException('Cantidad de productos insuficiente en el almacen.');
                }
                const inventario = await this.prisma.inventory.update({
                    where: { id: inventory.id },
                    data: {
                        quantity: {
                            increment: data.movementType === 'IN' ? data.quantity : -data.quantity,
                        },
                    },
                    include: {
                        product: true,
                        warehouse: true,
                    },
                });
                if (inventory.quantity <= inventory.minStock) {
                    const message = `El inventario del producto ${inventario.product.name} en el almacén ${inventario.warehouse.name} ha alcanzado el stock mínimo.`;
                    const type = 'ALERT INVENTORY';
                    const admin = await this.prisma.user.findFirst({
                        where: {
                            role: {
                                name: 'admin',
                            },
                        },
                    });
                    const areaManager = await this.prisma.warehouse.findUnique({
                        where: {
                            id: inventario.warehouseId,
                        },
                        select: {
                            area: {
                                select: {
                                    managerId: true,
                                    name: true,
                                },
                            },
                        },
                    });
                    console.log(areaManager.area.managerId);
                    await this.notificationsGateway.sendNotificationToUser(admin.id, message, type, 1);
                    await this.notificationsGateway.sendNotificationToUser(areaManager.area.managerId, message, type, 1);
                }
            }
            const kardex = await this.prisma.kardex.create({
                data,
            });
            return kardex;
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException(`Error creating kardex: ${error.message}`);
        }
    }
    async updateMinStock(id, data) {
        try {
            const inventory = await this.prisma.inventory.update({
                where: {
                    id,
                },
                data,
            });
            return inventory;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error updating inventory: ${error.message}`);
        }
    }
    async findKardexByProduct(id) {
        try {
            const kardexs = await this.prisma.kardex.findMany({
                where: {
                    productId: id,
                },
                include: {
                    product: true,
                    warehouse: true,
                },
            });
            return kardexs;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error fetching kardex: ${error.message}`);
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_gateway_1.NotificationsGateway])
], ProductService);
//# sourceMappingURL=product.service.js.map