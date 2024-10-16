import { Resolver } from '@nestjs/graphql';
import { Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input.sto';
import { Auth } from './auth.entity';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async login(
    @Args('data', { type: () => LoginInput }) data: LoginInput,
  ): Promise<Auth> {
    return this.authService.login(data);
  }
}
