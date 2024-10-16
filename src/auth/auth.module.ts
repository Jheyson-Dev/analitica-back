import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [
    PrismaModule,
    JwtModule.register({
      global: true,
    }),
  ],
})
export class AuthModule {}
