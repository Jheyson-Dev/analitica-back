import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateKardexDto } from './dto/create-kardex.dto';
import { Kardex } from './entities/kardex.entity';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Return all products.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async findAll(@Req() req: Request): Promise<Product[]> {
    const user = req['user'];
    return this.productService.findAll(user);
  }
  // Funcionalidades adicionales
  @Get('kardex')
  @ApiOperation({ summary: 'Get all kardex entries' })
  @ApiResponse({ status: 200, description: 'Return all kardex entries.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async findAllKardexs(): Promise<Kardex[]> {
    return this.productService.findAllKardex();
  }

  // Funcionalidades adicionales
  @Put('/min-stock/:id')
  @ApiOperation({ summary: 'Update Min Stock for product' })
  async updateMinStock(
    @Param('id') id: number,
    @Body() updateInventory: UpdateInventoryDto,
  ): Promise<Inventory> {
    return this.productService.updateMinStock(Number(id), updateInventory);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiResponse({ status: 200, description: 'Return the product.' })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(Number(id));
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product by ID' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(Number(id), updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a product by ID' })
  @ApiResponse({
    status: 200,
    description: 'The product has been successfully removed.',
  })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async remove(@Param('id') id: number): Promise<Product> {
    return this.productService.remove(Number(id));
  }

  // Funcionalidades adicionales

  @Post('kardex')
  @ApiOperation({ summary: 'Create a new kardex entry' })
  @ApiResponse({
    status: 201,
    description: 'The kardex entry has been successfully created.',
  })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async createKardex(
    @Body() createKardexDto: CreateKardexDto,
  ): Promise<Kardex> {
    return this.productService.createKardex(createKardexDto);
  }
}
