import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditEventSchema } from './AuditEventSchema';
import { UserCreateNestedOneWithoutAuditLogsInputSchema } from './UserCreateNestedOneWithoutAuditLogsInputSchema';

export const AuditLogCreateInputSchema: z.ZodType<Prisma.AuditLogCreateInput> = z.strictObject({
  id: z.cuid().optional(),
  email: z.string(),
  event: z.lazy(() => AuditEventSchema),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAuditLogsInputSchema).optional(),
});

export default AuditLogCreateInputSchema;
