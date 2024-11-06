import { ApiProperty } from '@nestjs/swagger';
import { Product } from './product.entity';
import { Warehouse } from 'src/warehouse/warehouse.entity';

export class Inventory {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the inventory record',
  })
  id: number;

  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the product',
  })
  productId: number;

  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the warehouse',
  })
  warehouseId: number;

  @ApiProperty({
    example: 0,
    description: 'The quantity of the product in the inventory',
  })
  quantity: number;

  @ApiProperty({
    example: 10,
    description: 'The minimum stock level of the product in the inventory',
  })
  minStock: number;

  @ApiProperty({
    example: '2023-01-01T00:00:00.000Z',
    description: 'The date and time when the inventory record was created',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2023-01-01T00:00:00.000Z',
    description: 'The date and time when the inventory record was last updated',
  })
  updatedAt: Date;

  @ApiProperty({
    type: () => Product,
    nullable: true,
    description: 'The product associated with the inventory record',
  })
  product?: Product;

  @ApiProperty({
    type: () => Warehouse,
    nullable: true,
    description: 'The warehouse associated with the inventory record',
  })
  warehouse?: Warehouse;
}
