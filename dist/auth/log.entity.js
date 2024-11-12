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
exports.Log = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user/user.entity");
class Log {
}
exports.Log = Log;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Log ID' }),
    __metadata("design:type", Number)
], Log.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User ID' }),
    __metadata("design:type", Number)
], Log.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'POST',
        description: 'Metodo que s realizó',
    }),
    __metadata("design:type", Number)
], Log.prototype, "action", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Se actualizó un recurso en /user',
        description: 'Insertar al enpoint que hizo la consulta',
    }),
    __metadata("design:type", Number)
], Log.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-10-01T00:00:00Z',
        description: 'Creation date',
    }),
    __metadata("design:type", Date)
], Log.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => user_entity_1.User,
        description: 'Usuario que realizó la operación',
        required: false,
    }),
    __metadata("design:type", user_entity_1.User)
], Log.prototype, "users", void 0);
//# sourceMappingURL=log.entity.js.map