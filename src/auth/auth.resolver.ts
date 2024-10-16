import { Resolver } from '@nestjs/graphql';
import { Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input.dto';
import { Auth } from './auth.entity';
import { User } from 'src/user/user.entity';
import { ChangePasswordInput } from './dto/change-input.dto';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async login(
    @Args('data', { type: () => LoginInput }) data: LoginInput,
  ): Promise<Auth> {
    return this.authService.login(data);
  }

  @Mutation(() => User)
  async changePassword(
    @Args('data', { type: () => ChangePasswordInput })
    data: ChangePasswordInput,
  ): Promise<User> {
    return this.authService.changePassword(data);
  }
}
