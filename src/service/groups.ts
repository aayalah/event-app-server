import GroupsRequest, { GroupsResponse } from '../schemas/groups';
import { PrismaClient } from '../generated/prisma/client';

export interface GroupsService {
    getGroups(
        prisma: PrismaClient,
        group_request: GroupsRequest,
    ): Promise<GroupsResponse>;
}

export const groupsService: GroupsService = {
    async getGroups (prisma: PrismaClient, group_request: GroupsRequest) {

        const groups = await prisma.group.findMany({
            where: {
                city: { equals: group_request.city, mode: 'insensitive' },
                country: { equals: group_request.country, mode: 'insensitive' },
                ...(
                    group_request.category
                    ? { categories: { has: group_request.category } }
                    : {}),
            },
            orderBy: {name: 'asc'},
        })

        return { groups };
    }
};


export default groupsService;