import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 ${className}`}>
      {children}
    </div>
  );
}

export function IconBadge({ children }: { children: ReactNode }) {
  return <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl bg-volt text-lg font-black text-obsidian">{children}</div>;
}
