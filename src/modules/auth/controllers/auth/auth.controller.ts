import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { AuthService } from '../../services/auth/auth.service';
import { UserResponseInterface } from '../../types/userResponse.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('users/login')
  async userLogin(
    @Body('user') loginUserDto: LoginUserDto,
  ): Promise<UserResponseInterface> {
    const user = await this.authService.userLogin(loginUserDto);
    return this.authService.buildUserResponse(user);
  }
}
