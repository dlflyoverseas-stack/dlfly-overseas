import { createFileRoute } from "@tanstack/react-router";
import { ContactPage, SiteLayout } from "@/components/dlfly-site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact DLFLY Overseas | Speak with an Advisor" },
      { name: "description", content: "Contact DLFLY Overseas to discuss your study abroad, visa, residency or education finance plans." },
      { property: "og:title", content: "Contact DLFLY Overseas" },
      { property: "og:description", content: "Start with a conversation about your plans for studying and building a future abroad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactRoutePage,
});

function ContactRoutePage() {
  return <SiteLayout><ContactPage /></SiteLayout>;
}