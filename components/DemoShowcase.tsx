"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TiltCard from "@/components/TiltCard";
import WordReveal from "@/components/WordReveal";

function BrowserMock() {
  return (
    <div
      aria-hidden="true"
      className="shadow-deep select-none overflow-hidden rounded-2xl"
      style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#13181f" }}
    >
      {/* browser chrome */}
      <div
        className="flex items-center gap-2 border-b px-4 py-3"
        style={{ background: "#1c2230", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#ffbd2e" }} />
        <span className="h-3 w-3 rounded-full" style={{ background: "#27c840" }} />
        <span
          className="ml-3 max-w-sm flex-1 rounded-md px-3 py-1.5 text-xs"
          style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.35)" }}
        >
          nextlandscapes.com
        </span>
      </div>

      {/* the real screenshot */}
      <Image
        src="/samplewebsite.png"
        alt="Sample client website — Next Landscapes"
        width={1200}
        height={720}
        className="w-full object-cover object-top"
        priority={false}
      />
    </div>
  );
}

export default function DemoShowcase() {
  const mockRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: mockRef,
    offset: ["start end", "center 0.45"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.3, 1]);

  return (
    <section className="mx-auto max-w-5xl px-4 pb-20 text-center sm:px-6 sm:pb-28">
      <h2 className="font-heading mx-auto max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        <WordReveal text="Your free demo could look like this" />
      </h2>
      <FadeIn>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          A real, working website built around your business. This one is for
          a landscaping company. Yours will be built from scratch around what
          you do.
        </p>
      </FadeIn>

      <div ref={mockRef} className="mt-12" style={{ perspective: 1400 }}>
        <motion.div
          style={
            reduceMotion
              ? undefined
              : { rotateX, scale, opacity, transformOrigin: "center top" }
          }
        >
          <TiltCard max={4}>
            <BrowserMock />
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
