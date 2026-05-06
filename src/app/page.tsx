import { ButtonLink } from "@/components/button-link";
import { Card, IconBadge } from "@/components/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";

const audiences = [
  ["Athletes", "Know exactly what to do before school, after practice, on the weekend, or while traveling. No more guessing from old notes."],
  ["Parents", "See the plan, understand the purpose, and support safe consistency without having to become the strength coach."],
  ["Coaches", "Give athletes a standard for work outside practice and keep buy-in visible across the room, roster, or off-season group."],
  ["Teams", "Keep wrestling programs, school groups, clubs, and training partners on the same page with shared structure."],
  ["Adults", "Follow a realistic plan with clear sessions, simple tracking, and accountability that survives a busy week."],
];

const realWorldTools = [
  ["01", "Simple plan delivery", "Athletes open Gym DTC and see the session in order: warm-up, main work, conditioning, mobility, and check-in."],
  ["02", "Guided workouts", "Exercise cues and session notes keep training clear when a coach, parent, or partner is not standing there."],
  ["03", "Accountability", "Completion signals make follow-through visible without turning training into another complicated system."],
  ["04", "Progress tracking", "Workout history shows effort, missed days, streaks, and the steady work that usually gets overlooked."],
  ["05", "Team structure", "Groups can be organized by room, roster, season, age level, training focus, or family plan."],
  ["06", "Mobile-first access", "Built for the gym floor, school hallway, garage setup, tournament hotel, and the ride home."],
];

const whyCards = [
  ["Why athletes stick with it", "The next session is clear. The standard is visible. Progress feels earned instead of random."],
  ["Why coaches trust it", "Gym DTC supports the program outside practice without replacing the coach or adding more spreadsheets."],
  ["Why families need it", "Parents get direction, athletes get routine, and training stops becoming a nightly argument."],
];

const comparison = [
  ["Random workouts", "Different exercises every week, no progression, and no clear reason behind the session."],
  ["Scattered notes", "Screenshots, group texts, notebooks, and memory all fighting to be the training plan."],
  ["Inconsistent training", "Athletes want to work, but the routine breaks down when life gets busy."],
  ["Gym DTC", "One plan, guided sessions, visible accountability, and a record of the work that was actually done."],
];

const steps = [
  ["Pick the plan", "Choose a training focus for an athlete, adult, team, or group."],
  ["Open today’s work", "See the full session with order, cues, and expectations."],
  ["Train and check off", "Complete the workout and log what happened."],
  ["Review progress", "Use consistency and history to keep the next week honest."],
];

const socialProof = [
  ["Coach feedback", "\u201cWe need one place athletes can check without asking what to do next.\u201d", "Wrestling program placeholder"],
  ["Parent feedback", "\u201cI want to support the work, but I need to understand the plan first.\u201d", "Family waitlist placeholder"],
  ["Athlete feedback", "\u201cIt is easier to train when the workout is already written and I can see progress.\u201d", "Early athlete placeholder"],
];

