import { ApiProperty } from '@nestjs/swagger';

export class CreateAreaDto {
  @ApiProperty({ example: 'IT', description: 'Area name' })
  name: string;
  
  @ApiProperty({
    example: 1,
    description: 'The user ID of the area manager',
    required: true,
  })
  managerId: number;
}
