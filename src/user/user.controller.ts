import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { EmailDto, UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get('/:email')
  getUser(@Param() Param: EmailDto): User[] {
    return this.userService.getUser(Param.email);
  }

  @Post('/create')
  createUser(@Body() user: UserDto): User {
    return this.userService.createUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param() Param: EmailDto): User[] {
    return this.userService.deleteUser(Param.email);
  }
}
