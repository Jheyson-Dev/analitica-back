import { ApiProperty } from '@nestjs/swagger';
import { Area } from 'src/area/area.entity';
import { Log } from 'src/auth/log.entity';
import { Role } from 'src/role/role.entity';

export class User {
  @ApiProperty({ example: 1, description: 'User ID' })
  id: number;

  @ApiProperty({ example: 'john_doe', description: 'Username' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'Password' })
  password: string;

  @ApiProperty({ example: 'John', description: 'First name' })
  name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name' })
  lastname: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'Email' })
  email: string;

  @ApiProperty({
    example: '1234567890',
    description: 'Phone number',
    required: false,
  })
  phone?: string;

  @ApiProperty({ example: '12345678A', description: 'DNI' })
  dni: string;

  @ApiProperty({ example: 1, description: 'Role ID', required: false })
  roleId?: number;

  @ApiProperty({ example: 1, description: 'Area ID', required: false })
  areaId?: number;

  @ApiProperty({ example: true, description: 'Status' })
  status: boolean;

  @ApiProperty({
    example: '2023-10-01T00:00:00Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({ example: '2023-10-01T00:00:00Z', description: 'Update date' })
  updatedAt: Date;

  @ApiProperty({ type: () => Role, description: 'Role', required: false })
  role?: Role;

  @ApiProperty({ type: () => Area, description: 'Area', required: false })
  area?: Area;

  @ApiProperty({ type: () => Area, description: 'Area', required: false })
  logs?: Log[];
}
