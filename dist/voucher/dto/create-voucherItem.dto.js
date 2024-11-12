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
exports.CreateVoucherItemDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateVoucherItemDto {
}
exports.CreateVoucherItemDto = CreateVoucherItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier of the related voucher',
    }),
    __metadata("design:type", Number)
], CreateVoucherItemDto.prototype, "voucherId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Fuel', description: 'The name or type of the item' }),
    __metadata("design:type", String)
], CreateVoucherItemDto.prototype, "item", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Diesel fuel for trucks',
        description: 'The description of the item',
    }),
    __metadata("design:type", String)
], CreateVoucherItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100, description: 'The quantity of the item' }),
    __metadata("design:type", Number)
], CreateVoucherItemDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 500.0,
        description: 'The total amount in gallons or units',
    }),
    __metadata("design:type", Number)
], CreateVoucherItemDto.prototype, "total", void 0);
//# sourceMappingURL=create-voucherItem.dto.js.map