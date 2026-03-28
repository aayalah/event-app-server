
interface LoginRequest{
    email: string;
    password: string;

} 

export interface LoginResponse {
    id: number;
    user_name: string;
    email: string;
    full_name: string;
}

export default LoginRequest;