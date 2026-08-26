import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutAuditLogsInputSchema } from './UserUpdateWithoutAuditLogsInputSchema';
import { UserUncheckedUpdateWithoutAuditLogsInputSchema } from './UserUncheckedUpdateWithoutAuditLogsInputSchema';

export const UserUpdateToOneWithWhereWithoutAuditLogsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuditLogsInput> = z.strictObject({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAuditLogsInputSchema), z.lazy(() => UserUncheckedUpdateWithoutAuditLogsInputSchema) ]),
});

export default UserUpdateToOneWithWhereWithoutAuditLogsInputSchema;
