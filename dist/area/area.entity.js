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
exports.Area = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user/user.entity");
class Area {
}
exports.Area = Area;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Area ID' }),
    __metadata("design:type", Number)
], Area.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IT', description: 'Area name' }),
    __metadata("design:type", String)
], Area.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-10-01T00:00:00Z',
        description: 'Creation date',
    }),
    __metadata("design:type", Date)
], Area.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01T00:00:00Z', description: 'Update date' }),
    __metadata("design:type", Date)
], Area.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'Status' }),
    __metadata("design:type", Boolean)
], Area.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => [user_entity_1.User],
        description: 'List of users in the area',
        required: false,
    }),
    __metadata("design:type", Array)
], Area.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => user_entity_1.User,
        description: 'Manager of the area',
        required: false,
    }),
    __metadata("design:type", user_entity_1.User)
], Area.prototype, "manager", void 0);
//# sourceMappingURL=area.entity.js.map