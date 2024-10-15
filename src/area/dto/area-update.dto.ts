import { InputType, PartialType } from '@nestjs/graphql';
import { CreateAreaDto } from './area-create.dto';

@InputType()
export class UpdateAreaDto extends PartialType(CreateAreaDto) {}
