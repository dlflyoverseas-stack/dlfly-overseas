import { Check, ChevronDown } from "lucide-react";
import { serviceDetails } from "@/data/service-details";
import { Reveal } from "./reveal";

export function ServiceProcess({ service }: { service: keyof typeof serviceDetails }) {
  const detail = serviceDetails[service];
  return (
    <>
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Your process, step by step
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
              {detail.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              {detail.introduction}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detail.process.map(([title, text], index) => (
              <Reveal
                key={title}
                delay={(index % 3) * 0.06}
                className="rounded-xl border border-border bg-card p-6"
              >
                <span className="font-display text-3xl font-extrabold text-primary/35">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Prepare for your conversation
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">
            A useful starting checklist.
          </h2>
          <ul className="mt-7 grid gap-4">
            {detail.checklist.map((item) => (
              <li key={item} className="flex gap-3 rounded-md bg-card p-4 text-sm leading-6">
                <Check className="mt-1 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Common questions
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold">Know what comes next.</h2>
          <div className="mt-7 divide-y divide-border border-y border-border">
            {detail.faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  <span>{question}</span>
                  <ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
