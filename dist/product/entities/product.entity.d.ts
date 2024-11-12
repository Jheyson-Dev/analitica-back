import { Decimal } from 'decimal.js';
export declare class Product {
    id: number;
    name: string;
    description?: string;
    price: Decimal;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}
