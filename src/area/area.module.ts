import { Module } from '@nestjs/common';
import { AreaResolver } from './area.resolver';
import { AreaService } from './area.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [AreaResolver, AreaService],
  imports: [PrismaModule],
})
export class AreaModule {}
