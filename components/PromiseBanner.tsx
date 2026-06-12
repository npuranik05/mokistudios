"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import ScrollZoom from "@/components/ScrollZoom";

export default function PromiseBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28">
      <ScrollZoom from={0.9}>
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl border border-line"
          style={{ background: "#0e1a10" }}
        >
          {/* animated gradient sweep */}
          <motion.div
            aria-hidden="true"
            style={reduceMotion ? undefined : { x: bgX }}
            className="pointer-events-none absolute inset-0"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 120% at 20% 50%, #4ade8012 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 80% 50%, #e3a85710 0%, transparent 60%)",
              }}
            />
          </motion.div>

          {/* grid texture overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#4ade80 1px, transparent 1px), linear-gradient(90deg, #4ade80 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative px-8 py-14 text-center sm:px-16 sm:py-20">
            <p className="text-xs font-bold tracking-[0.35em] text-lime/60 uppercase mb-6">
              Our promise
            </p>

            <p
              className="font-heading mx-auto max-w-4xl text-4xl font-extrabold text-balance leading-[1.08] sm:text-5xl md:text-6xl"
              style={{ color: "#f4f1ea" }}
            >
              No upfront cost.{" "}
              <span style={{ color: "#4ade80" }}>No risk.</span>
            </p>
            <p
              className="font-heading mx-auto mt-3 max-w-3xl text-3xl font-bold text-balance leading-[1.1] sm:text-4xl"
              style={{ color: "#f4f1ea" }}
            >
              If you don&apos;t love your demo,{" "}
              <span style={{ color: "#e3a857" }}>you owe us nothing.</span>
            </p>
            <p className="mt-6 text-3xl font-bold sm:text-4xl" style={{ color: "#f4f1ea" }}>
              No hard feelings.
            </p>

            <div className="mt-12">
              <Magnetic strength={0.25}>
                <a
                  href="#contact"
                  className="group relative inline-flex min-h-[5rem] items-center gap-4 overflow-hidden rounded-2xl bg-accent px-14 text-2xl font-extrabold text-night transition-colors duration-300 hover:bg-accent-dim animate-cta-glow"
                >
                  Start my free demo
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </ScrollZoom>
    </section>
  );
}
