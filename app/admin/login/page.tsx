"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || "Login failed")
        return
      }
      router.replace("/admin")
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-white border border-neutral-200 rounded-xl p-6 shadow-sm"
      >
        <h1 className="text-xl font-semibold text-neutral-900 mb-1">OmFit Admin</h1>
        <p className="text-sm text-neutral-500 mb-6">Sign in to view captured data.</p>

        <label className="block text-sm font-medium text-neutral-700 mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
          className="w-full px-3 py-2 border border-neutral-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-neutral-900"
        />

        <label className="block text-sm font-medium text-neutral-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          className="w-full px-3 py-2 border border-neutral-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-neutral-900"
        />

        {error && (
          <p className="text-sm text-red-600 mb-3">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-neutral-900 text-white py-2 rounded-md font-medium hover:bg-neutral-800 disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  )
}
