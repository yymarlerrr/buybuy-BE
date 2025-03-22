import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly SHEETDB_URL;
    createUser(body: CreateUserDto): Promise<object>;
    getUser(id: string): Promise<object>;
}
