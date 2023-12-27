import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const ACCESS_TOKEN =
    request.cookies.get(process.env.ACCESS_TOKEN_KEY!)?.value || "";
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Access-Control-Allow-Origin", "*");
  requestHeaders.set("X-Auth-Token", ACCESS_TOKEN);
  console.log("ACCESS_TOKEN", ACCESS_TOKEN, request.url);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  return response;
}
export const config = {
  matcher: ["/((?!.*\\.).*)"],
};
