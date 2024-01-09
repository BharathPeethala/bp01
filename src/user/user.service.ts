import { Injectable } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[] = [];

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(email: string): User[] {
    return this.users.filter((user) => user.email === email);
  }

  deleteUser(email: string): User[] {
    this.users = this.users.filter((user) => user.email !== email);
    return this.users;
  }
}
