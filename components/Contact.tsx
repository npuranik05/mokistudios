"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import Magnetic from "@/components/Magnetic";
import ScrollZoom from "@/components/ScrollZoom";
import SpotlightCard from "@/components/SpotlightCard";
import WordReveal from "@/components/WordReveal";
import { site } from "@/lib/site";

/* ============================================================
   ★ PASTE YOUR WEB3FORMS ACCESS KEY BELOW ★
   ------------------------------------------------------------
   1. Go to https://web3forms.com
   2. Enter the email address where you want inquiries delivered
      (your inbox) and click "Create Access Key". It's free.
   3. They email you the key. Replace the text between the
      quotes below with it.

   That's the only step: submissions are delivered to whichever
   email address you used to create the key. To change the
   destination later, create a new key with the new email and
   paste it here.
   ============================================================ */
const WEB3FORMS_ACCESS_KEY = "PASTE_YOUR_ACCESS_KEY_HERE";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full border-0 border-b-2 border-line bg-transparent px-0 py-3 text-xl text-fg placeholder:text-muted/40 transition-colors focus:border-accent focus-visible:outline-none";

const labelClasses = "mb-1 block text-sm font-semibold tracking-[0.18em] text-muted uppercase";

function PhoneIcon() {
  return (
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
  );
}

function MailIcon() {
  return (
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
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
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

const contactLinks = [
  { href: site.phoneHref, label: site.phone, icon: <PhoneIcon /> },
  { href: `mailto:${site.email}`, label: site.email, icon: <MailIcon /> },
  { href: site.instagramHref, label: site.instagram, icon: <InstagramIcon />, external: true },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New free demo request from the Moki Studios website");
    formData.append("from_name", "Moki Studios website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-160 -translate-x-1/2 rounded-full bg-accent/8 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <FadeIn>
              <p className="text-base font-bold tracking-[0.22em] text-muted uppercase">
                <span className="text-accent">04</span> · Get started
              </p>
            </FadeIn>
            <h2 className="font-heading mt-2 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              <WordReveal text="Request your free demo" />
            </h2>
            <FadeIn>
              <p className="mt-5 text-muted">
                Tell us a little about your business and we&apos;ll get back to
                you within one business day. No cost, no pressure. Just a real
                preview of what your new website could look like.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-8 flex flex-col items-start gap-4">
                {contactLinks.map((link) => (
                  <Magnetic key={link.label} strength={0.2}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex min-h-12 items-center gap-3 rounded-full border border-line bg-panel px-5 font-semibold text-fg transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </FadeIn>
          </div>

          <ScrollZoom from={0.95} className="lg:col-span-3">
            <SpotlightCard className="rounded-3xl">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-line bg-panel p-6 shadow-card sm:p-10"
              >
                {/* honeypot field — hidden from people, catches spam bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Your name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className={labelClasses}>
                      Business name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Smith Roofing"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@smithroofing.com"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                      className={inputClasses}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClasses}>
                      Tell us about your business
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      required
                      placeholder="What do you do, and what would you like your website to do for you?"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative mt-10 flex min-h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-accent px-8 text-lg font-extrabold text-night transition-colors duration-300 hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send my request"}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                </button>

                <div aria-live="polite">
                  {status === "success" && (
                    <p className="mt-5 rounded-xl border border-accent/40 bg-accent-soft p-4 text-center font-bold text-accent">
                      Thank you! We got your message and will be in touch within
                      one business day.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-5 rounded-xl border border-accent/40 bg-accent-soft p-4 text-center font-bold text-accent">
                      Something went wrong sending your message. Please give us
                      a call at {site.phone} instead.
                    </p>
                  )}
                </div>
              </form>
            </SpotlightCard>
          </ScrollZoom>
        </div>
      </div>
    </section>
  );
}
