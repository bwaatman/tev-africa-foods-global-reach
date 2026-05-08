import { ArrowRight, Sprout, Target } from "lucide-react";
import { Link } from "@tanstack/react-router";
import farmerImg from "@/assets/about-farmer.jpg";
import factoryImg from "@/assets/about-factory.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <Reveal>
          <div className="relative h-[480px] md:h-[600px]">
            <div className="absolute left-0 top-0 h-3/4 w-3/4 overflow-hidden rounded-3xl shadow-card">
              <img src={farmerImg} alt="African farmer" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute bottom-0 right-0 h-2/3 w-2/3 overflow-hidden rounded-3xl border-8 border-cream shadow-card">
              <img src={factoryImg} alt="Modern food facility" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 left-4 z-10 flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-card md:left-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-warm text-primary-foreground">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-2xl font-medium leading-none">100%</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">Farm Sourced</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.15}>
          <div className="flex h-full flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              About TEV Africa Foods
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Rooted in Africa.<br />
              <span className="italic text-primary">Trusted</span> worldwide.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From our base in Malawi, TEV Africa Foods bridges the gap between Africa's most
              fertile farmlands and global markets. We partner with smallholder farmers across
              Dedza, Kasungu, and Mangochi, and operate modern processing and seed multiplication
              facilities at Chankhandwe Farm — backed by research collaborations with IITA, CIAT,
              and ICRISAT.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg">Our Mission</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    To champion African agriculture on the world stage by delivering quality,
                    traceable, and sustainable food products to communities everywhere.
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
