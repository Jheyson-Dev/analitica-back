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
exports.ReportesController = void 0;
const common_1 = require("@nestjs/common");
const reportes_service_1 = require("./reportes.service");
let ReportesController = class ReportesController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    async getPendingVouchersByRole() {
        return this.reportService.getPendingVouchersByRole();
    }
    async getApprovedVsRejectedVouchers() {
        return this.reportService.getApprovedVsRejectedVouchers();
    }
    async getApprovalTime() {
        return this.reportService.getApprovalTime();
    }
    async getStockLevels() {
        return this.reportService.getStockLevels();
    }
    async getReplenishmentAlerts() {
        return this.reportService.getReplenishmentAlerts();
    }
    async getKardexMovements() {
        return this.reportService.getKardexMovements();
    }
};
exports.ReportesController = ReportesController;
__decorate([
    (0, common_1.Get)('pending-vouchers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getPendingVouchersByRole", null);
__decorate([
    (0, common_1.Get)('approved-vs-rejected-vouchers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getApprovedVsRejectedVouchers", null);
__decorate([
    (0, common_1.Get)('approval-time'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getApprovalTime", null);
__decorate([
    (0, common_1.Get)('stock-levels'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getStockLevels", null);
__decorate([
    (0, common_1.Get)('replenishment-alerts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getReplenishmentAlerts", null);
__decorate([
    (0, common_1.Get)('kardex-movements'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReportesController.prototype, "getKardexMovements", null);
exports.ReportesController = ReportesController = __decorate([
    (0, common_1.Controller)('report'),
    __metadata("design:paramtypes", [reportes_service_1.ReportesService])
], ReportesController);
//# sourceMappingURL=reportes.controller.js.map