"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Gentle parallax drift: content slides from +offset to -offset
 * pixels as it crosses the viewport, so neighboring elements
 * move at slightly different speeds.
 */
export default function Parallax({
  children,
  className,
  offset = 40,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={reduceMotion ? undefined : { y }} className={className}>
      {children}
    </motion.div>
  );
}
