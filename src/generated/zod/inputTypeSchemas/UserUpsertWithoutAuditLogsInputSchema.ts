import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutAuditLogsInputSchema } from './UserUpdateWithoutAuditLogsInputSchema';
import { UserUncheckedUpdateWithoutAuditLogsInputSchema } from './UserUncheckedUpdateWithoutAuditLogsInputSchema';
import { UserCreateWithoutAuditLogsInputSchema } from './UserCreateWithoutAuditLogsInputSchema';
import { UserUncheckedCreateWithoutAuditLogsInputSchema } from './UserUncheckedCreateWithoutAuditLogsInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutAuditLogsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAuditLogsInput> = z.strictObject({
  update: z.union([ z.lazy(() => UserUpdateWithoutAuditLogsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAuditLogsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAuditLogsInputSchema), z.lazy(() => UserUncheckedCreateWithoutAuditLogsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional(),
});

export default UserUpsertWithoutAuditLogsInputSchema;
