import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from '../../dto/loginUser.dto';
import { UserEntity } from '../../entities/user.entity';
import { UserResponseInterface } from '../../types/userResponse.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userService: Repository<UserEntity>,
  ) {}

  async userLogin(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const user = await this.userService.findOne({
      where: { mobileNumber: loginUserDto.mobileNumber },
    });

    if (!user) {
      const newUser = new UserEntity();
      Object.assign(newUser, loginUserDto);
      return await this.userService.save(newUser);
    }

    return user;
  }

  buildUserResponse(user: UserEntity): UserResponseInterface {
    return {
      user: {
        ...user,
        accessToken: '',
      },
    };
  }
}
