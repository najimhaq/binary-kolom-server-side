import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditEventSchema } from './AuditEventSchema';

export const EnumAuditEventFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAuditEventFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => AuditEventSchema).optional(),
});

export default EnumAuditEventFieldUpdateOperationsInputSchema;
