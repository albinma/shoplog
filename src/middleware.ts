import { NextResponse } from 'next/server';
import { auth } from '~/common/auth/auth';

export default auth((req) => {
  if (!req.auth) {
    return NextResponse.redirect(
      new URL(
        `/api/auth/signin?callbackUrl=${encodeURIComponent(req.url)}`,
        req.nextUrl.origin,
      ),
    );
  }
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
