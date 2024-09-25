import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'my-custom-value')
  return response
}

// Configure the paths for which the middleware should run
export const config = {
  matcher: [
    // Match all paths except the ones starting with:
    // - api (API routes except the ones you want to protect)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api/protected1|api/protected2|_next/static|_next/image|favicon.ico).*)',
  ],
}
