import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PostSumOrderByAggregateInputSchema: z.ZodType<Prisma.PostSumOrderByAggregateInput> = z.strictObject({
  viewCount: z.lazy(() => SortOrderSchema).optional(),
});

export default PostSumOrderByAggregateInputSchema;
