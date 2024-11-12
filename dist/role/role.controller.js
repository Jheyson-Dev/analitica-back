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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const role_service_1 = require("./role.service");
const role_entity_1 = require("./role.entity");
const role_create_dto_1 = require("./dto/role-create.dto");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async findAll() {
        return this.roleService.findAll();
    }
    async findOne(id) {
        return this.roleService.findOne(Number(id));
    }
    async create(data) {
        return this.roleService.createRole(data);
    }
    async update(id) {
        return this.roleService.update(Number(id));
    }
    async remove(id) {
        return this.roleService.remove(Number(id));
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all roles.',
        type: [role_entity_1.Role],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get role by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Role ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return role by ID.',
        type: role_entity_1.Role,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new role' }),
    (0, swagger_1.ApiBody)({ type: role_create_dto_1.CreateRoleDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The role has been successfully created.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_create_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a role' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Role ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The role has been successfully updated.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a role' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Role ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The role has been successfully deleted.',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "remove", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('role'),
    (0, common_1.Controller)('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map