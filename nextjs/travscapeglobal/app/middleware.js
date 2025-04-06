import { NextResponse } from "next/server";

export function middleware (request){
    return NextResponse.redirect(new URL("/login", request.url))
}

export const config = {
     // for single page
     matcher:"/admin"
     // for multiple pages
    //matcher: ["/user/:path*", "/student-list/:path*"]
    
    }