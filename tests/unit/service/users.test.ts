import { describe, it, expect, vi } from 'vitest';
import userService, { UsersPrismaClient } from '../../../src/service/users';
import UsersRequest from '../../../src/schemas/users';

describe("userService.get_user_by_id", () => {
    it("returns user payload when user exists", async () => {
        const prismaMock: UsersPrismaClient = {
            user: {
                findUnique: vi.fn().mockResolvedValue({
                    id: 1,
                    user_name: 'testuser',
                    full_name: 'Test User',
                    email: 'test@test.com',
                    password_hash: 'hashed',
                }),
                create: vi.fn(),
            },
        };

        const result = await userService.get_user_by_id(prismaMock, 1);
        expect(result).toEqual({
            id: 1,
            user_name: 'testuser',
            full_name: 'Test User',
            email: 'test@test.com',
        });
    });

    it("returns null when user does not exist", async () => {
        const prismaMock: UsersPrismaClient = {
            user: {
                findUnique: vi.fn().mockResolvedValue(null),
                create: vi.fn(),
            },
        };

        const result = await userService.get_user_by_id(prismaMock, 999);
        expect(result).toBeNull();
    });
});

describe("userService.create_user", () => {
    it("returns user payload after creating a user", async () => {
        const prismaMock: UsersPrismaClient = {
            user: {
                findUnique: vi.fn(),
                create: vi.fn().mockResolvedValue({
                    id: 1,
                    user_name: 'testuser',
                    full_name: 'Test User',
                    email: 'test@test.com',
                    password_hash: 'hashed',
                }),
            },
        };

        const userRequest: UsersRequest = {
            user_name: 'testuser',
            full_name: 'Test User',
            email: 'test@test.com',
            password: 'password123',
        };

        const result = await userService.create_user(prismaMock, userRequest);
        expect(result).toEqual({
            id: 1,
            user_name: 'testuser',
            full_name: 'Test User',
            email: 'test@test.com',
        });
    });

    it("hashes the password before storing", async () => {
        const createMock = vi.fn().mockResolvedValue({
            id: 1,
            user_name: 'testuser',
            full_name: 'Test User',
            email: 'test@test.com',
            password_hash: 'hashed',
        });

        const prismaMock: UsersPrismaClient = { user: { findUnique: vi.fn(), create: createMock } };

        await userService.create_user(prismaMock, {
            user_name: 'testuser',
            full_name: 'Test User',
            email: 'test@test.com',
            password: 'password123',
        });

        const storedHash = createMock.mock.calls[0][0].data.password_hash;
        expect(storedHash).not.toBe('password123');
        expect(typeof storedHash).toBe('string');
        expect(storedHash.length).toBeGreaterThan(0);
    });
});
