import path from "path";
import fs from "fs";

// A plain JSON-lines file store — deliberately not a native module. The
// original build used better-sqlite3, which needs node-gyp + a C++ toolchain
// (Visual Studio Build Tools on Windows) to compile if no prebuilt binary
// matches your Node version. That's exactly the kind of environment
// friction this app shouldn't have. This store has zero native
// dependencies and works the same on any OS/Node version.
//
// Trade-off: appends are safe for one Node process (which is what
// `next dev` / `next start` are), but this is not built for concurrent
// multi-process writers or high volume. Fine for an intake form; swap for
// a real hosted database (Postgres, etc.) before this handles production
// traffic at scale.

export type SubmissionRecord = {
  id: string;
  created_at: string;

  parent_name: string;
  parent_email: string;
  parent_phone: string;

  athlete_name: string;
  athlete_age: number;
  athlete_gender: string | null;
  athlete_sport: string;
  athlete_level: string | null;
  athlete_years_playing: string | null;

  noticing_text: string | null;
  concern_areas: string[];
  duration_noticed: string | null;
  concern_level: string | null;
  helpful_text: string | null;

  consent_accepted: boolean;
  consent_timestamp: string;
  privacy_version: string;
  terms_version: string;
  consent_ip: string;
  consent_user_agent: string;

  status: string;
};

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "submissions.jsonl");

function ensureDataDir() {
  if (!fs.existsSync(/*turbopackIgnore: true*/ DATA_DIR)) {
    fs.mkdirSync(/*turbopackIgnore: true*/ DATA_DIR, { recursive: true });
  }
}

export function insertSubmission(record: SubmissionRecord) {
  ensureDataDir();
  fs.appendFileSync(DB_FILE, JSON.stringify(record) + "\n", "utf8");
}

export function getAllSubmissions(): SubmissionRecord[] {
  ensureDataDir();
  if (!fs.existsSync(/*turbopackIgnore: true*/ DB_FILE)) return [];
  const raw = fs.readFileSync(/*turbopackIgnore: true*/ DB_FILE, "utf8");
  const rows = raw
    .split("\n")
    .filter((line) => line.trim().length > 0)
    .map((line) => JSON.parse(line) as SubmissionRecord);
  return rows.reverse(); // newest first
}
