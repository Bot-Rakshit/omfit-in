import { NextRequest, NextResponse } from "next/server"
import { sql } from "@/app/lib/db"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { source, name, email, phone, company, interest } = body

    if (!source) {
      return NextResponse.json({ error: "source is required" }, { status: 400 })
    }

    await sql`
      INSERT INTO waitlist (source, name, email, phone, company, interest)
      VALUES (${source}, ${name || null}, ${email || null}, ${phone || null}, ${company || null}, ${interest || null})
    `

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("waitlist insert error:", err)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
