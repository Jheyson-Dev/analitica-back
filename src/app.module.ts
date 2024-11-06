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
import { ProductModule } from './product/product.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { NotificationModule } from './notification/notification.module';
import { VoucherModule } from './voucher/voucher.module';
import { ReportesModule } from './reportes/reportes.module';

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
    ProductModule,
    WarehouseModule,
    NotificationModule,
    VoucherModule,
    ReportesModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogActivityMiddleware)
      .exclude(
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/register', method: RequestMethod.POST },
        { path: 'user', method: RequestMethod.POST },
        { path: 'area', method: RequestMethod.POST },
        { path: 'role', method: RequestMethod.POST },
      )
      .forRoutes(
        // { path: 'user/:id', method: RequestMethod.PUT },
        // { path: 'user/:id', method: RequestMethod.DELETE },
        // { path: 'role/:id', method: RequestMethod.PUT },
        // { path: 'role/:id', method: RequestMethod.DELETE },
        // { path: 'area/:id', method: RequestMethod.PUT },
        // { path: 'area/:id', method: RequestMethod.DELETE },
        // { path: 'product', method: RequestMethod.POST },
        // { path: 'product/kardex', method: RequestMethod.POST },
        // { path: 'product/:id', method: RequestMethod.PUT },
        // { path: 'product/:id', method: RequestMethod.DELETE },
        // { path: 'warehouse', method: RequestMethod.POST },
        // { path: 'warehouse/:id', method: RequestMethod.PUT },
        // { path: 'warehouse/:id', method: RequestMethod.DELETE },
        '*',
      );
  }
}
