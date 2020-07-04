import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class UsersDTO {
  @Field(type => ID)
  id: number;

  @Field(type => String)
  fullName: string;

  @Field(type => Date)
  birthday: Date;

  @Field(type => Boolean)
  isActive: boolean;
}