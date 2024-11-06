import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportesService {
  constructor(private readonly prisma: PrismaService) {}

  // Reporte de Vales Pendientes de Firma
  async getPendingVouchersByRole() {
    const pendingVouchers = await this.prisma.voucher.findMany({
      where: {
        OR: [
          { requesterSigned: false },
          { immediateBossSigned: false },
          { municipalManagerSigned: false },
          { supplyManagerSigned: false },
          { operatorSigned: false },
          { warehouseManagerSigned: false },
        ],
      },
      select: {
        id: true,
        gasStation: true,
        address: true,
        meta: true,
        vehicle: true,
        createdAt: true,
        updatedAt: true,
        activity: true,
        requesterId: true,
        requesterSigned: true,
        immediateBossId: true,
        immediateBossSigned: true,
        municipalManagerId: true,
        municipalManagerSigned: true,
        supplyManagerId: true,
        supplyManagerSigned: true,
        operatorId: true,
        operatorSigned: true,
        warehouseManagerId: true,
        warehouseManagerSigned: true,
        aproved: true,
      },
    });

    return pendingVouchers;
  }

  // Reporte de Vales Aprobados vs. Rechazados
  async getApprovedVsRejectedVouchers() {
    const approvedVouchers = await this.prisma.voucher.count({
      where: { aproved: true },
    });
    const rejectedVouchers = await this.prisma.voucher.count({
      where: { aproved: false },
    });
    return { approvedVouchers, rejectedVouchers };
  }

  // Reporte de Tiempo de Aprobación
  async getApprovalTime() {
    const approvalTimes = await this.prisma.voucher.findMany({
      select: {
        createdAt: true,
        updatedAt: true,
      },
      where: {
        aproved: true,
      },
    });

    const totalApprovalTime = approvalTimes.reduce((acc, voucher) => {
      const approvalTime =
        (voucher.updatedAt.getTime() - voucher.createdAt.getTime()) /
        (1000 * 60 * 60 * 24); // en días
      return acc + approvalTime;
    }, 0);

    const averageApprovalTime = totalApprovalTime / approvalTimes.length;
    return { averageApprovalTime };
  }

  // Reporte de Niveles de Stock
  async getStockLevels() {
    const stockLevels = await this.prisma.product.findMany({
      include: {
        inventory: true,
      },
    });
    return stockLevels;
  }

  // Reporte de Alertas de Reabastecimiento
  async getReplenishmentAlerts() {
    const lowStockProducts = await this.prisma.product.findMany({
      where: {
        inventory: {
          some: {
            quantity: {
              lt: 10, // Umbral de reabastecimiento
            },
          },
        },
      },
      include: {
        inventory: true,
      },
    });
    return lowStockProducts;
  }

  // Reporte de Movimientos de Kardex por Producto
  async getKardexMovements() {
    const kardexMovements = await this.prisma.kardex.findMany({
      include: {
        product: true,
        warehouse: true,
      },
    });
    return kardexMovements;
  }
}
