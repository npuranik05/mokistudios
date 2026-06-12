import FadeIn from "@/components/FadeIn";
import Parallax from "@/components/Parallax";
import WordReveal from "@/components/WordReveal";

/* ============================================================
   TESTIMONIAL PLACEHOLDERS — replace these with real quotes
   from clients as you collect them, then delete the
   "Example testimonials" note in the heading below.
   ============================================================ */
const testimonials = [
  {
    quote:
      "I got the demo three days after our first call. Didn't have to pay a cent until I'd seen exactly what I was getting. Easiest business decision I've made.",
    name: "Sample Client",
    business: "Roofing company owner",
  },
  {
    quote:
      "The missed-call text-back alone has paid for the whole website. Customers used to call the next guy. Now they wait for us.",
    name: "Sample Client",
    business: "Plumbing company owner",
  },
  {
    quote:
      "I'm not a computer person at all, and they made the whole thing painless. They explained everything in plain English and handled all the technical stuff.",
    name: "Sample Client",
    business: "Bakery owner",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
          <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <FadeIn>
          <p className="text-sm font-semibold tracking-[0.25em] text-muted uppercase">
            <span className="text-accent">04</span> · Kind words
          </p>
        </FadeIn>
        <h2 className="font-heading mt-4 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          <WordReveal text="What owners say about working with us" />
        </h2>
        <FadeIn>
          <p className="mt-4 text-muted">
            (Example testimonials. Real client quotes coming soon.)
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Parallax key={t.business} offset={[16, 48, 28][i]} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-night p-8 shadow-card">
                <Stars />
                <blockquote className="mt-5 flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-line pt-5">
                  <span className="block font-bold">{t.name}</span>
                  <span className="text-muted">{t.business}</span>
                </figcaption>
              </figure>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
