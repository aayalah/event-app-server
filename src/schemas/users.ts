interface UsersRequest {
    user_name: string;
    email: string;
    full_name: string;
    password: string;
}

export interface UsersResponse {
    id: number;
    full_name: string;
    email: string;
    user_name: string;
}

export default UsersRequest;