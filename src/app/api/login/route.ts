import api from "@/utils/api";
import { buildCookie } from "@/utils/cookies";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const signupEndpoint = "/v1/login";

  try {
    const payload = await request?.json();
    const loginRequest = await api().post(signupEndpoint, payload);

    const cookies = buildCookie({
      name: process.env.ACCESS_TOKEN_KEY!,
      value: loginRequest?.headers?.["x-auth-token"],
    });

    return NextResponse.json(
      { data: loginRequest?.data },
      {
        status: 200,
        headers: {
          ...loginRequest?.headers,
          "Set-Cookie": cookies,
        } as unknown as HeadersInit,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.response?.data },
      { status: err?.status || 400 }
    );
  }
}
