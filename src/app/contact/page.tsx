import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Join the Gym DTC waitlist or contact the team about athletes, parents, coaches, teams, and pilot programs.",
};

const paths = [
  ["Coaches", "Ask about team pilots, program setup, and athlete accountability workflows."],
  ["Parents", "Get updates on family-friendly plans and athlete support tools."],
  ["Athletes", "Join early interest for structured plans, progress tracking, and mobile app launch news."],
];

export default function ContactPage() {
  return (
    <section className="bg-radial-volt py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Contact" title="Join the waitlist or start a training conversation." description="Tell us who you are, what you are building, and how Gym DTC can help bring more structure to the work outside practice." />
          <div className="mt-8 grid gap-4">
            {paths.map(([title, body]) => (
              <Card key={title}>
                <h2 className="text-xl font-black text-white">{title}</h2>
                <p className="mt-2 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-400">Prefer email? Reach us at <a className="font-bold text-volt" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
        <Card className="p-6 sm:p-8">
          <form className="space-y-5" aria-label="Gym DTC contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-white">Name</span>
                <input name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-white">Email</span>
                <input name="email" type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-bold text-white">Phone</span>
              <input name="phone" type="tel" placeholder="Optional phone number" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-white">Message</span>
              <textarea name="message" rows={6} placeholder="Tell us if you are an athlete, parent, coach, school, or training program." className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
            </label>
            <button type="button" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-volt bg-volt px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-obsidian shadow-glow transition hover:border-white hover:bg-white sm:w-auto">
              Join the Waitlist
            </button>
            <p className="text-xs leading-6 text-zinc-500">Form UI only for now. Backend submission will be connected in a future release.</p>
          </form>
        </Card>
      </Container>
    </section>
  );
}
