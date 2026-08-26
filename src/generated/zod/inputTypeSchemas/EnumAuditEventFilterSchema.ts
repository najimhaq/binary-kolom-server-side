import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditEventSchema } from './AuditEventSchema';
import { NestedEnumAuditEventFilterSchema } from './NestedEnumAuditEventFilterSchema';

export const EnumAuditEventFilterSchema: z.ZodType<Prisma.EnumAuditEventFilter> = z.strictObject({
  equals: z.lazy(() => AuditEventSchema).optional(),
  in: z.lazy(() => AuditEventSchema).array().optional(),
  notIn: z.lazy(() => AuditEventSchema).array().optional(),
  not: z.union([ z.lazy(() => AuditEventSchema), z.lazy(() => NestedEnumAuditEventFilterSchema) ]).optional(),
});

export default EnumAuditEventFilterSchema;
