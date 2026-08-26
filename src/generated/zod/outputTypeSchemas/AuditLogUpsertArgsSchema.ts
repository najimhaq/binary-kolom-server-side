import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { AuditLogIncludeSchema } from '../inputTypeSchemas/AuditLogIncludeSchema'
import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema'
import { AuditLogCreateInputSchema } from '../inputTypeSchemas/AuditLogCreateInputSchema'
import { AuditLogUncheckedCreateInputSchema } from '../inputTypeSchemas/AuditLogUncheckedCreateInputSchema'
import { AuditLogUpdateInputSchema } from '../inputTypeSchemas/AuditLogUpdateInputSchema'
import { AuditLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/AuditLogUncheckedUpdateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const AuditLogUpsertArgsSchema: z.ZodType<Prisma.AuditLogUpsertArgs> = z.object({
  select: AuditLogSelectSchema.optional(),
  include: z.lazy(() => AuditLogIncludeSchema).optional(),
  where: AuditLogWhereUniqueInputSchema, 
  create: z.union([ AuditLogCreateInputSchema, AuditLogUncheckedCreateInputSchema ]),
  update: z.union([ AuditLogUpdateInputSchema, AuditLogUncheckedUpdateInputSchema ]),
}).strict();

export default AuditLogUpsertArgsSchema;
