import { Inject, forwardRef } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver(of => UsersDTO)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(returns => [UsersDTO])
  async getAll(): Promise<UsersDTO[]> {
    return await this.usersService.getUsers();
  }
}