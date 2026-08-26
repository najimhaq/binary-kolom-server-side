import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostCreateNestedManyWithoutCategoryInputSchema } from './PostCreateNestedManyWithoutCategoryInputSchema';

export const CategoryCreateInputSchema: z.ZodType<Prisma.CategoryCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  posts: z.lazy(() => PostCreateNestedManyWithoutCategoryInputSchema).optional(),
});

export default CategoryCreateInputSchema;
