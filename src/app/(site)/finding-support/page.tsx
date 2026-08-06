import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { StepsAccordion } from "@/components/StepsAccordion";
import { HOW_IT_WORKS_STEPS } from "@/lib/how-it-works-steps";
import Link from "next/link";

const STEPS = [
  {
    n: "01",
    title: "Start a conversation",
    body: "Share what you're noticing and what's on your mind. This helps us understand your athlete and what you're looking for.",
  },
  {
    n: "02",
    title: "Understand your athlete",
    body: "We ask a few thoughtful questions about your child, their sport, their experiences and what support might be helpful.",
  },
  {
    n: "03",
    title: "Explore the right matches",
    body: "We recommend practitioners whose experience and approach align with your athlete's needs and your preferences.",
  },
  {
    n: "04",
    title: "Make an informed choice",
    body: "You review profiles, learn about their approach and choose who feels like the right fit. We're here to guide you.",
  },
];

export default function FindingSupportPage() {
  return (
    <>
      <Hero
        title={<>Finding the<br />Right Support</>}
        italicLine={
          <>
            The right support.
            <br />
            At the right time.
            <br />
            For the right reasons.
          </>
        }
        description="Knowing when and how to seek support can feel overwhelming. We're here to make that journey clearer."
        note="SCROLL TO EXPLORE ↓"
        image="/images/finding-support-hero.jpg"
        imageAlt="A young athlete sitting on a bench at a tennis court"
      />

      <section className="bg-cream py-20">
        <Container className="grid md:grid-cols-2 gap-10">
          <h2 className="font-serif text-2xl md:text-3xl leading-snug">
            Support isn&apos;t about fixing a problem. It&apos;s about understanding <em>a person.</em>
          </h2>
          <p className="text-sm text-muted max-w-md">
            Thoughtful support helps young athletes build self-awareness, navigate challenges and strengthen the
            skills that matter both in sport and in life. Our role is to help you take the first step with clarity
            and confidence.
          </p>
        </Container>

        <Container className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Our Approach</p>
          <h3 className="font-serif text-2xl md:text-3xl mb-12">A thoughtful process, built around your athlete.</h3>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="w-9 h-9 rounded-full border border-olive/50 flex items-center justify-center mb-4 text-olive">
                  ◐
                </div>
                <p className="font-serif text-lg text-muted mb-1">{s.n}</p>
                <h4 className="font-medium mb-2">{s.title}</h4>
                <p className="text-sm text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="grid md:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/finding-support-walk.jpg"
          alt="A parent walking with their young athlete"
          className="h-64 md:h-auto w-full object-cover"
        />
        <div className="bg-cream-2 p-10 md:p-16 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">What you can expect</p>
          <h3 className="font-serif text-2xl mb-6">From your first message to their first session.</h3>
          <StepsAccordion steps={HOW_IT_WORKS_STEPS} />
        </div>
      </section>

      <section className="bg-paper py-16">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-2xl mb-3">You don&apos;t have to figure this out alone.</h3>
            <p className="text-sm text-muted mb-6 max-w-md">
              Whether you&apos;re looking for clarity, reassurance or simply someone to talk to, we&apos;re here.
            </p>
            <Link href="/get-started" className="text-sm font-medium border-b border-ink/60 pb-0.5">
              Talk to Us →
            </Link>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/finding-support-chair.jpg"
            alt="A quiet reading corner"
            className="h-48 w-full rounded-lg object-cover"
          />
        </Container>
      </section>

      <Footer />
    </>
  );
}
