import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostCreateWithoutCategoryInputSchema } from './PostCreateWithoutCategoryInputSchema';
import { PostUncheckedCreateWithoutCategoryInputSchema } from './PostUncheckedCreateWithoutCategoryInputSchema';
import { PostCreateOrConnectWithoutCategoryInputSchema } from './PostCreateOrConnectWithoutCategoryInputSchema';
import { PostCreateManyCategoryInputEnvelopeSchema } from './PostCreateManyCategoryInputEnvelopeSchema';
import { PostWhereUniqueInputSchema } from './PostWhereUniqueInputSchema';

export const PostCreateNestedManyWithoutCategoryInputSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutCategoryInput> = z.strictObject({
  create: z.union([ z.lazy(() => PostCreateWithoutCategoryInputSchema), z.lazy(() => PostCreateWithoutCategoryInputSchema).array(), z.lazy(() => PostUncheckedCreateWithoutCategoryInputSchema), z.lazy(() => PostUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutCategoryInputSchema), z.lazy(() => PostCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyCategoryInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
});

export default PostCreateNestedManyWithoutCategoryInputSchema;
