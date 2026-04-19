import { createHmac, timingSafeEqual } from "crypto"
import { cookies } from "next/headers"

export const ADMIN_COOKIE = "omfit_admin"

const ADMIN_USER = process.env.ADMIN_USER
const ADMIN_PASS = process.env.ADMIN_PASS
const SECRET = process.env.ADMIN_SECRET

function isConfigured() {
  return Boolean(ADMIN_USER && ADMIN_PASS && SECRET)
}

export function expectedToken() {
  if (!isConfigured()) return null
  return createHmac("sha256", SECRET!).update(`${ADMIN_USER}:${ADMIN_PASS}`).digest("hex")
}

export function verifyCredentials(user: string, pass: string) {
  if (!isConfigured()) return false
  const a = Buffer.from(user)
  const b = Buffer.from(ADMIN_USER!)
  const c = Buffer.from(pass)
  const d = Buffer.from(ADMIN_PASS!)
  if (a.length !== b.length || c.length !== d.length) return false
  return timingSafeEqual(a, b) && timingSafeEqual(c, d)
}

export function verifyToken(token: string | undefined) {
  if (!token) return false
  const expected = expectedToken()
  if (!expected) return false
  const a = Buffer.from(token)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export async function isAuthed() {
  const c = await cookies()
  return verifyToken(c.get(ADMIN_COOKIE)?.value)
}
