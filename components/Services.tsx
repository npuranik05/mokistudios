"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import ScrollZoom from "@/components/ScrollZoom";
import SpotlightCard from "@/components/SpotlightCard";
import TiltCard from "@/components/TiltCard";
import WordReveal from "@/components/WordReveal";

const services = [
  {
    title: "Professional websites",
    benefit:
      "A clean, modern website that makes your business look as good as the work you do, and turns visitors into phone calls.",
    points: [
      "Looks great on every phone, tablet, and computer",
      "Built to show up on Google when locals search",
      "Fast to load, easy for customers to use",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-8 w-8"
      >
        <rect x="2" y="4" width="20" height="15" rx="2" />
        <path d="M2 9h20" />
        <circle cx="5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="7.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Lead automation",
    benefit:
      "Never lose another customer to a missed call. Simple tools that follow up for you automatically, even while you're on a job.",
    points: [
      "Missed-call text-back: callers get an instant text instead of calling your competitor",
      "Instant lead alerts: new inquiries reach your phone the moment they happen",
      "Automatic Google-review requests: happy customers get a friendly nudge to leave a review",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-8 w-8"
      >
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
];

function DrawnCheck({ delay }: { delay: number }) {
  return (
    <svg
      className="mt-1 h-5 w-5 shrink-0 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <motion.path
        d="M20 6 9 17l-5-5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
      <FadeIn>
        <p className="text-base font-bold tracking-[0.22em] text-muted uppercase">
          <span className="text-accent">01</span> · What we do
        </p>
      </FadeIn>
      <h2 className="font-heading mt-2 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
        <WordReveal text="Two simple ways we help your business grow" />
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
        {services.map((service, i) => (
          <ScrollZoom key={service.title} from={0.93} className="h-full">
            <TiltCard className="h-full">
              <SpotlightCard className="h-full rounded-3xl">
                <article className="group h-full rounded-3xl border border-line bg-panel p-8 shadow-card transition-colors duration-300 hover:border-accent/40 sm:p-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="font-heading mt-6 text-3xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-muted">{service.benefit}</p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point, j) => (
                      <li key={point} className="flex gap-3">
                        <DrawnCheck delay={i * 0.1 + j * 0.15} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </SpotlightCard>
            </TiltCard>
          </ScrollZoom>
        ))}
      </div>
    </section>
  );
}
