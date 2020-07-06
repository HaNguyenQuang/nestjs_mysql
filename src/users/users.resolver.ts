import { Resolver, Query } from '@nestjs/graphql';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver('Users')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  // @Query(returns => [UsersDTO])
  // async getAll(): Promise<UsersDTO[]> {
  //   return await this.usersService.getUsers();
  // }
  @Query('users')
  async getUser(){
    return await this.usersService.getUsers();
  }
}