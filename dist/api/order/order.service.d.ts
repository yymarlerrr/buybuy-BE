import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderService {
    private readonly SHEETDB_URL;
    getOrderByUserId(id: string): Promise<object>;
    createOrder(body: CreateOrderDto): Promise<object>;
}
