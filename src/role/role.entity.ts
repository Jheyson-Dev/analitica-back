import { ApiProperty } from '@nestjs/swagger';
import { User } from '../user/user.entity';

export class Role {
  @ApiProperty({ example: 1, description: 'Role ID' })
  id: number;

  @ApiProperty({ example: 'Admin', description: 'Role name' })
  name: string;

  @ApiProperty({ example: '2023-10-01T00:00:00Z', description: 'Creation date' })
  createdAt: Date;

  @ApiProperty({ example: '2023-10-01T00:00:00Z', description: 'Update date' })
  updatedAt: Date;

  @ApiProperty({ type: () => [User], description: 'List of users with this role', required: false })
  users?: User[];
}