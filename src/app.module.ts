import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { RoleModule } from './role/role.module';
import { AreaModule } from './area/area.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { JwtModule } from '@nestjs/jwt';
import { LogActivityMiddleware } from './middleware/log-activity.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    PrismaModule,
    RoleModule,
    AreaModule,
    AuthModule,
    JwtModule.register({
      global: true,
    }),
  ],

  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogActivityMiddleware)
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/register', method: RequestMethod.POST },
      )
      .forRoutes(
        { path: 'user', method: RequestMethod.POST },
        { path: 'user/:id', method: RequestMethod.PUT },
        { path: 'user/:id', method: RequestMethod.DELETE },
        { path: 'role', method: RequestMethod.POST },
        { path: 'role', method: RequestMethod.PUT },
        { path: 'role', method: RequestMethod.DELETE },
        { path: 'area', method: RequestMethod.POST },
        { path: 'area', method: RequestMethod.PUT },
        { path: 'area', method: RequestMethod.DELETE },
      );
  }
}
