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
exports.UpdateVoucherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_voucher_dto_1 = require("./create-voucher.dto");
class UpdateVoucherDto extends (0, swagger_1.PartialType)(create_voucher_dto_1.CreateVoucherDto) {
}
exports.UpdateVoucherDto = UpdateVoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Voucher ID' }),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Gas Station Name', description: 'Gas Station' }),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "gasStation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main St', description: 'Address' }),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Purpose of the voucher',
        description: 'Meta',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Vehicle Info',
        description: 'Vehicle',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "vehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Activity Info',
        description: 'Activity',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateVoucherDto.prototype, "activity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-10-01T00:00:00Z',
        description: 'Creation date',
    }),
    __metadata("design:type", Date)
], UpdateVoucherDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z', description: 'Update date' }),
    __metadata("design:type", Date)
], UpdateVoucherDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Status' }),
    __metadata("design:type", Boolean)
], UpdateVoucherDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Requester ID' }),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "requesterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the requester signed' }),
    __metadata("design:type", Boolean)
], UpdateVoucherDto.prototype, "requesterSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Immediate boss ID',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "immediateBossId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the immediate boss signed' }),
    __metadata("design:type", Boolean)
], UpdateVoucherDto.prototype, "immediateBossSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3,
        description: 'Municipal manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "municipalManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'If the municipal manager signed',
    }),
    __metadata("design:type", Boolean)
], UpdateVoucherDto.prototype, "municipalManagerSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 4,
        description: 'Supply manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "supplyManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the supply manager signed' }),
    __metadata("design:type", Boolean)
], UpdateVoucherDto.prototype, "supplyManagerSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Operator ID', required: false }),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "operatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the operator signed' }),
    __metadata("design:type", Boolean)
], UpdateVoucherDto.prototype, "operatorSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 6,
        description: 'Warehouse manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateVoucherDto.prototype, "warehouseManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'If the warehouse manager signed',
    }),
    __metadata("design:type", Boolean)
], UpdateVoucherDto.prototype, "warehouseManagerSigned", void 0);
//# sourceMappingURL=update-voucher.dto.js.map