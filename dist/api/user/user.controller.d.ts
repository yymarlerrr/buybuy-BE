import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
interface CreateUserResponse {
    success: boolean;
    message?: string;
}
interface GetUserResponse {
    success: boolean;
    message?: string;
    data?: object;
}
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(body: CreateUserDto): Promise<CreateUserResponse>;
    getUser(id: string): Promise<GetUserResponse>;
}
export {};
