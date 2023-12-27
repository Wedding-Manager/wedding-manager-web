import api from "@/utils/api";
import { buildCookie } from "@/utils/cookies";
import { AxiosError } from "axios";
import { NextResponse } from "next/server";
import { serialize } from "v8";

export async function POST(request: Request) {
  const signupEndpoint = "/v1/user";

  try {
    const payload = await request?.json();
    const singupRequest = await api().post(signupEndpoint, payload);

    const cookies = buildCookie({
      name: process.env.ACCESS_TOKEN_KEY!,
      value: singupRequest?.headers?.["x-auth-token"],
    });

    return NextResponse.json(
      { data: singupRequest?.data },
      {
        status: 200,
        headers: {
          ...singupRequest?.headers,
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
