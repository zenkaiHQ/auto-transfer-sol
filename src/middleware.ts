import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const token = request.cookies.get('privy-token')

    // If no token and trying to access dashboard, redirect to home
    if (path.startsWith('/dashboard') && !token) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // If token exists and trying to access dashboard, allow the request
    if (path.startsWith('/dashboard') && token) {
        return NextResponse.next()
    }
}

export const config = {
    matcher: '/dashboard/:path*',
}