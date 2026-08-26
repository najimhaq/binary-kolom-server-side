import { z } from 'zod';

export const AuditEventSchema = z.enum(['SIGN_UP','SIGN_IN_SUCCESS','SIGN_IN_FAILED','PASSWORD_RESET_REQUEST','PASSWORD_CHANGED','LOGOUT']);

export type AuditEventType = `${z.infer<typeof AuditEventSchema>}`

export default AuditEventSchema;
