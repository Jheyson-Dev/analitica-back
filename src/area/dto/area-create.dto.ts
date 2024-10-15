import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAreaDto {
  @Field(() => String)
  name: string;
}
