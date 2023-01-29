import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  readonly mobileNumber: string;

  @ApiProperty({ default: false })
  readonly isMerchant: boolean;
}
