import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutAuditLogsInputSchema } from './UserCreateWithoutAuditLogsInputSchema';
import { UserUncheckedCreateWithoutAuditLogsInputSchema } from './UserUncheckedCreateWithoutAuditLogsInputSchema';

export const UserCreateOrConnectWithoutAuditLogsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAuditLogsInput> = z.strictObject({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAuditLogsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAuditLogsInputSchema) ]),
});

export default UserCreateOrConnectWithoutAuditLogsInputSchema;
