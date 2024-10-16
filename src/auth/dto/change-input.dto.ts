import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ChangePasswordInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  newPassword: string;
}
