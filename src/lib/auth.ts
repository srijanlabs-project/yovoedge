import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

// Minimal shared-password gate for the internal "who submitted the form"
// review screen. Good enough for a small internal team; swap for real
// auth (SSO / per-user accounts + audit log) before this holds real
// children's data in production.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "yovoedge-admin";
const SESSION_SECRET = process.env.SESSION_SECRET || "dev-only-secret-change-me";
export const ADMIN_COOKIE = "ye_admin_session";

function sign(value: string) {
  return createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

export function checkPassword(password: string) {
  const a = Buffer.from(password);
  const b = Buffer.from(ADMIN_PASSWORD);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function makeSessionToken() {
  const value = "admin";
  return `${value}.${sign(value)}`;
}

function isValidToken(token: string | undefined) {
  if (!token) return false;
  const [value, sig] = token.split(".");
  if (!value || !sig) return false;
  return sign(value) === sig;
}

export async function requireAdmin(_req: NextRequest) {
  const store = await cookies();
  return isValidToken(store.get(ADMIN_COOKIE)?.value);
}

export async function isAdminSession() {
  const store = await cookies();
  return isValidToken(store.get(ADMIN_COOKIE)?.value);
}
