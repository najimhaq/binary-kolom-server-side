import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';
import { AuditLogCreateWithoutUserInputSchema } from './AuditLogCreateWithoutUserInputSchema';
import { AuditLogUncheckedCreateWithoutUserInputSchema } from './AuditLogUncheckedCreateWithoutUserInputSchema';

export const AuditLogCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AuditLogCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => AuditLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuditLogCreateWithoutUserInputSchema), z.lazy(() => AuditLogUncheckedCreateWithoutUserInputSchema) ]),
});

export default AuditLogCreateOrConnectWithoutUserInputSchema;