const faqs = [
  ["What does Gym DTC actually do?", "Gym DTC gives athletes, families, coaches, teams, and adults a structured place to follow training plans, view guided workouts, track completion, and stay accountable outside practice."],
  ["Is Gym DTC only for wrestling?", "No. Wrestling programs are a major focus because they need discipline, strength, conditioning, and accountability. The same structure also fits other athletes, schools, teams, families, and adults."],
  ["Can a coach use this with a full team?", "That is one of the main use cases. Gym DTC is being built for groups, team plans, training assignments, and simple accountability between practices and seasons."],
  ["How does this help parents?", "Parents can see that training has structure and purpose. They do not need to write workouts or police every detail; they can support consistency with more confidence and less confusion."],
  ["Can adults use it without being on a team?", "Yes. Adults can use Gym DTC for straightforward strength, conditioning, mobility, and habit-building plans with practical progress tracking."],
  ["Will the mobile app be available soon?", "Gym DTC is collecting early interest now. App Store and Google Play links, launch updates, and pilot details will be shared as the mobile release gets closer."],
  ["Do athletes need special equipment?", "Plans can be designed for different environments over time, including school weight rooms, commercial gyms, home setups, and travel-friendly training."],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-radial-volt py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.32em] text-volt">Built for teams. Simple for families.</p>
              <h1 className="text-balance text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Training that actually gives athletes structure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                Gym DTC helps athletes, parents, coaches, wrestling programs, and adults follow a real plan outside practice with guided workouts, accountability, and progress tracking in one mobile-first place.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Join the Waitlist</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Bring Gym DTC to Your Team</ButtonLink>
              </div>
            </div>
            <Card className="relative overflow-hidden p-0">
              <div className="border-b border-white/10 p-6">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400">Today&apos;s Training</p>
                <h2 className="mt-3 text-2xl font-black text-white">Power + Conditioning</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Session assigned to Varsity Group A. Built for work after practice.</p>
              </div>
              <div className="space-y-4 p-6">
                {["Warm-up mobility", "Strength block", "Sprint intervals", "Recovery check-in"].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4">
                    <span className="font-bold text-white">{item}</span>
                    <span className="rounded-full bg-volt/15 px-3 py-1 text-xs font-black text-volt">{index + 1}/4</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 border-t border-white/10 text-center">
                {[["92%", "Week"], ["14", "Sessions"], ["4", "Groups"]].map(([value, label]) => (
                  <div key={label} className="p-5">
                    <p className="text-2xl font-black text-volt">{value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Who Gym DTC is for" title="One training plan the whole support system can understand." description="Gym DTC is for real weeks: school, practice, tournaments, family schedules, work shifts, and the days when motivation is not enough." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map(([title, body]) => (
              <Card key={title}>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container>
          <SectionHeading align="center" eyebrow="Why Gym DTC" title="Structure beats hype when the week gets hard." description="The problem is rarely effort. The problem is unclear work, missed follow-through, and no shared view of progress. Gym DTC turns training into a routine people can repeat." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whyCards.map(([title, body]) => (
              <Card key={title}>
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-4 leading-8 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Built for real-world use" title="The tools that keep training moving." description="Gym DTC keeps the experience practical: open the plan, do the work, log the session, and stay connected to the people who care about the progress." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {realWorldTools.map(([num, title, body]) => (
              <Card key={title}>
                <IconBadge>{num}</IconBadge>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-white/[0.06] to-transparent py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Card>
            <p className="text-4xl font-black text-volt sm:text-5xl">Built for teams.</p>
            <p className="mt-3 text-4xl font-black text-white sm:text-5xl">Simple for families.</p>
            <p className="mt-6 leading-8 text-zinc-300">Coaches need standards. Parents need clarity. Athletes need the next step. Gym DTC connects those needs without making training feel like office software.</p>
          </Card>
          <div className="space-y-4">
            {["Assign plans to groups without another messy spreadsheet.", "Help athletes train on their own with the same expectations.", "Give families a clear view of what the work is supposed to be."].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-5 font-bold text-white">{item}</div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading align="center" eyebrow="Better than scattered training" title="Stop building progress from screenshots and guesswork." description="A workout plan should not live across a group text, a notebook, a memory, and a random video folder. Gym DTC gives the work a home." />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {comparison.map(([title, body]) => (
              <Card key={title} className={title === "Gym DTC" ? "border-volt/40 bg-volt/10" : ""}>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container>
          <SectionHeading align="center" eyebrow="How Gym DTC works" title="Simple enough to use daily. Strong enough for serious training." />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {steps.map(([step, body], index) => (
              <Card key={step}>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-volt">Step {index + 1}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{step}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading eyebrow="Coming soon on mobile" title="Training access for the places athletes actually train." description="Gym DTC is preparing mobile app links and launch updates. The goal is fast access from the weight room, wrestling room, garage, hotel, or sideline." />
          <Card>
            <div className="grid gap-4 sm:grid-cols-2">
              {["App Store links coming soon", "Google Play links coming soon", "Early team pilots", "Launch updates by email"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 font-bold text-white">{item}</div>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Early proof" title="Placeholder proof, ready for real coaches, parents, and athletes." description="These cards are intentionally formatted for launch feedback, pilot program notes, and future testimonials as Gym DTC rolls out." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {socialProof.map(([label, quote, source]) => (
              <Card key={label}>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-volt">{label}</p>
                <p className="mt-4 text-xl font-black leading-8 text-white">{quote}</p>
                <p className="mt-5 text-sm text-zinc-500">{source}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading align="center" eyebrow="FAQ" title="Questions before you join the waitlist." />
          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <summary className="cursor-pointer list-none text-lg font-black text-white marker:hidden">{question}</summary>
                <p className="mt-4 leading-7 text-zinc-400">{answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
