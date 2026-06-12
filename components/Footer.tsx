import { site } from "@/lib/site";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#about", label: "About us" },
  { href: "#contact", label: "Free demo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* top row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <p className="font-heading text-lg font-bold">
            Moki Studios<span className="text-accent">.</span>
          </p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted transition-colors hover:text-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-1.5 text-sm">
            <a
              href={site.phoneHref}
              className="font-semibold text-fg transition-colors hover:text-accent"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-muted transition-colors hover:text-fg"
            >
              {site.email}
            </a>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-fg"
            >
              {site.instagram}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-muted/60 sm:px-6">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
