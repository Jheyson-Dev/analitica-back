import { ApiProperty } from '@nestjs/swagger';

export class CreateWarehouseDto {
  @ApiProperty({ example: 'Main Warehouse', description: 'Warehouse name' })
  name: string;

  @ApiProperty({
    example: '1234 Warehouse St.',
    description: 'Warehouse location',
    required: false,
  })
  location?: string;

  @ApiProperty({
    example: 1,
    description: 'Area of the warehouse',
    required: true,
  })
  areaId: number;
}
