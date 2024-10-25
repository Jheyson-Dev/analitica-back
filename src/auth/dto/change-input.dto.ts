import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordInput {
  @ApiProperty({ example: 'john_doe', description: 'Username' })
  username: string;

  @ApiProperty({ example: 'oldpassword123', description: 'Current password' })
  password: string;

  @ApiProperty({ example: 'newpassword123', description: 'New password' })
  newPassword: string;
}
