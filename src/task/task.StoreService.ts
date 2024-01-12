import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interface/task.interface';

@Injectable()
export class TaskStoreService {
  private tasks: Task[] = [];

  async addTask(task: Task): Promise<Task> {
    this.tasks.push(task);
    return Promise.resolve(task);
  }

  async removeTask(id: string): Promise<Task[]> {
    const task = this.tasks.filter((task) => task.uuid === id);
    if (task.length === 0) {
      throw new NotFoundException(`TASKS NOT FOUND ON ID:${id}`);
    }
    this.tasks = this.tasks.filter((task) => task.uuid !== id);
    return Promise.resolve(this.tasks);
  }

  async getTask(id: string): Promise<Task> {
    const task = this.tasks.filter((task) => task.uuid === id);
    if (task?.length) {
      return Promise.resolve(task[0]);
    }
    throw new NotFoundException(`TASKS NOT FOUND ON ID:${id}`);
  }

  async getAllTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }
}
