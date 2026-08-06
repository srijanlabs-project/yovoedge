"use client";

import { useState } from "react";

type Step = {
  n: number;
  title: string;
  body: string;
  note?: string;
  highlight?: string;
};

export function StepsAccordion({ steps }: { steps: readonly Step[] }) {
  const [openN, setOpenN] = useState<number | null>(steps[0]?.n ?? null);

  return (
    <div className="divide-y divide-line">
      {steps.map((s) => {
        const isOpen = openN === s.n;
        return (
          <div key={s.n}>
            <button
              type="button"
              onClick={() => setOpenN(isOpen ? null : s.n)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-4 py-4 text-left cursor-pointer"
            >
              <span className="w-8 h-8 shrink-0 rounded-full bg-olive text-white flex items-center justify-center text-sm">
                {s.n}
              </span>
              <span className="flex-1 font-medium text-sm md:text-base">{s.title}</span>
              <span
                className={`text-olive text-lg shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-5 pl-12 pr-2 text-sm text-muted space-y-3">
                  <p>{s.body}</p>
                  {s.highlight && (
                    <div className="bg-cream border border-line rounded-lg p-4 text-ink/80">{s.highlight}</div>
                  )}
                  {s.note && <p className="text-xs text-muted/80">{s.note}</p>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
