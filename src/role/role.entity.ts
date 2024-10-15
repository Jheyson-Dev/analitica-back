import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../user/user.entity';

@ObjectType()
export class Role {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => [User], { nullable: true })
  users?: User[];
}
