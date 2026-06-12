"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveals a heading word by word — each word rises out of a
 * clipped box with a slight stagger as it scrolls into view.
 */
export default function WordReveal({ text, className }: { text: string; className?: string }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={reduceMotion ? false : { y: "115%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
