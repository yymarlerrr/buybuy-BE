import { Injectable } from '@nestjs/common'
import { CreateOrderDto } from './dto/create-order.dto'
@Injectable()
export class OrderService {
    private readonly SHEETDB_URL = 'https://sheetdb.io/api/v1/gyrq3n0lee40i'

    async getOrderByUserId(id: string): Promise<object> {
        try {
            const response = await fetch(`${this.SHEETDB_URL}/search?userId=${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.status !== 200) {
                return {
                    success: false,
                    message: 'Failed to get orders'
                }
            }

            return {
                success: true,
                data: await response.json()
            }
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: 'Failed to get orders'
            }
        }
    }

    async createOrder(body: CreateOrderDto): Promise<object> {
        try {
            const response = await fetch(this.SHEETDB_URL, {
                method: 'POST',
                body: JSON.stringify({
                    data: [body]
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.status !== 201) {
                return {
                    success: false,
                    message: 'Failed to create order'
                }
            }
            return {
                success: true
            }
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: 'Failed to create order'
            }
        }
    }
}
