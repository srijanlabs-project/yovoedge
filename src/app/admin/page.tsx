import { redirect } from "next/navigation";
import { isAdminSession } from "@/lib/auth";
import { getAllSubmissions } from "@/lib/db";
import { logoutAction } from "./login/actions";

export default async function AdminPage() {
  const authed = await isAdminSession();
  if (!authed) redirect("/admin/login");

  const rows = await getAllSubmissions();

  return (
    <div className="min-h-screen bg-cream">
      <div className="border-b border-line bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-xl">YovoEdge — Submissions</h1>
            <p className="text-xs text-muted">{rows.length} total · internal review only</p>
          </div>
          <form action={logoutAction}>
            <button className="text-sm underline">Sign out</button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-4">
        {rows.length === 0 && (
          <p className="text-sm text-muted">No submissions yet. They&apos;ll appear here as families use the Find Support form.</p>
        )}

        {rows.map((r) => (
          <div key={r.id} className="bg-paper border border-line rounded-lg p-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <p className="font-medium">
                  {r.athlete_name} · age {r.athlete_age} · {r.athlete_sport}
                </p>
                <p className="text-xs text-muted">Submitted {new Date(r.created_at).toLocaleString()}</p>
              </div>
              <span className="text-xs uppercase tracking-wide bg-olive/10 text-olive px-2 py-1 rounded-full">
                {r.status}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-muted mb-1">Parent / guardian</p>
                <p>{r.parent_name}</p>
                <p>{r.parent_email}</p>
                <p>{r.parent_phone}</p>
              </div>
              <div>
                <p className="text-muted mb-1">Consent</p>
                <p>{r.consent_accepted ? "Accepted" : "Not accepted"} at {new Date(r.consent_timestamp).toLocaleString()}</p>
                <p className="text-xs text-muted">Privacy v{r.privacy_version} · Terms v{r.terms_version}</p>
              </div>
            </div>

            {(r.noticing_text || r.helpful_text) && (
              <div className="mt-4 pt-4 border-t border-line grid md:grid-cols-2 gap-6 text-sm">
                {r.noticing_text && (
                  <div>
                    <p className="text-muted mb-1">What they&apos;ve noticed</p>
                    <p>{r.noticing_text}</p>
                  </div>
                )}
                {r.helpful_text && (
                  <div>
                    <p className="text-muted mb-1">What would help</p>
                    <p>{r.helpful_text}</p>
                  </div>
                )}
              </div>
            )}

            {r.concern_areas && r.concern_areas.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {r.concern_areas.map((a: string) => (
                  <span key={a} className="text-xs bg-cream-2 border border-line rounded-full px-3 py-1">
                    {a}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
