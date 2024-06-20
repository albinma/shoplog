import { Session, handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { DateTime } from 'luxon';
import { NextRequest } from 'next/server';
import prisma from '~/common/initializers/prisma';

export const GET = handleAuth({
  callback: handleCallback({
    afterCallback: async (
      req: NextRequest,
      session: Session,
      state?: { [key: string]: any },
    ) => {
      const { name, email, email_verified, sub, picture } = session.user;

      await prisma.user.upsert({
        where: { id: sub },
        update: {
          name,
          email,
          emailVerified: email_verified,
          image: picture,
          lastLoggedInAt: DateTime.utc().toJSDate(),
        },
        create: {
          id: sub,
          name,
          email,
          emailVerified: email_verified,
          image: picture,
          lastLoggedInAt: DateTime.utc().toJSDate(),
        },
      });

      return session;
    },
  }),
});
