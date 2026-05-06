import type { Metadata } from "next";
import { Card, IconBadge } from "@/components/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Gym DTC features for workout plans, exercise guidance, progress tracking, team support, and mobile-first accountability.",
};

const features = [
  ["WP", "Workout plans", "Structured training blocks that help athletes know what to do, when to do it, and how each session supports performance."],
  ["EL", "Exercise library", "Clean exercise references and cues designed for athletes who need quick clarity before they train."],
  ["PT", "Progress tracking", "Log sessions, monitor consistency, and build a practical record of completed work over time."],
  ["GT", "Group and team features", "Support for wrestling rooms, school programs, club teams, training groups, and family plans."],
  ["CA", "Coach accountability", "Help coaches reinforce standards, assign work, and see who is following through without extra spreadsheets."],
  ["AD", "Athlete-friendly design", "Fast, focused screens that put the next workout and the next action front and center."],
  ["MX", "Mobile app experience", "Designed for the gym floor, school hallway, hotel room, or home setup with future App Store links in mind."],
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Features" title="The core tools Gym DTC is building for structured training." description="Every feature is designed to reduce confusion, make follow-through visible, and keep athletes, families, and coaches aligned." />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([abbr, title, body]) => (
              <Card key={title}>
                <IconBadge>{abbr}</IconBadge>
                <h2 className="text-2xl font-black text-white">{title}</h2>
                <p className="mt-4 leading-8 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Built mobile-first" title="Training should not need a desktop, a printer, or a group text to make sense." description="Gym DTC is preparing for a focused mobile app experience where athletes can open the plan, complete the work, and stay accountable from wherever they train." />
          <Card>
            <div className="space-y-4">
              {[
                "Clear daily workout view",
                "Simple completion tracking",
                "Coach and group readiness",
                "Future App Store and Google Play links",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 font-bold text-white">{item}</div>
              ))}
            </div>
          </Card>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
