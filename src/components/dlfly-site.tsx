import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDollarSign,
  Compass,
  GraduationCap,
  Menu,
  Phone,
  Plane,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const phoneNumber = "+91 6304636998";
const telephoneLink = "tel:+916304636998";
const whatsappLink = "https://wa.me/916304636998";

const serviceLinks = [
  { to: "/study-abroad", title: "Study abroad", icon: GraduationCap },
  { to: "/visa", title: "Visa guidance", icon: Plane },
  { to: "/permanent-residency", title: "Permanent residency", icon: Compass },
  { to: "/education-loans", title: "Education loans", icon: CircleDollarSign },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="hidden bg-primary text-primary-foreground sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span>Your next chapter starts here.</span>
          <a className="inline-flex items-center gap-2" href={telephoneLink}>
            <Phone className="size-3.5" aria-hidden="true" />
            Speak with an advisor <span className="font-semibold">{phoneNumber}</span>
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5"
            aria-label="DLFLY Overseas home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="grid size-10 place-items-center rounded-md bg-primary text-primary-foreground">
              <span className="font-display text-lg font-extrabold">D</span>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-extrabold text-foreground">
                DLFLY
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                overseas
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            <Link to="/" activeOptions={{ exact: true }} className="nav-link">
              Home
            </Link>
            <div className="group relative">
              <Link to="/study-abroad" className="nav-link inline-flex items-center gap-1">
                Our services <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-0 top-full w-64 translate-y-2 border border-border bg-background p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {serviceLinks.map(({ to, title, icon: Icon }) => (
                  <Link key={to} to={to} className="menu-link">
                    <Icon className="size-4 text-primary" /> {title}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about" className="nav-link">About us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href={telephoneLink} className="text-sm font-semibold text-foreground">
              {phoneNumber}
            </a>
            <Button asChild className="rounded-sm px-5">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Free consultation <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild variant="outline" size="icon" className="rounded-sm" aria-label="Call DLFLY Overseas">
              <a href={telephoneLink}><Phone /></a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-sm"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              <Link to="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
              <p className="px-3 pb-1 pt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Our services</p>
              {serviceLinks.map(({ to, title }) => (
                <Link key={to} to={to} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{title}</Link>
              ))}
              <Link to="/about" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>About us</Link>
              <Link to="/contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>
              <a className="mt-3 flex items-center gap-2 border-t border-border pt-4 font-semibold text-primary" href={telephoneLink}>
                <Phone className="size-4" /> {phoneNumber}
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] md:py-16">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" aria-label="DLFLY Overseas home">
            <span className="grid size-11 place-items-center rounded-sm border border-primary-foreground/30 font-display text-xl font-extrabold">D</span>
            <span className="leading-tight">
              <span className="block font-display text-xl font-extrabold">DLFLY</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/70">overseas</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-primary-foreground/75">
            Thoughtful guidance for your journey to study, work and build a future abroad.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">Explore</h2>
          <div className="grid gap-3 text-sm text-primary-foreground/75">
            {serviceLinks.map(({ to, title }) => <Link key={to} to={to} className="hover:text-primary-foreground">{title}</Link>)}
            <Link to="/about" className="hover:text-primary-foreground">About us</Link>
            <Link to="/contact" className="hover:text-primary-foreground">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider">Let’s talk</h2>
          <a href={telephoneLink} className="inline-flex items-center gap-2 text-lg font-bold">
            <Phone className="size-4" /> {phoneNumber}
          </a>
          <p className="mt-2 text-sm text-primary-foreground/70">Call us to start a conversation.</p>
          <Button asChild variant="secondary" className="mt-5 rounded-sm">
            <a href={whatsappLink} target="_blank" rel="noreferrer">Message our team <ArrowUpRight /></a>
          </Button>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-primary-foreground/70 sm:px-6 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} DLFLY Overseas. All rights reserved.</span>
          <span>Developed by <a href="https://www.octaleads.com" target="_blank" rel="noreferrer" className="font-semibold text-primary-foreground underline underline-offset-4">Octaleads</a></span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.19em] text-primary">{children}</p>;
}

export function PageBanner({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute -right-20 -top-40 size-[27rem] rounded-full border border-primary-foreground/10" aria-hidden="true" />
      <div className="absolute -right-4 -top-24 size-[19rem] rounded-full border border-primary-foreground/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/70">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/80 sm:text-lg">{description}</p>
        <Button asChild variant="secondary" className="mt-8 rounded-sm">
          <a href={whatsappLink} target="_blank" rel="noreferrer">Talk to an advisor <ArrowUpRight /></a>
        </Button>
      </div>
    </section>
  );
}

