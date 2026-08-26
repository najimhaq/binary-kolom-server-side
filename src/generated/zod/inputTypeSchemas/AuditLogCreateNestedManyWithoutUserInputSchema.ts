import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditLogCreateWithoutUserInputSchema } from './AuditLogCreateWithoutUserInputSchema';
import { AuditLogUncheckedCreateWithoutUserInputSchema } from './AuditLogUncheckedCreateWithoutUserInputSchema';
import { AuditLogCreateOrConnectWithoutUserInputSchema } from './AuditLogCreateOrConnectWithoutUserInputSchema';
import { AuditLogCreateManyUserInputEnvelopeSchema } from './AuditLogCreateManyUserInputEnvelopeSchema';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';

export const AuditLogCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AuditLogCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => AuditLogCreateWithoutUserInputSchema), z.lazy(() => AuditLogCreateWithoutUserInputSchema).array(), z.lazy(() => AuditLogUncheckedCreateWithoutUserInputSchema), z.lazy(() => AuditLogUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditLogCreateOrConnectWithoutUserInputSchema), z.lazy(() => AuditLogCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema), z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
});

export default AuditLogCreateNestedManyWithoutUserInputSchema;
