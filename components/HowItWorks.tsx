"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Parallax from "@/components/Parallax";
import WordReveal from "@/components/WordReveal";

const steps = [
  {
    number: "01",
    title: "We build your demo, free",
    text: "Tell us a little about your business. We design a real, working preview of your new website. No deposit, no contract, no commitment.",
  },
  {
    number: "02",
    title: "You love it, then you pay",
    text: "Look it over, show your family, take your time. We make changes until it feels right. You only pay once you're completely happy.",
  },
  {
    number: "03",
    title: "We launch it live",
    text: "We handle every technical detail: the domain, hosting, all of it. Your new website goes live and starts working for your business.",
  },
];

export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  /* A thin amber line draws itself across the section as you scroll */
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.85", "end 0.5"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="how-it-works" className="border-y border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-base font-bold tracking-[0.22em] text-muted uppercase">
            <span className="text-accent">02</span> · How it works
          </p>
        </FadeIn>
        <h2 className="font-heading mt-2 max-w-2xl text-5xl font-bold tracking-tight text-balance sm:text-6xl">
          <WordReveal text="See your website before you spend a dime" />
        </h2>

        <div ref={stepsRef} className="mt-14">
          <motion.div
            aria-hidden="true"
            style={reduceMotion ? undefined : { scaleX }}
            className="h-0.5 origin-left bg-accent/60"
          />
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <Parallax key={step.number} offset={10 + i * 12}>
                <FadeIn delay={i * 0.12}>
                  <div className="relative pt-10">
                    <span
                      aria-hidden="true"
                      className="font-heading absolute top-0 left-0 text-8xl leading-none font-extrabold text-fg/8 sm:text-9xl"
                    >
                      {step.number}
                    </span>
                    <div className="relative">
                      <span className="block h-px w-12 bg-accent" aria-hidden="true" />
                      <h3 className="font-heading mt-5 text-2xl font-bold">{step.title}</h3>
                      <p className="mt-3 text-muted">{step.text}</p>
                    </div>
                  </div>
                </FadeIn>
              </Parallax>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
