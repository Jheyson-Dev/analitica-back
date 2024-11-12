import { CreateVoucherDto } from './create-voucher.dto';
declare const UpdateVoucherDto_base: import("@nestjs/common").Type<Partial<CreateVoucherDto>>;
export declare class UpdateVoucherDto extends UpdateVoucherDto_base {
    id: number;
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
export {};
