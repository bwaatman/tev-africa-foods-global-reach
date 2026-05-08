import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEV Africa Foods — Premium African Food Products from Malawi" },
      {
        name: "description",
        content:
          "TEV Africa Foods sources, processes, and distributes premium grains, cooking oil, cassava, maize meal, and packaged foods from Malawi to global markets.",
      },
      { property: "og:title", content: "TEV Africa Foods — Premium African Food Products" },
      {
        property: "og:description",
        content: "Sourcing, processing, and distributing quality African food products to the world.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Products />
    </>
  );
}
