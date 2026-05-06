import Link from "next/link";
import { navItems } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/88 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-zinc-300 transition hover:text-volt">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:block">
          <ButtonLink href="/contact">Join the Waitlist</ButtonLink>
        </div>
      </Container>
      <Container className="flex gap-4 overflow-x-auto border-t border-white/10 py-3 md:hidden" >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-bold text-zinc-300 transition hover:text-volt">
            {item.label}
          </Link>
        ))}
      </Container>
    </header>
  );
}
