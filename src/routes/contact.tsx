import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TEV Africa Foods" },
      {
        name: "description",
        content:
          "Get in touch with TEV Africa Foods. Partner with us for premium African food products, distribution, and outgrower programs.",
      },
      { property: "og:title", content: "Contact TEV Africa Foods" },
      { property: "og:description", content: "Let's build together." },
    ],
  }),
  component: ContactPage,
});

const contacts = [
  { icon: MapPin, title: "Visit", lines: ["Chankhandwe Farm", "Lilongwe, Malawi"] },
  { icon: Mail, title: "Email", lines: ["hello@tevafrica.com", "partners@tevafrica.com"] },
  { icon: Phone, title: "Call", lines: ["+265 (0) 1 000 000", "Mon–Fri · 8am–5pm CAT"] },
];

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="italic text-accent">build</span> together.</>}
        description="Whether you're a distributor, retailer, food brand, or research partner — we'd love to hear from you."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5 lg:gap-16">
          <Reveal>
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl">Get in touch</h2>
              <p className="mt-3 text-muted-foreground">
                Reach our team directly. We typically reply within one business day.
              </p>
              <div className="mt-10 space-y-6">
                {contacts.map((c) => (
                  <div key={c.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {c.title}
                      </div>
                      {c.lines.map((l) => (
                        <div key={l} className="text-base text-foreground">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-card md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Doe" />
                <Field label="Company" name="company" placeholder="Acme Foods" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Phone" name="phone" placeholder="+1 555 000 0000" />
              </div>
              <div className="mt-5">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your needs..."
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
