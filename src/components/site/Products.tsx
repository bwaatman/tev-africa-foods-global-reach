import { ArrowUpRight } from "lucide-react";
import grains from "@/assets/product-grains.jpg";
import oil from "@/assets/product-oil.jpg";
import maize from "@/assets/product-maize.jpg";
import rice from "@/assets/product-rice.jpg";
import flour from "@/assets/product-flour.jpg";
import packaged from "@/assets/product-packaged.jpg";
import { Reveal } from "./Reveal";

const products = [
  { title: "Grains", desc: "Premium-grade sorghum, millet, and wheat sourced from trusted farms.", img: grains, tag: "Bulk" },
  { title: "Cooking Oil", desc: "Pure, refined vegetable and palm oil for kitchens and food services.", img: oil, tag: "Refined" },
  { title: "Maize Meal", desc: "Finely milled maize flour, the staple of African households.", img: maize, tag: "Staple" },
  { title: "Rice", desc: "Long-grain and parboiled rice, packed for retail and wholesale.", img: rice, tag: "Retail" },
  { title: "Flour", desc: "All-purpose wheat flour milled to international baking standards.", img: flour, tag: "Premium" },
  { title: "Packaged Foods", desc: "Branded, ready-to-distribute food packs for global markets.", img: packaged, tag: "Export" },
];

export function Products() {
  return (
    <section id="products" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Products
            </span>
            <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
              A pantry built on <span className="italic text-accent">African</span> abundance.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Six core categories, dozens of SKUs. Every product is sourced, processed, and packaged
              under strict quality controls.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <article className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-charcoal">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl">{p.title}</h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
