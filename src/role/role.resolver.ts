import { Int, Resolver } from '@nestjs/graphql';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { CreateRoleDto } from './dto/role-create.dto';

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role])
  async roles(): Promise<Role[]> {
    return this.roleService.findAll();
  }

  @Query(() => Role, { nullable: true })
  async role(@Args('id', { type: () => Int }) id: number): Promise<Role> {
    return this.roleService.findOne(id);
  }

  @Mutation(() => Role)
  async createRole(
    @Args('data', { type: () => CreateRoleDto }) data: CreateRoleDto,
  ): Promise<Role> {
    return this.roleService.createRole(data);
  }

  @Mutation(() => String)
  async updateRole(@Args('id', { type: () => Int }) id: number) {
    return this.roleService.update(id);
  }

  @Mutation(() => String)
  async removeRole(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<string> {
    return this.roleService.remove(id);
  }
}
