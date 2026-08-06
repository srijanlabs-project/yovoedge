"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { IntakeData } from "@/lib/validation";
import { PRIVACY_VERSION, TERMS_VERSION } from "@/lib/config";

export default function ConsentPage() {
  const router = useRouter();
  const [intake, setIntake] = useState<IntakeData | null>(null);
  const [checked, setChecked] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("ye_intake");
    if (!raw) {
      router.replace("/get-started");
      return;
    }
    setIntake(JSON.parse(raw));
  }, [router]);

  async function handleSubmit() {
    setAttempted(true);
    if (!checked) return; // submission only proceeds once the box is checked

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...intake,
          consentAccepted: true,
          privacyVersion: PRIVACY_VERSION,
          termsVersion: TERMS_VERSION,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      const { id } = await res.json();
      sessionStorage.removeItem("ye_intake");
      router.push(`/get-started/confirmation?ref=${id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!intake) return null;

  return (
    <>
      <section className="relative bg-ink text-white">
        <Header dark />
        <Container className="pt-40 pb-16">
          <h1 className="font-serif text-4xl mb-2">Request a match</h1>
          <p className="text-white/70 max-w-md">One last step before we match your child with a practitioner.</p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="max-w-2xl">
          <div className="bg-paper border border-line rounded-xl p-8 mb-6">
            <h2 className="font-medium mb-4 flex items-center gap-2">🔒 Before we match your child</h2>
            <p className="text-sm text-muted mb-3">
              You&apos;re setting up sessions between your child and a vetted sport psychologist. We&apos;ll keep some
              basics ({intake.athleteName}, age {intake.athleteAge}, {intake.athleteSport}) and what you&apos;d like to
              work on, so we can match them well.
            </p>
            <p className="text-sm text-muted mb-6">
              What your child discusses in sessions stays private between them and their practitioner. We&apos;ll
              share general progress with you, and we&apos;d only ever raise something directly if it touched their
              safety. You can see what we hold, or ask us to delete it, at any time.
            </p>

            <label className="flex items-start gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="mt-1"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>
                I&apos;m the parent or guardian, and I accept the{" "}
                <Link href="/terms" target="_blank" className="underline">Terms of Service</Link> and{" "}
                <Link href="/privacy" target="_blank" className="underline">Privacy Note</Link>, and I consent to
                these sessions and to how our information is handled.
              </span>
            </label>
            {attempted && !checked && (
              <p className="text-xs text-red-600 mt-2">
                Please accept the Terms of Service and Privacy Note to continue — submission isn&apos;t possible
                until this box is checked.
              </p>
            )}
          </div>

          <p className="text-xs text-muted mb-6">
            Free to use. Session fees are set by your practitioner, and we&apos;ll be clear about cost when we match
            you.
          </p>

          {error && <p className="text-sm text-red-600 mb-4">{error}</p>}

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full bg-olive text-white font-medium py-3 rounded-full hover:bg-olive-dark transition-colors disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Request a match"}
          </button>

          <p className="text-xs text-muted text-center mt-4">
            Read our full{" "}
            <Link href="/privacy" className="underline">privacy note</Link> to see exactly how we handle your
            child&apos;s information.
          </p>
        </Container>
      </section>

      <Footer />
    </>
  );
}
