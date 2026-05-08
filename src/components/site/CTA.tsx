import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contact" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-cta px-8 py-16 shadow-glow md:px-16 md:py-24">
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }} />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Let's Build Together
              </span>
              <h2 className="mt-4 text-balance font-display text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Partner With <span className="italic text-accent">TEV Africa</span> Foods
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Whether you're a distributor, retailer, or food brand, we're ready to deliver
                premium African food products at scale, on time, every time.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:partners@tevafrica.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-charcoal shadow-warm transition-transform hover:scale-[1.03]"
                >
                  Become a Partner
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  View Product Catalog
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
