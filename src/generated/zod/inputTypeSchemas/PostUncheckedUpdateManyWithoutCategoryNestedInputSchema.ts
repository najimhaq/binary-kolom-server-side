import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostCreateWithoutCategoryInputSchema } from './PostCreateWithoutCategoryInputSchema';
import { PostUncheckedCreateWithoutCategoryInputSchema } from './PostUncheckedCreateWithoutCategoryInputSchema';
import { PostCreateOrConnectWithoutCategoryInputSchema } from './PostCreateOrConnectWithoutCategoryInputSchema';
import { PostUpsertWithWhereUniqueWithoutCategoryInputSchema } from './PostUpsertWithWhereUniqueWithoutCategoryInputSchema';
import { PostCreateManyCategoryInputEnvelopeSchema } from './PostCreateManyCategoryInputEnvelopeSchema';
import { PostWhereUniqueInputSchema } from './PostWhereUniqueInputSchema';
import { PostUpdateWithWhereUniqueWithoutCategoryInputSchema } from './PostUpdateWithWhereUniqueWithoutCategoryInputSchema';
import { PostUpdateManyWithWhereWithoutCategoryInputSchema } from './PostUpdateManyWithWhereWithoutCategoryInputSchema';
import { PostScalarWhereInputSchema } from './PostScalarWhereInputSchema';

export const PostUncheckedUpdateManyWithoutCategoryNestedInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutCategoryNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => PostCreateWithoutCategoryInputSchema), z.lazy(() => PostCreateWithoutCategoryInputSchema).array(), z.lazy(() => PostUncheckedCreateWithoutCategoryInputSchema), z.lazy(() => PostUncheckedCreateWithoutCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PostCreateOrConnectWithoutCategoryInputSchema), z.lazy(() => PostCreateOrConnectWithoutCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PostUpsertWithWhereUniqueWithoutCategoryInputSchema), z.lazy(() => PostUpsertWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PostCreateManyCategoryInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PostWhereUniqueInputSchema), z.lazy(() => PostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PostUpdateWithWhereUniqueWithoutCategoryInputSchema), z.lazy(() => PostUpdateWithWhereUniqueWithoutCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PostUpdateManyWithWhereWithoutCategoryInputSchema), z.lazy(() => PostUpdateManyWithWhereWithoutCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PostScalarWhereInputSchema), z.lazy(() => PostScalarWhereInputSchema).array() ]).optional(),
});

export default PostUncheckedUpdateManyWithoutCategoryNestedInputSchema;
