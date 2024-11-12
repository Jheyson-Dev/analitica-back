import { CreateVoucherItemDto } from './create-voucherItem.dto';
declare const UpdateVoucherItemDto_base: import("@nestjs/common").Type<Partial<CreateVoucherItemDto>>;
export declare class UpdateVoucherItemDto extends UpdateVoucherItemDto_base {
    id: number;
    voucherId: number;
    item: string;
    description: string;
    quantity: number;
    total: number;
}
export {};
