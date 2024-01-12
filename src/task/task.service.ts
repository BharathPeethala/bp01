import { Injectable } from '@nestjs/common';
import { Task } from './interface/task.interface';
import { TaskStoreService } from './task.StoreService';
import { randomUUID } from 'crypto';

@Injectable()
export class TaskService {
  constructor(private readonly taskService: TaskStoreService) {}

  async addTask(task: Task): Promise<Task> {
    task.uuid = randomUUID();
    task.completed = false;
    return this.taskService.addTask(task);
  }

  async removeTask(uuid: string): Promise<Task[]> {
    return this.taskService.removeTask(uuid);
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  async getTask(id: string): Promise<Task> {
    return this.taskService.getTask(id);
  }
}
