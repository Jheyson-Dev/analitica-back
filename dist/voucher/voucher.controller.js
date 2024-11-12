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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoucherController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const voucher_service_1 = require("./voucher.service");
const create_voucher_dto_1 = require("./dto/create-voucher.dto");
const update_voucher_dto_1 = require("./dto/update-voucher.dto");
const voucher_entity_1 = require("./entity/voucher.entity");
let VoucherController = class VoucherController {
    constructor(voucherService) {
        this.voucherService = voucherService;
    }
    async create(createVoucherDto) {
        return this.voucherService.create(createVoucherDto);
    }
    async findOne(id, req) {
        const user = req['user'];
        return this.voucherService.findOne(Number(id), user);
    }
    async findAll(req) {
        const user = req['user'];
        return this.voucherService.findAll(user);
    }
    async update(id, updateVoucherDto) {
        return this.voucherService.update(Number(id), updateVoucherDto);
    }
    async remove(id) {
        return this.voucherService.remove(Number(id));
    }
};
exports.VoucherController = VoucherController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new voucher' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The voucher has been successfully created.',
        type: voucher_entity_1.Voucher,
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_voucher_dto_1.CreateVoucherDtoComplete]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a voucher by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The voucher has been successfully retrieved.',
        type: voucher_entity_1.Voucher,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Voucher not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Request]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all vouchers' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The vouchers have been successfully retrieved.',
        type: [voucher_entity_1.Voucher],
    }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a voucher by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The voucher has been successfully updated.',
        type: voucher_entity_1.Voucher,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Voucher not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_voucher_dto_1.UpdateVoucherDto]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a voucher by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The voucher has been successfully deleted.',
        type: voucher_entity_1.Voucher,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Voucher not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VoucherController.prototype, "remove", null);
exports.VoucherController = VoucherController = __decorate([
    (0, swagger_1.ApiTags)('voucher'),
    (0, common_1.Controller)('voucher'),
    __metadata("design:paramtypes", [voucher_service_1.VoucherService])
], VoucherController);
//# sourceMappingURL=voucher.controller.js.map