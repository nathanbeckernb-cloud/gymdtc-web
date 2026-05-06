import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Join the Gym DTC waitlist, ask about team pilots, or get launch updates for athletes, parents, coaches, schools, and early app interest.",
};

const paths = [
  ["Coaches and schools", "Ask about team pilots, program setup, wrestling-room accountability, and launch conversations for your athletes."],
  ["Parents", "Get updates on safe structure, family-friendly clarity, and plans that help athletes train outside practice."],
  ["Athletes", "Join early interest for guided workouts, progress tracking, and a plan you can follow without guessing."],
  ["Early app interest", "Mobile app links, launch updates, and pilot details are coming soon for waitlist members."],
];

export default function ContactPage() {
  return (
    <section className="bg-radial-volt py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Contact Gym DTC" title="Join the waitlist or start a real training conversation." description="Tell us who you are, what you are trying to build, and whether you are looking for athlete structure, family clarity, team accountability, or early mobile app updates." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {paths.map(([title, body]) => (
              <Card key={title}>
                <h2 className="text-xl font-black text-white">{title}</h2>
                <p className="mt-2 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-volt/25 bg-volt/10 p-5">
            <p className="text-sm font-bold leading-7 text-zinc-200">
              Coming soon: App Store and Google Play links, launch updates, and pilot program details for coaches, schools, families, athletes, and adults.
            </p>
          </div>
          <p className="mt-6 text-sm text-zinc-400">Prefer email? Reach us at <a className="font-bold text-volt" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
        <Card className="p-6 sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-volt">Waitlist form</p>
            <h2 className="mt-3 text-2xl font-black text-white">Tell us where Gym DTC fits.</h2>
            <p className="mt-3 leading-7 text-zinc-400">A few details help us send the right launch updates and follow up on team or school interest.</p>
          </div>
          <form className="space-y-6" aria-label="Gym DTC contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-white">Full name</span>
                <input name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-white">Email address</span>
                <input name="email" type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-white">Phone</span>
                <input name="phone" type="tel" placeholder="Optional" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-white">I am a</span>
                <select name="role" defaultValue="" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition focus:border-volt focus:ring-4">
                  <option value="" disabled>Choose one</option>
                  <option>Coach or school leader</option>
                  <option>Parent or guardian</option>
                  <option>Athlete</option>
                  <option>Adult training for myself</option>
                  <option>Interested in app updates</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-bold text-white">What are you looking for?</span>
              <textarea name="message" rows={6} placeholder="Example: I coach a middle school wrestling team and want off-season accountability. Or: I am a parent looking for safe structure outside practice." className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
            </label>
            <button type="button" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-volt bg-volt px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-obsidian shadow-glow transition hover:border-white hover:bg-white sm:w-auto">
              Get Launch Updates
            </button>
            <p className="text-xs leading-6 text-zinc-500">Form UI only for now. Backend submission will be connected in a future release.</p>
          </form>
        </Card>
      </Container>
    </section>
  );
}
