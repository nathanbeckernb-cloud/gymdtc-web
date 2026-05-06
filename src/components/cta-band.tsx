import { ButtonLink } from "./button-link";
import { Container } from "./container";

export function CtaBand() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-volt/25 bg-gradient-to-br from-volt/20 via-white/[0.06] to-ember/10 p-8 shadow-glow sm:p-12 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-volt">Early access</p>
              <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white sm:text-5xl">
                Bring structure to the training days nobody should have to guess through.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
                Join the Gym DTC waitlist for launch updates, coach pilots, team onboarding conversations, and future mobile app links.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/contact">Join the Waitlist</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">Talk to Us</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
