import { Controller, Get, Post, Body, Param, HttpStatus, HttpException } from '@nestjs/common'
import { OrderService } from './order.service'
import { CreateOrderDto } from './dto/create-order.dto'

interface GetOrdersByUserIdResponse {
    success: boolean
    message?: string
    data?: object
}

interface CreateOrderResponse {
    success: boolean
    message?: string
}

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get('/:id')
    async getOrdersByUserId(@Param('id') id: string): Promise<GetOrdersByUserIdResponse> {
        const result = (await this.orderService.getOrderByUserId(id)) as GetOrdersByUserIdResponse

        if (!result.success) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    message: result.message || 'Something went wrong'
                },
                HttpStatus.BAD_REQUEST
            )
        }
        return result
    }

    @Post()
    async createOrder(@Body() body: CreateOrderDto): Promise<CreateOrderResponse> {
        const result = (await this.orderService.createOrder(body)) as CreateOrderResponse

        if (!result.success) {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,

                    message: result.message || 'Something went wrong'
                },
                HttpStatus.BAD_REQUEST
            )
        }
        return result
    }
}
