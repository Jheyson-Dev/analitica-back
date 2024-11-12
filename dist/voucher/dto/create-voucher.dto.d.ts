import { VoucherItem } from '../entity/voucherItem.entity';
export declare class CreateVoucherDto {
    gasStation: string;
    address: string;
    meta?: string;
    vehicle?: string;
    activity: string;
    createdAt: Date;
    updatedAt: Date;
    status: boolean;
    requesterId: number;
    requesterSigned: boolean;
    immediateBossId?: number;
    immediateBossSigned: boolean;
    municipalManagerId?: number;
    municipalManagerSigned: boolean;
    supplyManagerId?: number;
    supplyManagerSigned: boolean;
    operatorId?: number;
    operatorSigned: boolean;
    warehouseManagerId?: number;
    warehouseManagerSigned: boolean;
}
export declare class CreateVoucherDtoComplete {
    gasStation: string;
    address: string;
    meta?: string;
    vehicle?: string;
    items: VoucherItem[];
    activity: string;
    createdAt: Date;
    updatedAt: Date;
    status: boolean;
    requesterId: number;
    requesterSigned: boolean;
    immediateBossId?: number;
    immediateBossSigned: boolean;
    municipalManagerId?: number;
    municipalManagerSigned: boolean;
    supplyManagerId?: number;
    supplyManagerSigned: boolean;
    operatorId?: number;
    operatorSigned: boolean;
    warehouseManagerId?: number;
    warehouseManagerSigned: boolean;
}
