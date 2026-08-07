import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminSession } from "@/lib/auth";
import { getSubmissionsPage } from "@/lib/db";
import { logoutAction } from "./login/actions";

const PAGE_SIZE = 20;

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const authed = await isAdminSession();
  if (!authed) redirect("/admin/login");

  const { page: pageParam } = await searchParams;
  const requestedPage = Number(pageParam) || 1;

  const { rows, total, totalPages } = await getSubmissionsPage(requestedPage, PAGE_SIZE);
  const page = Math.min(Math.max(1, requestedPage), totalPages);

  return (
    <div className="min-h-screen bg-cream">
      <div className="border-b border-line bg-paper">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-xl">YovoEdge — Submissions</h1>
            <p className="text-xs text-muted">{total} total · internal review only</p>
          </div>
          <form action={logoutAction}>
            <button className="text-sm underline">Sign out</button>
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-4">
        {rows.length === 0 && (
          <p className="text-sm text-muted">
            {total === 0
              ? "No submissions yet. They'll appear here as families use the Find Support form."
              : "No submissions on this page."}
          </p>
        )}

        {rows.map((r) => {
          const submitted = new Date(r.created_at);
          const consented = new Date(r.consent_timestamp);
          return (
            <div key={r.id} className="bg-paper border border-line rounded-lg p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <p className="font-medium">
                    {r.athlete_name} · age {r.athlete_age} · {r.athlete_sport}
                  </p>
                  <p className="text-xs text-muted">
                    {submitted.toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    at{" "}
                    {submitted.toLocaleTimeString(undefined, {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs uppercase tracking-wide px-2 py-1 rounded-full ${
                      r.consent_accepted
                        ? "bg-olive/10 text-olive"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {r.consent_accepted ? "Consent accepted" : "Consent not accepted"}
                  </span>
                  <span className="text-xs uppercase tracking-wide bg-cream-2 border border-line px-2 py-1 rounded-full">
                    {r.status}
                  </span>
                </div>
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
                  <p>
                    {r.consent_accepted ? "Accepted" : "Not accepted"} on{" "}
                    {consented.toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    at{" "}
                    {consented.toLocaleTimeString(undefined, {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </p>
                  <p className="text-xs text-muted">Privacy v{r.privacy_version} · Terms v{r.terms_version}</p>
                </div>
              </div>

              {(r.athlete_level || r.prior_support || r.connection_preference || r.city) && (
                <div className="mt-4 pt-4 border-t border-line flex flex-wrap gap-x-6 gap-y-1 text-sm">
                  {r.athlete_level && (
                    <p><span className="text-muted">Level: </span>{r.athlete_level}</p>
                  )}
                  {r.prior_support && (
                    <p><span className="text-muted">Previously supported by: </span>{r.prior_support}</p>
                  )}
                  {r.connection_preference && (
                    <p><span className="text-muted">Prefers: </span>{r.connection_preference}</p>
                  )}
                  {r.city && (
                    <p><span className="text-muted">City: </span>{r.city}</p>
                  )}
                </div>
              )}

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
          );
        })}

        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-4">
            <Link
              href={`/admin?page=${page - 1}`}
              aria-disabled={page <= 1}
              className={`text-sm ${
                page <= 1
                  ? "text-muted/50 pointer-events-none"
                  : "text-ink underline underline-offset-4"
              }`}
            >
              ← Previous
            </Link>
            <p className="text-xs text-muted">
              Page {page} of {totalPages}
            </p>
            <Link
              href={`/admin?page=${page + 1}`}
              aria-disabled={page >= totalPages}
              className={`text-sm ${
                page >= totalPages
                  ? "text-muted/50 pointer-events-none"
                  : "text-ink underline underline-offset-4"
              }`}
            >
              Next →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
