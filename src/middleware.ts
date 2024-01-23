import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isLogedIn } from "./utils/run-time";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const ACCESS_TOKEN =
    request.cookies.get(process.env.ACCESS_TOKEN_KEY!)?.value || "";

  if (
    !isLogedIn(ACCESS_TOKEN) &&
    !url.pathname.includes("/login") &&
    url.pathname !== "/"
  ) {
    url.search = `next=${url.pathname}`;
    url.pathname = `/login`;

    return NextResponse.redirect(url);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Access-Control-Allow-Origin", "*");
  requestHeaders.set("X-Auth-Token", ACCESS_TOKEN);

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
