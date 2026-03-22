import { Request, Response, Router } from 'express';
import { CategoriesService } from '../service/categories';
import type { PrismaClient } from '../generated/prisma/client';

export function createCategoriesRouter(categoriesService: CategoriesService, prisma: PrismaClient) {
    const router = Router();

    router.get('/', async (_req: Request, res: Response) => {
        try {
            const categories = await categoriesService.getCategories(prisma);
            res.status(200).json(categories);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to fetch categories' });
        }
    });

    return router;
}
