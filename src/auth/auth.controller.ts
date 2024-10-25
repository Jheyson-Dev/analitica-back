import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input.dto';
import { Auth } from './auth.entity';
import { User } from 'src/user/user.entity';
import { ChangePasswordInput } from './dto/change-input.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: LoginInput })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged in.',
  })
  async login(@Body() data: LoginInput): Promise<Auth> {
    return this.authService.login(data);
  }

  @Post('change-password')
  @ApiOperation({ summary: 'Change user password' })
  @ApiBody({ type: ChangePasswordInput })
  @ApiResponse({
    status: 200,
    description: 'Password successfully changed.',
  })
  async changePassword(@Body() data: ChangePasswordInput): Promise<User> {
    return this.authService.changePassword(data);
  }

  @Get('profile/:id')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile successfully retrieved.',
    type: User,
  })
  async profile(@Param('id') id: number): Promise<User> {
    return this.authService.profile(Number(id));
  }
}
