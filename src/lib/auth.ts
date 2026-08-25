import { prismaAdapter } from '@better-auth/prisma-adapter';
import { betterAuth } from 'better-auth';
import { createAuthMiddleware } from 'better-auth/api';
import { z } from 'zod';

import { env } from '../config/env.js';
import { prisma } from './prisma.js';

const signInBodySchema = z.object({
  email: z.string().email().optional(),
});

function getRequestIp(request?: Request) {
  if (!request) {
    return 'UNKNOWN';
  }

  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'UNKNOWN';
  }

  return request.headers.get('x-real-ip') || 'UNKNOWN';
}

async function createAuditLog(data: {
  userId: string | null;
  email: string;
  event:
    | 'SIGN_UP'
    | 'SIGN_IN_SUCCESS'
    | 'SIGN_IN_FAILED'
    | 'PASSWORD_RESET_REQUEST'
    | 'PASSWORD_CHANGED'
    | 'LOGOUT';
  ipAddress: string;
  userAgent: string;
}) {
  try {
    await prisma.auditLog.create({
      data,
    });
  } catch (error) {
    console.error('Failed to create audit log:', error);
  }
}

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),

  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  trustedOrigins: [env.CLIENT_URL],

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: false,
        defaultValue: 'USER',
        input: false,
      },
    },
  },

  hooks: {
    after: createAuthMiddleware(async (context) => {
      if (context.path !== '/sign-in/email') {
        return;
      }

      const ipAddress = getRequestIp(context.request);

      const userAgent = context.request?.headers.get('user-agent') || 'UNKNOWN';

      const parsedBody = signInBodySchema.safeParse(context.body);

      const attemptedEmail = parsedBody.success
        ? (parsedBody.data.email ?? 'UNKNOWN')
        : 'UNKNOWN';

      const newSession = context.context.newSession;

      if (newSession?.user) {
        await createAuditLog({
          userId: newSession.user.id,
          email: newSession.user.email ?? attemptedEmail,
          event: 'SIGN_IN_SUCCESS',
          ipAddress,
          userAgent,
        });

        return;
      }

      await createAuditLog({
        userId: null,
        email: attemptedEmail,
        event: 'SIGN_IN_FAILED',
        ipAddress,
        userAgent,
      });
    }),

    before: createAuthMiddleware(async (context) => {
      if (context.path !== '/sign-out') {
        return;
      }

      const session = context.context.session;

      await createAuditLog({
        userId: session?.user?.id ?? null,
        email: session?.user?.email ?? 'UNKNOWN',
        event: 'LOGOUT',
        ipAddress: getRequestIp(context.request),
        userAgent: context.request?.headers.get('user-agent') || 'UNKNOWN',
      });
    }),
  },
});
