"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function onClick() {
    setLoading(true)
    await fetch("/api/admin/logout", { method: "POST" })
    router.replace("/admin/login")
    router.refresh()
  }

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="text-sm px-3 py-1.5 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-100 disabled:opacity-60"
    >
      {loading ? "…" : "Sign out"}
    </button>
  )
}
