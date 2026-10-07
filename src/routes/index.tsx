import { createFileRoute } from "@tanstack/react-router";
import { HomePage, SiteLayout } from "@/components/dlfly-site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DLFLY Overseas | Study Abroad & Visa Guidance" },
      { name: "description", content: "Plan your future abroad with DLFLY Overseas. Get guidance for international study, visas, permanent residency and education loans." },
      { property: "og:title", content: "DLFLY Overseas | Study Abroad & Visa Guidance" },
      { property: "og:description", content: "Thoughtful guidance for study abroad, visas, permanent residency and education finance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return <SiteLayout><HomePage /></SiteLayout>;
}
