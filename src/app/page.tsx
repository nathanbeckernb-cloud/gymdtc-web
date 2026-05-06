import { ButtonLink } from "@/components/button-link";
import { Card, IconBadge } from "@/components/card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section-heading";

const audiences = [
  ["Athletes", "Clear workouts, fewer missed days, and training built around performance instead of guesswork."],
  ["Coaches", "Assign plans, organize groups, and keep athletes accountable between practices and seasons."],
  ["Parents", "Know what your athlete should do, why it matters, and how consistency is progressing."],
  ["Adults", "Structured strength and conditioning plans for busy people building durable habits."],
];

const features = [
  ["01", "Guided workout plans", "Follow focused plans for strength, conditioning, mobility, and athletic development."],
  ["02", "Exercise library", "Keep movement standards simple with athlete-friendly exercise guidance and cues."],
  ["03", "Team support", "Create groups for wrestling programs, schools, training partners, and family plans."],
  ["04", "Progress tracking", "Log workouts and build a clear record of effort, consistency, and improvement."],
  ["05", "Mobile-first", "Training lives where athletes already are: on the phone, in the gym, at home, or on the road."],
  ["06", "Accountability", "Simple check-ins help coaches, parents, and athletes stay aligned without extra clutter."],
];

const steps = ["Pick a plan", "Follow the workouts", "Track progress", "Stay accountable"];

const faqs = [
  ["Is Gym DTC only for wrestlers?", "No. Wrestling programs are a major focus, but Gym DTC is designed for athletes, schools, teams, families, and adults who need structured fitness plans."],
  ["Can coaches use it with a full team?", "Yes. The platform is being built to support groups, team training, plan assignment, and coach accountability workflows."],
  ["Can parents understand what their athlete is doing?", "That is one of the goals. Gym DTC keeps training clear so families can support effort outside practice without needing to write workouts themselves."],
  ["Will there be an exercise library?", "Yes. Gym DTC will include exercise guidance so athletes can understand what to do and how each session fits the bigger plan."],
  ["Is the app available now?", "Gym DTC is collecting early interest and preparing future mobile app links. Join the waitlist for launch updates."],
  ["Can everyday adults use Gym DTC?", "Yes. The same structure that helps athletes also helps adults build consistency with practical plans and progress tracking."],
  ["Do we need special equipment?", "Plans can be built for different settings over time, including school weight rooms, gyms, home setups, and travel-friendly training."],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-radial-volt py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-black uppercase tracking-[0.32em] text-volt">Built for athletes. Simple for families. Powerful for coaches.</p>
              <h1 className="text-balance text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Training that actually gives athletes structure.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
                Gym DTC is a mobile-first fitness platform for athletes, teams, wrestling programs, families, and everyday adults who want guided plans, clear accountability, and measurable progress.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Join the Waitlist</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Contact Us</ButtonLink>
              </div>
            </div>
            <Card className="relative overflow-hidden p-0">
              <div className="border-b border-white/10 p-6">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400">Today&apos;s Training</p>
                <h2 className="mt-3 text-2xl font-black text-white">Power + Conditioning</h2>
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
          <SectionHeading eyebrow="Who it is for" title="One platform for the people around the training plan." description="Gym DTC is designed for real-world training environments where athletes need clarity, parents need confidence, and coaches need consistency." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <SectionHeading align="center" eyebrow="Key features" title="Practical tools for disciplined training." description="No clutter, no vague motivation, and no random workout roulette. Gym DTC keeps the plan visible and the next step obvious." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([num, title, body]) => (
              <Card key={title}>
                <IconBadge>{num}</IconBadge>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Coaches & teams" title="Organize training without adding another messy system." description="Gym DTC helps programs assign training, support off-season work, and keep athletes moving with purpose when a coach is not standing next to them." />
          <Card>
            <ul className="space-y-4 text-zinc-300">
              {[
                "Group athletes by team, level, season, or training focus.",
                "Give each athlete the same standard while still supporting individual plans.",
                "Use simple progress signals to reinforce accountability and effort.",
              ].map((item) => (
                <li key={item} className="flex gap-3"><span className="mt-1 text-volt">▰</span><span>{item}</span></li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-white/[0.06] to-transparent py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Card className="order-2 lg:order-1">
            <p className="text-5xl font-black text-volt">Less confusion.</p>
            <p className="mt-4 text-5xl font-black text-white">More follow-through.</p>
            <p className="mt-6 leading-8 text-zinc-300">Families can stop guessing what training should look like between practices. Athletes get a clear plan, a repeatable routine, and visible progress.</p>
          </Card>
          <div className="order-1 lg:order-2">
            <SectionHeading eyebrow="Parents & athletes" title="Structure outside practice is where consistency gets built." description="Gym DTC helps athletes know what to do next and gives parents a clean way to support the process without becoming the coach." />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading align="center" eyebrow="How it works" title="Simple enough to use daily. Strong enough for serious training." />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <Card key={step}>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-volt">Step {index + 1}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{step}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white/[0.03] py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Proof points" title="Built for the training conversations coaches and families already have." description="Use this section for pilot programs, testimonials, school partners, team results, or launch metrics as Gym DTC grows." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Coach pilot placeholder", "Family feedback placeholder", "Team launch metric placeholder"].map((item) => (
              <Card key={item}><p className="text-lg font-black text-white">{item}</p><p className="mt-3 text-zinc-400">Ready to customize after early access conversations.</p></Card>
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
