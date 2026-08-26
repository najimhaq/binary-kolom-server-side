import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';
import { CategoryCreateWithoutPostsInputSchema } from './CategoryCreateWithoutPostsInputSchema';
import { CategoryUncheckedCreateWithoutPostsInputSchema } from './CategoryUncheckedCreateWithoutPostsInputSchema';

export const CategoryCreateOrConnectWithoutPostsInputSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutPostsInput> = z.strictObject({
  where: z.lazy(() => CategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CategoryCreateWithoutPostsInputSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputSchema) ]),
});

export default CategoryCreateOrConnectWithoutPostsInputSchema;
