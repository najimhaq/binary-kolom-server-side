import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAuditLogsInputSchema } from './UserCreateWithoutAuditLogsInputSchema';
import { UserUncheckedCreateWithoutAuditLogsInputSchema } from './UserUncheckedCreateWithoutAuditLogsInputSchema';
import { UserCreateOrConnectWithoutAuditLogsInputSchema } from './UserCreateOrConnectWithoutAuditLogsInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutAuditLogsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuditLogsInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserCreateWithoutAuditLogsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAuditLogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuditLogsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
});

export default UserCreateNestedOneWithoutAuditLogsInputSchema;
