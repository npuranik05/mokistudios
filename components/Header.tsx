import Image from "next/image";
import Magnetic from "@/components/Magnetic";
import NavLinks from "@/components/NavLinks";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-heading text-xl font-bold tracking-tight sm:text-2xl">
            Moki Studios<span className="text-accent">.</span>
          </span>
        </a>

        <NavLinks />

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={site.phoneHref}
            className="hidden sm:flex min-h-11 items-center gap-2 font-semibold text-fg transition-colors hover:text-accent"
          >
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Call us</span>
          </a>

          <Magnetic strength={0.2}>
            <a
              href="#contact"
              className="group relative flex min-h-11 items-center gap-1.5 overflow-hidden rounded-full bg-fg px-4 text-sm font-bold text-night transition-colors duration-300 hover:bg-accent sm:px-5 sm:text-base"
            >
              <span className="sm:hidden">Free demo</span>
              <span className="hidden sm:inline">Get your free demo</span>
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
