import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostWhereUniqueInputSchema } from './PostWhereUniqueInputSchema';
import { PostCreateWithoutCategoryInputSchema } from './PostCreateWithoutCategoryInputSchema';
import { PostUncheckedCreateWithoutCategoryInputSchema } from './PostUncheckedCreateWithoutCategoryInputSchema';

export const PostCreateOrConnectWithoutCategoryInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PostCreateWithoutCategoryInputSchema), z.lazy(() => PostUncheckedCreateWithoutCategoryInputSchema) ]),
});

export default PostCreateOrConnectWithoutCategoryInputSchema;
