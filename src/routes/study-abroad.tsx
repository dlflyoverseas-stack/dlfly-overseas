import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, SiteLayout } from "@/components/dlfly-site";

export const Route = createFileRoute("/study-abroad")({
  head: () => ({
    meta: [
      { title: "Study Abroad Guidance | DLFLY Overseas" },
      { name: "description", content: "Explore courses and universities abroad with practical application and pre-departure guidance from DLFLY Overseas." },
      { property: "og:title", content: "Study Abroad Guidance | DLFLY Overseas" },
      { property: "og:description", content: "Find a course and campus that fit your ambitions, with guidance for every step." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudyAbroadPage,
});

function StudyAbroadPage() {
  return <SiteLayout><ServicePage service="study" /></SiteLayout>;
}