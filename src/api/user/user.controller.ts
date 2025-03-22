import { Controller, Get, Post, Body, Param, HttpException, HttpStatus } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'

interface CreateUserResponse {
    success: boolean
    message?: string
}

interface GetUserResponse {
    success: boolean
    message?: string
    data?: object
}

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() body: CreateUserDto): Promise<CreateUserResponse> {
        const result = (await this.userService.createUser(body)) as CreateUserResponse

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

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<GetUserResponse> {
        const result = (await this.userService.getUser(id)) as GetUserResponse

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
