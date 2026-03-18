
interface EventsRequest {
    category: string;
    latitude: number;
    longitude: number;
    radius: number;
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
}

export interface EventsResponse {
    events: Event[];
}

export default EventsRequest;