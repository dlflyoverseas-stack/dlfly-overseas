import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, SiteLayout } from "@/components/dlfly-site";

export const Route = createFileRoute("/visa")({
  head: () => ({
    meta: [
      { title: "Visa Application Guidance | DLFLY Overseas" },
      { name: "description", content: "Get organised for your visa application with destination-specific document and preparation guidance from DLFLY Overseas." },
      { property: "og:title", content: "Visa Application Guidance | DLFLY Overseas" },
      { property: "og:description", content: "Understand your application steps and move forward with a clearer plan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisaPage,
});

function VisaPage() {
  return <SiteLayout><ServicePage service="visa" /></SiteLayout>;
}