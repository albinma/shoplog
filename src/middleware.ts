// import {
//   getSession,
//   withMiddlewareAuthRequired,
// } from '@auth0/nextjs-auth0/edge';
// import { NextResponse } from 'next/server';

// export default withMiddlewareAuthRequired(async function middleware(req) {
//   const res = NextResponse.next();
//   const session = await getSession(req, res);
//   console.log(session);

//   return res;
// });

import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();
  console.log(allCookies);
  return NextResponse.next();
}
