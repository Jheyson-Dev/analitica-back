import { Module } from '@nestjs/common';
import { VoucherController } from './voucher.controller';
import { VoucherService } from './voucher.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  controllers: [VoucherController],
  providers: [VoucherService],
  imports: [PrismaModule, NotificationModule],
})
export class VoucherModule {}
