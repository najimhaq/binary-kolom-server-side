import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { AuditLogCreateWithoutUserInputSchema } from './AuditLogCreateWithoutUserInputSchema';
import { AuditLogUncheckedCreateWithoutUserInputSchema } from './AuditLogUncheckedCreateWithoutUserInputSchema';
import { AuditLogCreateOrConnectWithoutUserInputSchema } from './AuditLogCreateOrConnectWithoutUserInputSchema';
import { AuditLogUpsertWithWhereUniqueWithoutUserInputSchema } from './AuditLogUpsertWithWhereUniqueWithoutUserInputSchema';
import { AuditLogCreateManyUserInputEnvelopeSchema } from './AuditLogCreateManyUserInputEnvelopeSchema';
import { AuditLogWhereUniqueInputSchema } from './AuditLogWhereUniqueInputSchema';
import { AuditLogUpdateWithWhereUniqueWithoutUserInputSchema } from './AuditLogUpdateWithWhereUniqueWithoutUserInputSchema';
import { AuditLogUpdateManyWithWhereWithoutUserInputSchema } from './AuditLogUpdateManyWithWhereWithoutUserInputSchema';
import { AuditLogScalarWhereInputSchema } from './AuditLogScalarWhereInputSchema';

export const AuditLogUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AuditLogUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AuditLogCreateWithoutUserInputSchema), z.lazy(() => AuditLogCreateWithoutUserInputSchema).array(), z.lazy(() => AuditLogUncheckedCreateWithoutUserInputSchema), z.lazy(() => AuditLogUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuditLogCreateOrConnectWithoutUserInputSchema), z.lazy(() => AuditLogCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuditLogUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AuditLogUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema), z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema), z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema), z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuditLogWhereUniqueInputSchema), z.lazy(() => AuditLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuditLogUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => AuditLogUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuditLogUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => AuditLogUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuditLogScalarWhereInputSchema), z.lazy(() => AuditLogScalarWhereInputSchema).array() ]).optional(),
});

export default AuditLogUncheckedUpdateManyWithoutUserNestedInputSchema;
