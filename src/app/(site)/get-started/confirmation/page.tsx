import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <>
      <section className="relative bg-ink text-white">
        <Header dark />
        <Container className="pt-40 pb-20 text-center">
          <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto mb-6 text-2xl">
            ✓
          </div>
          <h1 className="font-serif text-4xl mb-3">Thank you — we&apos;ve got it.</h1>
          <p className="text-white/70 max-w-md mx-auto">
            Your submission and consent have been recorded securely.
            {ref && (
              <>
                {" "}Your reference number is <span className="text-white font-medium">{ref.slice(0, 8)}</span>.
              </>
            )}
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="max-w-2xl">
          <h2 className="font-serif text-2xl mb-6">What happens next?</h2>
          <ol className="space-y-5 text-sm">
            <li>
              <strong>1. We review your submission.</strong>
              <p className="text-muted">Our team carefully reads your responses.</p>
            </li>
            <li>
              <strong>2. We reach out.</strong>
              <p className="text-muted">We&apos;ll be in touch at the email or phone number you shared, within 2–3 business days.</p>
            </li>
            <li>
              <strong>3. We help you take the next step.</strong>
              <p className="text-muted">We&apos;ll guide you on what could be most helpful for your athlete, and share practitioner options for you to choose from.</p>
            </li>
          </ol>

          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <Link href="/" className="text-sm border-b border-ink/60 pb-0.5 w-fit">← Back to home</Link>
            <a href="mailto:hello@yovoedge.com" className="text-sm border-b border-ink/60 pb-0.5 w-fit">
              Have a question in the meantime? hello@yovoedge.com
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
