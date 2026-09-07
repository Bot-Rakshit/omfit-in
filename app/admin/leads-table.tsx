"use client"

import { useMemo, useState } from "react"
import { SOURCE_META, interestLabel, sourceLabel } from "@/app/lib/lead-labels"

export type Lead = {
  id: number
  source: string
  name: string | null
  email: string | null
  phone: string | null
  company: string | null
  interest: string | null
  created_at: string
}

const toneClasses: Record<string, string> = {
  brand: "bg-emerald-50 text-emerald-800 border-emerald-200",
  accent: "bg-amber-50 text-amber-800 border-amber-200",
  neutral: "bg-sky-50 text-sky-800 border-sky-200",
}

function badgeClass(source: string) {
  const tone = SOURCE_META[source]?.tone ?? "neutral"
  return toneClasses[tone] ?? toneClasses.neutral
}

function formatWhen(iso: string) {
  const d = new Date(iso)
  const absolute = d.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  })

  const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? "" : "s"} ago`

  const mins = Math.floor((Date.now() - d.getTime()) / 60000)
  let relative: string
  if (mins < 1) relative = "just now"
  else if (mins < 60) relative = plural(mins, "min")
  else if (mins < 60 * 24) relative = plural(Math.floor(mins / 60), "hour")
  else if (mins < 60 * 24 * 30) relative = plural(Math.floor(mins / (60 * 24)), "day")
  else relative = absolute

  return { absolute, relative }
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [source, setSource] = useState<string>("all")
  const [query, setQuery] = useState("")

  const sources = useMemo(() => {
    const order = ["hero", "cta", "corporate"]
    const present = Array.from(new Set(leads.map((l) => l.source)))
    return present.sort((a, b) => {
      const ia = order.indexOf(a)
      const ib = order.indexOf(b)
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib)
    })
  }, [leads])

  const counts = useMemo(() => {
    const c: Record<string, number> = {}
    for (const l of leads) c[l.source] = (c[l.source] || 0) + 1
    return c
  }, [leads])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return leads.filter((l) => {
      if (source !== "all" && l.source !== source) return false
      if (!q) return true
      return [l.name, l.phone, l.email, l.company, interestLabel(l.interest), sourceLabel(l.source)]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    })
  }, [leads, source, query])

  const exportHref = source === "all" ? "/api/admin/export" : `/api/admin/export?source=${source}`

  return (
    <>
      {/* Legend — what each source actually means */}
      <section className="mb-8">
        <h2 className="mb-1 text-sm font-semibold text-neutral-900">Where these leads come from</h2>
        <p className="mb-4 text-sm text-neutral-500">
          Click a card to show only those leads. The CSV download follows whatever is selected here.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          {sources.map((s) => {
            const meta = SOURCE_META[s]
            const active = source === s
            return (
              <button
                key={s}
                onClick={() => setSource(active ? "all" : s)}
                className={`rounded-xl border p-4 text-left transition ${
                  active
                    ? "border-neutral-900 bg-white ring-1 ring-neutral-900"
                    : "border-neutral-200 bg-white hover:border-neutral-400"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">
                      {meta?.label ?? s}
                    </div>
                    <div className="mt-0.5 text-xs text-neutral-500">{meta?.where ?? "—"}</div>
                  </div>
                  <span className="text-2xl font-semibold tabular-nums text-neutral-900">
                    {counts[s] ?? 0}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                  {meta?.description ??
                    `Submissions tagged “${s}”. This source has no description yet — add one in app/lib/lead-labels.ts.`}
                </p>
              </button>
            )
          })}
        </div>
      </section>

      {/* Table */}
      <section className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
        <div className="flex flex-col gap-3 border-b border-neutral-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">
              {source === "all" ? "All leads" : sourceLabel(source)}
            </h2>
            <p className="text-xs text-neutral-500">
              Showing {filtered.length} of {leads.length}
              {source !== "all" && (
                <>
                  {" · "}
                  <button
                    onClick={() => setSource("all")}
                    className="underline underline-offset-2 hover:text-neutral-800"
                  >
                    clear filter
                  </button>
                </>
              )}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, phone, company…"
              className="w-full rounded-md border border-neutral-300 px-3 py-1.5 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-900 sm:w-64"
            />
            <a
              href={exportHref}
              className="whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-700"
            >
              Download CSV
            </a>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-neutral-600">
              <tr>
                <Th>When</Th>
                <Th>Came from</Th>
                <Th>Name</Th>
                <Th>Phone</Th>
                <Th>Email</Th>
                <Th>Company</Th>
                <Th>Looking for</Th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-neutral-500">
                    {leads.length === 0
                      ? "No one has submitted a form yet."
                      : "No leads match this filter or search."}
                  </td>
                </tr>
              )}
              {filtered.map((l) => {
                const when = formatWhen(l.created_at)
                return (
                  <tr key={l.id} className="border-t border-neutral-100 hover:bg-neutral-50">
                    <Td>
                      <span title={when.absolute} className="text-neutral-900">
                        {when.relative}
                      </span>
                      <div className="text-xs text-neutral-400">{when.absolute}</div>
                    </Td>
                    <Td>
                      <span
                        className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${badgeClass(l.source)}`}
                      >
                        {sourceLabel(l.source)}
                      </span>
                    </Td>
                    <Td>{l.name || <Empty />}</Td>
                    <Td>
                      {l.phone ? (
                        <a
                          href={`tel:${l.phone.replace(/\s+/g, "")}`}
                          className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                        >
                          {l.phone}
                        </a>
                      ) : (
                        <Empty />
                      )}
                    </Td>
                    <Td>
                      {l.email ? (
                        <a
                          href={`mailto:${l.email}`}
                          className="text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
                        >
                          {l.email}
                        </a>
                      ) : (
                        <Empty />
                      )}
                    </Td>
                    <Td>{l.company || <Empty />}</Td>
                    <Td>{interestLabel(l.interest) || <Empty />}</Td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

function Empty() {
  return <span className="text-neutral-300">—</span>
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wide">{children}</th>
  )
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="whitespace-nowrap px-4 py-3 align-top text-neutral-800">{children}</td>
}
