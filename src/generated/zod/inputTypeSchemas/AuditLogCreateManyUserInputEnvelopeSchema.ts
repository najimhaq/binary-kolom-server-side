import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditLogCreateManyUserInputSchema } from './AuditLogCreateManyUserInputSchema';

export const AuditLogCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AuditLogCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => AuditLogCreateManyUserInputSchema), z.lazy(() => AuditLogCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default AuditLogCreateManyUserInputEnvelopeSchema;
