// import { Role } from './role.entity';
// import { Area } from './area.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  lastname: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String)
  dni: string;

  @Field(() => String, { nullable: true })
  age?: number;

  @Field(() => Int, { nullable: true })
  roleId?: number;

  @Field(() => Int, { nullable: true })
  areaId?: number;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  //   @Field(() => Role)
  //   role: Role;

  //   @Field(() => Area, { nullable: true })
  //   area?: Area;
}
