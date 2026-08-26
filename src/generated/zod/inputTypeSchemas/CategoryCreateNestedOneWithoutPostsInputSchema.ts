import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CategoryCreateWithoutPostsInputSchema } from './CategoryCreateWithoutPostsInputSchema';
import { CategoryUncheckedCreateWithoutPostsInputSchema } from './CategoryUncheckedCreateWithoutPostsInputSchema';
import { CategoryCreateOrConnectWithoutPostsInputSchema } from './CategoryCreateOrConnectWithoutPostsInputSchema';
import { CategoryWhereUniqueInputSchema } from './CategoryWhereUniqueInputSchema';

export const CategoryCreateNestedOneWithoutPostsInputSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutPostsInput> = z.strictObject({
  create: z.union([ z.lazy(() => CategoryCreateWithoutPostsInputSchema), z.lazy(() => CategoryUncheckedCreateWithoutPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutPostsInputSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputSchema).optional(),
});

export default CategoryCreateNestedOneWithoutPostsInputSchema;
