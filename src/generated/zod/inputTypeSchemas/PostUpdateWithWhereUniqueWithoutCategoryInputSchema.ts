import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostWhereUniqueInputSchema } from './PostWhereUniqueInputSchema';
import { PostUpdateWithoutCategoryInputSchema } from './PostUpdateWithoutCategoryInputSchema';
import { PostUncheckedUpdateWithoutCategoryInputSchema } from './PostUncheckedUpdateWithoutCategoryInputSchema';

export const PostUpdateWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PostUpdateWithoutCategoryInputSchema), z.lazy(() => PostUncheckedUpdateWithoutCategoryInputSchema) ]),
});

export default PostUpdateWithWhereUniqueWithoutCategoryInputSchema;
