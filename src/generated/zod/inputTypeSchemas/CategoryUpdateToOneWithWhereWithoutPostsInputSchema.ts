import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryWhereInputSchema } from './CategoryWhereInputSchema';
import { CategoryUpdateWithoutPostsInputSchema } from './CategoryUpdateWithoutPostsInputSchema';
import { CategoryUncheckedUpdateWithoutPostsInputSchema } from './CategoryUncheckedUpdateWithoutPostsInputSchema';

export const CategoryUpdateToOneWithWhereWithoutPostsInputSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutPostsInput> = z.strictObject({
  where: z.lazy(() => CategoryWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CategoryUpdateWithoutPostsInputSchema), z.lazy(() => CategoryUncheckedUpdateWithoutPostsInputSchema) ]),
});

export default CategoryUpdateToOneWithWhereWithoutPostsInputSchema;
