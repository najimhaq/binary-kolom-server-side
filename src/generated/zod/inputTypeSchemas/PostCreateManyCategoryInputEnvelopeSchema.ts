import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostCreateManyCategoryInputSchema } from './PostCreateManyCategoryInputSchema';

export const PostCreateManyCategoryInputEnvelopeSchema: z.ZodType<Prisma.PostCreateManyCategoryInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => PostCreateManyCategoryInputSchema), z.lazy(() => PostCreateManyCategoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default PostCreateManyCategoryInputEnvelopeSchema;
