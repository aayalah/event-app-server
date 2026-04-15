import { Prisma } from '../generated/prisma/client';

export interface CategoriesPrismaPort {
    $queryRaw<T = unknown>(
      query: TemplateStringsArray | Prisma.Sql,
      ...values: unknown[]
    ): Promise<T>;
  }


export interface CategoriesService {
    getCategories(prisma: CategoriesPrismaPort): Promise<string[]>;
}

export const categoriesService: CategoriesService = {
    async getCategories(prisma: CategoriesPrismaPort) {
        const rows = await prisma.$queryRaw<{ category: string }[]>`
            SELECT DISTINCT unnest(categories) AS category
            FROM "Event"
            ORDER BY category ASC;
        `;
        return rows.map(r => r.category);
    }
};

export default categoriesService;
