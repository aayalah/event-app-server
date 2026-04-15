import { describe, it, expect, vi } from 'vitest';
import { groupsService } from '../../../src/service/groups';
import GroupsRequest from '../../../src/schemas/groups';


const groupMock1 = {
    id: 1,
    name: 'NYC Music Lovers',
    description: 'A group for live music fans in NYC',
    categories: ['Music', 'Pop', 'Jazz'],
    city: 'New York',
    country: 'US',
    createdAt: new Date('2026-01-10T12:00:00.000Z'),
    updatedAt: new Date('2026-01-10T12:00:00.000Z'),
  };

  const groupMock2 = {
    id: 2,
    name: 'Brooklyn Outdoor Crew',
    description: 'Weekend hikes and outdoor meetups',
    categories: ['Outdoors', 'Fitness'],
    city: 'New York',
    country: 'US',
    createdAt: new Date('2026-01-15T09:30:00.000Z'),
    updatedAt: new Date('2026-01-20T11:00:00.000Z'),
  };

describe("groupsService.getGroups", () => {
    it("returns groups", async () =>  {
        const prismaMock = {
            group: {
                findMany: vi.fn().mockResolvedValue([
                    groupMock1,
                    groupMock2,
                ]),
            },
        };

        const groupsRequest: GroupsRequest = {
            category: "Music",
            city: "SF",
            country: "US",
        }

        const result = await groupsService.getGroups(prismaMock, groupsRequest);
        expect(result).toEqual([
            groupMock1,
            groupMock2
        ]);
    });

    it("returns groups, no category in request", async () =>  {
        const prismaMock = {
            group: {
                findMany: vi.fn().mockResolvedValue([
                    groupMock1,
                    groupMock2,
                ]),
            },
        };

        const groupsRequest: GroupsRequest = {
            city: "SF",
            country: "US",
        }

        const result = await groupsService.getGroups(prismaMock, groupsRequest);
        expect(result).toEqual([
            groupMock1,
            groupMock2
        ]);
    });
}); 
