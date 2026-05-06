import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Card, IconBadge } from "@/components/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Gym DTC features for guided plans, exercise guidance, team accountability, progress tracking, coach support, athlete usability, and family clarity.",
};

const featureGroups = [
  [
    "GP",
    "Guided plans",
    "What it is",
    "Structured training blocks with the day's work organized in a clear order.",
    "Why it matters",
    "Athletes stop guessing, parents stop searching for context, and coaches can reinforce the same standard outside practice.",
    "Helps athletes, adults, families, and full teams.",
  ],
  [
    "EL",
    "Exercise library",
    "What it is",
    "Exercise references, cues, and notes that explain the movement without slowing the workout down.",
    "Why it matters",
    "Good training depends on standards. The library gives athletes a quick place to check form, setup, and intent.",
    "Helps athletes, parents, coaches, and new lifters.",
  ],
  [
    "GA",
    "Group and team accountability",
    "What it is",
    "Tools for organizing athletes by roster, room, age level, season, training focus, or family group.",
    "Why it matters",
    "Teams need buy-in when practice ends. Shared structure makes follow-through visible and easier to coach.",
    "Helps coaches, schools, wrestling programs, clubs, and teams.",
  ],
  [
    "PT",
    "Progress tracking",
    "What it is",
    "A simple record of completed sessions, consistency, and training history over time.",
    "Why it matters",
    "Progress is not only max lifts and highlight clips. Showing completed work helps athletes build confidence and honesty.",
    "Helps athletes, parents, coaches, and adults.",
  ],
  [
    "CS",
    "Coach support",
    "What it is",
    "A way for coaches to assign expectations, guide work, and support training without another messy spreadsheet.",
    "Why it matters",
    "The platform supports the coach's system instead of replacing it. Standards stay clear between practices and seasons.",
    "Helps coaches, program directors, schools, and clubs.",
  ],
  [
    "AU",
    "Athlete usability",
    "What it is",
    "Fast screens that show the next session, the next exercise, and the next check-in.",
    "Why it matters",
    "If athletes cannot use it when they are tired, rushed, or training alone, it will not last. Gym DTC keeps the interface direct.",
    "Helps athletes and adults who need a plan they will actually follow.",
  ],
  [
    "FC",
    "Family clarity",
    "What it is",
    "Plain-language training context that helps families understand what the athlete is doing and why it matters.",
    "Why it matters",
    "Parents can support consistency without guessing, over-coaching, or hunting through group texts for the plan.",
    "Helps parents, guardians, young athletes, and family training plans.",
  ],
];

const mobileItems = [
  "Clear daily workout view",
  "Simple completion tracking",
  "Coach and group readiness",
  "Exercise cues at the point of training",
  "Future App Store and Google Play links",
  "Launch updates for early interest",
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Features" title="Practical tools for training that has to survive real life." description="Gym DTC is built around clarity: what the session is, why it matters, who it supports, and how the work gets tracked." />
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            {featureGroups.map(([abbr, title, labelOne, what, labelTwo, why, helps]) => (
              <Card key={title}>
                <IconBadge>{abbr}</IconBadge>
                <h2 className="text-2xl font-black text-white">{title}</h2>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-volt">{labelOne}</p>
                    <p className="mt-2 leading-7 text-zinc-400">{what}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-volt">{labelTwo}</p>
                    <p className="mt-2 leading-7 text-zinc-400">{why}</p>
                  </div>
                </div>
                <p className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-bold text-white">{helps}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Coming soon on mobile" title="Training should not need a desktop, a printer, or a group text to make sense." description="Gym DTC is preparing a focused mobile experience so athletes can open the plan, complete the work, and stay accountable wherever they train." />
          <Card>
            <div className="grid gap-4 sm:grid-cols-2">
              {mobileItems.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 font-bold text-white">{item}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#waitlist">Get Launch Updates</ButtonLink>
              <ButtonLink href="/contact#team-pilots" variant="secondary">Discuss a Pilot</ButtonLink>
            </div>
          </Card>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
