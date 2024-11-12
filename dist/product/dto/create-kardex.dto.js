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
exports.CreateKardexDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateKardexDto {
}
exports.CreateKardexDto = CreateKardexDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'IN',
        description: 'The type of movement (e.g., IN, OUT).',
    }),
    __metadata("design:type", String)
], CreateKardexDto.prototype, "movementType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100, description: 'The quantity of the movement.' }),
    __metadata("design:type", Number)
], CreateKardexDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the related product.' }),
    __metadata("design:type", Number)
], CreateKardexDto.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the related warehouse.' }),
    __metadata("design:type", Number)
], CreateKardexDto.prototype, "warehouseId", void 0);
//# sourceMappingURL=create-kardex.dto.js.map