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
exports.UpdateInventoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_inventory_dto_1 = require("./create-inventory.dto");
class UpdateInventoryDto extends (0, swagger_1.PartialType)(create_inventory_dto_1.CreateInventoryDto) {
}
exports.UpdateInventoryDto = UpdateInventoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier of the product',
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateInventoryDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier of the warehouse',
        required: true,
    }),
    __metadata("design:type", Number)
], UpdateInventoryDto.prototype, "warehouseId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
        description: 'The quantity of the product in the inventory',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateInventoryDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 10,
        description: 'The minimum stock level of the product in the inventory',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateInventoryDto.prototype, "minStock", void 0);
//# sourceMappingURL=update-inventory.dto.js.map