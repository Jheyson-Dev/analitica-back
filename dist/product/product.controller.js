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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
const create_kardex_dto_1 = require("./dto/create-kardex.dto");
const update_inventory_dto_1 = require("./dto/update-inventory.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async create(createProductDto) {
        return this.productService.create(createProductDto);
    }
    async findAll(req) {
        const user = req['user'];
        return this.productService.findAll(user);
    }
    async findAllKardexs() {
        return this.productService.findAllKardex();
    }
    async updateMinStock(id, updateInventory) {
        return this.productService.updateMinStock(Number(id), updateInventory);
    }
    async findOne(id) {
        return this.productService.findOne(Number(id));
    }
    async update(id, updateProductDto) {
        return this.productService.update(Number(id), updateProductDto);
    }
    async remove(id) {
        return this.productService.remove(Number(id));
    }
    async createKardex(createKardexDto) {
        return this.productService.createKardex(createKardexDto);
    }
    async findKardexByProduct(id) {
        return this.productService.findKardexByProduct(Number(id));
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The product has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all products' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all products.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('kardex'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all kardex entries' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all kardex entries.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAllKardexs", null);
__decorate([
    (0, common_1.Put)('/min-stock/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update Min Stock for product' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_inventory_dto_1.UpdateInventoryDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateMinStock", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a product by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the product.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a product by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The product has been successfully updated.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a product by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The product has been successfully removed.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('kardex'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new kardex entry' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The kardex entry has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kardex_dto_1.CreateKardexDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createKardex", null);
__decorate([
    (0, common_1.Get)('kardex/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get kardex entries by product ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return kardex entries for the product.',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Product not found.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findKardexByProduct", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('product'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map