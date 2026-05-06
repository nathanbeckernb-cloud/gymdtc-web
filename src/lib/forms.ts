export const formEndpoint = "/api/contact";

export const roleOptions = [
  "Coach or school leader",
  "Parent or guardian",
  "Athlete",
  "Adult training for myself",
  "Interested in app updates",
] as const;

export const interestOptions = [
  "Team or school pilot",
  "Family launch updates",
  "Athlete app access",
  "Adult training plans",
  "Mobile app release",
] as const;

export type ContactFormType = "waitlist" | "team-pilot";
