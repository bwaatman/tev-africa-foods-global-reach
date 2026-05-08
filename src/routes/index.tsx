import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { Sustainability } from "@/components/site/Sustainability";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEV Africa Foods — Premium African Food Products, Delivered Worldwide" },
      {
        name: "description",
        content:
          "TEV Africa Foods sources, processes, and distributes premium grains, cooking oil, rice, flour, and packaged foods from Africa to global markets.",
      },
      { property: "og:title", content: "TEV Africa Foods — Premium African Food Products" },
      {
        property: "og:description",
        content: "Sourcing, processing, and distributing quality African food products to the world.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Products />
      <WhyChooseUs />
      <Process />
      <Sustainability />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
