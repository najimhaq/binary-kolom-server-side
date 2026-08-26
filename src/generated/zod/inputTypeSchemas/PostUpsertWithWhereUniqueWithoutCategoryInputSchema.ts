import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostWhereUniqueInputSchema } from './PostWhereUniqueInputSchema';
import { PostUpdateWithoutCategoryInputSchema } from './PostUpdateWithoutCategoryInputSchema';
import { PostUncheckedUpdateWithoutCategoryInputSchema } from './PostUncheckedUpdateWithoutCategoryInputSchema';
import { PostCreateWithoutCategoryInputSchema } from './PostCreateWithoutCategoryInputSchema';
import { PostUncheckedCreateWithoutCategoryInputSchema } from './PostUncheckedCreateWithoutCategoryInputSchema';

export const PostUpsertWithWhereUniqueWithoutCategoryInputSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutCategoryInput> = z.strictObject({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PostUpdateWithoutCategoryInputSchema), z.lazy(() => PostUncheckedUpdateWithoutCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => PostCreateWithoutCategoryInputSchema), z.lazy(() => PostUncheckedCreateWithoutCategoryInputSchema) ]),
});

export default PostUpsertWithWhereUniqueWithoutCategoryInputSchema;
