import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PickType } from '@nestjs/mapped-types';

export class UserDto {
  @IsEmail()
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsDefined()
  @IsString()
  name: string;
}

export class EmailDto extends PickType(UserDto, ['email']) {}
