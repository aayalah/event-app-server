import { describe, it, expect, vi } from 'vitest';
import { categoriesService } from '../../../src/service/categories';

describe("categoriesService.getCategories", () => {
    it("returns categories", async () =>  {
        const prismaMock = {
            $queryRaw: vi.fn().mockResolvedValue([
               {
                category: "Music"
               },
               {
                category: "Sports"
               }
            ]),
        };

        const result = await categoriesService.getCategories(prismaMock);
        expect(result).toEqual([
            "Music",
            "Sports",
        ]);
    });
}); 
