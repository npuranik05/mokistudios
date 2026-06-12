"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Magnetic from "@/components/Magnetic";
import { site } from "@/lib/site";

const PART1 = "Websites and automations that bring you ";
const PART2 = "more customers";
const FULL = PART1 + PART2;

function HeroHeading() {
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setCount(FULL.length);
      return;
    }
    let i = 0;
    const start = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setCount(i);
        if (i >= FULL.length) clearInterval(iv);
      }, 62);
      return () => clearInterval(iv);
    }, 500);
    return () => clearTimeout(start);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  const t1 = FULL.slice(0, Math.min(count, PART1.length));
  const t2 = count > PART1.length ? FULL.slice(PART1.length, count) : "";
  const done = count >= FULL.length;

  return (
    <h1 className="font-heading mx-auto max-w-4xl text-5xl leading-[1.05] font-extrabold tracking-tight text-balance sm:text-6xl md:text-7xl">
      {t1}
      {t2 && <em className="text-accent not-italic">{t2}</em>}
      {!done && (
        <span
          aria-hidden="true"
          className="ml-1 inline-block h-[0.82em] w-[3px] translate-y-1 rounded-sm bg-accent align-middle"
          style={{ animation: "cursor-blink 0.75s step-end infinite" }}
        />
      )}
    </h1>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 160% 65% at 50% -10%, #0b2218 0%, #0d1530 40%, #121210 68%)",
      }}
    >
      {/* top center green glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, #4ade8022 0%, transparent 65%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-full w-1/3 blur-3xl"
        style={{ background: "radial-gradient(ellipse at 0% 40%, #0e1f4018 0%, transparent 60%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-full w-1/3 blur-3xl"
        style={{ background: "radial-gradient(ellipse at 100% 40%, #0e1f4018 0%, transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-5xl px-4 pt-28 pb-28 text-center sm:px-6 sm:pt-40 sm:pb-40">
        <motion.div
          style={reduceMotion ? undefined : { y: textY, scale: textScale, opacity: textOpacity }}
        >
          <FadeIn>
            <p className="mx-auto mb-8 inline-block rounded-full border border-accent/20 bg-accent-soft px-5 py-2 text-base font-semibold tracking-wide text-fg/90">
              Free demo first.{" "}
              <span className="text-accent">Pay only if you love it.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <HeroHeading />
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mx-auto mt-7 max-w-2xl text-xl text-muted sm:text-2xl">
              {site.name} builds professional websites and simple lead
              automations for small businesses.
            </p>
          </FadeIn>

          {/* CTA — deliberately unlike the header pill: wide rectangle, large, glowing */}
          <FadeIn delay={0.35}>
            <div className="mt-14 flex justify-center">
              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  className="group relative flex w-full max-w-md items-center justify-center gap-4 overflow-hidden rounded-2xl bg-accent px-12 py-6 text-2xl font-extrabold text-night transition-colors duration-300 hover:bg-accent-dim sm:w-auto animate-cta-glow"
                >
                  Get your free demo
                  <span
                    aria-hidden="true"
                    className="text-2xl transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                </a>
              </Magnetic>
            </div>
          </FadeIn>

          <FadeIn delay={0.45}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-medium text-muted">
              {["No upfront cost", "No pressure", "Built for small businesses"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}
