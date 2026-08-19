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
              <strong>1. We read every submission personally.</strong>
            </li>
            <li>
              <strong>2. We&apos;ll reach out within 2–3 business days.</strong>
              <p className="text-muted">At the email or phone number you shared.</p>
            </li>
            <li>
              <strong>3. If we believe support could be helpful, we&apos;ll guide you through the next steps.</strong>
              <p className="text-muted">And discuss a suitable practitioner for your athlete.</p>
            </li>
            <li>
              <strong>4. There&apos;s no obligation to continue.</strong>
            </li>
          </ol>

          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <Link href="/" className="text-sm border-b border-ink/60 pb-0.5 w-fit">← Back to home</Link>
            <a href="mailto:connect@yovoedge.com" className="text-sm border-b border-ink/60 pb-0.5 w-fit">
              Have a question in the meantime? connect@yovoedge.com
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
