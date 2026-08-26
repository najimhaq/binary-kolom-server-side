import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const AuditLogSelectSchema: z.ZodType<Prisma.AuditLogSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  email: z.boolean().optional(),
  event: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default AuditLogSelectSchema;
