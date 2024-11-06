import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateInventoryDto } from './create-inventory.dto';

export class UpdateInventoryDto extends PartialType(CreateInventoryDto) {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the product',
    required: true,
  })
  productId: number;

  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the warehouse',
    required: true,
  })
  warehouseId: number;

  @ApiProperty({
    example: 0,
    description: 'The quantity of the product in the inventory',
    required: false,
  })
  quantity?: number;

  @ApiProperty({
    example: 10,
    description: 'The minimum stock level of the product in the inventory',
    required: false,
  })
  minStock?: number;
}
