import { Module } from '@nestjs/common';
import { ReportesController } from './reportes.controller';
import { ReportesService } from './reportes.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ReportesController],
  imports: [PrismaModule],
  providers: [ReportesService],
})
export class ReportesModule {}
