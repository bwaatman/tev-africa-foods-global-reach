import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "TEV Africa Foods has been our most reliable supply partner for premium grains across West Africa. Quality is consistent, deliveries are on time, every time.",
    name: "Aisha Bello",
    role: "Procurement Director",
    company: "Greenleaf Distributors",
    initial: "AB",
  },
  {
    quote:
      "Their cooking oil and maize meal lines have transformed our retail offering. The packaging quality and certifications open doors with international buyers.",
    name: "Marcus Chen",
    role: "Head of Sourcing",
    company: "Pacific Foods Group",
    initial: "MC",
  },
  {
    quote:
      "Working with TEV feels like a true partnership. Transparent sourcing, ethical practices, and a team that truly understands the African export landscape.",
    name: "Sofia Mendes",
    role: "CEO",
    company: "Atlantic Trade Co.",
    initial: "SM",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Testimonials
            </span>
            <h2 className="mt-4 text-balance font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Trusted by partners <span className="italic text-accent">worldwide</span>.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card md:p-14">
            <Quote className="absolute right-8 top-8 h-20 w-20 text-primary-soft md:h-32 md:w-32" />

            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <p className="font-display text-2xl leading-snug text-foreground md:text-3xl lg:text-4xl">
                  "{t.quote}"
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-cta font-display text-lg text-primary-foreground">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === i ? "w-8 bg-primary" : "w-4 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
