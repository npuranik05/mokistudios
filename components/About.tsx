import FadeIn from "@/components/FadeIn";
import ScrollZoom from "@/components/ScrollZoom";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-24">
      <FadeIn>
        <p className="text-base font-bold tracking-[0.22em] text-muted uppercase">
          <span className="text-accent">03</span> · About us
        </p>
      </FadeIn>

      <ScrollZoom from={0.95} className="mt-8">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel px-8 py-14 text-center sm:px-16 sm:py-20">
          {/* subtle green glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 50%, #4ade8008 0%, transparent 70%)",
            }}
          />
          <p className="relative text-xs font-bold tracking-[0.35em] text-accent/60 uppercase mb-6">
            Coming soon
          </p>
          <h2 className="font-heading relative mx-auto max-w-xl text-3xl font-extrabold text-balance sm:text-4xl">
            Meet the team behind Moki Studios
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-muted">
            Four friends from different paths — software, trades, dental school,
            and physiotherapy — working together to help small businesses grow.
            More coming soon.
          </p>
        </div>
      </ScrollZoom>
    </section>
  );
}
