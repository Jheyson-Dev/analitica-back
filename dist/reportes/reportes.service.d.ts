import { PrismaService } from '../prisma/prisma.service';
export declare class ReportesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getPendingVouchersByRole(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        gasStation: string;
        address: string;
        meta: string;
        vehicle: string;
        activity: string;
        requesterId: number;
        requesterSigned: boolean;
        immediateBossId: number;
        immediateBossSigned: boolean;
        municipalManagerId: number;
        municipalManagerSigned: boolean;
        supplyManagerId: number;
        supplyManagerSigned: boolean;
        operatorId: number;
        operatorSigned: boolean;
        warehouseManagerId: number;
        warehouseManagerSigned: boolean;
        aproved: boolean;
    }[]>;
    getApprovedVsRejectedVouchers(): Promise<{
        approvedVouchers: number;
        rejectedVouchers: number;
    }>;
    getApprovalTime(): Promise<{
        averageApprovalTime: number;
    }>;
    getStockLevels(): Promise<({
        inventory: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            productId: number;
            warehouseId: number;
            minStock: number;
        }[];
    } & {
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: boolean;
        price: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    getReplenishmentAlerts(): Promise<({
        inventory: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            quantity: number;
            productId: number;
            warehouseId: number;
            minStock: number;
        }[];
    } & {
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: boolean;
        price: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    getKardexMovements(): Promise<({
        product: {
            name: string;
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: boolean;
            price: import("@prisma/client/runtime/library").Decimal;
        };
        warehouse: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: boolean;
            areaId: number;
            location: string | null;
        };
    } & {
        id: number;
        movementType: string;
        quantity: number;
        productId: number;
        warehouseId: number;
        movementDate: Date;
    })[]>;
}
