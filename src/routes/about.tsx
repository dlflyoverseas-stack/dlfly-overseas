import { createFileRoute } from "@tanstack/react-router";
import { AboutPage, SiteLayout } from "@/components/dlfly-site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About DLFLY Overseas | Education Guidance" },
      { name: "description", content: "Meet DLFLY Overseas and learn about our thoughtful approach to study abroad, visa and education planning." },
      { property: "og:title", content: "About DLFLY Overseas" },
      { property: "og:description", content: "Thoughtful support for students and families planning a future abroad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutRoutePage,
});

function AboutRoutePage() {
  return <SiteLayout><AboutPage /></SiteLayout>;
}