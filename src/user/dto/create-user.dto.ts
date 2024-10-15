import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  password?: string;

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

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field(() => Int, { nullable: true })
  roleId?: number;

  @Field(() => Int, { nullable: true })
  areaId?: number;

  @Field(() => Boolean, {nullable:true})
  status: boolean;
}
