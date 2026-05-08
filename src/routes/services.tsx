import { createFileRoute } from "@tanstack/react-router";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TEV Africa Foods" },
      {
        name: "description",
        content:
          "Outgrower schemes, seed multiplication, processing, packaging, and global distribution — TEV Africa Foods' end-to-end agribusiness services.",
      },
      { property: "og:title", content: "Services — TEV Africa Foods" },
      { property: "og:description", content: "End-to-end agribusiness, from soil to shelf." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title={<>Built on quality. Delivered with <span className="italic text-accent">care</span>.</>}
        description="From outgrower partnerships and SAH cassava multiplication to processing and global export logistics."
      />
      <WhyChooseUs />
      <Process />
      <CTA />
    </>
  );
}
