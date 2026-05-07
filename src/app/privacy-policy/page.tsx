import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Gym DTC Privacy Policy to learn what information is collected, how it is used, how it may be shared, and how to contact Gym DTC.",
};

const policySections = [
  {
    title: "1. Information We Collect",
    body: "We may collect the following information when you use GYM DTC:",
    items: [
      "Account information, such as your name, email address, login credentials, and profile details",
      "Workout and training information, such as plans, completed workouts, progress, body metrics, and related activity",
      "User-generated content, such as notes, profile updates, and plan interactions",
      "Device and app information needed to operate and improve the app, such as basic diagnostics and app performance information",
    ],
  },
  {
    title: "2. How We Use Information",
    body: "We use information to:",
    items: [
      "Provide and operate the app",
      "Create and manage user accounts",
      "Deliver workout plans, schedules, progress tracking, and related features",
      "Support coaching, admin, and team-based features",
      "Improve app performance, reliability, and user experience",
      "Respond to support requests and communicate with users",
    ],
  },
  {
    title: "3. Sharing of Information",
    paragraphs: [
      "We do not sell personal information.",
      "We may share information only as needed with service providers that help us operate the app, host data, or support app functionality.",
    ],
  },
  {
    title: "4. Data Retention",
    paragraphs: [
      "We retain information for as long as necessary to provide the app, comply with legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    title: "5. Data Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational measures to help protect user information. No method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "6. Your Choices",
    paragraphs: ["You may request updates or deletion of your account information by contacting us at:"],
    contactEmail: "info@gymdtc.com",
  },
  {
    title: "7. Children’s Privacy",
    paragraphs: [
      "GYM DTC is not intended to collect personal information from children without appropriate permission where required. If you believe information has been provided improperly, contact us and we will review and address it.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Continued use of the app after updates means the updated policy applies.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description="This Privacy Policy explains what information Gym DTC collects, how we use it, and the choices available to you when you use the Gym DTC mobile application and website."
          />
          <p className="mt-8 inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-bold text-zinc-300">
            Effective date: May 7, 2026
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="space-y-10">
              <div className="border-b border-white/10 pb-8">
                <p className="text-lg leading-8 text-zinc-300">
                  GYM DTC (“we,” “our,” or “us”) respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices available to you when you use the GYM DTC mobile application and website.
                </p>
              </div>

              {policySections.map((section) => (
                <section key={section.title} className="scroll-mt-24">
                  <h2 className="text-2xl font-black tracking-tight text-white">{section.title}</h2>
                  {section.body ? <p className="mt-4 leading-8 text-zinc-300">{section.body}</p> : null}
                  {section.paragraphs ? (
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="leading-8 text-zinc-300">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}
                  {section.items ? (
                    <ul className="mt-5 space-y-3 leading-7 text-zinc-300">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-volt" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.contactEmail ? (
                    <a className="mt-4 inline-flex font-bold text-volt transition hover:text-white" href={`mailto:${section.contactEmail}`}>
                      {section.contactEmail}
                    </a>
                  ) : null}
                </section>
              ))}

              <section className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">
                <h2 className="text-2xl font-black tracking-tight text-white">9. Contact</h2>
                <p className="mt-4 leading-8 text-zinc-300">If you have questions about this Privacy Policy, contact:</p>
                <div className="mt-4 flex flex-col gap-3 text-base font-bold sm:flex-row sm:flex-wrap sm:items-center">
                  <a className="text-volt transition hover:text-white" href="mailto:info@gymdtc.com">
                    info@gymdtc.com
                  </a>
                  <span className="hidden text-zinc-600 sm:inline" aria-hidden="true">•</span>
                  <a className="text-volt transition hover:text-white" href="https://www.gymdtc.com/" target="_blank" rel="noreferrer">
                    https://www.gymdtc.com/
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
