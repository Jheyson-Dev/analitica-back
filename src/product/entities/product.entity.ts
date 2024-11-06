import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from 'decimal.js';

export class Product {
  @ApiProperty({ example: 1, description: 'Product ID' })
  id: number;

  @ApiProperty({ example: 'Product name', description: 'Product name' })
  name: string;

  @ApiProperty({ required: false, example: 'Product description' })
  description?: string;

  @ApiProperty({ example: 200, description: 'Product price' })
  price: Decimal;

  @ApiProperty({ default: true, description: 'Product status' })
  status: boolean;

  @ApiProperty({
    example: '2023-10-01T00:00:00Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2023-10-01T00:00:00Z',
    description: 'Update date',
  })
  updatedAt: Date;

  //   @ApiProperty({ type: () => [Inventory] })
  //   inventory: Inventory[];

  //   @ApiProperty({ type: () => [Kardex] })
  //   kardex: Kardex[];

  //   @ApiProperty({ type: () => [Transfer] })
  //   transfer: Transfer[];

  //   @ApiProperty({ type: () => [StockNotification] })
  //   stockNotification: StockNotification[];
}
