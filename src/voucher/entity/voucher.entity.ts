import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { VoucherItem } from './voucherItem.entity';

export class Voucher {
  id: number;
  gasStation: string;
  address: string;
  meta?: string;
  vehicle?: string;
  createdAt: Date;
  updatedAt: Date;
  items?: VoucherItem[];
  activity: string;
  requesterId: number;
  requesterSigned: boolean;
  immediateBossId?: number;
  immediateBossSigned: boolean;
  municipalManagerId?: number;
  municipalManagerSigned: boolean;
  supplyManagerId?: number;
  supplyManagerSigned: boolean;
  operatorId?: number;
  operatorSigned: boolean;
  warehouseManagerId?: number;
  warehouseManagerSigned: boolean;
  aproved: boolean;
  user?: User;

  operador?: User;
}
