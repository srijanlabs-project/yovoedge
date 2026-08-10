import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { HomeHighlights } from "@/components/HomeHighlights";

// All three cards share one aspect ratio so they render at identical heights
// side by side — using each photo's own native ratio (as before) left the
// row uneven, with a gap under whichever card came out shortest. This is
// locked to card 03's native photo size since its "03 — Why YovoEdge"
// caption is baked into the image and must not be cropped.
const CARD_ASPECT_RATIO = "1402 / 1122";

const CARDS = [
  {
    n: "01",
    title: "Understanding Young Athletes",
    href: "/understanding-young-athletes",
    image: "/images/card-understanding.jpg",
    imageAlt: "A young cricketer looking out at the field during a tense match",
    objectPosition: "object-[75%_center]",
    overlayText: true,
  },
  {
    n: "02",
    title: "Finding the Right Support",
    href: "/finding-support",
    image: "/images/card-finding-support.jpg",
    imageAlt: "A young athlete sitting with his coach on the field at sunset",
    objectPosition: "object-[70%_center]",
    overlayText: true,
  },
  {
    n: "03",
    title: "Why YovoEdge",
    href: "/our-principles",
    image: "/images/card-why-yovoedge.jpg",
    // Caption ("03 — Why YovoEdge") is baked into this photo itself, so it isn't
    // repeated as live text below.
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Mental Performance Matters"
        title={<>Young athletes face pressure<br />long before the scoreboard does.</>}
        italicLine="Find sports psychologists and counsellors who understand competition, performance, confidence and the realities of growing up in sport."
        description="For athletes aged 9–18 and the parents supporting them."
        image="/images/home-hero.jpg"
        imageAlt="A young athlete sitting quietly with his tennis bag"
        cta={
          <Link
            href="/get-started"
            className="inline-block bg-olive text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-olive-dark transition-colors"
          >
            Start a Conversation →
          </Link>
        }
        note="No diagnosis required. No referral needed."
      />

      <HomeHighlights />

      <section className="bg-cream py-24 text-center">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
            The game isn&apos;t only
            <br />
            played on the field.
          </h2>
          <div className="section-line mx-auto mb-6" />
          <p className="text-muted max-w-md mx-auto text-sm mb-6">
            Every competition has a mental side shaped by confidence, pressure and resilience.
          </p>
          <p className="font-medium text-sm space-y-1">
            <span className="block">The confidence to believe.</span>
            <span className="block">The courage to compete.</span>
            <span className="block">The resilience to return.</span>
          </p>
        </Container>
      </section>

      <section className="grid md:grid-cols-3">
        {CARDS.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            aria-label={c.title}
            className="group relative flex overflow-hidden"
            style={{ aspectRatio: CARD_ASPECT_RATIO }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image}
              alt={c.imageAlt || c.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                c.objectPosition || ""
              }`}
            />
            {c.overlayText && (
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
            )}
            {c.overlayText && (
              <div className="relative z-10 flex flex-col justify-center h-full max-w-[85%] p-8 text-white">
                <p className="font-serif text-5xl mb-3">{c.n}</p>
                <div className="w-6 h-px bg-white/60 mb-4" />
                <h3 className="font-serif text-5xl leading-snug mb-4">{c.title}</h3>
                <span aria-hidden className="text-5xl">→</span>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </Link>
        ))}
      </section>

      <section className="relative bg-ink text-white overflow-hidden min-h-[420px] md:min-h-[600px] flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home-cta.jpg"
          alt="A parent walking with their young athlete along a tree-lined path"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <Container className="relative py-28 md:py-40">
          <div className="max-w-md ml-auto">
            <h3 className="font-serif text-3xl mb-4 leading-snug">
              Sometimes the right conversation changes everything.
            </h3>
            <div className="section-line bg-white/40 mb-6" />
            <Link href="/get-started" className="text-sm border-b border-white/60 pb-0.5">
              Talk to us →
            </Link>
          </div>
        </Container>
      </section>

      <Footer full />
    </>
  );
}
