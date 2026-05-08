import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="absolute inset-0 -z-10 opacity-30" style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, oklch(0.74 0.17 55 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.42 0.11 155 / 0.6), transparent 50%)",
      }} />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </span>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
