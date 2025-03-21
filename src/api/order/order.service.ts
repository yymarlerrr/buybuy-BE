import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
@Injectable()
export class OrderService {
  getOrders(): string {
    return 'Orders';
  }

  createOrder(body: CreateOrderDto): string {
    return 'Order created';
  }
}
