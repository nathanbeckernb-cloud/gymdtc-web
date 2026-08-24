import type { Metadata } from "next";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "DTC Fuel Privacy Policy",
  description: "How DTC Fuel collects, uses, stores, and protects information for athletes, parents, guardians, and teams.",
};

const sections = [
  {
    title: "Information we collect",
    paragraphs: ["Depending on the features you use, DTC Fuel may collect or store:"],
    items: [
      "Account and contact information, including email address, display name, account identifier, and authentication records.",
      "Profile information, including birth date, calculated age, sex selection, height, current weight, goal weight, sport, position or role, season phase, workout frequency, goals, allergies, food preferences, and practice or competition schedule information.",
      "Nutrition and activity information, including calorie and macro targets, meal and snack logs, foods, serving amounts, hydration logs, weight history, plan completion, and related progress information.",
      "Food, package, Nutrition Facts, and ingredient-label images selected or captured for supported photo-review features. In the current build, these images stay in the app's local device storage and are not uploaded to DTC Fuel or Supabase.",
      "Product information, including scanned barcodes and nutrition or ingredient information returned for those products.",
      "Support information you send to us, such as your email address, device or app details you choose to include, and the content of a support request.",
      "Limited device and technical information needed to operate, secure, diagnose, and improve the app. DTC Fuel does not currently include advertising or cross-app tracking SDKs.",
    ],
  },
  {
    title: "Camera, photos, and on-device recognition",
    paragraphs: [
      "DTC Fuel asks for camera access only when you use a camera feature. Camera access can be used to scan food barcodes and photograph meals, food packages, ingredients, and Nutrition Facts labels. When you choose an existing food image, DTC Fuel asks for photo-library access so you can select that image. It does not scan or import the rest of your library.",
      "Nutrition Facts recognition on iOS uses Apple Vision on the device. The label image is processed locally by the operating system and is not sent to OpenAI, Google Vision, AWS, a paid OCR provider, or another cloud image-recognition service. Recognized values are estimates and are always presented for review; they are never saved automatically.",
      "Food-picture macro estimation is an explicitly approximate review flow. In the current beta it does not send the image to an external recognition provider. Users must confirm or correct the foods, portions, and nutrition before saving. Confirmed food names and nutrition values may sync as an ordinary meal record, but the image and its device-local path do not sync.",
    ],
  },
  {
    title: "Local storage and Supabase",
    paragraphs: [
      "DTC Fuel uses device storage to keep session information, user-scoped app state, product cache entries, and local food or label photos needed by app features. Removing the app may remove local-only information that has not been synchronized.",
      "DTC Fuel uses Supabase to provide account authentication and, when configured, to store account, profile, nutrition-goal, meal, hydration, weight, Team, guardian, and readiness-summary information. Supabase acts as a service provider that processes data to operate DTC Fuel. Current food-photo files and device-local photo paths are excluded from Supabase synchronization. Access controls, including Row Level Security, are intended to limit signed-in users and approved Team or guardian roles to the records they are permitted to use.",
    ],
  },
  {
    title: "Open Food Facts",
    paragraphs: [
      "When you scan a barcode, DTC Fuel may send the barcode number to the Open Food Facts public product API to retrieve product name, serving, ingredient, and nutrition information. DTC Fuel does not upload your food or label photo to Open Food Facts. Open Food Facts may receive ordinary network information, such as an IP address and request metadata, when the app makes a product lookup. Product data may be incomplete or inaccurate and must be reviewed before saving.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use information to create and secure accounts; personalize nutrition guidance; display meal, hydration, weight, and progress history; support barcode and label review; restore user data; answer support requests; prevent abuse; and maintain, troubleshoot, and improve DTC Fuel.",
      "DTC Fuel provides educational wellness and sports-nutrition information, not medical diagnosis or treatment. Nutrition and weight estimates should be reviewed and may not be appropriate for every person.",
    ],
  },
  {
    title: "How we share information",
    paragraphs: [
      "We do not sell personal data. We do not use personal data for cross-app advertising or tracking.",
      "We may share information with service providers only as needed to operate DTC Fuel, such as Supabase for authentication and data hosting. We may disclose information when required by law, to protect users or the service, or as part of a business transaction subject to appropriate safeguards.",
      "Team and guardian features use targeted, expiring invitations and server-enforced access rules. Athletes and authorized guardians can review and revoke access and choose which derived readiness signals a team may see. Minor team access requires guardian and team-admin approval before membership begins. Coaches and team administrators receive only enabled readiness/status summaries, not full food diaries, exact calories, exact daily weights, photos, private notes, or medical information. Team administrators do not bypass athlete privacy choices.",
    ],
  },
  {
    title: "Retention",
    paragraphs: [
      "We retain account and synchronized app information while an account is active and as reasonably needed to provide DTC Fuel, comply with legal obligations, resolve disputes, prevent fraud, and enforce agreements. Local cache files remain on the device until removed by the app, operating system, user, or app uninstall. Backup copies may remain for a limited period before routine deletion. We will not retain personal data longer than reasonably necessary for these purposes.",
    ],
  },
  {
    title: "Account deletion and choices",
    paragraphs: [
      "Users can start account deletion from More > Account & Privacy > Delete Account and complete both confirmations. If you cannot access the app, request deletion at hello@gymdtc.com from the account email with subject \"DTC Fuel account deletion.\" Never send a password or login token. You can also review the public deletion instructions at https://www.gymdtc.com/account-deletion.",
      "Deletion requests require identity verification. When deletion is completed, we delete or de-identify the account and associated DTC Fuel data unless limited retention is required by law, security, fraud prevention, or dispute resolution. Deleting an account does not necessarily remove information that was lawfully de-identified so it can no longer identify a user.",
      "You can deny camera access and continue with manual food entry. Account & Privacy also offers Clear This Device, which removes the current account's cache and owned local food photos from that device without deleting server data or another account's cache. You may also request access, correction, or deletion help by contacting us.",
    ],
  },
  {
    title: "Teens and minors",
    paragraphs: [
      "DTC Fuel may be used by teen athletes. A parent or guardian should review use of the app, especially nutrition targets and weight goals. We do not knowingly collect personal information from a child below the age at which parental consent is legally required without appropriate authorization. If you believe a child provided information without required permission, contact us so we can review and delete it.",
      "DTC Fuel does not recommend aggressive weight cuts for minors and should not replace advice from a qualified medical professional, registered dietitian, parent or guardian, or responsible coach.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational safeguards intended to protect personal data. No system is completely secure, and we cannot guarantee absolute security. Keep your password private and contact us if you believe your account has been compromised.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as DTC Fuel changes. We will post the updated effective date and provide additional notice when required.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-radial-volt py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="DTC Fuel · Legal"
            title="Privacy Policy"
            description="This policy explains the information DTC Fuel handles, why it is used, where it is processed, and the choices available to users and parents or guardians."
          />
          <p className="mt-8 inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-bold text-zinc-300">
            Effective date: August 23, 2026
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Card className="p-6 sm:p-8 lg:p-10">
            <div className="space-y-10">
              <div className="border-b border-white/10 pb-8">
                <p className="text-lg leading-8 text-zinc-300">
                  DTC Fuel is a sports-nutrition application provided by Gym DTC ("DTC Fuel," "we," "our," or "us").
                </p>
              </div>

              {sections.map((section) => (
                <section key={section.title} className="scroll-mt-24">
                  <h2 className="text-2xl font-black tracking-tight text-white">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-8 text-zinc-300">{paragraph}</p>
                    ))}
                  </div>
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
                </section>
              ))}

              <section className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6">
                <h2 className="text-2xl font-black tracking-tight text-white">Contact</h2>
                <p className="mt-4 leading-8 text-zinc-300">For privacy questions, access or deletion requests, or support:</p>
                <div className="mt-4 flex flex-col gap-3 text-base font-bold sm:flex-row sm:flex-wrap sm:items-center">
                  <a className="text-volt transition hover:text-white" href="mailto:hello@gymdtc.com">hello@gymdtc.com</a>
                  <span className="hidden text-zinc-600 sm:inline" aria-hidden="true">•</span>
                  <a className="text-volt transition hover:text-white" href="/contact">Contact page</a>
                </div>
              </section>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
