import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function ConnectPage() {
  return (
    <>
      <Hero
        title="Let's connect."
        italicLine="You don't have to figure this out alone."
        description="Whatever stage you're at, just noticing something, or ready to find support, we're happy to talk it through."
      />

      <section className="bg-cream py-20">
        <Container className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-2xl mb-4">Reach us directly</h2>
            <p className="text-sm text-muted mb-2">
              A real person reads every message, and we&apos;ll respond personally.
            </p>
            <a href="mailto:connect@yovoedge.com" className="underline text-lg">
              connect@yovoedge.com
            </a>
          </div>
          <div className="bg-paper border border-line rounded-xl p-8">
            <h3 className="font-medium mb-2">Prefer to start with a form?</h3>
            <p className="text-sm text-muted mb-5">
              Tell us a little about your athlete and we&apos;ll guide you on the right next step.
            </p>
            <Link
              href="/get-started"
              className="inline-block bg-ink text-white text-sm font-medium px-6 py-3 rounded-full"
            >
              Find Support →
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
