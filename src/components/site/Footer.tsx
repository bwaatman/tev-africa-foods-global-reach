import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols: { title: string; links: { label: string; to: "/" | "/about" | "/products" | "/services" | "/sustainability" | "/contact" }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Sustainability", to: "/sustainability" },
      { label: "Services", to: "/services" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Cassava & Seed", to: "/products" },
      { label: "Cooking Oil", to: "/products" },
      { label: "Maize Meal", to: "/products" },
      { label: "Groundnuts", to: "/products" },
      { label: "Packaged Foods", to: "/products" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        {/* Newsletter */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md md:flex-row md:items-center md:p-10">
          <div className="max-w-md">
            <h3 className="font-display text-2xl md:text-3xl">Stay in the loop</h3>
            <p className="mt-2 text-sm text-white/60">
              Quarterly updates on harvests, new products, and sustainability progress.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <button className="group inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-charcoal transition-transform hover:scale-105">
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              An integrated agribusiness sourcing, processing, and distributing premium African
              food products from Malawi to the world.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all hover:border-accent hover:bg-accent hover:text-charcoal"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/80 transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                Chankhandwe Farm · Lilongwe, Malawi
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                hello@tevafrica.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                +265 (0) 1 000 000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <div>© {new Date().getFullYear()} TEV Africa Foods. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
