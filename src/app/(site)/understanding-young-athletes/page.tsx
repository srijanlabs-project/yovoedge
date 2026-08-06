import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const CHAPTERS = [
  {
    id: "competition",
    chapter: "Chapter I",
    title: "Competition",
    quote: "Practice builds skill. Competition asks different questions.",
    image: "/images/understanding-ch1-competition.jpg",
    items: [
      {
        title: "My child performs differently in competition.",
        body: "They train confidently. They perform well in practice. Then competition arrives and something changes.",
      },
      {
        title: "One mistake changes everything.",
        body: "A single error can feel bigger than the whole game. It lingers and affects what follows.",
      },
      {
        title: "They get nervous before competing.",
        body: "They feel it in their stomach, their mind races, and it's hard to settle.",
      },
      {
        title: "They lose focus when pressure builds.",
        body: "Distractions creep in. Their attention drifts. They find it hard to reset.",
      },
    ],
  },
  {
    id: "confidence",
    chapter: "Chapter II",
    title: "Confidence",
    quote: "Confidence rarely disappears overnight. It changes quietly.",
    image: "/images/understanding-ch2-confidence.jpg",
    items: [
      {
        title: "Confidence disappears overnight.",
        body: "One game, one period or one moment can shake their belief in themselves.",
      },
      {
        title: "Winning doesn't increase confidence.",
        body: "Success doesn't always bring satisfaction. They still doubt themselves.",
      },
      {
        title: "Constant comparison.",
        body: "They compare themselves to others — teammates, rivals, or even themselves.",
      },
      {
        title: "They can't move on after losing.",
        body: "The loss stays with them. It affects their sleep and the next performance.",
      },
    ],
  },
  {
    id: "wellbeing",
    chapter: "Chapter III",
    title: "Enjoyment & Wellbeing",
    quote: "Sometimes the biggest change is the one nobody notices first.",
    image: "/images/understanding-ch3-wellbeing.jpg",
    items: [
      {
        title: "Frustration shows up often.",
        body: "Small things trigger big reactions. They feel frustrated more easily than before.",
      },
      {
        title: "They've lost the joy.",
        body: "They don't feel excited to train or play. Sport feels like a task, not fun.",
      },
      {
        title: "They talk about quitting.",
        body: "They stop seeing the point. They imagine life without sport.",
      },
      {
        title: "Not sure if we should seek support.",
        body: "You're unsure what's normal and what's not. You just want what's best for your child.",
      },
    ],
  },
];

export default function UnderstandingPage() {
  return (
    <>
      <Hero
        title={<>Understanding<br />Young Athletes</>}
        italicLine="Behind every performance is a young person."
        image="/images/understanding-hero.jpg"
        imageAlt="A young athlete sitting alone in a locker room"
      />

      <section className="bg-cream py-20">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl leading-snug mb-4">
              Every young athlete experiences moments of pressure, uncertainty and self-doubt.
            </h2>
            <p className="text-sm text-muted mb-3 max-w-md">
              Many are part of growing up in sport. Some become patterns worth paying attention to.
            </p>
            <p className="text-sm text-muted max-w-md">
              The experiences below aren&apos;t a checklist. They&apos;re moments many families recognise.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/understanding-row2.jpg"
            alt="A young athlete sitting in a sunlit room"
            className="h-56 md:h-72 w-full rounded-lg object-cover"
          />
        </Container>
      </section>

      {CHAPTERS.map((c, ci) => (
        <section
          key={c.id}
          id={c.id}
          className={`relative overflow-hidden ${ci % 2 === 0 ? "bg-ink text-white" : "bg-[#171a16] text-white"}`}
        >
          <Container className="grid md:grid-cols-[1fr_1.4fr] gap-0 md:gap-10 py-16">
            <div className="relative min-h-[280px] flex flex-col justify-center px-6 py-8 md:py-0 -mx-6 md:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.image}
                alt={c.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">{c.chapter}</p>
                <h3 className="font-serif text-3xl mb-4">{c.title}</h3>
                <p className="font-serif italic text-white/80 mb-6 max-w-xs">{c.quote}</p>
                <Link href="/get-started" className="text-sm border-b border-white/50 pb-0.5">
                  Learn more about this chapter →
                </Link>
              </div>
            </div>
            <ul className="divide-y divide-white/10 border-t border-white/10 md:border-t-0">
              {c.items.map((item, i) => (
                <li key={item.title} className="py-5 flex gap-4">
                  <span className="font-serif text-white/40 text-lg w-8 shrink-0">
                    {String(ci * 4 + i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-white/60">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <section className="bg-cream py-16">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-2xl mb-3">Seeing something familiar?</h3>
            <p className="text-sm text-muted mb-2 max-w-md">
              Many of these experiences are a normal part of growing up in sport. Sometimes they pass with time,
              experience and support. Sometimes they become recurring patterns.
            </p>
            <p className="text-sm text-muted max-w-md mb-6">
              If you&apos;ve recognised your child in several of these experiences, talking to someone can help you
              better understand what they&apos;re going through.
            </p>
            <Link href="/get-started" className="text-sm font-medium border-b border-ink/60 pb-0.5">
              Talk to us →
            </Link>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/understanding-final-bench.jpg"
            alt="A parent and child sitting on a bench at sunset"
            className="h-56 w-full rounded-lg object-cover"
          />
        </Container>
      </section>

      <Footer />
    </>
  );
}
