import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get('/:email')
  getUser(@Param('email') email: string): User[] {
    return this.userService.getUser(email);
  }

  @Post('/create')
  createUser(@Body() user: User): User {
    return this.userService.createUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param('email') email: string): User[] {
    return this.userService.deleteUser(email);
  }
}
