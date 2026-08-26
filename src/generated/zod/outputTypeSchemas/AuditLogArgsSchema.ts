import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AuditLogSelectSchema } from '../inputTypeSchemas/AuditLogSelectSchema';
import { AuditLogIncludeSchema } from '../inputTypeSchemas/AuditLogIncludeSchema';

export const AuditLogArgsSchema: z.ZodType<Prisma.AuditLogDefaultArgs> = z.object({
  select: z.lazy(() => AuditLogSelectSchema).optional(),
  include: z.lazy(() => AuditLogIncludeSchema).optional(),
}).strict();

export default AuditLogArgsSchema;
