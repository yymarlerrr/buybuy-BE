import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderService {
    getOrders(): string;
    createOrder(body: CreateOrderDto): string;
}
