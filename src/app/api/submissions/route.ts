import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { insertSubmission, getAllSubmissions } from "@/lib/db";
import { submissionSchema } from "@/lib/validation";
import { requireAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = submissionSchema.safeParse(body);
  if (!parsed.success) {
    // Consent is enforced here server-side too — a disabled button on the
    // client is not a security control, this check is the real gate.
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const id = randomUUID();
  const now = new Date().toISOString();
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = req.headers.get("user-agent") || "unknown";

  await insertSubmission({
    id,
    created_at: now,
    parent_name: data.parentName,
    parent_email: data.parentEmail,
    parent_phone: data.parentPhone,
    athlete_name: data.athleteName,
    athlete_age: data.athleteAge,
    athlete_gender: data.athleteGender || null,
    athlete_sport: data.athleteSport,
    athlete_level: data.athleteLevel || null,
    athlete_years_playing: data.athleteYearsPlaying || null,
    noticing_text: data.noticingText || null,
    concern_areas: data.concernAreas || [],
    duration_noticed: data.durationNoticed || null,
    concern_level: data.concernLevel || null,
    helpful_text: data.helpfulText || null,
    consent_accepted: true,
    consent_timestamp: now,
    privacy_version: data.privacyVersion,
    terms_version: data.termsVersion,
    consent_ip: ip,
    consent_user_agent: userAgent,
    status: "new",
  });

  return NextResponse.json({ id }, { status: 201 });
}

// Protected — used by the internal admin view for CSV export.
export async function GET(req: NextRequest) {
  const authed = await requireAdmin(req);
  if (!authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const submissions = await getAllSubmissions();
  return NextResponse.json({ submissions });
}
