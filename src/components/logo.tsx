import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Gym DTC home">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-volt/40 bg-volt text-[0.8rem] font-black tracking-[-0.04em] text-obsidian shadow-glow ring-1 ring-white/10 transition group-hover:scale-105">
        DTC
      </span>
      <span className="flex flex-col border-l border-white/10 pl-3 leading-none">
        <span className="text-lg font-black uppercase tracking-[0.16em] text-white">Gym</span>
        <span className="mt-1 text-[0.68rem] font-black uppercase tracking-[0.3em] text-volt">DTC</span>
      </span>
    </Link>
  );
}
