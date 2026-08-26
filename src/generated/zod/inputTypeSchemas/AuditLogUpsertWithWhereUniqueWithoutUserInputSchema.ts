import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';
import { AuditLogUpdateWithoutUserInputSchema } from './AuditLogUpdateWithoutUserInputSchema';
import { AuditLogUncheckedUpdateWithoutUserInputSchema } from './AuditLogUncheckedUpdateWithoutUserInputSchema';
import { AuditLogCreateWithoutUserInputSchema } from './AuditLogCreateWithoutUserInputSchema';
import { AuditLogUncheckedCreateWithoutUserInputSchema } from './AuditLogUncheckedCreateWithoutUserInputSchema';

export const AuditLogUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AuditLogUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => AuditLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuditLogUpdateWithoutUserInputSchema), z.lazy(() => AuditLogUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AuditLogCreateWithoutUserInputSchema), z.lazy(() => AuditLogUncheckedCreateWithoutUserInputSchema) ]),
});

export default AuditLogUpsertWithWhereUniqueWithoutUserInputSchema;
