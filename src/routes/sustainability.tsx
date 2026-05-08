import { createFileRoute } from "@tanstack/react-router";
import { Sustainability } from "@/components/site/Sustainability";
import { CTA } from "@/components/site/CTA";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — TEV Africa Foods" },
      {
        name: "description",
        content:
          "Sustainability at TEV Africa Foods: regenerative farming, community impact, and a path to carbon neutrality by 2030.",
      },
      { property: "og:title", content: "Sustainability — TEV Africa Foods" },
      { property: "og:description", content: "Growing food. Growing futures." },
    ],
  }),
  component: SustainabilityPage,
});

function SustainabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sustainability"
        title={<>Growing food.<br /><span className="italic text-accent">Growing futures.</span></>}
        description="Sustainability isn't a trend at TEV Africa Foods — it's our license to operate."
      />
      <Sustainability />
      <CTA />
    </>
  );
}
