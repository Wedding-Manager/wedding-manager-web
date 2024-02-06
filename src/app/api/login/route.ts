import api from "@/utils/api";
import { buildCookie } from "@/utils/cookies";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const signupEndpoint = "/v1/login";

  try {
    const payload = await request?.json();
    const loginRequest = await api().post(signupEndpoint, payload);

    const authCookie = buildCookie({
      name: process.env.ACCESS_TOKEN_KEY!,
      value: loginRequest?.headers?.["x-auth-token"],
    });
    const userIdCookie = buildCookie({
      name: process.env.USER_ID_KEY!,
      value: loginRequest?.data?.id,
    });

    return NextResponse.json(loginRequest?.data, {
      status: 200,
      headers: {
        ...loginRequest?.headers,
        "Set-Cookie": [authCookie, userIdCookie],
      } as unknown as HeadersInit,
    });
  } catch (err: any) {
    return NextResponse.json(err, { status: err?.status || 400 });
  }
}
