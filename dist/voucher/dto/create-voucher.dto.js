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
exports.CreateVoucherDtoComplete = exports.CreateVoucherDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const voucherItem_entity_1 = require("../entity/voucherItem.entity");
class CreateVoucherDto {
}
exports.CreateVoucherDto = CreateVoucherDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Gas Station Name', description: 'Gas Station' }),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "gasStation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main St', description: 'Address' }),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Purpose of the voucher',
        description: 'Meta',
        required: false,
    }),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Vehicle Info',
        description: 'Vehicle',
        required: false,
    }),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "vehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Activity Info',
        description: 'Activity',
        required: false,
    }),
    __metadata("design:type", String)
], CreateVoucherDto.prototype, "activity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-10-01T00:00:00Z',
        description: 'Creation date',
    }),
    __metadata("design:type", Date)
], CreateVoucherDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z', description: 'Update date' }),
    __metadata("design:type", Date)
], CreateVoucherDto.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Status' }),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Requester ID' }),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "requesterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the requester signed' }),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "requesterSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Immediate boss ID',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "immediateBossId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the immediate boss signed' }),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "immediateBossSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3,
        description: 'Municipal manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "municipalManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'If the municipal manager signed',
    }),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "municipalManagerSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 4,
        description: 'Supply manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "supplyManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the supply manager signed' }),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "supplyManagerSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Operator ID', required: false }),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "operatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the operator signed' }),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "operatorSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 6,
        description: 'Warehouse manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateVoucherDto.prototype, "warehouseManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'If the warehouse manager signed',
    }),
    __metadata("design:type", Boolean)
], CreateVoucherDto.prototype, "warehouseManagerSigned", void 0);
class CreateVoucherDtoComplete {
}
exports.CreateVoucherDtoComplete = CreateVoucherDtoComplete;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Gas Station Name', description: 'Gas Station' }),
    __metadata("design:type", String)
], CreateVoucherDtoComplete.prototype, "gasStation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123 Main St', description: 'Address' }),
    __metadata("design:type", String)
], CreateVoucherDtoComplete.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Purpose of the voucher',
        description: 'Meta',
        required: false,
    }),
    __metadata("design:type", String)
], CreateVoucherDtoComplete.prototype, "meta", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Vehicle Info',
        description: 'Vehicle',
        required: false,
    }),
    __metadata("design:type", String)
], CreateVoucherDtoComplete.prototype, "vehicle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [voucherItem_entity_1.VoucherItem],
        description: 'List of voucher items',
    }),
    __metadata("design:type", Array)
], CreateVoucherDtoComplete.prototype, "items", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Activity Info',
        description: 'Activity',
        required: false,
    }),
    __metadata("design:type", String)
], CreateVoucherDtoComplete.prototype, "activity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-10-01T00:00:00Z',
        description: 'Creation date',
    }),
    __metadata("design:type", Date)
], CreateVoucherDtoComplete.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z', description: 'Update date' }),
    __metadata("design:type", Date)
], CreateVoucherDtoComplete.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Status' }),
    __metadata("design:type", Boolean)
], CreateVoucherDtoComplete.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Requester ID' }),
    __metadata("design:type", Number)
], CreateVoucherDtoComplete.prototype, "requesterId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the requester signed' }),
    __metadata("design:type", Boolean)
], CreateVoucherDtoComplete.prototype, "requesterSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 2,
        description: 'Immediate boss ID',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateVoucherDtoComplete.prototype, "immediateBossId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the immediate boss signed' }),
    __metadata("design:type", Boolean)
], CreateVoucherDtoComplete.prototype, "immediateBossSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3,
        description: 'Municipal manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateVoucherDtoComplete.prototype, "municipalManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'If the municipal manager signed',
    }),
    __metadata("design:type", Boolean)
], CreateVoucherDtoComplete.prototype, "municipalManagerSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 4,
        description: 'Supply manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateVoucherDtoComplete.prototype, "supplyManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the supply manager signed' }),
    __metadata("design:type", Boolean)
], CreateVoucherDtoComplete.prototype, "supplyManagerSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5, description: 'Operator ID', required: false }),
    __metadata("design:type", Number)
], CreateVoucherDtoComplete.prototype, "operatorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'If the operator signed' }),
    __metadata("design:type", Boolean)
], CreateVoucherDtoComplete.prototype, "operatorSigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 6,
        description: 'Warehouse manager ID',
        required: false,
    }),
    __metadata("design:type", Number)
], CreateVoucherDtoComplete.prototype, "warehouseManagerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
        description: 'If the warehouse manager signed',
    }),
    __metadata("design:type", Boolean)
], CreateVoucherDtoComplete.prototype, "warehouseManagerSigned", void 0);
//# sourceMappingURL=create-voucher.dto.js.map