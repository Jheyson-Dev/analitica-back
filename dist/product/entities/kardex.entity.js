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
exports.Kardex = void 0;
const swagger_1 = require("@nestjs/swagger");
class Kardex {
}
exports.Kardex = Kardex;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The unique identifier of the Kardex entry.',
    }),
    __metadata("design:type", Number)
], Kardex.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'IN',
        description: 'The type of movement (e.g., IN, OUT).',
    }),
    __metadata("design:type", String)
], Kardex.prototype, "movementType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 100, description: 'The quantity of the movement.' }),
    __metadata("design:type", Number)
], Kardex.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-01-01T00:00:00Z',
        description: 'The date of the movement.',
    }),
    __metadata("design:type", Date)
], Kardex.prototype, "movementDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the related product.' }),
    __metadata("design:type", Number)
], Kardex.prototype, "productId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the related warehouse.' }),
    __metadata("design:type", Number)
], Kardex.prototype, "warehouseId", void 0);
//# sourceMappingURL=kardex.entity.js.map