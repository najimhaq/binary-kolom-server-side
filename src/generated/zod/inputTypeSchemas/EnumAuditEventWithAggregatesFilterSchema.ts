import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditEventSchema } from './AuditEventSchema';
import { NestedEnumAuditEventWithAggregatesFilterSchema } from './NestedEnumAuditEventWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAuditEventFilterSchema } from './NestedEnumAuditEventFilterSchema';

export const EnumAuditEventWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAuditEventWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AuditEventSchema).optional(),
  in: z.lazy(() => AuditEventSchema).array().optional(),
  notIn: z.lazy(() => AuditEventSchema).array().optional(),
  not: z.union([ z.lazy(() => AuditEventSchema), z.lazy(() => NestedEnumAuditEventWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAuditEventFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAuditEventFilterSchema).optional(),
});

export default EnumAuditEventWithAggregatesFilterSchema;
