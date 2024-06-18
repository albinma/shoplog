import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
import prisma from '~/common/initializers/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session({ session, token }) {
      if (token && token.sub) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
});
