
interface GroupsRequest {
    category?: string;
    city: string;
    country: string;
}

interface Group {
    id: number;
    name: string;
    description: string | null;
    categories: string[];
    city: string;
    country: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface GroupsResponse {
    groups: Group[];
}

export default GroupsRequest;