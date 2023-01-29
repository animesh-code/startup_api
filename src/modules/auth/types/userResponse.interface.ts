import { UserEntity } from '../entities/user.entity';

export interface UserResponseInterface {
  user: UserEntity & { accessToken: string };
}
