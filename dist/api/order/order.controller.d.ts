import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
interface GetOrdersByUserIdResponse {
    success: boolean;
    message?: string;
    data?: object;
}
interface CreateOrderResponse {
    success: boolean;
    message?: string;
}
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getOrdersByUserId(id: string): Promise<GetOrdersByUserIdResponse>;
    createOrder(body: CreateOrderDto): Promise<CreateOrderResponse>;
}
export {};
