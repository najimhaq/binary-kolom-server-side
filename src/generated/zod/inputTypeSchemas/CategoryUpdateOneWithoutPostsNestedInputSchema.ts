import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutPostsInputSchema } from './CategoryCreateWithoutPostsInputSchema';
import { CategoryUncheckedCreateWithoutPostsInputSchema } from './CategoryUncheckedCreateWithoutPostsInputSchema';
import { CategoryCreateOrConnectWithoutPostsInputSchema } from './CategoryCreateOrConnectWithoutPostsInputSchema';
import { CategoryUpsertWithoutPostsInputSchema } from './CategoryUpsertWithoutPostsInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryUpdateToOneWithWhereWithoutPostsInputSchema } from './CategoryUpdateToOneWithWhereWithoutPostsInputSchema';
import { CategoryUpdateWithoutPostsInputSchema } from './CategoryUpdateWithoutPostsInputSchema';
import { CategoryUncheckedUpdateWithoutPostsInputSchema } from './CategoryUncheckedUpdateWithoutPostsInputSchema';

export const CategoryUpdateOneWithoutPostsNestedInputSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutPostsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CategoryCreateWithoutPostsInputSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutPostsInputSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutPostsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CategoryWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CategoryUpdateToOneWithWhereWithoutPostsInputSchema), z.lazy(() => CategoryUpdateWithoutPostsInputSchema), z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputSchema) ]).optional(),
});

export default CategoryUpdateOneWithoutPostsNestedInputSchema;
