import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UpdateResult, DeleteResult } from 'typeorm';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { createParamDecorator, ExecutionContext, Body, UseGuards } from '@nestjs/common';


type inputUserType = {
  fullName: string
  isActive: boolean
  birthday: Date
  id: number
}
@Resolver('Users')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query('users')
  async getUser(){
    return await this.usersService.getUsers();
  }

  @Mutation('create')
  async create(@Args('inputUser') inputUser: User): Promise<User> {
    const user = new User();
    user.birthday = inputUser.birthday;
    user.fullName = inputUser.fullName;
    user.isActive = inputUser.isActive;
    return this.usersService.createUser(user);
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