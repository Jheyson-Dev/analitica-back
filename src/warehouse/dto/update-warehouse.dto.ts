import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWarehouseDto } from './create-warehouse.dto';

export class UpdateWarehouseDto extends PartialType(CreateWarehouseDto) {
  @ApiProperty({
    example: 'Main Warehouse',
    description: 'Warehouse name',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: '1234 Warehouse St.',
    description: 'Warehouse location',
    required: false,
  })
  location?: string;

  @ApiProperty({
    default: true,
    description: 'Warehouse status',
    required: false,
  })
  status?: boolean;
}
