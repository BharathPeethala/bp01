import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  public users: User[] = [];

  createUser(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(email: string): Promise<User[]> {
    const user = this.users.filter((user) => user.email === email);
    if (user.length) {
      return Promise.resolve(user);
    }
    throw new NotFoundException('user not found');
  }

  deleteUser(email: string): User[] {
    this.users = this.users.filter((user) => user.email !== email);
    return this.users;
  }
}
