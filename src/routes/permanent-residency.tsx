import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, SiteLayout } from "@/components/dlfly-site";

export const Route = createFileRoute("/permanent-residency")({
  head: () => ({
    meta: [
      { title: "Permanent Residency Guidance | DLFLY Overseas" },
      { name: "description", content: "Explore general permanent residency pathways and plan your preparation with DLFLY Overseas." },
      { property: "og:title", content: "Permanent Residency Guidance | DLFLY Overseas" },
      { property: "og:description", content: "Understand residency preparation and find your next step abroad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PermanentResidencyPage,
});

function PermanentResidencyPage() {
  return <SiteLayout><ServicePage service="residency" /></SiteLayout>;
}