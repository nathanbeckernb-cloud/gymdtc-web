import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Gym DTC home">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-volt/30 bg-volt text-sm font-black tracking-tight text-obsidian shadow-glow transition group-hover:scale-105">
        DTC
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-black uppercase tracking-[0.18em] text-white">Gym</span>
        <span className="text-xs font-bold uppercase tracking-[0.32em] text-volt">DTC</span>
      </span>
    </Link>
  );
}
