import { createFileRoute } from "@tanstack/react-router";
import { Products } from "@/components/site/Products";
import { CTA } from "@/components/site/CTA";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — TEV Africa Foods" },
      {
        name: "description",
        content:
          "Explore our product range: cassava and seed, premium grains, cooking oil, maize meal, rice, flour, and packaged foods.",
      },
      { property: "og:title", content: "Products — TEV Africa Foods" },
      { property: "og:description", content: "A pantry built on African abundance." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Products"
        title={<>A pantry built on <span className="italic text-accent">African</span> abundance.</>}
        description="Premium food products sourced from Malawi's most fertile regions and processed to international standards."
      />
      <Products />
      <CTA />
    </>
  );
}
