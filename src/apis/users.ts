import { Request, Response, Router } from 'express';
import type { PrismaClient } from '@prisma/client';
import type UserService from '../service/users';
import type UsersRequest from '../schemas/users';



export function createUsersRouter(userService: typeof UserService, prisma: PrismaClient) {

    const usersRouter = Router();
    usersRouter.post('/', async (req: Request, res: Response) => {
        

        try {
            const userRequest: UsersRequest = req.body;

            const result = await userService.create_user(prisma, userRequest);
            res.status(201).json({ result });
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to create user'});
        }

    });

    return usersRouter;
}


  