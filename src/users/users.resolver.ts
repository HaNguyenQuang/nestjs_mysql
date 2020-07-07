import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UpdateResult, DeleteResult } from 'typeorm';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Resolver('Users')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query('users')
  async getUser(){
    return await this.usersService.getUsers();
  }

  @Mutation('create')
  async create(@Args('inputUser') inputUser: User): Promise<User> {
    return this.usersService.createUser(inputUser);
  }

  @Mutation('update')
  async update(@Args('user')
    user: User,
  ): Promise<UpdateResult> {
    return this.usersService.updateUser(user);
  }

  @Mutation('delete')
  async delete(@Args('id') id: number): Promise<DeleteResult> {
    return this.usersService.deleteUser(id);
  }
}