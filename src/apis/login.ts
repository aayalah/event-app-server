import { Request, Response, Router } from 'express';
import LoginRequest from '../schemas/login';
import { loginService } from '../service/login';
import type { LoginService } from '../service/login';
import type { PrismaClient } from '@prisma/client';


export function createLoginRouter(loginService: LoginService, prisma: PrismaClient) {

    const loginRouter = Router();
    loginRouter.post('/', async (req: Request, res: Response) => {
        

        try {
            const loginRequest: LoginRequest = req.body;

            const result = await loginService.login(prisma, loginRequest);
            res.status(201).json({ result });
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to login'});
        }

    });

    return loginRouter;
}