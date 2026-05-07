import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Review the Gym DTC Terms of Use for the website, mobile application, and related training services.",
};

const termsSections = [
  {
    title: "1. Use of the Service",
    body: "GYM DTC provides fitness, training, workout planning, and related tools for athletes, families, coaches, teams, and other users. You agree to use the service only for lawful purposes and in a manner consistent with these Terms.",
  },
  {
    title: "2. Accounts",
    body: "You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your login information and for activity that occurs under your account.",
  },
  {
    title: "3. Health and Fitness Disclaimer",
    body: "GYM DTC provides general fitness and training information and is not medical advice. You should consult a qualified medical professional before beginning any exercise or training program. Your use of the app and participation in workouts is at your own risk.",
  },
  {
    title: "4. User Content",
    body: "You may submit or create content within GYM DTC, such as profile details, workout notes, progress information, and related activity. You retain ownership of your content, but you grant GYM DTC the right to use it as needed to operate and improve the service.",
  },
  {
    title: "5. Acceptable Use",
    body: "You agree not to misuse the service, interfere with its operation, attempt unauthorized access, or use GYM DTC in a way that could harm the platform or other users.",
  },
  {
    title: "6. Intellectual Property",
    body: "The GYM DTC website, app, branding, content, and related materials are owned by GYM DTC or its licensors and may not be copied, modified, or distributed without permission.",
  },
  {
    title: "7. Termination",
    body: "We may suspend or terminate access to the service if we believe a user has violated these Terms or used the service improperly.",
  },
  {
    title: "8. Disclaimer of Warranties",
    body: "GYM DTC is provided on an “as is” and “as available” basis without warranties of any kind, to the fullest extent permitted by law.",
  },
  {
    title: "9. Limitation of Liability",
    body: "To the fullest extent permitted by law, GYM DTC will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of the service.",
  },
  {
    title: "10. Changes to These Terms",
    body: "We may update these Terms of Use from time to time. Continued use of the service after updates means the updated Terms apply.",
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Legal"
            title="Terms of Use"
            description="Clear terms for using the Gym DTC website, mobile application, and related training services."
          />
          <p className="mt-8 inline-flex rounded-full border border-volt/30 bg-volt/10 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-volt">
            Effective date: May 7, 2026
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-5xl">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="border-b border-white/10 pb-8">
              <p className="text-lg leading-8 text-zinc-300">
                Welcome to GYM DTC. By accessing or using the GYM DTC mobile application, website, and related services, you agree to these Terms of Use.
              </p>
            </div>

            <div className="mt-8 grid gap-8">
              {termsSections.map((section) => (
                <section key={section.title} className="scroll-mt-28">
                  <h2 className="text-2xl font-black tracking-tight text-white">{section.title}</h2>
                  <p className="mt-3 leading-8 text-zinc-300">{section.body}</p>
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-volt">11. Contact</p>
              <h2 className="mt-3 text-2xl font-black text-white">Questions about these Terms of Use?</h2>
              <p className="mt-3 leading-8 text-zinc-300">
                If you have questions about these Terms of Use, contact GYM DTC at{" "}
                <a className="font-bold text-white underline decoration-volt/60 underline-offset-4 transition hover:text-volt" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{" "}
                or visit{" "}
                <a className="font-bold text-white underline decoration-volt/60 underline-offset-4 transition hover:text-volt" href={`https://www.${site.domain}/`}>
                  https://www.gymdtc.com/
                </a>
                .
              </p>
            </section>
          </Card>
        </Container>
      </section>
    </>
  );
}
