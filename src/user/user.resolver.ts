import { Int, Resolver } from '@nestjs/graphql';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Query(() => User)
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('data', { type: () => CreateUserDto }) data: CreateUserDto,
  ): Promise<User> {
    return this.userService.create(data);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateUserDto }) data: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(id, data);
  }

  @Mutation(() => User)
  async removeUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.remove(id);
  }
}
