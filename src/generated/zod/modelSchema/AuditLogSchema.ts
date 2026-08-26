import { z } from 'zod';
import { AuditEventSchema } from '../inputTypeSchemas/AuditEventSchema'

/////////////////////////////////////////
// AUDIT LOG SCHEMA
/////////////////////////////////////////

export const AuditLogSchema = z.object({
  event: AuditEventSchema,
  id: z.cuid(),
  userId: z.string().nullable(),
  email: z.string(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type AuditLog = z.infer<typeof AuditLogSchema>

export default AuditLogSchema;
