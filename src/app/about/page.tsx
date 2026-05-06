import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn why Gym DTC exists and how it supports structure, accountability, and performance for teams, athletes, families, and adults.",
};

const beliefs = [
  "Training should be clear enough to follow on a busy school night.",
  "Athletes improve when effort, standards, and accountability are visible.",
  "Coaches need scalable tools that support the program without replacing the coach.",
  "Parents deserve confidence that the work outside practice has direction.",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="About Gym DTC" title="A training platform built around structure, accountability, and performance." description="Gym DTC exists to make the plan easier to understand, easier to follow, and easier to support for everyone around the athlete." />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Card>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-volt">Mission</p>
            <h2 className="mt-4 text-3xl font-black text-white">Help people train with purpose instead of guessing.</h2>
            <p className="mt-5 leading-8 text-zinc-300">
              Gym DTC gives athletes, wrestling programs, schools, families, and everyday adults a cleaner way to organize fitness. The mission is not to add noise. It is to create dependable structure that makes consistent training easier to execute.
            </p>
          </Card>
          <div className="space-y-5">
            <h2 className="text-3xl font-black text-white">Why the platform exists</h2>
            <p className="leading-8 text-zinc-300">
              Most athletes are told to work harder, but many are not given a clear plan for the days between practice, school, tournaments, jobs, and family life. Coaches want standards. Parents want direction. Athletes need something simple enough to follow when motivation is low.
            </p>
            <p className="leading-8 text-zinc-300">
              Gym DTC is being built for that gap: team training, individual plans, family support, and long-term progress in one mobile-first experience.
            </p>
          </div>
        </Container>
      </section>
      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What guides us" title="Premium standards, practical execution." />
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
