import { Request, Response, Router } from 'express';
import type { PrismaClient } from '../generated/prisma/client';
import type UserService from '../service/users';
import type UsersRequest from '../schemas/users';
import { authenticate } from '../middleware/auth';



export function createUsersRouter(userService: typeof UserService, prisma: PrismaClient) {

    const usersRouter = Router();
    usersRouter.post('/', async (req: Request, res: Response) => {
        

        try {
            console.log(req.body);
            const userRequest: UsersRequest = req.body;

            const result = await userService.create_user(prisma, userRequest);
            res.status(201).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to create user'});
        }

    });

    usersRouter.get('/:id', authenticate, async (req: Request, res: Response) => {
        try {
            const idParam = req.params.id;
            if (Array.isArray(idParam)) {
                res.status(400).json({ error: 'Invalid id' });
                return;
            }

            const id = Number.parseInt(idParam, 10);

            if (Number.isNaN(id)) {
                res.status(400).json({ error: 'Invalid id' });
                return;
            }

            if (req.user!.id !== id) {
                res.status(403).json({ error: 'Forbidden' });
                return;
            }

            const result = await userService.get_user_by_id(prisma, id);
            if (!result) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    });

    return usersRouter;
}


  