import GroupsRequest, { GroupsResponse } from '../schemas/groups';
import { Prisma } from '../generated/prisma/client';


export interface GroupPrismaPort {
    group: {
      findMany(args:{
        where: {
            categories?: { has: string; };
            city: { equals: string; mode: Prisma.QueryMode; };
            country: { equals: string; mode: Prisma.QueryMode; };
        };
        orderBy: {
            name: "asc";
        };
      }): Promise<GroupsResponse>;
    };
}



export interface GroupsService {
    getGroups(
        prisma: GroupPrismaPort,
        group_request: GroupsRequest,
    ): Promise<GroupsResponse>;
}

export const groupsService: GroupsService = {
    async getGroups (prisma: GroupPrismaPort, group_request: GroupsRequest) {

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

        return groups;
    }
};


export default groupsService;