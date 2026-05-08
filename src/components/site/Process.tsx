import { Sprout, Factory, PackageCheck, Globe2 } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: Sprout, title: "Source", desc: "Hand-picked from trusted African farms." },
  { icon: Factory, title: "Process", desc: "Refined in modern, certified facilities." },
  { icon: PackageCheck, title: "Package", desc: "Sealed for freshness and export." },
  { icon: Globe2, title: "Distribute", desc: "Delivered to global markets on time." },
];

export function Process() {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              How We Work
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
              From soil to <span className="italic text-primary">shelf</span>, with care.
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative text-center lg:text-left">
                  <div className="relative inline-flex">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-cta text-primary-foreground shadow-glow transition-transform duration-500 hover:rotate-6">
                      <s.icon className="h-8 w-8" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-charcoal ring-4 ring-background">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
