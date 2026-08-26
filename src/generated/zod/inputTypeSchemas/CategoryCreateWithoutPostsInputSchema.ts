import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const CategoryCreateWithoutPostsInputSchema: z.ZodType<Prisma.CategoryCreateWithoutPostsInput> = z.strictObject({
  id: z.cuid().optional(),
  name: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
});

export default CategoryCreateWithoutPostsInputSchema;
