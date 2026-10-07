import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, SiteLayout } from "@/components/dlfly-site";

export const Route = createFileRoute("/education-loans")({
  head: () => ({
    meta: [
      { title: "Education Loans for Overseas Study | DLFLY Overseas" },
      { name: "description", content: "Plan overseas study costs and explore education loan options with practical document guidance from DLFLY Overseas." },
      { property: "og:title", content: "Education Loan Guidance | DLFLY Overseas" },
      { property: "og:description", content: "Bring your study budget into focus with support exploring education finance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EducationLoansPage,
});

function EducationLoansPage() {
  return <SiteLayout><ServicePage service="loans" /></SiteLayout>;
}