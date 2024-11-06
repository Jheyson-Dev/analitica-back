import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    example: 'Product name',
    description: 'Product name',
    required: false,
  })
  name?: string;

  @ApiProperty({ example: 'Product description', required: false })
  description?: string;

  @ApiProperty({ example: 200, description: 'Product price', required: false })
  price?: number;

  @ApiProperty({
    default: true,
    description: 'Product status',
    required: false,
  })
  status?: boolean;
}
