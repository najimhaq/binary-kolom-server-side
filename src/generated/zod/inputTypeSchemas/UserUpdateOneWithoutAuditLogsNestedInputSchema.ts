import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAuditLogsInputSchema } from './UserCreateWithoutAuditLogsInputSchema';
import { UserUncheckedCreateWithoutAuditLogsInputSchema } from './UserUncheckedCreateWithoutAuditLogsInputSchema';
import { UserCreateOrConnectWithoutAuditLogsInputSchema } from './UserCreateOrConnectWithoutAuditLogsInputSchema';
import { UserUpsertWithoutAuditLogsInputSchema } from './UserUpsertWithoutAuditLogsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutAuditLogsInputSchema } from './UserUpdateToOneWithWhereWithoutAuditLogsInputSchema';
import { UserUpdateWithoutAuditLogsInputSchema } from './UserUpdateWithoutAuditLogsInputSchema';
import { UserUncheckedUpdateWithoutAuditLogsInputSchema } from './UserUncheckedUpdateWithoutAuditLogsInputSchema';

export const UserUpdateOneWithoutAuditLogsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutAuditLogsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutAuditLogsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuditLogsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAuditLogsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAuditLogsInputSchema), z.lazy(() => UserUpdateWithoutAuditLogsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAuditLogsInputSchema) ]).optional(),
});

export default UserUpdateOneWithoutAuditLogsNestedInputSchema;
