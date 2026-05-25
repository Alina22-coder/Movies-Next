import {NextRequest, NextResponse} from "next/server";

export const middleware = (request: NextRequest) => {
    const user = request.cookies.get('user');

    if (!user) {
        return NextResponse.redirect(new URL('/auth', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!auth|_next/static|_next/image|favicon.ico).*)'],
}
