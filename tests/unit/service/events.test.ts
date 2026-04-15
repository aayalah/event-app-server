import { describe, it, expect, vi } from 'vitest';
import { eventsService } from '../../../src/service/events';
import EventsRequest from '../../../src/schemas/events';

const mockEvent1 = {
    id: 101,
    name: 'Central Park Summer Concert',
    url: 'https://example.com/events/101',
    categories: ['Music', 'Pop'],
    distance_m: 850.42,
    venueName: 'Central Park Stage',
    venuePostalCode: '10022',
    venueCountry: 'US',
    venueStateName: 'New York',
    venueStateCode: 'NY',
    venueCityName: 'New York',
    venueAddressLine1: '5th Ave & E 72nd St',
    venueAddressLine2: '',
    startDate: new Date('2026-07-10T19:30:00.000Z'),
  };
  
const mockEvent2 = {
    id: 102,
    name: 'Brooklyn Food Festival',
    url: 'https://example.com/events/102',
    categories: ['Food', 'Festival'],
    distance_m: 2150.1,
    venueName: 'Brooklyn Waterfront',
    venuePostalCode: '11201',
    venueCountry: 'US',
    venueStateName: 'New York',
    venueStateCode: 'NY',
    venueCityName: 'Brooklyn',
    venueAddressLine1: 'Pier 6, Brooklyn Bridge Park',
    venueAddressLine2: '',
    startDate: new Date('2026-07-11T16:00:00.000Z'),
  };

const mockEvent3 = {
    id: 103,
    name: 'Queens Tech Meetup',
    url: 'https://example.com/events/103',
    categories: ['Technology', 'Conference'],
    distance_m: 5320.75,
    venueName: 'Queens Innovation Hub',
    venuePostalCode: '11101',
    venueCountry: 'US',
    venueStateName: 'New York',
    venueStateCode: 'NY',
    venueCityName: 'Long Island City',
    venueAddressLine1: '44-02 23rd St',
    venueAddressLine2: 'Floor 3',
    startDate: new Date('2026-07-12T18:30:00.000Z'),
  };

describe("eventsService.getEvents", () => {
    it("returns events", async () =>  {
        const prismaMock = {
            $queryRaw: vi.fn().mockResolvedValue([
                mockEvent1,
                mockEvent2,
                mockEvent3
            ]),
        };

        const eventsRequest: EventsRequest = {
            category: "Music",
            latitude: 5050,
            longitude: 432,
            radius: 23,
            date: '2026-07-12T18:30:00.000Z',
        }

        const result = await eventsService.getEvents(prismaMock, eventsRequest);
        expect(result).toEqual([
            mockEvent1,
            mockEvent2,
            mockEvent3
        ]);
    });
}); 
