import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { VoucherService } from './voucher.service';
import {
  CreateVoucherDto,
  CreateVoucherDtoComplete,
} from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { Voucher } from './entity/voucher.entity';

@ApiTags('voucher')
@Controller('voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new voucher' })
  @ApiResponse({
    status: 201,
    description: 'The voucher has been successfully created.',
    type: Voucher,
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(
    @Body() createVoucherDto: CreateVoucherDtoComplete,
  ): Promise<Voucher> {
    return this.voucherService.create(createVoucherDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a voucher by ID' })
  @ApiResponse({
    status: 200,
    description: 'The voucher has been successfully retrieved.',
    type: Voucher,
  })
  @ApiResponse({ status: 404, description: 'Voucher not found.' })
  async findOne(
    @Param('id') id: number,
    @Req() req: Request,
  ): Promise<Voucher> {
    const user = req['user'];
    return this.voucherService.findOne(Number(id), user);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vouchers' })
  @ApiResponse({
    status: 200,
    description: 'The vouchers have been successfully retrieved.',
    type: [Voucher],
  })
  async findAll(@Req() req: Request): Promise<Voucher[]> {
    const user = req['user'];
    return this.voucherService.findAll(user);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a voucher by ID' })
  @ApiResponse({
    status: 200,
    description: 'The voucher has been successfully updated.',
    type: Voucher,
  })
  @ApiResponse({ status: 404, description: 'Voucher not found.' })
  async update(
    @Param('id') id: number,
    @Body() updateVoucherDto: UpdateVoucherDto,
  ): Promise<Voucher> {
    return this.voucherService.update(Number(id), updateVoucherDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a voucher by ID' })
  @ApiResponse({
    status: 200,
    description: 'The voucher has been successfully deleted.',
    type: Voucher,
  })
  @ApiResponse({ status: 404, description: 'Voucher not found.' })
  async remove(@Param('id') id: number): Promise<Voucher> {
    return this.voucherService.remove(Number(id));
  }
}
