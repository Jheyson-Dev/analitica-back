import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'Admin', description: 'Role name', required: true })
  name: string;
}
