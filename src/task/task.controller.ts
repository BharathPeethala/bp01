import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto, uuidDto } from './dto/task.dto';
import { Request, Response } from 'express';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @UsePipes(new ValidationPipe())
  async getTask(
    @Query() queryParams: uuidDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const task = await this.taskService.getTask(queryParams.id);
    res.status(200).send({ data: task });
  }

  @Delete()
  @UsePipes(new ValidationPipe())
  async deletTask(
    @Query() queryParams: uuidDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const remainingTasks = await this.taskService.removeTask(queryParams.id);
    res.status(200).send({ data: remainingTasks });
  }

  @Get('/all')
  async getAllTasks(@Req() req: Request, @Res() res: Response) {
    const tasks = await this.taskService.getAllTasks();
    res.status(200).send({ data: tasks });
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(
    @Body() task: TaskDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const createdTask = await this.taskService.addTask(task);
    res.status(200).send({ data: createdTask });
  }
}
