import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const PRINCIPLES = [
  {
    n: "01",
    title: "Understanding before advice.",
    body: "Every young athlete has their own story. Before suggesting support, we believe it's important to understand the athlete, their sporting environment and what they're experiencing.",
    image: "/images/principle-1-tennis.jpg",
    imageAlt: "A young tennis player sitting quietly on a bench at sunrise",
  },
  {
    n: "02",
    title: "The individual comes first.",
    body: "No two athletes are the same. Age, sport, experiences, personality and goals all shape the kind of support that may be most helpful.",
    image: "/images/principle-2-swimmer.jpg",
    imageAlt: "A young swimmer resting at the edge of a pool",
  },
  {
    n: "03",
    title: "Thoughtful matching matters.",
    body: "Finding support isn't about choosing the practitioner with the longest CV. It's about finding someone whose experience and approach feel right for the individual athlete.",
    image: "/images/principle-3-counseling.jpg",
    imageAlt: "A young athlete talking with a practitioner in a counselling session",
  },
  {
    n: "04",
    title: "Parents are partners.",
    body: "Parents know their child better than anyone else. We believe parents should feel informed, respected and involved throughout the process, while also recognising the need for young athletes to have a confidential space.",
    image: "/images/principle-4-walk.jpg",
    imageAlt: "A father and son walking together through a park",
  },
  {
    n: "05",
    title: "Every conversation starts with trust.",
    body: "Choosing support for your child is an important decision. We believe trust is earned through transparency, clear communication and respecting the confidence families place in us.",
    image: "/images/principle-5-vase.jpg",
    imageAlt: "A coach kneeling beside a young athlete on the track at sunset",
  },
];

export default function OurPrinciplesPage() {
  return (
    <>
      <Hero
        title="Our Principles"
        description="The principles that guide every conversation. Everything we do begins with a simple belief: young athletes deserve support that is thoughtful, trusted and centred around the individual."
        image="/images/our-principles-hero.jpg"
        imageAlt="A parent talking with their teenage son at home"
      />

      <section className="bg-cream">
        {PRINCIPLES.map((p) => (
          <Container
            key={p.n}
            className="grid md:grid-cols-2 gap-0 md:gap-10 border-b border-line items-center"
          >
            <div className="py-10 md:py-14 md:pr-6 order-2 md:order-1">
              <span className="font-serif text-4xl text-muted block mb-3">{p.n}</span>
              <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
              <p className="text-sm text-muted max-w-md">{p.body}</p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt={p.imageAlt}
              className="w-full h-56 md:h-72 object-cover rounded-lg order-1 md:order-2"
            />
          </Container>
        ))}
      </section>

      <section className="bg-cream-2">
        <Container className="!max-w-none grid md:grid-cols-2 gap-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/principles-final-walk.jpg"
            alt="A father and daughter walking together at sunset"
            className="h-56 md:h-full w-full object-cover"
          />
          <div className="py-14 md:py-16 px-6 md:px-16">
            <h3 className="font-serif text-2xl mb-3">We&apos;re building YovoEdge one family at a time.</h3>
            <p className="text-sm text-muted mb-6 max-w-md">
              Every athlete who reaches out deserves to feel heard. Every parent deserves clarity. Every practitioner
              deserves to work within a thoughtful, trusted network.
            </p>
            <Link href="/get-started" className="text-sm font-medium border-b border-ink/60 pb-0.5">
              Talk to Us →
            </Link>
          </div>
        </Container>
      </section>

      <Footer full />
    </>
  );
}
