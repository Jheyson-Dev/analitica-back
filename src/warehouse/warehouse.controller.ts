import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Warehouse } from './warehouse.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('warehouse')
@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new warehouse' })
  @ApiResponse({
    status: 201,
    description: 'The warehouse has been successfully created.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async create(
    @Body() createWarehouseDto: CreateWarehouseDto,
  ): Promise<Warehouse> {
    return this.warehouseService.create(createWarehouseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all warehouses' })
  @ApiResponse({ status: 200, description: 'Return all warehouses.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async findAll(): Promise<Warehouse[]> {
    return this.warehouseService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a warehouse by ID' })
  @ApiResponse({ status: 200, description: 'Return the warehouse.' })
  @ApiResponse({ status: 404, description: 'Warehouse not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async findOne(@Param('id') id: number): Promise<Warehouse> {
    return this.warehouseService.findOne(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a warehouse by ID' })
  @ApiResponse({
    status: 200,
    description: 'The warehouse has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Warehouse not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async update(
    @Param('id') id: number,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ): Promise<Warehouse> {
    return this.warehouseService.update(Number(id), updateWarehouseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a warehouse by ID' })
  @ApiResponse({
    status: 200,
    description: 'The warehouse has been successfully removed.',
  })
  @ApiResponse({ status: 404, description: 'Warehouse not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async remove(@Param('id') id: number): Promise<Warehouse> {
    return this.warehouseService.remove(Number(id));
  }
}
