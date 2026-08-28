import type { Metadata } from "next";

import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "DTC Fuel Parent Consent",
  description: "Enter a DTC Fuel athlete consent code to review and sign team weight-sharing permission.",
};

export default function ConsentPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="DTC Fuel · Parent/Guardian"
            title="Review your athlete's consent request"
            description="Enter the six-character code shown in your athlete's DTC Fuel app. No DTC Fuel account or app download is required."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Card className="p-6 sm:p-8 lg:p-10">
            <form action="/consent/review" method="get" className="space-y-6">
              <div>
                <label htmlFor="code" className="block text-sm font-black uppercase tracking-[0.18em] text-zinc-400">
                  Athlete consent code
                </label>
                <input
                  id="code"
                  name="code"
                  inputMode="text"
                  autoCapitalize="characters"
                  autoComplete="one-time-code"
                  maxLength={8}
                  required
                  placeholder="A7K4P2"
                  className="mt-3 w-full rounded-2xl border border-white/15 bg-black/40 px-5 py-5 text-center text-3xl font-black uppercase tracking-[0.3em] text-white outline-none transition focus:border-volt"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-volt px-6 py-4 text-base font-black uppercase tracking-[0.12em] text-black transition hover:bg-white"
              >
                Review Consent
              </button>
            </form>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-sm leading-7 text-zinc-400">
              <p>
                The code identifies one athlete and one team request. You will see exactly what the coach is asking to view before you decide whether to sign.
              </p>
              <p>
                Meals, food photos, private notes, medical information, and unrelated account information are not included in this consent.
              </p>
              <p>
                Codes expire after seven days. If your code no longer works, ask your athlete or team administrator to create a new one.
              </p>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
