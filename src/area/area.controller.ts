import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { AreaService } from './area.service';
import { CreateAreaDto } from './dto/area-create.dto';
import { UpdateAreaDto } from './dto/area-update.dto';
import { Area } from './area.entity';

@ApiTags('area')
@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Get()
  @ApiOperation({ summary: 'Get all areas' })
  @ApiResponse({
    status: 200,
    description: 'Return all areas.',
    type: [Area],
  })
  async findAll() {
    return this.areaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get area by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'Area ID' })
  @ApiResponse({
    status: 200,
    description: 'Return area by ID.',
    type: Area,
  })
  async findOne(@Param('id') id: number) {
    return this.areaService.findOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new area' })
  @ApiBody({ type: CreateAreaDto })
  @ApiResponse({
    status: 201,
    description: 'The area has been successfully created.',
    type: Area,
  })
  async create(@Body() data: CreateAreaDto) {
    return this.areaService.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an area' })
  @ApiParam({ name: 'id', type: 'number', description: 'Area ID' })
  @ApiBody({ type: UpdateAreaDto })
  @ApiResponse({
    status: 200,
    description: 'The area has been successfully updated.',
  })
  async update(@Param('id') id: number, @Body() data: UpdateAreaDto) {
    return this.areaService.update(Number(id), data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an area' })
  @ApiParam({ name: 'id', type: 'number', description: 'Area ID' })
  @ApiResponse({
    status: 200,
    description: 'The area has been successfully deleted.',
    schema: {
      type: 'string',
      example: 'Area deleted successfully',
    },
  })
  async remove(@Param('id') id: number) {
    return this.areaService.remove(Number(id));
  }
}
