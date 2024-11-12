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
exports.AreaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const area_service_1 = require("./area.service");
const area_create_dto_1 = require("./dto/area-create.dto");
const area_update_dto_1 = require("./dto/area-update.dto");
const area_entity_1 = require("./area.entity");
let AreaController = class AreaController {
    constructor(areaService) {
        this.areaService = areaService;
    }
    async findAll() {
        return this.areaService.findAll();
    }
    async findOne(id) {
        return this.areaService.findOne(Number(id));
    }
    async create(data) {
        return this.areaService.create(data);
    }
    async update(id, data) {
        return this.areaService.update(Number(id), data);
    }
    async remove(id) {
        return this.areaService.remove(Number(id));
    }
};
exports.AreaController = AreaController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all areas' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all areas.',
        type: [area_entity_1.Area],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get area by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Area ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return area by ID.',
        type: area_entity_1.Area,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new area' }),
    (0, swagger_1.ApiBody)({ type: area_create_dto_1.CreateAreaDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The area has been successfully created.',
        type: area_entity_1.Area,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [area_create_dto_1.CreateAreaDto]),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an area' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Area ID' }),
    (0, swagger_1.ApiBody)({ type: area_update_dto_1.UpdateAreaDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The area has been successfully updated.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, area_update_dto_1.UpdateAreaDto]),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an area' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Area ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The area has been successfully deleted.',
        schema: {
            type: 'string',
            example: 'Area deleted successfully',
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AreaController.prototype, "remove", null);
exports.AreaController = AreaController = __decorate([
    (0, swagger_1.ApiTags)('area'),
    (0, common_1.Controller)('area'),
    __metadata("design:paramtypes", [area_service_1.AreaService])
], AreaController);
//# sourceMappingURL=area.controller.js.map