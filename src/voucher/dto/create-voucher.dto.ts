import { ApiProperty } from '@nestjs/swagger';
import { VoucherItem } from '../entity/voucherItem.entity';

export class CreateVoucherDto {
  @ApiProperty({ example: 'Gas Station Name', description: 'Gas Station' })
  gasStation: string;

  @ApiProperty({ example: '123 Main St', description: 'Address' })
  address: string;

  @ApiProperty({
    example: 'Purpose of the voucher',
    description: 'Meta',
    required: false,
  })
  meta?: string;

  @ApiProperty({
    example: 'Vehicle Info',
    description: 'Vehicle',
    required: false,
  })
  vehicle?: string;

  // @ApiProperty({
  //   type: () => [VoucherItem],
  //   description: 'List of voucher items',
  // })
  // items: VoucherItem[];

  @ApiProperty({
    example: 'Activity Info',
    description: 'Activity',
    required: false,
  })
  activity: string;

  @ApiProperty({
    example: '2023-10-01T00:00:00Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({ example: '2023-10-01T00:00:00Z', description: 'Update date' })
  updatedAt: Date;

  @ApiProperty({ example: true, description: 'Status' })
  status: boolean;

  @ApiProperty({ example: 1, description: 'Requester ID' })
  requesterId: number;

  @ApiProperty({ example: false, description: 'If the requester signed' })
  requesterSigned: boolean;

  @ApiProperty({
    example: 2,
    description: 'Immediate boss ID',
    required: false,
  })
  immediateBossId?: number;

  @ApiProperty({ example: false, description: 'If the immediate boss signed' })
  immediateBossSigned: boolean;

  @ApiProperty({
    example: 3,
    description: 'Municipal manager ID',
    required: false,
  })
  municipalManagerId?: number;

  @ApiProperty({
    example: false,
    description: 'If the municipal manager signed',
  })
  municipalManagerSigned: boolean;

  @ApiProperty({
    example: 4,
    description: 'Supply manager ID',
    required: false,
  })
  supplyManagerId?: number;

  @ApiProperty({ example: false, description: 'If the supply manager signed' })
  supplyManagerSigned: boolean;

  @ApiProperty({ example: 5, description: 'Operator ID', required: false })
  operatorId?: number;

  @ApiProperty({ example: false, description: 'If the operator signed' })
  operatorSigned: boolean;

  @ApiProperty({
    example: 6,
    description: 'Warehouse manager ID',
    required: false,
  })
  warehouseManagerId?: number;

  @ApiProperty({
    example: false,
    description: 'If the warehouse manager signed',
  })
  warehouseManagerSigned: boolean;
}

export class CreateVoucherDtoComplete {
  @ApiProperty({ example: 'Gas Station Name', description: 'Gas Station' })
  gasStation: string;

  @ApiProperty({ example: '123 Main St', description: 'Address' })
  address: string;

  @ApiProperty({
    example: 'Purpose of the voucher',
    description: 'Meta',
    required: false,
  })
  meta?: string;

  @ApiProperty({
    example: 'Vehicle Info',
    description: 'Vehicle',
    required: false,
  })
  vehicle?: string;

  @ApiProperty({
    type: () => [VoucherItem],
    description: 'List of voucher items',
  })
  items: VoucherItem[];

  @ApiProperty({
    example: 'Activity Info',
    description: 'Activity',
    required: false,
  })
  activity: string;

  @ApiProperty({
    example: '2023-10-01T00:00:00Z',
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({ example: '2023-10-01T00:00:00Z', description: 'Update date' })
  updatedAt: Date;

  @ApiProperty({ example: true, description: 'Status' })
  status: boolean;

  @ApiProperty({ example: 1, description: 'Requester ID' })
  requesterId: number;

  @ApiProperty({ example: false, description: 'If the requester signed' })
  requesterSigned: boolean;

  @ApiProperty({
    example: 2,
    description: 'Immediate boss ID',
    required: false,
  })
  immediateBossId?: number;

  @ApiProperty({ example: false, description: 'If the immediate boss signed' })
  immediateBossSigned: boolean;

  @ApiProperty({
    example: 3,
    description: 'Municipal manager ID',
    required: false,
  })
  municipalManagerId?: number;

  @ApiProperty({
    example: false,
    description: 'If the municipal manager signed',
  })
  municipalManagerSigned: boolean;

  @ApiProperty({
    example: 4,
    description: 'Supply manager ID',
    required: false,
  })
  supplyManagerId?: number;

  @ApiProperty({ example: false, description: 'If the supply manager signed' })
  supplyManagerSigned: boolean;

  @ApiProperty({ example: 5, description: 'Operator ID', required: false })
  operatorId?: number;

  @ApiProperty({ example: false, description: 'If the operator signed' })
  operatorSigned: boolean;

  @ApiProperty({
    example: 6,
    description: 'Warehouse manager ID',
    required: false,
  })
  warehouseManagerId?: number;

  @ApiProperty({
    example: false,
    description: 'If the warehouse manager signed',
  })
  warehouseManagerSigned: boolean;
}
