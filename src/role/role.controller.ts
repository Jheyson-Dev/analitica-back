import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { CreateRoleDto } from './dto/role-create.dto';

@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  @ApiOperation({ summary: 'Get all roles' })
  @ApiResponse({
    status: 200,
    description: 'Return all roles.',
    type: [Role],
  })
  async findAll(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get role by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Role ID' })
  @ApiResponse({
    status: 200,
    description: 'Return role by ID.',
    type: Role,
  })
  async findOne(@Param('id') id: number): Promise<Role> {
    return this.roleService.findOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new role' })
  @ApiBody({ type: CreateRoleDto })
  @ApiResponse({
    status: 201,
    description: 'The role has been successfully created.',
  })
  async create(@Body() data: CreateRoleDto): Promise<Role> {
    return this.roleService.createRole(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a role' })
  @ApiParam({ name: 'id', type: 'number', description: 'Role ID' })
  @ApiResponse({
    status: 200,
    description: 'The role has been successfully updated.',
  })
  async update(@Param('id') id: number): Promise<string> {
    return this.roleService.update(Number(id));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a role' })
  @ApiParam({ name: 'id', type: 'number', description: 'Role ID' })
  @ApiResponse({
    status: 200,
    description: 'The role has been successfully deleted.',
  })
  async remove(@Param('id') id: number): Promise<string> {
    return this.roleService.remove(Number(id));
  }
}
