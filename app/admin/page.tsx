import { redirect } from "next/navigation"
import { isAuthed } from "@/app/lib/admin-auth"
import { sql } from "@/app/lib/db"
import LogoutButton from "./logout-button"
import LeadsTable, { type Lead } from "./leads-table"

export const dynamic = "force-dynamic"

type WaitlistRow = Omit<Lead, "created_at"> & { created_at: string | Date }

/** Calendar date in IST, e.g. "2026-09-07" — so "today" means today in India. */
function istDate(value: string | Date) {
  return new Date(value).toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" })
}

export default async function AdminDashboard() {
  if (!(await isAuthed())) redirect("/admin/login")

  const rows = (await sql`
    SELECT id, source, name, email, phone, company, interest, created_at
    FROM waitlist
    ORDER BY created_at DESC
    LIMIT 2000
  `) as unknown as WaitlistRow[]

  const leads: Lead[] = rows.map((r) => ({
    ...r,
    created_at: new Date(r.created_at).toISOString(),
  }))

  const today = istDate(new Date())
  const todayCount = leads.filter((l) => istDate(l.created_at) === today).length

  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
  const weekCount = leads.filter((l) => new Date(l.created_at).getTime() >= weekAgo).length

  const newest = leads[0]
    ? new Date(leads[0].created_at).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "2-digit",
      })
    : "—"

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold text-neutral-900">OmFit Admin</h1>
            <p className="text-xs text-neutral-500">
              Everyone who left their details through a form on omfit.in
            </p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatCard label="Total leads" value={leads.length.toString()} hint="All time" />
          <StatCard label="Today" value={todayCount.toString()} hint="Since midnight IST" />
          <StatCard label="Last 7 days" value={weekCount.toString()} hint="Rolling week" />
          <StatCard label="Most recent" value={newest} hint="Latest submission" small />
        </section>

        <LeadsTable leads={leads} />

        <p className="mt-6 text-xs text-neutral-400">
          Callback forms promise a call within 24 hours. Showing the most recent 2,000 submissions —
          the CSV download includes every matching lead, not just what is on screen.
        </p>
      </main>
    </div>
  )
}

function StatCard({
  label,
  value,
  hint,
  small,
}: {
  label: string
  value: string
  hint: string
  small?: boolean
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3">
      <div className="text-xs font-medium text-neutral-500">{label}</div>
      <div
        className={`mt-1 font-semibold tabular-nums text-neutral-900 ${small ? "text-base" : "text-2xl"}`}
      >
        {value}
      </div>
      <div className="mt-0.5 text-xs text-neutral-400">{hint}</div>
    </div>
  )
}
