import { ApiProperty } from '@nestjs/swagger';

export class LoginInput {
  @ApiProperty({ example: 'john_doe', description: 'Username' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'Password' })
  password: string;
}
