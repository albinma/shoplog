import { Session, handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';

export const GET = handleAuth({
  callback: handleCallback({
    afterCallback: async (
      req: NextRequest,
      session: Session,
      state?: { [key: string]: any },
    ) => {
      // TODO: save user into db here
      console.log(session.user, state);
      return session;
    },
  }),
});
