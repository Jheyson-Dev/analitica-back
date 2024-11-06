import { Controller, Get } from '@nestjs/common';
import { ReportesService } from './reportes.service';

@Controller('report')
export class ReportesController {
  constructor(private readonly reportService: ReportesService) {}

  @Get('pending-vouchers')
  async getPendingVouchersByRole() {
    return this.reportService.getPendingVouchersByRole();
  }

  @Get('approved-vs-rejected-vouchers')
  async getApprovedVsRejectedVouchers() {
    return this.reportService.getApprovedVsRejectedVouchers();
  }

  @Get('approval-time')
  async getApprovalTime() {
    return this.reportService.getApprovalTime();
  }

  @Get('stock-levels')
  async getStockLevels() {
    return this.reportService.getStockLevels();
  }

  @Get('replenishment-alerts')
  async getReplenishmentAlerts() {
    return this.reportService.getReplenishmentAlerts();
  }

  @Get('kardex-movements')
  async getKardexMovements() {
    return this.reportService.getKardexMovements();
  }
}
