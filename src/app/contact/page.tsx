import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { WaitlistForm } from "@/components/waitlist-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Join the Gym DTC waitlist, ask about team pilots, or get launch updates for athletes, parents, coaches, schools, and early app interest.",
};

const paths = [
  ["Coaches and schools", "Ask about team pilots, roster setup, training expectations, and accountability between practices."],
  ["Parents", "Get launch updates for structured plans, family-friendly clarity, and safer support outside practice."],
  ["Athletes", "Join early interest for guided workouts, progress tracking, and a plan you can follow without guessing."],
  ["Mobile app interest", "Be notified when App Store and Google Play launch details are ready."],
];

const followUpSteps = [
  ["1", "Join the waitlist", "Send your role, email, and the kind of training support you want."],
  ["2", "We sort the request", "Coach, school, family, athlete, adult, and mobile launch interest go to the right follow-up path."],
  ["3", "Launch updates follow", "You will hear about pilot conversations, mobile availability, and next steps as Gym DTC gets closer to release."],
];

const trustPoints = [
  "No spammy coaching funnels.",
  "No public athlete information requested in this form.",
  "Team and school conversations are handled separately from general app updates.",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Contact Gym DTC" title="Join the waitlist or start a real training conversation." description="Tell us who you are, what you are trying to build, and whether you need athlete structure, family clarity, team accountability, or mobile app launch updates." />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#waitlist">Join the Waitlist</ButtonLink>
              <ButtonLink href="#team-pilots" variant="secondary">Discuss a Team Pilot</ButtonLink>
            </div>
            <p className="mt-6 text-sm text-zinc-400">Prefer direct email? Reach us at <a className="font-bold text-volt" href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
          <Card className="p-6 sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-volt">Waitlist form</p>
              <h2 className="mt-3 text-2xl font-black text-white">Tell us where Gym DTC fits.</h2>
              <p className="mt-3 leading-7 text-zinc-400">A few details help us send useful launch updates and follow up on serious team or school interest.</p>
            </div>
            <WaitlistForm />
          </Card>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Contact paths" title="Choose the lane that fits your goal." description="Gym DTC is collecting focused interest now so launch updates and pilot conversations are useful instead of generic." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {paths.map(([title, body]) => (
              <Card key={title}>
                <h2 className="text-xl font-black text-white">{title}</h2>
                <p className="mt-3 leading-7 text-zinc-400">{body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="team-pilots" className="bg-white/[0.03] py-16 sm:py-24 scroll-mt-28">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Team pilots" title="Start a focused team or school pilot conversation." description="Share the same details as the waitlist, with team or school pilot selected as the primary interest so the request reaches the right follow-up path." />
            <div className="mt-8 grid gap-4">
              {followUpSteps.map(([step, title, body]) => (
                <Card key={title} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-volt text-lg font-black text-obsidian">{step}</div>
                  <div>
                    <h3 className="text-xl font-black text-white">{title}</h3>
                    <p className="mt-2 leading-7 text-zinc-400">{body}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <Card className="p-6 sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-volt">Team pilot form</p>
              <h2 className="mt-3 text-2xl font-black text-white">Tell us about the team need.</h2>
              <p className="mt-3 leading-7 text-zinc-400">This uses the same professional intake fields and routes coach or school pilot interest to Gym DTC without opening an email client.</p>
            </div>
            <WaitlistForm id="team-pilot-form" formType="team-pilot" submitLabel="Request Pilot Follow-Up" defaultInterest="Team or school pilot" note="Your pilot request submits securely to Gym DTC for a direct, practical follow-up." />
          </Card>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Card>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-volt">Coming soon on mobile</p>
            <h2 className="mt-4 text-3xl font-black text-white">App launch updates are part of the waitlist.</h2>
            <p className="mt-5 leading-8 text-zinc-300">Gym DTC is preparing mobile access for the places training actually happens: weight rooms, wrestling rooms, garages, hotels, and busy school nights.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-bold text-white">
              {['App Store coming soon', 'Google Play coming soon', 'Pilot details by email'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-black/30 px-4 py-2">{item}</span>
              ))}
            </div>
          </Card>
          <Card>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-volt">Trust notes</p>
            <ul className="mt-5 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="rounded-2xl border border-white/10 bg-black/30 p-4 font-bold text-white">{point}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>
    </>
  );
}
