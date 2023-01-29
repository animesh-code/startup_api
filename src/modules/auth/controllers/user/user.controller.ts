import { Controller, Get } from '@nestjs/common';
import { UserResponseInterface } from '../../types/userResponse.interface';
import { UserService } from '../../services/user/user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  // @Get('user')
  // async currentUser(): Promise<UserResponseInterface> {
  //   return this.userService.;
  // }
}
