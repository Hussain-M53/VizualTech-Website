import { NextRequest, NextResponse } from 'next/server';

export function middleware(req : NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  if (pathname === '/studio') {
    const credentials = req.cookies.get('credentials');


    if (!credentials) {
      url.pathname = '/Admin';
      return NextResponse.redirect(url);
    }
  }

  if (pathname === '/') {
      url.pathname = '/Site';
      return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/studio', '/'],
};
