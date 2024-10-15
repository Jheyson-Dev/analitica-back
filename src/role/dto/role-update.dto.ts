import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateRoleDto } from './role-create.dto';

@InputType()
export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
