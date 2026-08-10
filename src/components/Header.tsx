"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";

const NAV = [
  { href: "/understanding-young-athletes", label: "Understanding Young Athletes" },
  { href: "/finding-support", label: "Could Support Help?" },
  { href: "/our-principles", label: "Our Principles" },
];

export function Header({ dark = true }: { dark?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkColor = dark ? "text-white/80 hover:text-white" : "text-ink/70 hover:text-ink";
  const activeColor = dark ? "text-white" : "text-ink";
  const logoColor = dark ? "text-white" : "text-ink";

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-30 ${dark ? "" : "relative border-b border-line bg-paper"}`}
    >
      {dark && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />
      )}
      <Container className="relative flex items-center justify-between py-6">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dark ? "/logo/logo-mark-dark.png" : "/logo/logo-mark-light.png"}
            alt="YovoEdge"
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${pathname === item.href ? activeColor + " underline underline-offset-8" : linkColor} transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/connect"
            className={`text-sm border-b pb-0.5 ${dark ? "text-white border-white/60 hover:border-white" : "text-ink border-ink/60 hover:border-ink"} transition-colors`}
          >
            Contact Us &nbsp;→
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className={`md:hidden ${logoColor}`}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </Container>

      {open && (
        <div className="md:hidden bg-ink text-white">
          <Container className="flex flex-col gap-4 py-6">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-white/90">
                {item.label}
              </Link>
            ))}
            <Link href="/connect" onClick={() => setOpen(false)} className="text-white">
              Contact Us →
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
