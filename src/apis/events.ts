import { Request, Response, Router } from 'express';
import { EventsService } from '../service/events';
import type { PrismaClient } from '@prisma/client';
import EventsRequest from '../schemas/events';


export function createEventsRouter(eventsService: EventsService, prisma: PrismaClient) {
    const eventsRouter = Router();

    eventsRouter.post('/', async (req: Request, res: Response) => {
        

        try {
            const eventsRequest: EventsRequest = req.body;

            const result = await eventsService.getEvents(prisma, eventsRequest);
            res.status(201).json({ result });
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to login'});
        }

    });

    return eventsRouter;
}



  