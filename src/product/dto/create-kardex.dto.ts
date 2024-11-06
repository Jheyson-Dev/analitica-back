import { ApiProperty } from '@nestjs/swagger';

export class CreateKardexDto {
  @ApiProperty({
    example: 'IN',
    description: 'The type of movement (e.g., IN, OUT).',
  })
  movementType: string;

  @ApiProperty({ example: 100, description: 'The quantity of the movement.' })
  quantity: number;

  @ApiProperty({ example: 1, description: 'The ID of the related product.' })
  productId: number;

  @ApiProperty({ example: 1, description: 'The ID of the related warehouse.' })
  warehouseId: number;
}
