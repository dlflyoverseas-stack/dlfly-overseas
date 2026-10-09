import { ArrowUpRight } from "lucide-react";
import {
  destinationEnquiryLink,
  europeanStudyDestinations,
  otherStudyDestinations,
} from "@/data/study-destinations";

function DestinationLink({ code, name }: { code: string; name: string }) {
  return (
    <a
      href={destinationEnquiryLink(name)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Discuss studying in ${name} on WhatsApp (opens in a new tab)`}
      className="brand-destination-card group flex h-full min-w-0 flex-col gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:flex-row sm:items-center sm:gap-4 sm:p-4"
    >
      <span className="flex h-10 w-16 shrink-0 items-center justify-center">
        <img
          src={`/images/flags/${code}.svg`}
          alt={`Flag of ${name}`}
          width={64}
          height={40}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
        <span className="font-display text-sm font-extrabold leading-5 sm:text-base">{name}</span>
        <ArrowUpRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
      </span>
    </a>
  );
}

export function StudyDestinations() {
  return (
    <section
      id="study-destinations"
      aria-labelledby="study-destinations-heading"
      className="brand-dark brand-destinations scroll-mt-28 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-6 sm:py-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">
          Find your destination
        </p>
        <h2
          id="study-destinations-heading"
          className="font-display text-2xl font-extrabold leading-tight sm:text-3xl"
        >
          Explore study destinations in Europe
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">
          Choose a country to discuss your course interests, application preparation and next steps
          with our team.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {europeanStudyDestinations.map((destination) => (
            <li key={destination.code} className="min-w-0 last:col-span-2 sm:last:col-span-1">
              <DestinationLink {...destination} />
            </li>
          ))}
        </ul>
        <h3 className="mb-3 mt-6 text-sm font-bold">More study destinations</h3>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {otherStudyDestinations.map((destination) => (
            <li key={destination.code} className="min-w-0">
              <DestinationLink {...destination} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
