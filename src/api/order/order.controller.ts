import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders(): string {
    return this.orderService.getOrders();
  }

  @Post()
  createOrder(@Body() body: CreateOrderDto): string {
    return this.orderService.createOrder(body);
  }
}
