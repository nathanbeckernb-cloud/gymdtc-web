import { NextResponse } from "next/server";
import { interestOptions, roleOptions } from "@/lib/forms";
import { site } from "@/lib/site";

const validFormTypes = ["waitlist", "team-pilot"];
const maxLengthByField = {
  name: 120,
  email: 180,
  phone: 60,
  role: 80,
  interest: 80,
  message: 2000,
  formType: 30,
};

type ContactPayload = {
  formType?: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  interest?: string;
  message?: string;
  company?: string;
};

function clean(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return badRequest("Please submit the form again.");
  }

  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const submission = {
    formType: clean(body.formType, maxLengthByField.formType) || "waitlist",
    name: clean(body.name, maxLengthByField.name),
    email: clean(body.email, maxLengthByField.email).toLowerCase(),
    phone: clean(body.phone, maxLengthByField.phone),
    role: clean(body.role, maxLengthByField.role),
    interest: clean(body.interest, maxLengthByField.interest),
    message: clean(body.message, maxLengthByField.message),
  };

  if (!validFormTypes.includes(submission.formType)) {
    return badRequest("Please choose a valid form type.");
  }

  if (!submission.name || !isValidEmail(submission.email) || !submission.role || !submission.interest) {
    return badRequest("Please complete the required fields before submitting.");
  }

  if (!roleOptions.includes(submission.role as (typeof roleOptions)[number]) || !interestOptions.includes(submission.interest as (typeof interestOptions)[number])) {
    return badRequest("Please choose one of the available form options.");
  }

  const externalEndpoint = process.env.FORMSPREE_ENDPOINT || process.env.CONTACT_FORM_ENDPOINT;

  if (!externalEndpoint) {
    console.error("Contact form submission endpoint is not configured.", submission);
    return NextResponse.json(
      { error: "The contact form is not configured yet. Please email Gym DTC directly." },
      { status: 503 },
    );
  }

  let response: Response;

  try {
    response = await fetch(externalEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...submission,
        _subject: `${site.name} ${submission.formType === "team-pilot" ? "team pilot" : "waitlist"} request`,
        submittedAt: new Date().toISOString(),
      }),
    });
  } catch {
    console.error("Contact form forwarding request failed.", { formType: submission.formType });
    return NextResponse.json(
      { error: "We could not send your request. Please try again or email Gym DTC directly." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error("Contact form forwarding failed.", { status: response.status, formType: submission.formType });
    return NextResponse.json(
      { error: "We could not send your request. Please try again or email Gym DTC directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
