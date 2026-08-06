import Link from "next/link";
import { Container } from "./Container";

const BELIEFS = [
  "We believe mental skills can be developed.",
  "We believe every athlete's experience is unique.",
  "We believe asking for support should never carry stigma.",
  "We believe the right practitioner is about fit, not simply qualifications.",
  "We believe young athletes thrive when parents, coaches and practitioners work together.",
  "We believe supporting the person is just as important as developing the athlete.",
];

export function Footer() {
  return (
    <footer className="bg-cream-2 border-t border-line">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr] items-start">
          <div>
            <h3 className="text-xl font-semibold mb-3">You don&apos;t have to figure this out alone.</h3>
            <p className="text-sm text-muted mb-2 max-w-md">
              Finding the right support can feel overwhelming, especially when you&apos;re not sure where to begin.
            </p>
            <p className="text-sm text-muted mb-5 max-w-md">
              YovoEdge helps families connect with qualified sports counsellors and sports psychologists whose
              experience aligns with the needs of each young athlete.
            </p>
            <Link href="/get-started" className="text-sm font-medium border-b border-ink/60 pb-0.5">
              Find the Right Practitioner →
            </Link>
          </div>
          <div className="hidden md:block w-px h-full bg-line" />
          <div>
            <p className="text-sm text-muted mb-1">You can connect with us at</p>
            <a href="mailto:hello@yovoedge.com" className="underline text-sm">
              hello@yovoedge.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-line grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <h4 className="font-serif text-2xl mb-2">What We Believe at YovoEdge</h4>
            <div className="section-line mb-4" />
            <p className="text-sm text-muted max-w-xs">
              Our beliefs guide the way we work with families, practitioners and, most importantly, young athletes.
            </p>
          </div>
          <ul className="divide-y divide-line text-sm">
            {BELIEFS.map((b) => (
              <li key={b} className="py-3">
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div>
            <span className="font-serif text-lg text-ink block">YovoEdge</span>
            Helping young athletes find the right support.
          </div>
          <div className="flex gap-6">
            <Link href="/connect" className="hover:text-ink">Contact</Link>
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
          </div>
          <div>© {new Date().getFullYear()} YovoEdge</div>
        </div>
      </Container>
    </footer>
  );
}
