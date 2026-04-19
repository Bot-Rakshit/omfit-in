import { NextRequest, NextResponse } from "next/server"
import { ADMIN_COOKIE, expectedToken, verifyCredentials } from "@/app/lib/admin-auth"

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json()
    if (typeof username !== "string" || typeof password !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }
    if (!verifyCredentials(username, password)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
    const token = expectedToken()
    if (!token) {
      return NextResponse.json({ error: "Server not configured" }, { status: 500 })
    }
    const res = NextResponse.json({ ok: true })
    res.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    })
    return res
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 })
  }
}
