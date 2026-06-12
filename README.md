# Moki Studios — Marketing Website

A single-page marketing site for Moki Studios, built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## ★ Make the contact form work (2 minutes)

The form uses [Web3Forms](https://web3forms.com) — free, no backend needed.

1. Go to **https://web3forms.com**
2. Enter the **email address where you want inquiries delivered** (your inbox) and click **Create Access Key**. They email it to you instantly.
3. Open **`components/Contact.tsx`** and find this line near the top (it's under a big comment banner you can't miss):

   ```ts
   const WEB3FORMS_ACCESS_KEY = "PASTE_YOUR_ACCESS_KEY_HERE";
   ```

   Replace `PASTE_YOUR_ACCESS_KEY_HERE` with your key.

That's it. Submissions go to whichever email you used to create the key. To change the destination email later, create a new key with the new email and paste it in the same spot.

## Update your business details (one file)

Open **`lib/site.ts`** — your phone number, email, and Instagram live there and update everywhere on the site (header, contact, footer) automatically.

## Edit the About section

Open **`components/About.tsx`** — the three team cards (The Engineer, The Machinist, The Future Dentist) are in the `team` array. Add real names or tweak the bios anytime.

## Replace placeholder testimonials

Open **`components/Testimonials.tsx`** and edit the `testimonials` array. Once they're real quotes, delete the "(Example testimonials…)" line in the same file.

## It's a PWA (installable on phones)

The site ships with a web-app manifest, app icons, and a service worker.
On a phone, visitors can add it to their home screen ("Add to Home Screen"
in Safari/Chrome) and it opens full-screen like an app, and keeps working
on flaky connections after the first visit. Nothing to configure — it
activates automatically on the deployed (production) site.

## Deploy to Vercel (free)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and click **Add New → Project**.
3. Pick your repository and click **Deploy** — no settings to change; Vercel detects Next.js automatically.
4. You'll get a live `.vercel.app` URL in about a minute. To use your own domain, add it under **Project → Settings → Domains** and follow the DNS instructions.

Every `git push` after that redeploys the site automatically.

## Where everything lives

```
app/
  layout.tsx        Fonts (Syne + Inter), film-grain overlay, PWA metadata
  globals.css       Design system: warm dark colors, type, marquee animation
  manifest.ts       PWA manifest (name, colors, app icons)
  page.tsx          Assembles the sections in order
components/
  Header.tsx        Sticky nav (magnetic links) + phone + demo button
  Hero.tsx          Headline with cursor parallax + magnetic CTA
  Services.tsx      "What we do": spotlight cards, animated checkmarks
  DemoShowcase.tsx  3D demo browser window that zooms on scroll
  PromiseBanner.tsx "No upfront cost, no risk" banner
  HowItWorks.tsx    3 steps with a scroll-drawn progress line
  About.tsx         The three of you — edit roles/bios here
  Testimonials.tsx  Placeholder quotes
  Contact.tsx       Form → Web3Forms (paste your key here)
  Footer.tsx        Contact info, Instagram, anchor links
  Magnetic.tsx      Elements pulled toward the cursor
  SpotlightCard.tsx Cursor-following glow on cards
  NavLinks.tsx      Magnetic nav links with sweeping underline
  TiltCard.tsx      3D mouse-tilt wrapper
  ScrollZoom.tsx    Scroll-linked zoom-in (cards, banners, form)
  Parallax.tsx      Elements drift at different speeds while scrolling
  WordReveal.tsx    Headings reveal word by word
  ScrollProgress.tsx  Thin amber reading-progress bar at the top
  RegisterSW.tsx    Registers the service worker (production only)
public/
  sw.js             Service worker — works offline after first visit
  icons/            App icons (regenerate: node scripts/generate-icons.mjs)
  Services.tsx      Websites + lead automation cards
  HowItWorks.tsx    3-step "free demo first" section
  Work.tsx          Portfolio grid (placeholders — see above)
  Testimonials.tsx  Testimonial cards (placeholders — see above)
  Contact.tsx       Form → Web3Forms (paste your key here)
  Footer.tsx        Contact info + anchor links
lib/
  site.ts           Your phone / email / hours — edit once, updates everywhere
```
