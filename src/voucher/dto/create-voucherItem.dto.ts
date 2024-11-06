import { ApiProperty } from '@nestjs/swagger';
import { VoucherItem } from '../entity/voucherItem.entity';

export class CreateVoucherItemDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the related voucher',
  })
  voucherId: number;

  @ApiProperty({ example: 'Fuel', description: 'The name or type of the item' })
  item: string;

  @ApiProperty({
    example: 'Diesel fuel for trucks',
    description: 'The description of the item',
  })
  description: string;

  @ApiProperty({ example: 100, description: 'The quantity of the item' })
  quantity: number;

  @ApiProperty({
    example: 500.0,
    description: 'The total amount in gallons or units',
  })
  total: number;
}
