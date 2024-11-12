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
exports.Warehouse = void 0;
const swagger_1 = require("@nestjs/swagger");
class Warehouse {
}
exports.Warehouse = Warehouse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Warehouse ID' }),
    __metadata("design:type", Number)
], Warehouse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Main Warehouse', description: 'Warehouse name' }),
    __metadata("design:type", String)
], Warehouse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234 Warehouse St.',
        description: 'Warehouse location',
        required: false,
    }),
    __metadata("design:type", String)
], Warehouse.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-10-01T00:00:00Z',
        description: 'Creation date',
    }),
    __metadata("design:type", Date)
], Warehouse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z', description: 'Update date' }),
    __metadata("design:type", Date)
], Warehouse.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: 'Warehouse status' }),
    __metadata("design:type", Boolean)
], Warehouse.prototype, "status", void 0);
//# sourceMappingURL=warehouse.entity.js.map