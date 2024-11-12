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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const area_entity_1 = require("../area/area.entity");
const role_entity_1 = require("../role/role.entity");
class User {
}
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User ID' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john_doe', description: 'Username' }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password123', description: 'Password' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'First name' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'Last name' }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com', description: 'Email' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234567890',
        description: 'Phone number',
        required: false,
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678A', description: 'DNI' }),
    __metadata("design:type", String)
], User.prototype, "dni", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Role ID', required: false }),
    __metadata("design:type", Number)
], User.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Area ID', required: false }),
    __metadata("design:type", Number)
], User.prototype, "areaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Status' }),
    __metadata("design:type", Boolean)
], User.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-10-01T00:00:00Z',
        description: 'Creation date',
    }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z', description: 'Update date' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => role_entity_1.Role, description: 'Role', required: false }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => area_entity_1.Area, description: 'Area', required: false }),
    __metadata("design:type", area_entity_1.Area)
], User.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => area_entity_1.Area, description: 'Area', required: false }),
    __metadata("design:type", Array)
], User.prototype, "logs", void 0);
//# sourceMappingURL=user.entity.js.map