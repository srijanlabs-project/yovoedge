import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";

export function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="relative bg-ink text-white">
        <Header dark />
        <Container className="pt-40 pb-16">
          <h1 className="font-serif text-4xl mb-2">{title}</h1>
          <p className="text-white/60 text-sm">Last updated: {lastUpdated}</p>
        </Container>
      </section>
      <section className="bg-cream py-16">
        <Container className="max-w-3xl prose-legal">{children}</Container>
      </section>
      <Footer />
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-serif text-xl mt-10 mb-3 first:mt-0">{children}</h2>;
}
export function P({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted mb-4 leading-relaxed">{children}</p>;
}
export function Ul({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 text-sm text-muted mb-4 space-y-1">{children}</ul>;
}
