import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import LoginRequest from '../schemas/login';
import type { LoginService } from '../service/login';
import type { PrismaClient } from '../generated/prisma/client';


export function createLoginRouter(loginService: LoginService, prisma: PrismaClient) {

    const loginRouter = Router();
    loginRouter.post('/', async (req: Request, res: Response) => {

        try {
            const loginRequest: LoginRequest = req.body;

            const user = await loginService.login(prisma, loginRequest);

            const secret = process.env.JWT_SECRET!;
            const expiresIn = (process.env.JWT_EXPIRES_IN || '1h') as jwt.SignOptions['expiresIn'];
            const token = jwt.sign(
                { id: user.id, email: user.email, user_name: user.user_name },
                secret,
                { expiresIn }
            );

            res.status(200).json({ token, user });
        } catch (err) {
            res.status(500).json({ error: `Failed to login: ${err}` });
        }

    });

    return loginRouter;
}