import { NextRequest, NextResponse } from 'next/server';

export function middleware(req : NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  // Check if the route is /studio
  if (pathname === '/studio') {
    // Get the credentials from cookies
    const credentials = req.cookies.get('credentials');

    // If credentials do not exist, redirect to /admin
    if (!credentials) {
      url.pathname = '/Admin';
      return NextResponse.redirect(url);
    }
  }

  if (pathname === '/') {
      url.pathname = '/Site';
      return NextResponse.redirect(url);
  }
  // Continue to the requested route if credentials are present
  return NextResponse.next();
}

export const config = {
  matcher: ['/studio', '/'], // Only apply this middleware to the /studio route
};
