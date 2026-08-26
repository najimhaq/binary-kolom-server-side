import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditLogScalarWhereInputSchema } from './AuditLogScalarWhereInputSchema';
import { AuditLogUpdateManyMutationInputSchema } from './AuditLogUpdateManyMutationInputSchema';
import { AuditLogUncheckedUpdateManyWithoutUserInputSchema } from './AuditLogUncheckedUpdateManyWithoutUserInputSchema';

export const AuditLogUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AuditLogUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => AuditLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuditLogUpdateManyMutationInputSchema), z.lazy(() => AuditLogUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export default AuditLogUpdateManyWithWhereWithoutUserInputSchema;
