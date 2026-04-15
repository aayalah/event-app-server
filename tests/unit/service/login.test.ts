import { describe, it, expect, vi } from 'vitest';
import loginService from '../../../src/service/login';
import { hashPassword } from '../../../src/service/users';
import LoginRequest from '../../../src/schemas/login';

describe("loginService.login", () => {
    it("returns user payload for valid credentials", async () =>  {
        const prismaMock = {
            user: {
                findUnique: vi.fn().mockResolvedValue({
                    id: 1,
                    user_name: 'test',
                    full_name: 'test',
                    email: 'test@test.com',
                    password_hash: await hashPassword('test'),
                }),
            },
        };

        const loginRequest: LoginRequest = {
            email: 'test@test.com',
            password: 'test',
        };

        const result = await loginService.login(prismaMock, loginRequest);
        expect(result).toEqual({
            id: 1,
            email: 'test@test.com',
            user_name: 'test',
            full_name: 'test',
        });
    });
    it("throws an error for invalid credentials", async () => {
        const prismaMock = {
            user: {
                findUnique: vi.fn().mockResolvedValue({
                    id: 1,
                    user_name: 'test',
                    full_name: 'test',
                    email: 'test@test.com',
                    password_hash: await hashPassword('test'),
                }),
            },
        };
        const loginRequest: LoginRequest = {
            email: 'test@test.com',
            password: 't',
        };
        await expect(loginService.login(prismaMock, loginRequest)).rejects.toThrow('Invalid Password');
    });
    it("throws an error for user not found", async () => {
        const prismaMock = {
            user: {
                findUnique: vi.fn().mockResolvedValue(null),
            },
        };
        const loginRequest: LoginRequest = {
            email: 'test@test.com',
            password: 'test',
        };

        await expect(loginService.login(prismaMock, loginRequest)).rejects.toThrow('User not found');
    });
}); 
