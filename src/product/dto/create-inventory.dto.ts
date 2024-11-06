import { ApiProperty } from '@nestjs/swagger';

export class CreateInventoryDto {
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
}
