import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
    private readonly SHEETDB_URL = 'https://sheetdb.io/api/v1/v405cupumvutv'

    async createUser(body: CreateUserDto): Promise<object> {
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

            const responseData = await response.json()

            if (response.status !== 201) {
                return {
                    success: false,
                    message: 'Failed to create user'
                }
            }

            return {
                success: true
            }
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: 'Failed to create user'
            }
        }
    }

    async getUser(id: string): Promise<object> {
        try {
            const response = await fetch(`${this.SHEETDB_URL}/search?userId=${id}`)

            if (response.status !== 200) {
                return {
                    success: false,
                    message: 'Failed to get user'
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
                message: 'Failed to get user'
            }
        }
    }
}
