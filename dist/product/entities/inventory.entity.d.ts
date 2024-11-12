import { Product } from './product.entity';
import { Warehouse } from 'src/warehouse/warehouse.entity';
export declare class Inventory {
    id: number;
    productId: number;
    warehouseId: number;
    quantity: number;
    minStock: number;
    createdAt: Date;
    updatedAt: Date;
    product?: Product;
    warehouse?: Warehouse;
}
