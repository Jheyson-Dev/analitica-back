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
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateUserDto {
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john_doe',
        description: 'The username of the user',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'password123',
        description: 'The password of the user',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'The first name of the user' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'The last name of the user' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "lastname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john.doe@example.com',
        description: 'The email of the user',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234567890',
        description: 'The phone number of the user',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678A', description: 'The DNI of the user' }),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "dni", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 30,
        description: 'The age of the user',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The role ID of the user',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "roleId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The area ID of the user',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateUserDto.prototype, "areaId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'The status of the user',
        required: false,
    }),
    __metadata("design:type", Boolean)
], UpdateUserDto.prototype, "status", void 0);
//# sourceMappingURL=update-user.dto.js.map