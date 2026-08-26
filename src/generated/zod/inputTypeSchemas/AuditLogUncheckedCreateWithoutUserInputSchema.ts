import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditEventSchema } from './AuditEventSchema';

export const AuditLogUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AuditLogUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.cuid().optional(),
  email: z.string(),
  event: z.lazy(() => AuditEventSchema),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
});

export default AuditLogUncheckedCreateWithoutUserInputSchema;
