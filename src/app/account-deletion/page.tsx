import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Delete a DTC Fuel Account",
  description: "Instructions for deleting a DTC Fuel account and associated data.",
};

export default function AccountDeletionPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="DTC Fuel · Account"
            title="Delete your DTC Fuel account"
            description="You can permanently delete your DTC Fuel account in the app, or contact us if you cannot access your account."
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="space-y-10 text-zinc-300">
              <section>
                <h2 className="text-2xl font-black tracking-tight text-white">Delete in the app</h2>
                <ol className="mt-5 list-decimal space-y-3 pl-6 leading-8">
                  <li>Sign in to DTC Fuel.</li>
                  <li>Open More &gt; Account &amp; Privacy.</li>
                  <li>Choose Delete Account.</li>
                  <li>Read the deletion warning and choose Continue.</li>
                  <li>Read the final warning and choose Delete Account.</li>
                </ol>
                <p className="mt-5 leading-8">Deletion is never a one-tap action. The app signs the device out after the server confirms successful deletion.</p>
              </section>

              <section>
                <h2 className="text-2xl font-black tracking-tight text-white">If you cannot access the app</h2>
                <p className="mt-4 leading-8">
                  Email <a className="font-bold text-volt hover:text-white" href="mailto:hello@gymdtc.com?subject=DTC%20Fuel%20account%20deletion">hello@gymdtc.com</a> from the email address associated with the account and use the subject “DTC Fuel account deletion.” We may ask you to verify account ownership. Never send your password or authentication token.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black tracking-tight text-white">What deletion covers</h2>
                <p className="mt-4 leading-8">
                  Deletion permanently removes the DTC Fuel authentication account and account-owned profile, athlete profile, nutrition goals, meals and snacks, hydration entries, weight and recovery history, progress records, selected plan/app state, saved foods, tournament records, Team membership, guardian relationships, sharing settings, readiness snapshots, and local photo/cache data from that device.
                </p>
                <p className="mt-4 leading-8">
                  If another active Team administrator already exists, the Team continues with that administrator. If the deleting user is the only active administrator, the Team is archived and its active connections are ended; DTC Fuel never silently promotes a coach. Deleting a guardian account revokes approvals tied to that guardian and may end dependent minor Team access.
                </p>
                <p className="mt-4 leading-8">
                  De-identified security records and limited backups may remain only as described in the Privacy Policy. Limited information may also be retained when required for legal compliance, security, fraud prevention, or dispute resolution.
                </p>
              </section>

              <section className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">
                <h2 className="text-2xl font-black tracking-tight text-white">Need help?</h2>
                <p className="mt-4 leading-8">
                  Email <a className="font-bold text-volt hover:text-white" href="mailto:hello@gymdtc.com">hello@gymdtc.com</a> or visit our <a className="font-bold text-volt hover:text-white" href="/contact">contact page</a>.
                </p>
                <p className="mt-4 leading-8">
                  Read the <a className="font-bold text-volt hover:text-white" href="/privacy">DTC Fuel Privacy Policy</a> for more information about retention and account choices.
                </p>
              </section>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
