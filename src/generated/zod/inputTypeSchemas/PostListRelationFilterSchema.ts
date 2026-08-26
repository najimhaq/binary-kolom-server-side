import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostWhereInputSchema } from './PostWhereInputSchema';

export const PostListRelationFilterSchema: z.ZodType<Prisma.PostListRelationFilter> = z.strictObject({
  every: z.lazy(() => PostWhereInputSchema).optional(),
  some: z.lazy(() => PostWhereInputSchema).optional(),
  none: z.lazy(() => PostWhereInputSchema).optional(),
});

export default PostListRelationFilterSchema;
