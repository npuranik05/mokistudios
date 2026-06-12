import FadeIn from "@/components/FadeIn";
import ScrollZoom from "@/components/ScrollZoom";
import SpotlightCard from "@/components/SpotlightCard";
import WordReveal from "@/components/WordReveal";

/* Edit names and bios below — nothing else needs touching */
const team = [
  {
    role: "The Engineer",
    focus: "Software",
    bio: "Builds every site and automation by hand. Obsessed with the details: fast pages, clean code, and things that just work.",
  },
  {
    role: "The Machinist",
    focus: "CNC / Trades",
    bio: "Works in the trades running CNC. Keeps us grounded in how real shops operate and what a missed customer actually costs.",
  },
  {
    role: "The Future Dentist",
    focus: "Dental School",
    bio: "On the road to dental school. Brings the people side: clear communication, honest follow-up, and making sure every client is taken care of.",
  },
  {
    role: "The Future Physio",
    focus: "Physiotherapy",
    bio: "Heading into physiotherapy. The accountability anchor who makes sure we follow through on every promise we make.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <FadeIn>
        <p className="text-base font-bold tracking-[0.22em] text-muted uppercase">
          <span className="text-accent">03</span> · About us
        </p>
      </FadeIn>
      <h2 className="font-heading mt-2 max-w-2xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        <WordReveal text="Four friends with something to prove" />
      </h2>
      <FadeIn>
        <p className="mt-4 max-w-2xl text-muted">
          Not an agency. Just four people who grew up around real work, know
          what a missed call costs a small business, and treat every project
          like our own name is on the sign.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:gap-6">
        {team.map((person) => (
          <ScrollZoom key={person.role} from={0.95} className="h-full">
            <SpotlightCard className="h-full rounded-2xl">
              <div className="h-full rounded-2xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">
                <span className="inline-block rounded-full border border-accent/30 bg-accent-soft px-3 py-0.5 text-xs font-bold tracking-widest text-accent uppercase">
                  {person.focus}
                </span>
                <h3 className="font-heading mt-4 text-2xl font-bold">{person.role}</h3>
                <p className="mt-2 text-muted">{person.bio}</p>
              </div>
            </SpotlightCard>
          </ScrollZoom>
        ))}
      </div>

      <FadeIn>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-fg/90">
          We are new, and that works in your favor: big effort, fair prices,
          and a free demo first, because we would rather{" "}
          <span className="text-accent">prove it than promise it</span>.
        </p>
      </FadeIn>
    </section>
  );
}
