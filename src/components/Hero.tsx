import { ReactNode } from "react";
import { Header } from "./Header";
import { Container } from "./Container";

export function Hero({
  eyebrow,
  title,
  italicLine,
  description,
  cta,
  note,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  italicLine?: ReactNode;
  description?: ReactNode;
  cta?: ReactNode;
  note?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Header dark />
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={imageAlt || ""}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      )}
      {image && (
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,10,8,0.75)_0%,rgba(10,10,8,0.55)_30%,rgba(10,10,8,0.15)_50%,rgba(10,10,8,0.05)_65%,transparent_100%)]" />
      )}
      {!image && <div className="absolute inset-0 bg-black/20" />}
      <Container className="relative pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="uppercase text-xs tracking-[0.2em] text-white/60 mb-4">{eyebrow}</p>
          )}
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">{title}</h1>
          {italicLine && (
            <p className="font-serif italic text-xl md:text-2xl text-white/90 mb-6 leading-snug">
              {italicLine}
            </p>
          )}
          <div className="section-line bg-white/50 mb-6" />
          {description && <p className="text-white/75 max-w-md mb-8">{description}</p>}
          {cta}
          {note && <p className="text-xs text-white/50 mt-10 tracking-wide">{note}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
