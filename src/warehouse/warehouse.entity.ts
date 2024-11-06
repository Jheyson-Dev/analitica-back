import { ApiProperty } from '@nestjs/swagger';

export class Warehouse {
  @ApiProperty({ example: 1, description: 'Warehouse ID' })
  id: number;

  @ApiProperty({ example: 'Main Warehouse', description: 'Warehouse name' })
  name: string;

  @ApiProperty({
    example: '1234 Warehouse St.',
    description: 'Warehouse location',
    required: false,
  })
  location?: string;

  @ApiProperty({
    example: '2023-10-01T00:00:00Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({ example: '2023-10-01T00:00:00Z', description: 'Update date' })
  updatedAt: Date;

  @ApiProperty({ default: true, description: 'Warehouse status' })
  status: boolean;

  //   @ApiProperty({ type: () => [Inventory], description: 'List of inventories' })
  //   inventory: Inventory[];

  //   @ApiProperty({ type: () => [Kardex], description: 'List of kardex entries' })
  //   kardex: Kardex[];

  //   @ApiProperty({
  //     type: () => [Transfer],
  //     description: 'List of transfers originating from this warehouse',
  //   })
  //   transferOrigin: Transfer[];

  //   @ApiProperty({
  //     type: () => [Transfer],
  //     description: 'List of transfers destined to this warehouse',
  //   })
  //   transferDestination: Transfer[];

  //   @ApiProperty({
  //     type: () => [StockNotification],
  //     description: 'List of stock notifications',
  //   })
  //   stockNotification: StockNotification[];
}
