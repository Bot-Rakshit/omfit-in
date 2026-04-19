import { redirect } from "next/navigation"
import { isAuthed } from "@/app/lib/admin-auth"
import { sql } from "@/app/lib/db"
import LogoutButton from "./logout-button"

export const dynamic = "force-dynamic"

type WaitlistRow = {
  id: number
  source: string
  name: string | null
  email: string | null
  phone: string | null
  company: string | null
  interest: string | null
  created_at: string
}

export default async function AdminDashboard() {
  if (!(await isAuthed())) redirect("/admin/login")

  const rows = (await sql`
    SELECT id, source, name, email, phone, company, interest, created_at
    FROM waitlist
    ORDER BY created_at DESC
    LIMIT 500
  `) as unknown as WaitlistRow[]

  const sources = Array.from(new Set(rows.map((r) => r.source)))
  const countsBySource: Record<string, number> = {}
  for (const r of rows) countsBySource[r.source] = (countsBySource[r.source] || 0) + 1

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-neutral-900">OmFit Admin</h1>
            <p className="text-xs text-neutral-500">Waitlist & captured submissions</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <StatCard label="Total entries" value={rows.length.toString()} />
          {sources.map((s) => (
            <StatCard key={s} label={s} value={(countsBySource[s] || 0).toString()} />
          ))}
        </section>

        <section className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-neutral-900">Submissions</h2>
            <span className="text-xs text-neutral-500">Showing latest {rows.length}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-600">
                <tr>
                  <Th>When</Th>
                  <Th>Source</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Company</Th>
                  <Th>Interest</Th>
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-10 text-center text-neutral-500">
                      No submissions yet.
                    </td>
                  </tr>
                )}
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-neutral-100">
                    <Td>{new Date(r.created_at).toLocaleString()}</Td>
                    <Td>
                      <span className="inline-flex px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 text-xs font-medium">
                        {r.source}
                      </span>
                    </Td>
                    <Td>{r.name || "—"}</Td>
                    <Td>{r.email || "—"}</Td>
                    <Td>{r.phone || "—"}</Td>
                    <Td>{r.company || "—"}</Td>
                    <Td>{r.interest || "—"}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl px-4 py-3">
      <div className="text-xs text-neutral-500 capitalize">{label}</div>
      <div className="text-2xl font-semibold text-neutral-900 mt-1">{value}</div>
    </div>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left px-4 py-2 font-medium text-xs uppercase tracking-wide">
      {children}
    </th>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-2 text-neutral-800 whitespace-nowrap">{children}</td>
}
