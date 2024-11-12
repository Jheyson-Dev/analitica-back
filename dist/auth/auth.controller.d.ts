import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input.dto';
import { Auth } from './auth.entity';
import { User } from 'src/user/user.entity';
import { ChangePasswordInput } from './dto/change-input.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: LoginInput): Promise<Auth>;
    changePassword(data: ChangePasswordInput): Promise<User>;
    profile(id: number): Promise<User>;
}
