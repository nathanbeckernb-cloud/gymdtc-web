import { ButtonLink } from "@/components/button-link";
import { Card, IconBadge } from "@/components/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";

const audiences = [
  ["Athletes", "Open the app and know the work: lift, condition, recover, and check in. No screenshots or old notes."],
  ["Parents", "See what the plan asks for, why it matters, and how consistently it is getting done."],
  ["Coaches", "Set the standard outside practice and see who is staying with the program."],
  ["Teams", "Keep rooms, rosters, clubs, and training groups working from the same weekly plan."],
  ["Adults", "Follow strength, conditioning, and mobility work that fits a real week."],
];

const realWorldTools = [
  ["01", "Plan delivery", "Sessions stay in order: warm-up, main work, conditioning, mobility, and check-in."],
  ["02", "Workout guidance", "Cues and notes keep the work clear when a coach or training partner is not there."],
  ["03", "Accountability", "Completion signals show who followed through and where the week slipped."],
  ["04", "Progress tracking", "Workout history captures sessions, missed days, streaks, and consistency over time."],
  ["05", "Team structure", "Organize groups by room, roster, season, age level, or training focus."],
  ["06", "Mobile-first access", "Built for the weight room, wrestling room, garage, tournament hotel, and ride home."],
];

const trustCards = [
  ["Clear weekly structure", "Athletes know what to do, when to do it, and how each session fits the week."],
  ["Coach accountability", "Coaches can assign the work, set expectations, and see follow-through without chasing texts."],
  ["Family clarity", "Parents get a simple view of the plan, so support feels informed instead of improvised."],
  ["Progress you can track", "Completed sessions and training history make consistency visible over time."],
];

const comparison = [
  ["Random workouts", "New exercises every week with no clear progression."],
  ["Scattered notes", "Screenshots, group texts, notebooks, and memory competing with the plan."],
  ["Inconsistent training", "Good intentions break down when the week gets crowded."],
  ["Gym DTC", "One plan, guided sessions, visible accountability, and a record of the work."],
];

const steps = [
  ["Set the plan", "Choose a training focus for an athlete, adult, team, or group."],
  ["Open today’s work", "See the session order, cues, and expectations."],
  ["Train and check in", "Complete the workout and log what happened."],
  ["Review progress", "Use history and consistency to guide the next week."],
];


const launchTrust = [
  ["Focused waitlist", "Early interest is organized by coaches, parents, athletes, adults, and mobile launch updates so follow-up is relevant."],
  ["Pilot-minded rollout", "Team and school conversations can start before broad release, with setup needs handled directly."],
  ["Clear expectations", "Gym DTC is built to support training standards, not replace coaches, parents, or good judgment."],
];

const socialProof = [
  ["Coach note", "\u201cWe need one place athletes can check without asking what to do next.\u201d", "Early team conversation"],
  ["Parent note", "\u201cI want to support the work, but I need to understand the plan first.\u201d", "Family waitlist conversation"],
  ["Athlete note", "\u201cIt is easier to train when the workout is already written and I can see progress.\u201d", "Early athlete conversation"],
];

const faqs = [
  ["What does Gym DTC actually do?", "Gym DTC gives athletes, families, coaches, teams, and adults one place to follow training plans, view guided workouts, track completion, and stay accountable outside practice."],
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
                Gym DTC gives athletes, families, coaches, and teams a clear plan to follow outside practice with guided workouts, built-in accountability, and progress you can actually track.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact#waitlist">Join the Waitlist</ButtonLink>
                <ButtonLink href="/contact#team-pilots" variant="secondary">Bring Gym DTC to Your Team</ButtonLink>
              </div>
            </div>
            <Card className="relative overflow-hidden p-0">
              <div className="border-b border-white/10 p-6">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400">Today&apos;s Training</p>
                <h2 className="mt-3 text-2xl font-black text-white">Power + Conditioning</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Assigned to Varsity Group A for focused after-practice work.</p>
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
          <SectionHeading eyebrow="Who it serves" title="A clearer plan for every person around the athlete." description="Training works better when athletes, families, and coaches can see the same plan." />
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

      <section className="bg-white/[0.03] py-14 sm:py-20">
        <Container>
          <SectionHeading align="center" eyebrow="Why it works" title="Built around the way training really happens." description="Gym DTC keeps the week clear for athletes, visible for coaches, and understandable for families." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustCards.map(([title, body]) => (
              <Card key={title}>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>


      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading eyebrow="Launch-ready trust" title="Built to earn buy-in before the first workout starts." description="A training app has to feel clear to athletes, credible to coaches, and safe for families. Gym DTC keeps the early rollout focused on useful communication and practical follow-through." />
          <div className="grid gap-4">
            {launchTrust.map(([title, body]) => (
              <Card key={title}>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Inside the plan" title="Everything athletes need to train without guessing." description="Open the plan, do the work, log the session, and keep the next step clear." />
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

      <section className="bg-gradient-to-br from-white/[0.06] to-transparent py-14 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Card>
            <p className="text-4xl font-black text-volt sm:text-5xl">Built for teams.</p>
            <p className="mt-3 text-4xl font-black text-white sm:text-5xl">Simple for families.</p>
            <p className="mt-6 leading-8 text-zinc-300">Coaches need standards. Parents need clarity. Athletes need the next step. Gym DTC keeps those needs connected without adding noise.</p>
          </Card>
          <div className="space-y-4">
            {["Assign plans to groups without another messy spreadsheet.", "Help athletes train on their own with clear expectations.", "Give families a clear view of the work and the purpose."].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-5 font-bold text-white">{item}</div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading align="center" eyebrow="No more scattered training" title="Stop building progress from screenshots and guesswork." description="The plan should not live in a group text, a notebook, and memory. Gym DTC gives the work one home." />
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
          <SectionHeading align="center" eyebrow="How it works" title="Four steps athletes can repeat every week." />
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
          <SectionHeading eyebrow="Coming soon on mobile" title="Training access where the work happens." description="Launch updates, pilot details, and app links will be shared as the mobile release gets closer." />
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
          <SectionHeading eyebrow="Early signals" title="Built from real training problems." description="The first waitlist conversations are focused on clear plans, fewer reminders, and better follow-through." />
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
