import { PrismaClient } from '../generated/prisma/client';

export interface CategoriesService {
    getCategories(prisma: PrismaClient): Promise<string[]>;
}

export const categoriesService: CategoriesService = {
    async getCategories(prisma: PrismaClient) {
        const rows = await prisma.$queryRaw<{ category: string }[]>`
            SELECT DISTINCT unnest(categories) AS category
            FROM "Event"
            ORDER BY category ASC;
        `;
        return rows.map(r => r.category);
    }
};

export default categoriesService;
