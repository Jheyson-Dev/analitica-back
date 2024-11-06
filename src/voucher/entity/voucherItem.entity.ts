// import { ApiProperty } from '@nestjs/swagger';
// import { Voucher } from 'src/voucher/entity/voucher.entity';

import Decimal from 'decimal.js';

export class VoucherItem {
  id: number;
  voucherId: number;
  item: string;
  description: string;
  quantity: number;
  total: Decimal;
}