export const serviceContent = {
  study: {
    eyebrow: "Study abroad",
    title: "A world of learning. A future of possibility.",
    description: "Find a course and campus that fit your ambitions, with practical guidance from your first shortlist to departure day.",
    icon: GraduationCap,
    intro: "Your international education journey should feel exciting—not overwhelming. We help you make thoughtful choices at every step, from selecting a destination to getting ready for your first day on campus.",
    steps: ["Understand your goals and preferred study destination", "Shortlist courses and institutions that fit your profile", "Get support with applications and document preparation", "Plan visa steps, finances and pre-departure essentials"],
    points: ["Course and university shortlisting", "Application document guidance", "Application timeline planning", "Pre-departure preparation"],
  },
  visa: {
    eyebrow: "Visa guidance",
    title: "Make your visa application feel more manageable.",
    description: "Get organised, understand what your application needs, and move forward with a clearer plan for your next destination.",
    icon: Plane,
    intro: "Visa processes can feel complicated when requirements, timelines and paperwork all come at once. We help you understand the steps for your destination and prepare an application that is clear, complete and carefully organised.",
    steps: ["Discuss your travel, study or migration goals", "Review destination-specific documentation needs", "Organise forms and supporting paperwork", "Prepare for next steps with a clear application checklist"],
    points: ["Student visa application guidance", "Document and checklist support", "Application timeline planning", "Interview preparation guidance"],
  },
  residency: {
    eyebrow: "Permanent residency",
    title: "Plan your next chapter with a clearer path.",
    description: "Explore residency possibilities and understand the preparation involved before taking your next step abroad.",
    icon: Compass,
    intro: "A long-term move begins with understanding your options. We can help you review your goals, learn about common migration pathways and organise questions to discuss with a qualified immigration professional.",
    steps: ["Talk through where you hope to build your future", "Explore general pathways and preparation considerations", "Organise your profile information and supporting documents", "Get referred to an appropriately qualified professional for case-specific advice"],
    points: ["Initial pathway orientation", "Profile and document organisation", "Planning for language and skills assessments", "Referral guidance for case-specific advice"],
  },
  loans: {
    eyebrow: "Education loans",
    title: "Bring your study budget into focus.",
    description: "Understand the costs ahead and get support exploring education finance options for your international studies.",
    icon: CircleDollarSign,
    intro: "Planning the finances for an overseas education can be a big part of choosing where and what to study. We help you organise the costs, understand the documents lenders may request, and explore options that could fit your plans.",
    steps: ["Build an overview of tuition and living costs", "Gather the information commonly requested by lenders", "Explore education finance options that may be available", "Plan for funding timelines alongside your application"],
    points: ["Study cost planning", "Education loan document checklist", "Loan option exploration", "Funding and application timeline support"],
  },
} as const;

type ServiceKey = keyof typeof serviceContent;

export function ServicePage({ service }: { service: ServiceKey }) {
  const item = serviceContent[service];
  const Icon = item.icon;
  return (
    <>
      <PageBanner eyebrow={item.eyebrow} title={item.title} description={item.description} />
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionLabel>Your journey, your way</SectionLabel>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">The right support makes every next step clearer.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">{item.intro}</p>
          <Button asChild className="mt-7 rounded-sm">
            <a href={whatsappLink} target="_blank" rel="noreferrer">Discuss your plans <ArrowRight /></a>
          </Button>
        </div>
        <div className="border-t-2 border-accent bg-card px-6 py-7 sm:px-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-11 place-items-center bg-secondary text-primary"><Icon className="size-5" /></span>
            <h2 className="font-display text-xl font-extrabold">How we can help</h2>
          </div>
          <ul className="grid gap-4">
            {item.points.map((point) => <li key={point} className="flex items-start gap-3 border-b border-border pb-4 text-sm leading-6 last:border-0 last:pb-0"><Check className="mt-1 size-4 shrink-0 text-primary" />{point}</li>)}
          </ul>
        </div>
      </section>
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-18">
          <SectionLabel>Getting started</SectionLabel>
          <h2 className="font-display text-3xl font-extrabold">A few considered steps.</h2>
          <div className="mt-8 grid gap-x-8 gap-y-0 md:grid-cols-2">
            {item.steps.map((step, index) => <div key={step} className="flex gap-5 border-t border-border py-5">
              <span className="font-display text-2xl font-extrabold text-primary/50">0{index + 1}</span><p className="pt-1 text-sm leading-6 text-foreground">{step}</p>
            </div>)}
          </div>
          {service === "residency" && <p className="mt-4 max-w-3xl text-xs leading-5 text-muted-foreground">Immigration eligibility and requirements depend on your circumstances and may change. DLFLY Overseas provides general orientation and referral guidance, not legal or immigration advice.</p>}
        </div>
      </section>
      <ContactStrip />
    </>
  );
}

