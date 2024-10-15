import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateRoleDto {
  @Field(() => String)
  name: string;
}
