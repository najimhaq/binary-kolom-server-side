import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostScalarWhereInputSchema } from './PostScalarWhereInputSchema';
import { PostUpdateManyMutationInputSchema } from './PostUpdateManyMutationInputSchema';
import { PostUncheckedUpdateManyWithoutCategoryInputSchema } from './PostUncheckedUpdateManyWithoutCategoryInputSchema';

export const PostUpdateManyWithWhereWithoutCategoryInputSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => PostScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PostUpdateManyMutationInputSchema), z.lazy(() => PostUncheckedUpdateManyWithoutCategoryInputSchema) ]),
});

export default PostUpdateManyWithWhereWithoutCategoryInputSchema;
