import { z } from "zod";

export const CONCERN_AREAS = [
  "Performs differently in competition",
  "Competition nerves",
  "Confidence",
  "One mistake affects the rest of the competition",
  "Focus",
  "Comparison",
  "Motivation",
  "Frustration",
  "Emotional regulation",
  "Recovering after setbacks",
  "Thinking about quitting",
  "I'm not sure",
] as const;

export const SPORTS = [
  "Athletics",
  "Badminton",
  "Basketball",
  "Boxing",
  "Chess",
  "Cricket",
  "Cycling",
  "Football",
  "Golf",
  "Gymnastics",
  "Hockey",
  "Kabaddi",
  "Martial Arts",
  "Padel",
  "Shooting",
  "Squash",
  "Swimming",
  "Table Tennis",
  "Tennis",
  "Volleyball",
  "Wrestling",
  "Other",
] as const;

export const ATHLETE_AGES = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] as const;

export const GENDERS = ["Girl", "Boy", "Non-binary", "Prefer not to say"] as const;
export const LEVELS = [
  "Plays recreationally",
  "Competes locally",
  "Competes at district level",
  "Competes at state level",
  "Competes nationally",
  "Competes internationally",
  "Not sure",
] as const;
export const PRIOR_SUPPORT = ["No", "Coach", "Counsellor", "Sports Psychologist", "Clinical Psychologist", "Other"] as const;
export const DURATIONS = [
  "Less than a month",
  "1–3 months",
  "3–6 months",
  "More than 6 months",
  "It comes and goes",
  "I'm not sure",
] as const;
export const CONNECTION_PREFERENCES = ["Online", "In-person", "Either"] as const;

// Section 0 — About you (the parent/guardian). This section did not exist in
// the original design mockups; the Privacy Note promises this data is
// collected ("your name and a way to reach you"), so it's added here.
export const parentSchema = z.object({
  parentName: z.string().trim().min(2, "Please enter your full name."),
  parentEmail: z.string().trim().email("Please enter a valid email address."),
  parentPhone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
});

// Section 1 — About your athlete
export const athleteSchema = z.object({
  // Optional — parents may not want to share the athlete's name immediately.
  athleteName: z.string().trim().optional().or(z.literal("")),
  athleteAge: z
    .number({ error: "Please enter your athlete's age." })
    .int()
    .min(9, "YovoEdge currently supports athletes aged 9 to 18.")
    .max(18, "YovoEdge currently supports athletes aged 9 to 18."),
  athleteGender: z.enum(GENDERS).optional().or(z.literal("")),
  athleteSport: z.string().trim().min(1, "Please tell us their primary sport."),
  athleteLevel: z.enum(LEVELS).optional().or(z.literal("")),
  priorSupport: z.enum(PRIOR_SUPPORT).optional().or(z.literal("")),
});

// Section 2 — What have you been noticing
export const noticingSchema = z.object({
  noticingText: z.string().trim().max(1000).optional().or(z.literal("")),
  concernAreas: z.array(z.enum(CONCERN_AREAS)).optional().default([]),
  durationNoticed: z.enum(DURATIONS).optional().or(z.literal("")),
});

// Section 3 — What are you hoping for
export const helpfulSchema = z.object({
  helpfulText: z.string().trim().max(1000).optional().or(z.literal("")),
  connectionPreference: z.enum(CONNECTION_PREFERENCES).optional().or(z.literal("")),
  city: z.string().trim().max(100).optional().or(z.literal("")),
});

export const intakeSchema = parentSchema
  .and(athleteSchema)
  .and(noticingSchema)
  .and(helpfulSchema);

export type IntakeData = z.infer<typeof intakeSchema>;

export const submissionSchema = intakeSchema.and(
  z.object({
    consentAccepted: z.literal(true, {
      error: "You must accept the Terms of Service and Privacy Note to continue.",
    }),
    privacyVersion: z.string(),
    termsVersion: z.string(),
  })
);

export type SubmissionData = z.infer<typeof submissionSchema>;
