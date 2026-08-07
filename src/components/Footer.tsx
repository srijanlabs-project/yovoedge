import Link from "next/link";
import { Container } from "./Container";

const BELIEFS = [
  "Some athletes come to prepare for an important competition.",
  "Some come to build confidence.",
  "Some come after setbacks or injuries.",
  "Some simply want to become the best version of themselves.",
  "There's no single reason to seek support and no single path through sport.",
];

export function Footer() {
  return (
    <footer className="bg-cream-2 border-t border-line">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr] items-start">
          <div>
            <h3 className="text-xl font-semibold mb-3">Behind every athlete is a support system.</h3>
            <p className="text-sm text-muted mb-2 max-w-md">
              Mental skills are part of every athlete&apos;s development, just like coaching, training and recovery.
            </p>
            <p className="text-sm text-muted mb-5 max-w-md">
              YovoEdge helps families connect with sports counsellors and psychologists who understand competition,
              confidence and the challenges of growing up in sport.
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
              Mental performance support isn&apos;t about fixing problems. It&apos;s about unlocking potential.
            </p>
          </div>
          <div>
            <p className="font-medium text-sm mb-1">Support looks different for every athlete</p>
            <ul className="divide-y divide-line text-sm">
              {BELIEFS.map((b) => (
                <li key={b} className="py-3">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/logo-mark-light.png" alt="YovoEdge" className="h-7 w-auto mb-1" />
            Think sharp. Play sharper.
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
