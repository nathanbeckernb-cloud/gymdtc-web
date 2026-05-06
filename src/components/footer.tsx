import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { Container } from "./container";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
            Structured training plans for athletes, teams, families, wrestling programs, and adults who want clear work, accountability, and progress they can see.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">Site</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-volt">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.22em] text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            <li>{site.domain}</li>
            <li><a className="transition hover:text-volt" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>Mobile app links coming soon.</li>
          </ul>
        </div>
      </Container>
      <Container className="mt-10 border-t border-white/10 pt-6 text-xs text-zinc-500">
        © {new Date().getFullYear()} Gym DTC. Built for disciplined training.
      </Container>
    </footer>
  );
}
