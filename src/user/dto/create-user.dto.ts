import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'The username of the user',
    required: false,
  })
  username?: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
    required: false,
  })
  password?: string;

  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  name: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  lastname: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: '1234567890',
    description: 'The phone number of the user',
    required: false,
  })
  phone?: string;

  @ApiProperty({ example: '12345678A', description: 'The DNI of the user' })
  dni: string;

  @ApiProperty({
    example: 30,
    description: 'The age of the user',
    required: false,
  })
  age?: number;

  @ApiProperty({
    example: 1,
    description: 'The role ID of the user',
    required: false,
  })
  roleId?: number;

  @ApiProperty({
    example: 1,
    description: 'The area ID of the user',
    required: false,
  })
  areaId?: number;

  @ApiProperty({
    example: true,
    description: 'The status of the user',
    required: false,
  })
  status?: boolean;
}
