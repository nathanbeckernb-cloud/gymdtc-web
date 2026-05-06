import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn why Gym DTC exists to support athlete development, training habits, accountability, and structure outside the gym or practice room.",
};

const beliefs = [
  "The plan should be clear enough to follow on a busy school night.",
  "Athletes improve when effort, standards, and accountability are visible.",
  "Coaches need tools that extend the program without replacing the coach.",
  "Parents deserve confidence that work outside practice has direction.",
];


const launchStandards = [
  ["Useful before it is broad", "Gym DTC is collecting early interest from the people most likely to need structured training support first."],
  ["Coach-friendly by design", "The product is meant to extend a program's standards outside practice, not create another system coaches have to fight."],
  ["Clear family communication", "Launch updates will keep parents and guardians informed without asking them to become strength coaches."],
];

const habits = [
  ["Show up with a plan", "Athletes should not have to invent training after a long day. The next session should already be clear."],
  ["Repeat the right work", "Consistency comes from doing simple things well, not chasing a different workout every time motivation changes."],
  ["Track what happened", "A completed session, missed day, or honest check-in gives coaches, parents, and athletes something real to work from."],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="About Gym DTC" title="Built for the work that happens when practice is over." description="Gym DTC exists because athletes need more than reminders to work hard. They need structure, guidance, and support they can actually use outside the gym, weight room, or practice room." />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-volt">Mission</p>
            <h2 className="mt-4 text-3xl font-black text-white">Help athletes and everyday people train with a plan they can trust.</h2>
            <p className="mt-5 leading-8 text-zinc-300">
              Gym DTC gives athletes, wrestling programs, schools, families, and adults a cleaner way to organize training. The goal is not more noise or another motivational feed. The goal is dependable structure that makes consistent work easier to execute.
            </p>
          </Card>
          <div className="space-y-5">
            <h2 className="text-3xl font-black text-white">Why Gym DTC exists</h2>
            <p className="leading-8 text-zinc-300">
              A lot of athletes are told to get stronger, get faster, and stay ready. Then they leave practice with a screenshot, a vague idea, or no plan at all. Parents want to help but do not always know what safe, useful support looks like. Coaches want standards to carry beyond the room, but they cannot be everywhere.
            </p>
            <p className="leading-8 text-zinc-300">
              Gym DTC is being built for that gap: guided plans, exercise clarity, team accountability, family visibility, and progress tracking in one mobile-first training experience.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Habits before hype" title="Workouts matter. The routine around them matters more." description="A plan only works if people can follow it when the schedule gets crowded. Gym DTC is built around habits that make consistency easier to repeat." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {habits.map(([title, body]) => (
              <Card key={title}>
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-4 leading-8 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Launch approach" title="Built carefully, with the right early users." description="Trust starts before the app launches. Gym DTC is using the waitlist to understand who needs team pilots, who wants family updates, and who is waiting for mobile access." />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#waitlist">Join the Waitlist</ButtonLink>
              <ButtonLink href="/contact#team-pilots" variant="secondary">Discuss a Pilot</ButtonLink>
            </div>
          </div>
          <div className="grid gap-4">
            {launchStandards.map(([title, body]) => (
              <Card key={title}>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What guides us" title="Premium standards. Practical execution." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {beliefs.map((belief) => (
              <Card key={belief}><p className="text-xl font-black leading-8 text-white">{belief}</p></Card>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
