import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { PostWhereUniqueInputSchema } from './PostWhereUniqueInputSchema';
import { PostUpdateWithoutAuthorInputSchema } from './PostUpdateWithoutAuthorInputSchema';
import { PostUncheckedUpdateWithoutAuthorInputSchema } from './PostUncheckedUpdateWithoutAuthorInputSchema';

export const PostUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput> = z.strictObject({
  where: z.lazy(() => PostWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PostUpdateWithoutAuthorInputSchema), z.lazy(() => PostUncheckedUpdateWithoutAuthorInputSchema) ]),
});

export default PostUpdateWithWhereUniqueWithoutAuthorInputSchema;
