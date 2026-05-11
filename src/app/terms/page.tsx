import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Gym DTC Terms of Use for account, training, coach, team, payment, liability, and contact information.",
};

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "These Terms of Use govern your access to and use of the Gym DTC website, mobile application, training plans, team tools, and related services. By using Gym DTC, you agree to these Terms.",
      "If you do not agree to these Terms, do not use Gym DTC.",
    ],
  },
  {
    title: "2. Eligibility and Accounts",
    paragraphs: [
      "You are responsible for providing accurate account information and keeping your login credentials secure.",
      "If you use Gym DTC as part of a team, school, club, or coaching group, you are also responsible for following any rules or expectations set by that organization. Coaches, parents, guardians, and team administrators are responsible for managing access appropriately for their athletes or members.",
    ],
  },
  {
    title: "3. Fitness and Training Disclaimer",
    paragraphs: [
      "Training involves risk. Workouts may include strength training, conditioning, mobility, wrestling preparation, bodyweight exercises, loaded movements, and other physical activity that may not be appropriate for every person.",
      "You are responsible for using good judgment, training within your abilities, using proper equipment and supervision when needed, and stopping if you experience pain, dizziness, shortness of breath, or any other concerning symptoms.",
    ],
  },
  {
    title: "4. No Medical Advice",
    paragraphs: [
      "Gym DTC does not provide medical advice, diagnosis, treatment, rehabilitation, or emergency services. The information in Gym DTC is for general fitness and training purposes only.",
      "Before beginning a new training program, consult a qualified medical professional if you have a medical condition, injury, health concern, or any question about whether exercise is safe for you.",
    ],
  },
  {
    title: "5. Team and Coach Features",
    paragraphs: [
      "Gym DTC may include team, coach, admin, group, assignment, workout review, coach note, and progress tracking features. Coaches and team administrators may be able to assign workouts, review training logs, view team participation, post announcements, and manage team access.",
      "Team and coach features are intended to support training organization and communication. Coaches and administrators are responsible for using these tools lawfully, respectfully, and only for appropriate team or training purposes.",
    ],
  },
  {
    title: "6. User Content and Conduct",
    paragraphs: [
      "You may be able to submit workout logs, notes, profile information, progress data, messages, or other content. You are responsible for the content you submit and must not submit unlawful, harmful, abusive, misleading, or infringing content.",
      "You may not misuse Gym DTC, attempt to disrupt the service, access accounts or data without permission, reverse engineer protected parts of the service, or use Gym DTC in a way that harms athletes, coaches, teams, or other users.",
    ],
  },
  {
    title: "7. Subscriptions or Payments",
    paragraphs: [
      "Some Gym DTC features may be free, while others may require payment, subscription, team access, or purchase through a third-party provider such as an app store or payment processor.",
      "When paid features are offered, the applicable price, billing terms, renewal terms, cancellation options, taxes, and refund rules will be presented at or before purchase. Third-party app store or payment provider terms may also apply.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, Gym DTC and its owners, operators, service providers, and partners are not liable for injuries, losses, damages, or claims arising from your use of Gym DTC, your participation in training, your reliance on workout content, or your interactions with coaches, teams, or other users.",
      "Gym DTC is provided on an as-is and as-available basis. We do not guarantee that the service will be uninterrupted, error-free, secure, or available at all times.",
    ],
  },
  {
    title: "9. Changes to Terms",
    paragraphs: [
      "We may update these Terms from time to time. When we make changes, we may update the effective date or provide notice in another reasonable way.",
      "Your continued use of Gym DTC after updated Terms are posted means you accept the updated Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            title="Terms of Use"
            description="These Terms explain the rules for using Gym DTC, including account access, training content, coach and team features, user conduct, payments, and liability."
          />
          <p className="mt-8 inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-bold text-zinc-300">
            Effective date: May 10, 2026
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="space-y-10">
              <div className="border-b border-white/10 pb-8">
                <p className="text-lg leading-8 text-zinc-300">
                  Gym DTC ("we," "our," or "us") provides training, workout, team, and coaching tools through the Gym DTC website and mobile application. Please read these Terms carefully before using Gym DTC.
                </p>
              </div>

              {termsSections.map((section) => (
                <section key={section.title} className="scroll-mt-24">
                  <h2 className="text-2xl font-black tracking-tight text-white">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-8 text-zinc-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">
                <h2 className="text-2xl font-black tracking-tight text-white">10. Contact</h2>
                <p className="mt-4 leading-8 text-zinc-300">If you have questions about these Terms, contact Gym DTC:</p>
                <div className="mt-4 flex flex-col gap-3 text-base font-bold sm:flex-row sm:flex-wrap sm:items-center">
                  <a className="text-volt transition hover:text-white" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  <span className="hidden text-zinc-600 sm:inline" aria-hidden="true">-</span>
                  <a className="text-volt transition hover:text-white" href={`https://www.${site.domain}/`} target="_blank" rel="noreferrer">
                    https://www.{site.domain}/
                  </a>
                </div>
              </section>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
