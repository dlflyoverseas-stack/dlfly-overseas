import { MapPin, Mail } from "lucide-react";
import { useSiteSettings } from "@/context/site-settings";
import { Reveal } from "./reveal";

export function ContactLocation() {
  const settings = useSiteSettings();
  return (
    <Reveal className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
      <div className="grid overflow-hidden rounded-xl border border-border bg-card md:grid-cols-[0.8fr_1.2fr]">
        <div className="p-6 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Stay connected</p>
          <h2 className="mt-3 font-display text-2xl font-extrabold">
            Let’s talk about your future.
          </h2>
          <p className="mt-5 flex gap-3 text-sm leading-7 text-muted-foreground">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" />
            {settings.address}
          </p>
          <a
            href="mailto:dlflyoverseas@gmail.com"
            className="mt-5 flex items-start gap-3 break-all text-sm font-semibold text-primary"
          >
            <Mail className="size-5 shrink-0" />
            dlflyoverseas@gmail.com
          </a>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            Please call before visiting so we can arrange time with the right advisor.
          </p>
        </div>
        {settings.mapsEmbedUrl ? (
          <iframe
            src={settings.mapsEmbedUrl}
            title="Find DLFLY Overseas on Google Maps"
            className="min-h-[320px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        ) : (
          <div className="grid min-h-[280px] place-items-center bg-secondary p-8 text-center text-sm text-muted-foreground">
            Call our team for directions and an appointment.
          </div>
        )}
      </div>
    </Reveal>
  );
}
