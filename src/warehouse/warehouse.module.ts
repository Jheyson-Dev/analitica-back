import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WarehouseController],
  imports: [PrismaModule],
  providers: [WarehouseService],
})
export class WarehouseModule {}
