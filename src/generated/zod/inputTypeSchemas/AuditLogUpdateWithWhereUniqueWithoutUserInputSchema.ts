import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';
import { AuditLogUpdateWithoutUserInputSchema } from './AuditLogUpdateWithoutUserInputSchema';
import { AuditLogUncheckedUpdateWithoutUserInputSchema } from './AuditLogUncheckedUpdateWithoutUserInputSchema';

export const AuditLogUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AuditLogUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => AuditLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuditLogUpdateWithoutUserInputSchema), z.lazy(() => AuditLogUncheckedUpdateWithoutUserInputSchema) ]),
});

export default AuditLogUpdateWithWhereUniqueWithoutUserInputSchema;
