import { Resolver, Query } from '@nestjs/graphql';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver('Users')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(returns => UsersDTO)
  async getAll(): Promise<User[]> {
    return await this.usersService.getUsers();
  }
}