import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Query,
  ParseIntPipe,
  Req,
  Res,
  HttpCode,
  BadRequestException,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user.interface';
import { EmailDto, UserDto } from './dto/user.dto';
import { Request, Response } from 'express';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @HttpCode(210)
  @Get('/test')
  @Redirect('https://docs.nestjs.com/', 301)
  testUser(
    // @Query('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    console.log(req.headers, req.url, req.body);
    // res.send('hi this bharath');
  }

  @Get('/:email')
  async getUser(@Param() Param: EmailDto): Promise<User[]> {
    try {
      return await this.userService.getUser(Param.email);
    } catch (error) {
      throw new BadRequestException('user not found');
    }
  }

  @Post('/create')
  async createUser(@Body() user: UserDto): Promise<User> {
    return this.userService.createUser(user);
  }

  @Delete('/:email')
  deleteUser(@Param() Param: EmailDto): User[] {
    return this.userService.deleteUser(Param.email);
  }
}
