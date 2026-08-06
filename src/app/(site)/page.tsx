import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";

const CARDS = [
  {
    n: "01",
    title: "Understanding Young Athletes",
    href: "/understanding-young-athletes",
    image: "/images/card-understanding.jpg",
    // native crop size, so the card's aspect ratio always matches the photo —
    // no cropping of the baked-in "01 / title / arrow" caption at any viewport width.
    width: 336,
    height: 320,
  },
  {
    n: "02",
    title: "Finding the Right Support",
    href: "/finding-support",
    image: "/images/card-finding-support.jpg",
    width: 349,
    height: 320,
  },
  {
    n: "03",
    title: "Why YovoEdge",
    href: "/our-principles",
    image: "/images/card-why-yovoedge.jpg",
    width: 333,
    height: 320,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title={<>Young athletes<br />feel the pressure early.</>}
        italicLine={<>Finding the right support<br />shouldn&apos;t be the hard part.</>}
        description="Mental support for young athletes aged 9–18, across India."
        image="/images/home-hero.jpg"
        imageAlt="A young athlete sitting quietly with his tennis bag"
        cta={
          <Link
            href="/get-started"
            className="inline-block bg-white text-ink text-sm font-medium px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Talk to Us →
          </Link>
        }
      />

      <section className="bg-cream py-24 text-center">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
            The mind is part of
            <br />
            every competition.
          </h2>
          <div className="section-line mx-auto mb-6" />
          <p className="text-muted max-w-md mx-auto text-sm">
            The one everyone sees.
            <br />
            And the one happening inside the athlete&apos;s mind.
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
            style={{ aspectRatio: `${c.width} / ${c.height}` }}
          >
            {/* Caption ("01 — Understanding Young Athletes →") is baked into the
                source photo itself, so it isn't repeated as live text here. The
                card's aspect-ratio is locked to the photo's native size so the
                caption never gets cropped off the top at wider viewports. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image}
              alt={c.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </Link>
        ))}
      </section>

      <section className="relative bg-ink text-white overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home-cta.jpg"
          alt="A parent walking with their young athlete along a tree-lined path"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Container className="relative py-20 md:py-28">
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

      <Footer />
    </>
  );
}
