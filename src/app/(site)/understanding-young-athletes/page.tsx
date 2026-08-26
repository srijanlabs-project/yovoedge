import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { ExpandablePointer } from "@/components/ExpandablePointer";

const CHAPTERS = [
  {
    id: "competition",
    chapter: "Chapter I",
    title: "Competition",
    intro:
      "Competition asks different questions than practice. When the stakes feel higher, some young athletes discover that performing under pressure is a skill in itself.",
    image: "/images/understanding-ch1-competition.jpg",
    items: [
      {
        title: "My child performs differently in competition.",
        lines: [
          "They train confidently.",
          "They perform well in practice.",
          "Then competition arrives.",
          "They hesitate.",
          "Play safe.",
          "Make uncharacteristic mistakes.",
          "Leave the competition saying,",
          "“I know I can play better than that.”",
          "Many young athletes experience this at some point in their sporting journey.",
          "The important question isn't whether it happens.",
          "It's whether it becomes a recurring pattern.",
        ],
      },
      {
        title: "One mistake changes everything.",
        lines: [
          "The match begins well.",
          "Then comes one mistake.",
          "One missed shot.",
          "One dropped catch.",
          "One lost point.",
          "From that moment, they don't seem like themselves.",
          "The frustration grows.",
          "Confidence fades.",
          "The next mistake comes more easily than the first.",
          "Every athlete makes mistakes.",
          "Learning how to recover from them is often just as important as learning how to avoid them.",
        ],
      },
      {
        title: "They get very nervous before competing.",
        lines: [
          "The nerves begin the night before.",
          "Or during the drive.",
          "Or while waiting to compete.",
          "They worry about making mistakes.",
          "Letting people down.",
          "Not performing well enough.",
          "By the time competition begins, they're already mentally exhausted.",
          "Feeling nervous before competition is common.",
          "The important question is whether those nerves are beginning to affect how your child experiences sport.",
        ],
      },
      {
        title: "They lose focus when the pressure builds.",
        lines: [
          "Everything is going well.",
          "Then something changes.",
          "A mistake.",
          "A close score.",
          "A difficult opponent.",
          "Instead of staying present, their attention drifts.",
          "To the scoreboard.",
          "To the last mistake.",
          "To what might happen next.",
          "Competition naturally demands focus.",
          "Some athletes simply need support learning how to bring their attention back when pressure builds.",
        ],
      },
    ],
  },
  {
    id: "confidence",
    chapter: "Chapter II",
    title: "Confidence",
    intro: "Confidence isn't fixed. It grows, changes and is constantly being shaped by experience.",
    image: "/images/understanding-ch2-confidence.jpg",
    items: [
      {
        title: "Their confidence seems to disappear overnight.",
        lines: [
          "Only a few weeks ago they believed in themselves.",
          "Now they question everything.",
          "One difficult competition.",
          "A selection decision.",
          "A series of disappointing results.",
          "Suddenly they're doubting abilities that haven't actually disappeared.",
          "Confidence often changes more gradually than it appears.",
          "Recognising those changes early can make a meaningful difference.",
        ],
      },
      {
        title: "Winning doesn't seem to boost their confidence.",
        lines: [
          "They win.",
          "But only talk about what went wrong.",
          "They improve.",
          "But compare themselves to someone better.",
          "No result seems to bring lasting confidence.",
          "Many driven young athletes set exceptionally high standards.",
          "Sometimes those standards become so demanding that success never feels enough.",
        ],
      },
      {
        title: "They constantly compare themselves to others.",
        lines: [
          "Who's improving faster.",
          "Who's ranked higher.",
          "Who's been selected.",
          "Who's getting more attention.",
          "Slowly, their focus shifts away from their own progress.",
          "And towards everyone else's.",
          "Comparison has become part of modern sport.",
          "Helping young athletes stay connected to their own journey becomes increasingly important as competition levels rise.",
        ],
      },
      {
        title: "Losing affects them long after the competition ends.",
        lines: [
          "The match is over.",
          "Everyone else has moved on.",
          "They haven't.",
          "They replay moments.",
          "Question decisions.",
          "Carry the disappointment home.",
          "Sometimes into the next competition.",
          "Disappointment is part of sport.",
          "The challenge is helping young athletes recover without letting it define them.",
        ],
      },
    ],
  },
  {
    id: "wellbeing",
    chapter: "Chapter III",
    title: "Enjoyment & Wellbeing",
    intro: "Sport should challenge young athletes. It should also leave room for enjoyment, curiosity and growth.",
    image: "/images/understanding-ch3-wellbeing.jpg",
    items: [
      {
        title: "They're becoming frustrated much more easily.",
        lines: [
          "A small mistake leads to visible frustration.",
          "Body language changes.",
          "The next few minutes become harder than they needed to be.",
          "It begins happening more often.",
          "Frustration is a natural emotion.",
          "Learning how to respond to it is a skill that develops over time.",
        ],
      },
      {
        title: "They've stopped enjoying the sport they once loved.",
        lines: [
          "They still train.",
          "They still compete.",
          "But something feels different.",
          "The excitement has faded.",
          "What once brought energy now feels like pressure.",
          "They participate because they feel they should.",
          "Not because they want to.",
          "Many athletes go through periods like this.",
          "Understanding what's changed is often the first step.",
        ],
      },
      {
        title: "They're talking about quitting.",
        lines: [
          "Sometimes it's after a difficult competition.",
          "Sometimes after selection.",
          "Sometimes quietly on the drive home.",
          "“I don't think I want to do this anymore.”",
          "You don't know whether it's frustration.",
          "Or something deeper.",
          "Many young athletes think about quitting at some point.",
          "Understanding why they're saying it is often more important than the words themselves.",
        ],
      },
      {
        title: "We're not sure if it's time to seek support.",
        lines: [
          "You've noticed changes.",
          "You've had conversations.",
          "You've tried encouraging them.",
          "Some days things improve.",
          "Other days they don't.",
          "You're simply wondering whether talking to someone might help.",
          "Many families reach this point.",
          "Seeking support isn't about assuming something is wrong.",
          "It's about understanding what your child may need to keep developing with confidence.",
        ],
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
        imageAlt="A young cricketer looking out at the field during a tense match"
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
            alt="A young athlete sitting alone in an empty gym"
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
                <p className="font-serif italic text-white/80 mb-6 max-w-sm">{c.intro}</p>
              </div>
            </div>
            <ul className="divide-y divide-white/10 border-t border-white/10 md:border-t-0">
              {c.items.map((item, i) => (
                <ExpandablePointer
                  key={item.title}
                  n={String(ci * 4 + i + 1).padStart(2, "0")}
                  title={item.title}
                  lines={item.lines}
                />
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <section className="bg-cream-2 py-16 text-center">
        <Container className="max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl mb-3">Seeing something familiar?</h3>
          <p className="text-sm text-muted mb-3">
            Many of these experiences are a normal part of growing up in sport. Sometimes they pass with time,
            experience and support. Sometimes they become recurring patterns.
          </p>
          <p className="text-sm text-muted">
            If you&apos;ve recognised your child in several of these experiences, talking to someone can help you
            better understand what they&apos;re going through.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-serif text-2xl mb-3">Finding the right support can make a meaningful difference.</h3>
            <p className="text-sm text-muted max-w-md mb-6">
              Every young athlete is different. The support they need should be too. YovoEdge helps families connect
              with qualified sports counsellors and sports psychologists whose experience aligns with the unique
              needs of each athlete.
            </p>
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
