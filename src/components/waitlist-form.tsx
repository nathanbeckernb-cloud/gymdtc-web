"use client";

import { FormEvent, useId, useRef, useState } from "react";
import { formEndpoint, interestOptions, roleOptions } from "@/lib/forms";
import type { ContactFormType } from "@/lib/forms";

const fieldClassName = "mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-volt/50 transition placeholder:text-zinc-600 focus:border-volt focus:ring-4";

type FormState = "idle" | "submitting" | "success" | "error";

type WaitlistFormProps = {
  id?: string;
  formType?: ContactFormType;
  submitLabel?: string;
  note?: string;
  defaultInterest?: (typeof interestOptions)[number];
};

export function WaitlistForm({
  id = "waitlist",
  formType = "waitlist",
  submitLabel = "Join the Waitlist",
  note = "Your details submit securely to Gym DTC. We will follow up only when there is a useful next step.",
  defaultInterest,
}: WaitlistFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("Something went wrong. Please try again or email Gym DTC directly.");
  const formRef = useRef<HTMLFormElement>(null);
  const statusId = useId();
  const isSubmitting = formState === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(result?.error || "The form could not be submitted.");
      }

      formRef.current?.reset();
      setFormState("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again or email Gym DTC directly.");
      setFormState("error");
    }
  }

  return (
    <form
      ref={formRef}
      id={id}
      className="space-y-6 scroll-mt-28"
      aria-label={formType === "team-pilot" ? "Gym DTC team pilot form" : "Gym DTC waitlist form"}
      aria-describedby={statusId}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="formType" value={formType} />
      <label className="hidden" aria-hidden="true">
        Do not fill this out
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-white">Full name</span>
          <input name="name" type="text" required placeholder="Your name" className={fieldClassName} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-white">Email address</span>
          <input name="email" type="email" required placeholder="you@example.com" className={fieldClassName} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-white">Phone</span>
          <input name="phone" type="tel" placeholder="Optional" className={fieldClassName} />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-white">I am a</span>
          <select name="role" required defaultValue="" className={fieldClassName}>
            <option value="" disabled>Choose one</option>
            {roleOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-bold text-white">Primary interest</span>
        <select name="interest" required defaultValue={defaultInterest || ""} className={fieldClassName}>
          <option value="" disabled>Choose one</option>
          {interestOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-sm font-bold text-white">What are you trying to build?</span>
        <textarea name="message" rows={6} placeholder="Example: I coach a middle school wrestling team and want off-season accountability. Or: I am a parent looking for safe structure outside practice." className={fieldClassName} />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 items-center justify-center rounded-full border border-volt bg-volt px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-obsidian shadow-glow transition hover:border-white hover:bg-white disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? "Submitting..." : submitLabel}
        </button>
        <p className="text-xs leading-6 text-zinc-500">{note}</p>
      </div>
      <div id={statusId} aria-live="polite">
        {formState === "success" && (
          <p className="rounded-2xl border border-volt/40 bg-volt/10 px-4 py-3 text-sm font-bold text-volt">
            Thank you. Your details were sent to Gym DTC, and we will follow up when there is a clear next step.
          </p>
        )}
        {formState === "error" && (
          <p className="rounded-2xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-200">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
