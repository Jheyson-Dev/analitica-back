import Decimal from 'decimal.js';
export declare class VoucherItem {
    id: number;
    voucherId: number;
    item: string;
    description: string;
    quantity: number;
    total: Decimal;
}
