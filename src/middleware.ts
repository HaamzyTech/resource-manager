import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { getUser } from './db/auth/queries';

export async function middleware(request: NextRequest) {

  // get current logged in user
  const user = await getUser();

  if (request.nextUrl.pathname.startsWith("/login")){
    if (user){
      return NextResponse.rewrite(new URL('/dashboard',request.url))
    }
  }

  // Check if user is authenticated
  if ( request.nextUrl.pathname.startsWith("/dashboard")){
    if( !user){
      return NextResponse.rewrite(new URL('/login',request.url))
    }
  }

  // update user's auth session
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}