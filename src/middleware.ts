import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Access-Control-Allow-Origin", "*");
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  return response;
}
export const config = {
  matcher: "/v1/:path*",
};
