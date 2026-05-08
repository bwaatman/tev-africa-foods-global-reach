import { Award, Truck, MapPin, ShieldCheck, Leaf, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Award, title: "Premium Quality", desc: "Every batch tested and certified to international food safety standards." },
  { icon: Truck, title: "Reliable Distribution", desc: "Door-to-door logistics across 28+ countries with full traceability." },
  { icon: MapPin, title: "African Excellence", desc: "Authentically sourced from the continent's richest agricultural regions." },
  { icon: ShieldCheck, title: "International Standards", desc: "ISO, HACCP, Halal, and Global GAP certified end-to-end." },
  { icon: Leaf, title: "Sustainable Sourcing", desc: "Direct partnerships with farmers practicing regenerative agriculture." },
  { icon: Handshake, title: "Trusted Partnerships", desc: "Long-term relationships with retailers, wholesalers, and food brands." },
];

export function WhyChooseUs() {
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      {/* Bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.74 0.17 55 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.42 0.11 155 / 0.6), transparent 50%)"
      }} />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Built on quality. Delivered with <span className="italic text-accent">care</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Six reasons leading food brands and distributors partner with TEV Africa Foods.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass-dark p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent ring-1 ring-accent/30 transition-all group-hover:bg-accent group-hover:text-charcoal">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
