import { CreateInventoryDto } from './create-inventory.dto';
declare const UpdateInventoryDto_base: import("@nestjs/common").Type<Partial<CreateInventoryDto>>;
export declare class UpdateInventoryDto extends UpdateInventoryDto_base {
    productId: number;
    warehouseId: number;
    quantity?: number;
    minStock?: number;
}
export {};
