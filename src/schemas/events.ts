
interface EventsRequest {
    category?: string;
    latitude: number;
    longitude: number;
    radius: number;
    date?: string;
}

interface Event {
    id: number;
    name: string;
    url: string;
    categories: string[];
    distance_m: number;
    venueName: string;
    venuePostalCode: string;
    venueCountry: string;
    venueStateName: string;
    venueStateCode: string;
    venueCityName: string;
    venueAddressLine1: string;
    venueAddressLine2: string;
    startDate?: Date;
}

export type EventsResponse = Event[];

export default EventsRequest;