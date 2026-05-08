import { Sun, Sprout, Users, Recycle } from "lucide-react";
import sustainImg from "@/assets/sustainability.jpg";
import { Reveal } from "./Reveal";

const pillars = [
  { icon: Sun, title: "Green Energy", desc: "Solar-powered facilities reducing our carbon footprint." },
  { icon: Sprout, title: "Responsible Sourcing", desc: "Direct partnerships with regenerative farms." },
  { icon: Users, title: "Community Impact", desc: "Fair trade and education programs for farmers." },
  { icon: Recycle, title: "Eco Responsibility", desc: "Recyclable packaging and zero-waste operations." },
];

export function Sustainability() {
  return (
    <section id="sustainability" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="overflow-hidden rounded-3xl shadow-card">
          <div className="relative grid lg:grid-cols-2">
            <div className="relative min-h-[360px] lg:min-h-[640px]">
              <img src={sustainImg} alt="Sustainable farming" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl glass p-4 lg:bottom-auto lg:top-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Sprout className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg leading-none">Carbon Neutral by 2030</div>
                  <div className="mt-1 text-xs text-muted-foreground">Our public commitment.</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 md:p-12 lg:p-16">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Sustainability
                </span>
                <h2 className="mt-4 text-balance font-display text-4xl leading-tight tracking-tight md:text-5xl">
                  Growing food.<br />
                  <span className="italic text-primary">Growing futures.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  Sustainability isn't a trend at TEV Africa Foods, it's our license to operate.
                  From solar-powered processing to community programs, we invest in the long-term
                  health of land, people, and planet.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {pillars.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.08}>
                    <div className="group rounded-2xl border border-border p-5 transition-all hover:border-primary/30 hover:bg-primary-soft/40">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <p.icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="font-display text-lg leading-tight">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
