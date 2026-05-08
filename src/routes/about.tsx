import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { Process } from "@/components/site/Process";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TEV Africa Foods" },
      {
        name: "description",
        content:
          "Learn about TEV Africa Foods: an integrated Malawian agribusiness partnering with smallholder farmers across Dedza, Kasungu, and Mangochi.",
      },
      { property: "og:title", content: "About TEV Africa Foods" },
      { property: "og:description", content: "Rooted in Malawi, trusted worldwide." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={<>Rooted in Malawi.<br /><span className="italic text-accent">Trusted</span> worldwide.</>}
        description="An integrated agribusiness building Africa's most reliable food supply chain — from seed multiplication to global distribution."
      />
      <About />
      <Stats />
      <Process />
    </>
  );
}
