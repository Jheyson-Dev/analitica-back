import { Int, Resolver } from '@nestjs/graphql';
import { Query, Mutation, Args } from '@nestjs/graphql';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/area-create.dto';
import { UpdateAreaDto } from './dto/area-update.dto';
import { Area } from './area.entity';

@Resolver(() => Area)
export class AreaResolver {
  constructor(private readonly areaService: AreaService) {}

  @Query(() => [Area])
  async areas() {
    return this.areaService.findAll();
  }

  @Query(() => Area, { nullable: true })
  async area(@Args('id', { type: () => Int }) id: number) {
    return this.areaService.findOne(id);
  }

  @Mutation(() => Area)
  async createArea(
    @Args('data', { type: () => CreateAreaDto }) data: CreateAreaDto,
  ) {
    return this.areaService.create(data);
  }

  @Mutation(() => Area)
  async updateArea(
    @Args('id', { type: () => Int }) id: number,
    @Args('data', { type: () => UpdateAreaDto }) data: UpdateAreaDto,
  ) {
    return this.areaService.update(id, data);
  }

  @Mutation(() => String)
  async removeArea(@Args('id', { type: () => Int }) id: number) {
    return this.areaService.remove(id);
  }
}
