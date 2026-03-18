import bcrypt from 'bcrypt';
import LoginRequest, { LoginResponse } from '../schemas/login';
import { PrismaClient, User } from '../generated/prisma/client';

export interface LoginService {

    login(
        prisma: PrismaClient,
        login_request: LoginRequest,
    ): Promise<LoginResponse>;

}


export const loginService: LoginService = {
    async login(prisma: PrismaClient, login_request: LoginRequest) {
        const user = await prisma.user.findUnique({ where: { email: login_request.email } });
        if (!user) {
            throw new Error('User not found');
        }

        const isValid = await verifyPassword(login_request.password, user.password_hash);
        if(isValid){
            return {
                email: user.email,
                user_name: user.user_name,
                full_name: user.full_name,
            } as LoginResponse;
        }
        
        throw new Error("Invalid Password");
    }
}


export async function verifyPassword(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash);
}

export default loginService;