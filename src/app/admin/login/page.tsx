import { loginAction } from "./actions";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="min-h-screen bg-ink text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="font-serif text-2xl mb-1">YovoEdge internal</h1>
        <p className="text-white/60 text-sm mb-8">Sign in to review submissions.</p>
        <form action={loginAction} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive/50"
            />
          </div>
          {error && <p className="text-sm text-red-400">Incorrect password.</p>}
          <button
            type="submit"
            className="w-full bg-olive text-white text-sm font-medium py-2.5 rounded-full hover:bg-olive-dark transition-colors"
          >
            Sign in
          </button>
        </form>
        <p className="text-xs text-white/40 mt-8">
          Set the ADMIN_PASSWORD environment variable before deploying — this is a placeholder gate for a small
          internal team, not a substitute for real per-user auth.
        </p>
      </div>
    </div>
  );
}
