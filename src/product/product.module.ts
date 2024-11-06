import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  controllers: [ProductController],
  imports: [PrismaModule, NotificationModule],
  providers: [ProductService],
})
export class ProductModule {}
