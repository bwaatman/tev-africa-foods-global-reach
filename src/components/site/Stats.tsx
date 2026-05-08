import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Award, Globe2, Package, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Award, end: 15, suffix: "+", label: "Years of Experience" },
  { icon: Globe2, end: 28, suffix: "+", label: "Countries Served" },
  { icon: Package, end: 40, suffix: "+", label: "Product Categories" },
  { icon: Handshake, end: 120, suffix: "+", label: "Distribution Partners" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(end * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card md:p-8">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
