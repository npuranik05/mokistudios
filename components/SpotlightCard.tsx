"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

/**
 * A warm spotlight follows the cursor across the card surface.
 * Pure CSS variables, so it costs nothing when idle.
 */
export default function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group/spot relative overflow-hidden ${className ?? ""}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgb(227 168 87 / 0.12), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
