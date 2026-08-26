import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryUpdateWithoutPostsInputSchema } from './CategoryUpdateWithoutPostsInputSchema';
import { CategoryUncheckedUpdateWithoutPostsInputSchema } from './CategoryUncheckedUpdateWithoutPostsInputSchema';
import { CategoryCreateWithoutPostsInputSchema } from './CategoryCreateWithoutPostsInputSchema';
import { CategoryUncheckedCreateWithoutPostsInputSchema } from './CategoryUncheckedCreateWithoutPostsInputSchema';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';

export const CategoryUpsertWithoutPostsInputSchema: z.ZodType<Prisma.CategoryUpsertWithoutPostsInput> = z.strictObject({
  update: z.union([ z.lazy(() => CategoryUpdateWithoutPostsInputSchema), z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputSchema) ]),
  create: z.union([ z.lazy(() => CategoryCreateWithoutPostsInputSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputSchema) ]),
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
});

export default CategoryUpsertWithoutPostsInputSchema;
