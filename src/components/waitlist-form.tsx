import { site } from "@/lib/site";

const roleOptions = [
  "Coach or school leader",
  "Parent or guardian",
  "Athlete",
  "Adult training for myself",
  "Interested in app updates",
];

const interestOptions = [
  "Team or school pilot",
  "Family launch updates",
  "Athlete app access",
  "Adult training plans",
  "Mobile app release",
];

export function WaitlistForm() {
  return (
    <form
      id="waitlist"
      className="space-y-6 scroll-mt-28"
      aria-label="Gym DTC waitlist form"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-white">Full name</span>
          <input name="name" type="text" required placeholder="Your name" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-white">Email address</span>
          <input name="email" type="email" required placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-white">Phone</span>
          <input name="phone" type="tel" placeholder="Optional" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-white">I am a</span>
          <select name="role" required defaultValue="" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition focus:border-volt focus:ring-4">
            <option value="" disabled>Choose one</option>
            {roleOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-bold text-white">Primary interest</span>
        <select name="interest" required defaultValue="" className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition focus:border-volt focus:ring-4">
          <option value="" disabled>Choose one</option>
          {interestOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-bold text-white">What are you trying to build?</span>
        <textarea name="message" rows={6} placeholder="Example: I coach a middle school wrestling team and want off-season accountability. Or: I am a parent looking for safe structure outside practice." className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4" />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-full border border-volt bg-volt px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-obsidian shadow-glow transition hover:border-white hover:bg-white">
          Join the Waitlist
        </button>
        <p className="text-xs leading-6 text-zinc-500">Submitting opens your email app with these details addressed to Gym DTC.</p>
      </div>
    </form>
  );
}
