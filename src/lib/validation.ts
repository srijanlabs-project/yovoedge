import { z } from "zod";

export const CONCERN_AREAS = [
  "Performance in competition",
  "Confidence / Self-belief",
  "Managing pressure",
  "Focus & concentration",
  "Emotions & mood",
  "Injury / Setbacks",
  "Motivation / Enjoyment",
  "Life balance",
  "Relationships / Communication",
  "Other",
] as const;

export const GENDERS = ["Female", "Male", "Non-binary", "Prefer not to say"] as const;
export const LEVELS = ["Beginner", "School / Club", "State", "National", "International"] as const;
export const YEARS_PLAYING = ["Less than 1 year", "1-3 years", "3-5 years", "5+ years"] as const;
export const DURATIONS = ["Just noticed it", "A few weeks", "A few months", "6+ months"] as const;
export const CONCERN_LEVELS = ["Just curious", "A little concerned", "Concerned", "Very concerned"] as const;

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
  athleteName: z.string().trim().min(1, "Please enter your athlete's first name."),
  athleteAge: z
    .number({ error: "Please enter your athlete's age." })
    .int()
    .min(9, "YovoEdge currently supports athletes aged 9 to 18.")
    .max(18, "YovoEdge currently supports athletes aged 9 to 18."),
  athleteGender: z.enum(GENDERS).optional().or(z.literal("")),
  athleteSport: z.string().trim().min(1, "Please tell us their primary sport."),
  athleteLevel: z.enum(LEVELS).optional().or(z.literal("")),
  athleteYearsPlaying: z.enum(YEARS_PLAYING).optional().or(z.literal("")),
});

// Section 2 — What have you been noticing
export const noticingSchema = z.object({
  noticingText: z.string().trim().max(1000).optional().or(z.literal("")),
  concernAreas: z.array(z.enum(CONCERN_AREAS)).optional().default([]),
  durationNoticed: z.enum(DURATIONS).optional().or(z.literal("")),
  concernLevel: z.enum(CONCERN_LEVELS).optional().or(z.literal("")),
});

// Section 3 — What would be most helpful right now
export const helpfulSchema = z.object({
  helpfulText: z.string().trim().max(1000).optional().or(z.literal("")),
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
