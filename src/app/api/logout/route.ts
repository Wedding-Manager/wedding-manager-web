import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookiestore = cookies();
  cookiestore.delete(process.env.ACCESS_TOKEN_KEY!);
  cookiestore.delete(process.env.USER_ID_KEY!);
  return NextResponse.json("OK", { status: 200 });
}
