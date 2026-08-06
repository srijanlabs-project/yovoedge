import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { HOW_IT_WORKS_STEPS as STEPS } from "@/lib/how-it-works-steps";
import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <>
      <Hero title="How YovoEdge Works" italicLine="From your first message to their first session." />

      <section className="bg-cream py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-paper border border-line rounded-xl p-8">
                <div className="w-8 h-8 rounded-full bg-olive text-white flex items-center justify-center text-sm mb-4">
                  {s.n}
                </div>
                <h3 className="font-medium text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted mb-3">{s.body}</p>
                {s.highlight && (
                  <div className="text-sm bg-cream-2 border border-line rounded-lg p-4 mb-3">{s.highlight}</div>
                )}
                <p className="text-xs text-muted/80">{s.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-olive/10 border border-olive/30 rounded-xl p-8 text-center">
            <h4 className="font-serif text-xl mb-2">Ready to find the right person for your athlete?</h4>
            <p className="text-sm text-muted mb-5">It starts with a two-minute form. No obligation.</p>
            <Link
              href="/get-started"
              className="inline-block bg-olive text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-olive-dark transition-colors"
            >
              Request a match
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
