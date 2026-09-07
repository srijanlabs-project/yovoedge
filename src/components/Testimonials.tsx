"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Aarav was a strong swimmer in practice, but under pressure at competitions, he would not be able to give his personal best. After a few sessions through YovoEdge, he's actually looking forward to competing. I only wish we'd found this two years ago.",
    name: "Neha S.",
    role: "Parent of a 13-year-old swimmer, Pune",
  },
  {
    quote:
      "As a parent, you can see your kid struggling but have no idea where to turn. A coach handles technique, not the head. YovoEdge matched us with someone who actually understood junior athletes. My daughter talks about her sessions like they're the highlight of her week.",
    name: "Rajesh & Meera K.",
    role: "Parents of a 15-year-old tennis player, Mumbai",
  },
  {
    quote:
      "I was nervous about the whole idea of a 'sports psychologist' for an 11-year-old. It felt like a big word for a small kid. But it was gentle, age-appropriate, and completely changed how he handles losing. No more meltdowns after a bad game now.",
    name: "Farida H.",
    role: "Parent of an 11-year-old footballer, Mumbai",
  },
  {
    quote:
      "The matching was the part that surprised me. We got paired with a counsellor who'd worked with badminton players before, so she just got the pressure my son was under. That really helped.",
    name: "Vikram Shah",
    role: "Parent of a 13-year-old badminton player, Hyderabad",
  },
  {
    quote:
      "Before YovoEdge, a bad competition could stay with my son for days. He'd replay points, question his decisions and sometimes lose motivation for the next tournament. We used to tell him, 'Forget about it, it's just sport.' That never really helped. The specialist helped him understand why he was getting stuck and gave him a way to work through it. Now he can actually reflect on a match without getting consumed by it. He's learning to deal with disappointment himself, rather than needing us to fix it for him.",
    name: "Neha S.",
    role: "Parent of a 14-year-old basketball player",
  },
  {
    quote:
      "I was initially hesitant about the idea of sports counselling. I didn't think there was anything 'wrong' with my daughter, and I didn't want her to feel that way either. What changed my mind was understanding that this wasn't about fixing a problem. It was about giving her tools to compete better. She learned what happens to her when she gets nervous, how to reset after a mistake and how to bring her attention back to what she can control. She now talks about these things herself. That, to me, is the biggest change.",
    name: "Rajesh Parekh",
    role: "Parent of a 15-year-old badminton player",
  },
  {
    quote:
      "We kept thinking he needed more practice. His coach would tell us he was capable of playing at a much higher level, but somehow it wasn't showing up in tournaments. YovoEdge helped us understand that the problem wasn't his ability. He was struggling with what happened when the pressure came on. Once he started working on that, we began seeing a difference. He doesn't suddenly win every match. But he recovers from mistakes much faster, and he seems to trust himself again.",
    name: "Farida Khan",
    role: "Parent of a 12-year-old tennis player",
  },
  {
    quote:
      "The biggest change wasn't that he became less nervous. It was that he stopped being afraid of being nervous. He now has a way to reset, refocus and get back to his game.",
    name: "Arun Seth",
    role: "Parent of a 15-year-old cricketer",
  },
];

const GROUP_SIZE = 3;
const AUTO_ADVANCE_MS = 6500;

// Build fixed-size pages of 3. The final page wraps around and borrows from
// the start of the list so every page renders exactly three cards, which
// keeps the sliding track a clean, even loop.
const PAGES: Testimonial[][] = (() => {
  const pages: Testimonial[][] = [];
  const total = TESTIMONIALS.length;
  const pageCount = Math.ceil(total / GROUP_SIZE);
  for (let p = 0; p < pageCount; p++) {
    const page: Testimonial[] = [];
    for (let i = 0; i < GROUP_SIZE; i++) {
      page.push(TESTIMONIALS[(p * GROUP_SIZE + i) % total]);
    }
    pages.push(page);
  }
  return pages;
})();

export function Testimonials() {
  const [page, setPage] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setPage((p) => (p + 1) % PAGES.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-cream-2 py-20 border-t border-line overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Testimonials</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What parents are saying</h2>
          <div className="section-line mx-auto" />
        </div>

        <div
          className="overflow-hidden"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${PAGES.length * 100}%`,
              transform: `translateX(-${page * (100 / PAGES.length)}%)`,
            }}
          >
            {PAGES.map((group, pi) => (
              <div
                key={pi}
                className="grid md:grid-cols-3 gap-6 items-start shrink-0"
                style={{ width: `${100 / PAGES.length}%` }}
              >
                {group.map((t, ti) => (
                  <figure
                    key={`${pi}-${ti}-${t.name}`}
                    className="bg-paper border border-line rounded-xl p-8 flex flex-col h-full"
                  >
                    <span aria-hidden className="font-serif text-4xl text-olive/50 leading-none mb-3">
                      &ldquo;
                    </span>
                    <blockquote className="text-sm text-muted leading-relaxed flex-1">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 pt-6 border-t border-line">
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted mt-0.5">{t.role}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {PAGES.map((_, pi) => (
            <button
              key={pi}
              aria-label={`Show testimonials ${pi + 1}`}
              onClick={() => setPage(pi)}
              className={`h-1.5 rounded-full transition-all ${
                pi === page ? "w-6 bg-olive" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
