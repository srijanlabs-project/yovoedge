import Link from "next/link";
import { Container } from "./Container";

function ItemIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-4 h-4 shrink-0 mt-0.5 text-muted">
      {children}
    </span>
  );
}

const HELP_WITH = [
  {
    label: "Competition anxiety",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h8A1.5 1.5 0 0 1 14 5.5v4A1.5 1.5 0 0 1 12.5 11H8l-3 2.5V11H4.5A1.5 1.5 0 0 1 3 9.5v-4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M17 8v3.5A1.5 1.5 0 0 1 15.5 13H15v2l-2.2-2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Confidence and self-belief",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M3 13.5 8 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 4.5H17V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Performance pressure",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M3.5 14.5a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10 14.5 12.8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="10" cy="14.5" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Fear of failure",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 7v3.5l2.3 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 2.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Balancing sport and academics",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M10 3v13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M4 5h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M4 5 2 9a2.5 2.5 0 0 0 5 0L4 5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M16 5l-2 4a2.5 2.5 0 0 0 5 0l-3-4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M7 17h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Motivation and burnout",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2c-1.2 2.7-3.8 3.6-3.8 7a3.8 3.8 0 0 0 7.6 0c0-1.6-.7-2.5-.7-2.5s-.2 1.5-1 1.5c0-2.5-2.1-3.3-2.1-6Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const WHO_FOR = [
  {
    label: "Recreational athletes",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M4 17c0-4 2.7-6 6-6s6 2 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Competitive athletes",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="8" cy="6" r="2.8" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2.5 17c0-3.3 2.4-5.5 5.5-5.5s5.5 2.2 5.5 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M14.3 12.2l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3.9-1.8Z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Academy players",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="6.5" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="13.5" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 17c0-2.8 2-4.8 4.5-4.8S11 14.2 11 17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M9.5 17c0-2.8 2-4.8 4.5-4.8s4.5 2 4.5 4.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "State and national-level athletes",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M10 2.5 15.5 4.5v4.7c0 4.5-5.5 8.3-5.5 8.3s-5.5-3.8-5.5-8.3V4.5L10 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Every young athlete on their own journey",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.2" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2.2 2.2" />
        <circle cx="10" cy="8.3" r="1.9" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6.3 14.5c0-2.2 1.7-3.6 3.7-3.6s3.7 1.4 3.7 3.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  {
    title: "Understand your athlete",
    body: "Get clarity on what they're experiencing.",
  },
  {
    title: "Explore specialists",
    body: "Browse verified mental performance professionals.",
  },
  {
    title: "Find the right fit",
    body: "Choose someone your child connects with.",
  },
  {
    title: "Build mental skills over time",
    body: "Track progress and grow with support.",
  },
];

function ColumnHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-5 text-olive">
      {icon}
      <p className="text-xs font-medium uppercase tracking-[0.15em]">{children}</p>
    </div>
  );
}

export function HomeHighlights() {
  return (
    <section className="bg-cream py-20 border-t border-line">
      <Container className="grid md:grid-cols-3 gap-12 md:gap-0 md:divide-x md:divide-line">
        <div className="md:pr-10">
          <ColumnHeading
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.4" />
                <path d="M9 13h6M9 17h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            }
          >
            What We Help With
          </ColumnHeading>
          <ul className="space-y-3 text-sm">
            {HELP_WITH.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <ItemIcon>{item.icon}</ItemIcon>
                {item.label}
              </li>
            ))}
          </ul>
          <p className="text-sm italic text-muted mt-4">And more.</p>
        </div>

        <div className="md:px-10">
          <ColumnHeading
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
                <path d="M3.5 20c.7-3.3 3-5 5.5-5s4.8 1.7 5.5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.4" />
                <path d="M15.5 20c.5-2.6 2-4 3.8-4.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            }
          >
            Who It&apos;s For
          </ColumnHeading>
          <ul className="space-y-3 text-sm">
            {WHO_FOR.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <ItemIcon>{item.icon}</ItemIcon>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pl-10">
          <ColumnHeading
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            }
          >
            How YovoEdge Works
          </ColumnHeading>
          <ol className="space-y-4">
            {HOW_IT_WORKS.map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="w-6 h-6 shrink-0 rounded-full bg-olive text-white flex items-center justify-center text-xs mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-sm text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="inline-block text-sm text-olive mt-5 underline underline-offset-4">
            Learn more about our approach →
          </Link>
        </div>
      </Container>
    </section>
  );
}
