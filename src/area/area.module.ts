import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AreaController } from './area.controller';

@Module({
  providers: [AreaService],
  imports: [PrismaModule],
  controllers: [AreaController],
})
export class AreaModule {}
