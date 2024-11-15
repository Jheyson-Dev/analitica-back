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
exports.UpdateAreaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateAreaDto {
}
exports.UpdateAreaDto = UpdateAreaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'IT', description: 'Area name', required: false }),
    __metadata("design:type", String)
], UpdateAreaDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'The status of the area',
        required: false,
    }),
    __metadata("design:type", Boolean)
], UpdateAreaDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The area ID of the user',
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateAreaDto.prototype, "managerId", void 0);
//# sourceMappingURL=area-update.dto.js.map