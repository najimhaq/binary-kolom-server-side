import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditEventSchema } from './AuditEventSchema';

export const AuditLogCreateManyInputSchema: z.ZodType<Prisma.AuditLogCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  userId: z.string().optional().nullable(),
  email: z.string(),
  event: z.lazy(() => AuditEventSchema),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
});

export default AuditLogCreateManyInputSchema;