export function ContactStrip() {
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.17em]">Your plans deserve a conversation</p><h2 className="mt-2 font-display text-2xl font-extrabold">Let’s make your next step count.</h2></div>
        <Button asChild variant="default" className="w-fit rounded-sm"><a href={telephoneLink}><Phone /> Call {phoneNumber} <ArrowUpRight /></a></Button>
      </div>
    </section>
  );
}

export function ContactPage() {
  return <>
    <PageBanner eyebrow="Contact DLFLY Overseas" title="Tell us where you’d like to go." description="Start with a conversation. Our team can help you understand what to consider for your study, visa, residency or education finance plans." />
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 sm:py-20 md:grid-cols-[1fr_0.8fr]">
      <div>
        <SectionLabel>We’re here to help</SectionLabel>
        <h2 className="font-display text-3xl font-extrabold">One conversation can help you find your next step.</h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">Call or message us to share a little about your goals. We’ll help you work out what information to gather and where to begin.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="rounded-sm"><a href={telephoneLink}><Phone /> Call us</a></Button>
          <Button asChild variant="outline" className="rounded-sm"><a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight /></a></Button>
        </div>
      </div>
      <div className="border-l-2 border-accent pl-6 sm:pl-8">
        <SectionLabel>Reach our team</SectionLabel>
        <a href={telephoneLink} className="inline-flex items-center gap-3 text-2xl font-extrabold text-foreground sm:text-3xl"><Phone className="size-6 text-primary" />{phoneNumber}</a>
        <p className="mt-3 text-sm text-muted-foreground">Call for a friendly first conversation.</p>
        <div className="mt-8 border-t border-border pt-6">
          <h3 className="font-display font-bold">What can we help with?</h3>
          <ul className="mt-4 grid gap-3 text-sm text-muted-foreground">
            {serviceLinks.map(({ to, title }) => <li key={to}><Link to={to} className="inline-flex items-center gap-2 hover:text-primary">{title} <ArrowRight className="size-3.5" /></Link></li>)}
          </ul>
        </div>
      </div>
    </section>
  </>;
}

