"use client";

import Magnetic from "@/components/Magnetic";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About us" },
];

/** Desktop nav links: magnetic pull toward the cursor plus an
    amber underline that sweeps in on hover. */
export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-4 md:flex" aria-label="Main">
      {links.map((link) => (
        <Magnetic key={link.href} strength={0.35}>
          <a
            href={link.href}
            className="group relative inline-block px-2 py-3 font-medium text-muted transition-colors hover:text-fg"
          >
            {link.label}
            <span
              aria-hidden="true"
              className="absolute inset-x-2 bottom-1.5 h-0.5 origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
          </a>
        </Magnetic>
      ))}
    </nav>
  );
}
