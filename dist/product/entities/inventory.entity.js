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
exports.Inventory = void 0;
const swagger_1 = require("@nestjs/swagger");
const product_entity_1 = require("./product.entity");
const warehouse_entity_1 = require("../../warehouse/warehouse.entity");
class Inventory {
}
exports.Inventory = Inventory;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier of the inventory record',
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier of the product',
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier of the warehouse',
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
        description: 'The quantity of the product in the inventory',
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: 'The minimum stock level of the product in the inventory',
    }),
    __metadata("design:type", Number)
], Inventory.prototype, "minStock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-01-01T00:00:00.000Z',
        description: 'The date and time when the inventory record was created',
    }),
    __metadata("design:type", Date)
], Inventory.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-01-01T00:00:00.000Z',
        description: 'The date and time when the inventory record was last updated',
    }),
    __metadata("design:type", Date)
], Inventory.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => product_entity_1.Product,
        nullable: true,
        description: 'The product associated with the inventory record',
    }),
    __metadata("design:type", product_entity_1.Product)
], Inventory.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => warehouse_entity_1.Warehouse,
        nullable: true,
        description: 'The warehouse associated with the inventory record',
    }),
    __metadata("design:type", warehouse_entity_1.Warehouse)
], Inventory.prototype, "warehouse", void 0);
//# sourceMappingURL=inventory.entity.js.map