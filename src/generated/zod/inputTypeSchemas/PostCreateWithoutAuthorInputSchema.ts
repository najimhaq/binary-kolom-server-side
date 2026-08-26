import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryCreateNestedOneWithoutPostsInputSchema } from './CategoryCreateNestedOneWithoutPostsInputSchema';

export const PostCreateWithoutAuthorInputSchema: z.ZodType<Prisma.PostCreateWithoutAuthorInput> = z.strictObject({
  id: z.cuid().optional(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  excerpt: z.string().optional().nullable(),
  coverImage: z.string().optional().nullable(),
  published: z.boolean().optional(),
  featured: z.boolean().optional(),
  viewCount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutPostsInputSchema).optional(),
});

export default PostCreateWithoutAuthorInputSchema;
