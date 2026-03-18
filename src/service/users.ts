import bcrypt from 'bcrypt';
import UsersRequest, { UsersResponse } from '../schemas/users';
import type { PrismaClient, User } from '../generated/prisma/client';

export interface UserService {

    create_user(
        prisma: PrismaClient,
        user_request: UsersRequest
    ): Promise<UsersResponse>;

    get_user_by_id(
        prisma: PrismaClient,
        id: number
    ): Promise<UsersResponse | null>;

}


const SALT_ROUNDS = 10;

export async function hashPassword(plain: string): Promise<string> {
    return bcrypt.hash(plain, SALT_ROUNDS);
}


export const userService: UserService = {
    async get_user_by_id(prisma: PrismaClient, id: number) {
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) return null;
        return {
            id: user.id,
            full_name: user.full_name,
            email: user.email,
            user_name: user.user_name,
        } as UsersResponse;
    },

    async create_user(prisma: PrismaClient, user_request: UsersRequest) {

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