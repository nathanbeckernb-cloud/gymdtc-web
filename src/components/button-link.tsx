import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "border-volt bg-volt text-obsidian hover:bg-white hover:border-white shadow-glow",
  secondary:
    "border-white/15 bg-white/5 text-white hover:border-volt/60 hover:bg-white/10",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-black uppercase tracking-[0.18em] transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
