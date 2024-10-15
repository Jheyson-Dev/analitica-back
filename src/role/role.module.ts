import { Module } from '@nestjs/common';
import { RoleResolver } from './role.resolver';
import { RoleService } from './role.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [RoleResolver, RoleService],
  imports: [PrismaModule],
})
export class RoleModule {}
