import { ApiProperty } from '@nestjs/swagger';

export class UpdateAreaDto {
  @ApiProperty({ example: 'IT', description: 'Area name', required: false })
  name?: string;

  @ApiProperty({
    example: true,
    description: 'The status of the area',
    required: false,
  })
  status?: boolean;

  @ApiProperty({
    example: 1,
    description: 'The area ID of the user',
    required: false,
  })
  managerId: number;
}
