import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UsersDTO {
  @Field(type => ID, { nullable: true })
  id: number;

  @Field(type => String, { nullable: true })
  fullName: string;

  @Field(type => Date, { nullable: true })
  birthday: Date;

  @Field(type => Boolean, { nullable: true })
  isActive: boolean;
