import EventsRequest, { EventsResponse } from '../schemas/events';
import { PrismaClient, User, Prisma } from '../generated/prisma/client';

export interface EventsPrismaPort {
    $queryRaw<T = unknown>(
      query: TemplateStringsArray | Prisma.Sql,
      ...values: unknown[]
    ): Promise<T>;
  }

export interface EventsService {
    getEvents(
        prisma: EventsPrismaPort,
        events_request: EventsRequest,
    ): Promise<EventsResponse>;
}

export const eventsService: EventsService = {
    async getEvents (prisma: EventsPrismaPort, event_request: EventsRequest) {
        const dateFilter = event_request.date
            ? Prisma.sql`AND "startDate"::date = ${event_request.date}::date`
            : Prisma.sql``;

        const categoryFilter = event_request.category
            ? Prisma.sql`AND EXISTS (SELECT 1 FROM unnest(categories) AS cat WHERE cat ILIKE ${event_request.category})`
            : Prisma.sql``;

        const events = await prisma.$queryRaw<EventsResponse>`
            SELECT
                id,
                name,
                url,
                categories,
                "venueName",
                "startDate",
                ST_Distance(
                    location::geography,
                    ST_SetSRID(ST_MakePoint(${event_request.longitude}, ${event_request.latitude}), 4326)::geography
                ) AS distance_m,
                "venuePostalCode",
                "venueCountry",
                "venueStateName",
                "venueStateCode",
                "venueCityName",
                "venueAddressLine1",
                "venueAddressLine2"
                FROM "Event"
                WHERE ST_DWithin(
                    location::geography,
                    ST_SetSRID(ST_MakePoint(${event_request.longitude}, ${event_request.latitude}), 4326)::geography,
                    ${event_request.radius}
                )
                ${dateFilter}
                ${categoryFilter}
                ORDER BY distance_m ASC
                LIMIT 100;
        `;

        return events;
    }
};


export default eventsService;