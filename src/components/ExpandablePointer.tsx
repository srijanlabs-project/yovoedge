"use client";

import { useEffect, useState } from "react";

export function ExpandablePointer({
  n,
  title,
  lines,
}: {
  n: string;
  title: string;
  lines: string[];
}) {
  const [open, setOpen] = useState(false);
  const preview = lines.join(" ");

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <li className="py-5 flex gap-4">
      <span className="font-serif text-white/40 text-lg w-8 shrink-0">{n}</span>
      <div className="min-w-0">
        <p className="font-medium mb-1">{title}</p>
        <p className="text-sm text-white/60 line-clamp-2">{preview}</p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-xs text-white/80 underline underline-offset-4 mt-1.5 cursor-pointer"
        >
          More
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative bg-cream text-ink rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto p-6 md:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 text-muted hover:text-ink text-xl leading-none cursor-pointer"
            >
              ×
            </button>
            <span className="font-serif text-3xl text-muted/60">{n}</span>
            <p className="font-serif text-xl mt-2 mb-4">{title}</p>
            <div className="space-y-1.5 text-sm text-ink/80">
              {lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
