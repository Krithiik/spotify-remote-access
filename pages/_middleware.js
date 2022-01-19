import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  // Allow the request if :
  // 1) It is a req to next-auth session & provider fetching
  // 2) Token exists

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //Redirect to login if no token or requesting a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
