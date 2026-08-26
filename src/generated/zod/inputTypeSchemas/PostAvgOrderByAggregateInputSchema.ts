import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PostAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PostAvgOrderByAggregateInput> = z.strictObject({
  viewCount: z.lazy(() => SortOrderSchema).optional(),
});

export default PostAvgOrderByAggregateInputSchema;
