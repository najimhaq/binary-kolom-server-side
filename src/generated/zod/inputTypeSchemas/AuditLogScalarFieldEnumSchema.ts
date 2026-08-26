import { z } from 'zod';

export const AuditLogScalarFieldEnumSchema = z.enum(['id','userId','email','event','ipAddress','userAgent','createdAt']);

export default AuditLogScalarFieldEnumSchema;
