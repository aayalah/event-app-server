export interface AuthUser {
    id: number;
    email: string;
    user_name: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: AuthUser;
        }
    }
}
