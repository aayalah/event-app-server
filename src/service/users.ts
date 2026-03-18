import bcrypt from 'bcrypt';
import UserRequest, { UsersResponse } from '../schemas/users';
import type { PrismaClient, User } from '../generated/prisma/client';

export interface UserService {

    create_user(
        prisma: PrismaClient,
        user_request: UserRequest
    ): Promise<UsersResponse>;

}


const SALT_ROUNDS = 10;

export async function hashPassword(plain: string): Promise<string> {
    return bcrypt.hash(plain, SALT_ROUNDS);
}


export const userService: UserService = {
    async create_user(prisma: PrismaClient, user_request: UserRequest) {

        const hp = await hashPassword(user_request.password);
    
        const response = await prisma.user.create({
            data: {
                full_name: user_request.full_name,
                email: user_request.email,
                user_name: user_request.user_name,
                password_hash: hp,
            },
        });
    
        return {
            id: response.id,
            full_name: response.full_name,
            email: response.email,
            user_name: response.user_name,
        } as UsersResponse;
    }
};

export default userService;