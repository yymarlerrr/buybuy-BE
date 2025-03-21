import { Module } from '@nestjs/common';
import { OrderModule } from './api/order/order.module';

@Module({
  imports: [OrderModule],
})
export class AppModule {}
