import { ApiProperty } from '@nestjs/swagger';
import { Product } from './product.entity';
import { User } from 'src/user/user.entity';

export class Kardex {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the Kardex entry.',
  })
  id: number;

  @ApiProperty({
    example: 'IN',
    description: 'The type of movement (e.g., IN, OUT).',
  })
  movementType: string;

  @ApiProperty({ example: 100, description: 'The quantity of the movement.' })
  quantity: number;

  @ApiProperty({
    example: '2023-01-01T00:00:00Z',
    description: 'The date of the movement.',
  })
  movementDate: Date;

  @ApiProperty({ example: 1, description: 'The ID of the related product.' })
  productId: number;

  @ApiProperty({ example: 1, description: 'The ID of the related warehouse.' })
  warehouseId: number;

  //   @ApiProperty({ type: () => Product, description: 'The related product.' })
  //   product: Product;

  //   @ApiProperty({
  //     type: () => User,
  //     description: 'The user who created the entry.',
  //   })
  //   createdBy: User;
}