export function AboutPage() {
  const values = [
    { icon: BookOpenCheck, title: "Guidance with a plan", text: "A clearer sequence of next steps helps you move ahead with confidence." },
    { icon: ShieldCheck, title: "Careful preparation", text: "Thoughtful document and timeline preparation helps take the guesswork out." },
    { icon: Sparkles, title: "Your goals come first", text: "Start with your ambitions, then make choices that fit the future you want." },
  ];
  return <>
    <PageBanner eyebrow="About DLFLY Overseas" title="Big ambitions deserve thoughtful support." description="We help students and families approach international education and future planning with clarity, care and a practical plan." />
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 sm:py-20 md:grid-cols-[1.1fr_0.9fr]">
      <div><SectionLabel>Who we are</SectionLabel><h2 className="font-display text-3xl font-extrabold">A steady hand for a big life decision.</h2><p className="mt-5 text-base leading-7 text-muted-foreground">Planning to study or build a life abroad is a big undertaking. DLFLY Overseas brings key parts of that journey into one conversation—from choosing a course and preparing an application to understanding visa steps and exploring education finance.</p><p className="mt-4 text-base leading-7 text-muted-foreground">We believe helpful guidance starts with listening. Your goals, your circumstances and your questions shape what comes next.</p></div>
      <div className="grid gap-0 border-t-2 border-accent">{values.map(({ icon: Icon, title, text }, index) => <div key={title} className="flex gap-5 border-b border-border py-6"><span className="font-display text-sm font-bold text-primary">0{index + 1}</span><div><h3 className="font-display font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div><Icon className="ml-auto size-5 shrink-0 text-primary" /></div>)}</div>
    </section>
    <ContactStrip />
  </>;
}

export function HomePage() {
  const destinations = [
    { code: "UK", title: "United Kingdom", note: "A rich academic tradition" },
    { code: "US", title: "United States", note: "Room to explore your field" },
    { code: "CA", title: "Canada", note: "A welcoming study experience" },
    { code: "AU", title: "Australia", note: "Learning with a global outlook" },
  ];
  const services = [
    { icon: GraduationCap, title: "Study abroad", text: "Find your course, university and next steps.", to: "/study-abroad" },
    { icon: Plane, title: "Visa guidance", text: "Get organised with clear application guidance.", to: "/visa" },
    { icon: BriefcaseBusiness, title: "Permanent residency", text: "Explore pathways and plan your preparation.", to: "/permanent-residency" },
    { icon: CircleDollarSign, title: "Education loans", text: "Explore study budgets and funding options.", to: "/education-loans" },
  ];
  return <>
    <section className="relative isolate min-h-[570px] overflow-hidden bg-primary sm:min-h-[600px]">
      <img src={campusImage} alt="Two students walking together on a university campus" fetchPriority="high" width={1600} height={1008} className="absolute inset-0 -z-20 size-full object-cover object-[64%_center]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/10" />
      <div className="mx-auto flex min-h-[570px] max-w-7xl items-center px-5 py-14 sm:min-h-[600px] sm:px-6">
        <div className="max-w-[620px] text-primary-foreground">
          <p className="mb-5 inline-flex items-center gap-2 border border-primary-foreground/40 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em]"><Sparkles className="size-3.5" /> Make your world bigger</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.12] sm:text-6xl">Your future has<br className="hidden sm:block" /> no borders.</h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-primary-foreground/85 sm:text-lg">From choosing a course to preparing for the next chapter, we’re here to help you move forward with a plan.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="secondary" size="lg" className="rounded-sm px-5"><Link to="/study-abroad">Explore your options <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg" className="rounded-sm border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"><a href={telephoneLink}><Phone /> Call our team</a></Button>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/80"><BadgeCheck className="size-4" /> Study · Visa · Residency · Education finance</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 hidden items-center gap-2 bg-accent px-6 py-4 font-display text-xs font-extrabold uppercase tracking-[0.12em] text-accent-foreground md:flex"><ArrowDownRight className="size-4" /> A future in motion</div>
    </section>

    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-7 px-5 py-9 sm:px-6 md:grid-cols-[1.1fr_2fr] md:items-center">
        <div><SectionLabel>Find your destination</SectionLabel><h2 className="font-display text-xl font-extrabold">Where could your studies take you?</h2></div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {destinations.map(({ code, title, note }) => <div key={code} className="border-l-2 border-accent pl-3"><span className="font-display text-lg font-extrabold text-primary">{code}</span><h3 className="mt-1 text-sm font-bold">{title}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{note}</p></div>)}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><SectionLabel>Ways we can support you</SectionLabel><h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl">One team for the steps that matter.</h2></div><Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-primary">Talk to our team <ArrowRight className="size-4" /></Link></div>
      <div className="mt-9 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, text, to }, index) => <Link key={title} to={to} className="group border-b border-border py-6 sm:px-5 sm:first:pl-0 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0">
          <div className="flex items-center justify-between"><span className="grid size-12 place-items-center bg-secondary text-primary"><Icon className="size-5" /></span><span className="font-display text-sm font-bold text-muted-foreground">0{index + 1}</span></div>
          <h3 className="mt-5 font-display text-lg font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
        </Link>)}
      </div>
    </section>

    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 py-14 sm:px-6 sm:py-18 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div><SectionLabel>A more considered journey</SectionLabel><h2 className="font-display text-3xl font-extrabold leading-tight">From “what if?” to a plan that feels possible.</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">Your goals are the starting point. We help connect the choices, paperwork and practical preparation that make an international study plan feel more within reach.</p><Button asChild className="mt-6 rounded-sm"><Link to="/about">Get to know us <ArrowUpRight /></Link></Button></div>
        <div className="grid grid-cols-2 gap-px bg-border">
          {[{ icon: GraduationCap, title: "Explore", text: "Clarify what you want to study and where." }, { icon: BookOpenCheck, title: "Prepare", text: "Build a focused plan for your application." }, { icon: ShieldCheck, title: "Organise", text: "Understand the documents and timelines." }, { icon: Sparkles, title: "Get ready", text: "Take practical steps toward your next chapter." }].map(({ icon: Icon, title, text }) => <div key={title} className="bg-background p-5 sm:p-7"><Icon className="size-5 text-primary" /><h3 className="mt-4 font-display font-extrabold">{title}</h3><p className="mt-2 text-sm leading-5 text-muted-foreground">{text}</p></div>)}
        </div>
      </div>
    </section>
    <ContactStrip />
  </>;
}