import { ApiProperty } from '@nestjs/swagger';

export class CreateAreaDto {
  @ApiProperty({ example: 'IT', description: 'Area name' })
  name: string;
}
