import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Product name', description: 'Product name' })
  name: string;

  @ApiProperty({ required: false, example: 'Product description' })
  description?: string;

  @ApiProperty({ example: 200, description: 'Product price' })
  price: number;
}
