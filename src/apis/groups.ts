import { Request, Response, Router } from 'express';
import { GroupsService } from '../service/groups';
import type { PrismaClient } from '../generated/prisma/client';
import GroupsRequest from '../schemas/groups';

type GroupsQuery = { city: string; country: string; category?: string; };

export function createGroupsRouter(groupsService: GroupsService, prisma: PrismaClient) {
    const groupsRouter = Router();

    groupsRouter.get('/', async (req: Request<{}, any, any, GroupsQuery>, res: Response) => {

        try {
            const groupsRequest: GroupsRequest = {
                city: req.query.city,
                country: req.query.country,
                category: req.query.category,
            };

            const result = await groupsService.getGroups(prisma, groupsRequest);
            res.status(200).json(result);
        } catch (err) {
            res.status(500).json({error: 'Failed to fetch groups'});
        }

    });

    return groupsRouter;
}



  