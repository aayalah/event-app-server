import { Request, Response, Router } from 'express';
import { EventsService } from '../service/events';
import type { PrismaClient } from '../generated/prisma/client';
import EventsRequest from '../schemas/events';

type EventsQuery = { lat: number; lon: number; radius: number; date?: string; category?: string; };

export function createEventsRouter(eventsService: EventsService, prisma: PrismaClient) {
    const eventsRouter = Router();

    eventsRouter.get('/', async (req: Request<{}, any, any, EventsQuery>, res: Response) => {
        console.log(req.query)

        try {
            const eventsRequest: EventsRequest = {
                latitude: Number(req.query.lat),
                longitude: Number(req.query.lon),
                radius: Number(req.query.radius),
                date: req.query.date,
                category: req.query.category,
            };
            console.log(eventsRequest);

            const result = await eventsService.getEvents(prisma, eventsRequest);
            res.status(201).json(result);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Failed to login'});
        }

    });

    return eventsRouter;
}



  