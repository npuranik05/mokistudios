"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-linked zoom: content scales up from `from` to full size
 * (and fades in) as it travels into the viewport — same feel as
 * the hero demo window. Works on touch since it's scroll-driven.
 */
export default function ScrollZoom({
  children,
  className,
  from = 0.92,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 0.6"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [from, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.45, 1]);

  return (
    <motion.div
      ref={ref}
      style={reduceMotion ? undefined : { scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
