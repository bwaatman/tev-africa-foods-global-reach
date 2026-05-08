import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-farm.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="African farmland at sunrise"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/55 to-charcoal/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />
      </div>

      {/* Floating decorative blobs */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-float-slow" style={{ animationDelay: "1.5s" }} />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-32 pb-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/90 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Premium African Food Exports
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-balance font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Delivering Quality{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic text-accent">African</span>
            <svg
              className="absolute -bottom-2 left-0 z-0 h-3 w-full text-accent/40"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
            >
              <path d="M0 8 Q 50 0 100 6 T 200 6" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </span>{" "}
          Food Products To The World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl"
        >
          From fertile African farms to international shelves, TEV Africa Foods sources, processes,
          and distributes premium grains, oils, and packaged foods with uncompromising quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-charcoal shadow-warm transition-all hover:scale-[1.03] hover:shadow-2xl"
          >
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <Play className="h-3 w-3 fill-white" />
            </span>
            Contact Us
          </a>
        </motion.div>

        {/* Inline trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-x-10 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4"
        >
          {[
            ["ISO", "Certified"],
            ["HACCP", "Compliant"],
            ["Halal", "Approved"],
            ["Global", "GAP"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-display text-xl text-white">{k}</div>
              <div className="text-xs uppercase tracking-widest text-white/60">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 90" className="block h-[60px] w-full md:h-[90px]" preserveAspectRatio="none">
          <path d="M0 90 Q 720 0 1440 90 L 1440 90 L 0 90 Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  );
}
