import { ApiProperty } from '@nestjs/swagger';

export class UpdateAreaDto {
  @ApiProperty({ example: 'IT', description: 'Area name', required: false })
  area?: string;
}
