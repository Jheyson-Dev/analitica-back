import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';

export class Area {
  @ApiProperty({ example: 1, description: 'Area ID' })
  id: number;

  @ApiProperty({ example: 'IT', description: 'Area name' })
  name: string;

  @ApiProperty({
    example: '2023-10-01T00:00:00Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({ example: '2023-10-01T00:00:00Z', description: 'Update date' })
  updatedAt: Date;

  @ApiProperty({ example: true, description: 'Status' })
  status: boolean;

  @ApiProperty({
    type: () => [User],
    description: 'List of users in the area',
    required: false,
  })
  users?: User[];

  @ApiProperty({
    type: () => User,
    description: 'Manager of the area',
    required: false,
  })
  manager?: User;
}
