import { ApiProperty } from '@nestjs/swagger';
export class UpdateRoleDto {
  @ApiProperty({ example: 'Admin', description: 'Role name', required: false })
  name?: string;
}
