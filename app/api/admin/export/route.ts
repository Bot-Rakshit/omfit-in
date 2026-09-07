import { NextRequest, NextResponse } from "next/server"
import { isAuthed } from "@/app/lib/admin-auth"
import { sql } from "@/app/lib/db"
import { interestLabel, sourceLabel } from "@/app/lib/lead-labels"

export const dynamic = "force-dynamic"

type Row = {
  id: number
  source: string
  name: string | null
  email: string | null
  phone: string | null
  company: string | null
  interest: string | null
  created_at: string
}

function csvCell(value: string | number | null) {
  const s = value === null || value === undefined ? "" : String(value)
  // Guard against spreadsheet formula injection on =, +, -, @ prefixes.
  const safe = /^[=+\-@]/.test(s) ? `'${s}` : s
  return `"${safe.replace(/"/g, '""')}"`
}

export async function GET(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const source = req.nextUrl.searchParams.get("source")

  const rows = (
    source && source !== "all"
      ? await sql`
          SELECT id, source, name, email, phone, company, interest, created_at
          FROM waitlist
          WHERE source = ${source}
          ORDER BY created_at DESC
        `
      : await sql`
          SELECT id, source, name, email, phone, company, interest, created_at
          FROM waitlist
          ORDER BY created_at DESC
        `
  ) as unknown as Row[]

  const header = [
    "ID",
    "Date (IST)",
    "Came from",
    "Name",
    "Phone",
    "Email",
    "Company",
    "Looking for",
  ]

  const lines = [header.map(csvCell).join(",")]
  for (const r of rows) {
    const when = new Date(r.created_at).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    })
    lines.push(
      [
        r.id,
        when,
        sourceLabel(r.source),
        r.name,
        r.phone,
        r.email,
        r.company,
        interestLabel(r.interest),
      ]
        .map(csvCell)
        .join(",")
    )
  }

  // BOM so Excel opens UTF-8 (₹, curly quotes) correctly.
  const csv = "﻿" + lines.join("\r\n") + "\r\n"
  const today = new Date().toISOString().slice(0, 10)
  const suffix = source && source !== "all" ? `-${source}` : ""

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="omfit-leads${suffix}-${today}.csv"`,
      "Cache-Control": "no-store",
    },
  })
}
