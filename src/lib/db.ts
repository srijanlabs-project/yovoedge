import { Pool } from "pg";

// Postgres-backed store. Point DATABASE_URL at a Postgres instance —
// on Railway, add a Postgres service and reference its connection string
// (e.g. ${{Postgres.DATABASE_URL}}) as this app service's DATABASE_URL
// variable. Locally, point it at any Postgres you have running.
//
// If your DATABASE_URL doesn't already specify sslmode, and your provider's
// connection requires TLS, append `?sslmode=require` to the URL — pg reads
// that directly from the connection string, no code change needed.

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Point it at your Postgres instance " +
      "(e.g. the connection string from your Railway Postgres service)."
  );
}

const pool = new Pool({ connectionString });

export type SubmissionRecord = {
  id: string;
  created_at: string;

  parent_name: string;
  parent_email: string;
  parent_phone: string;

  athlete_name: string | null;
  athlete_age: number;
  athlete_gender: string | null;
  athlete_sport: string;
  athlete_level: string | null;
  prior_support: string | null;

  noticing_text: string | null;
  concern_areas: string[];
  duration_noticed: string | null;
  helpful_text: string | null;
  connection_preference: string | null;
  city: string | null;

  consent_accepted: boolean;
  consent_timestamp: string;
  privacy_version: string;
  terms_version: string;
  consent_ip: string;
  consent_user_agent: string;

  status: string;
};

// Runs once per server process (module-level singleton promise), not once
// per request — cheap, idempotent (CREATE TABLE IF NOT EXISTS), and makes
// sure the schema exists before any query touches it, including right after
// a fresh deploy against a brand-new database.
let schemaReady: Promise<void> | null = null;

function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = pool
      .query(`
        CREATE TABLE IF NOT EXISTS submissions (
          id                     UUID PRIMARY KEY,
          created_at             TIMESTAMPTZ NOT NULL,

          parent_name            TEXT NOT NULL,
          parent_email           TEXT NOT NULL,
          parent_phone           TEXT NOT NULL,

          -- athlete_name is nullable: the form now treats the athlete's
          -- first name as optional (some parents don't want to share it
          -- immediately).
          athlete_name           TEXT,
          athlete_age            INTEGER NOT NULL,
          athlete_gender         TEXT,
          athlete_sport          TEXT NOT NULL,
          athlete_level          TEXT,
          -- athlete_years_playing is retained for existing rows but is no
          -- longer written to — replaced by prior_support below.
          athlete_years_playing  TEXT,
          prior_support          TEXT,

          noticing_text          TEXT,
          concern_areas          TEXT[] NOT NULL DEFAULT '{}',
          duration_noticed       TEXT,
          -- concern_level is retained for existing rows but no longer
          -- written to — the "how concerned are you" field was dropped
          -- from the redesigned form.
          concern_level          TEXT,
          helpful_text           TEXT,
          connection_preference  TEXT,
          city                   TEXT,

          consent_accepted       BOOLEAN NOT NULL,
          consent_timestamp      TIMESTAMPTZ NOT NULL,
          privacy_version        TEXT NOT NULL,
          terms_version          TEXT NOT NULL,
          consent_ip             TEXT NOT NULL,
          consent_user_agent     TEXT NOT NULL,

          status                 TEXT NOT NULL DEFAULT 'new'
        );

        ALTER TABLE submissions ALTER COLUMN athlete_name DROP NOT NULL;
        ALTER TABLE submissions ADD COLUMN IF NOT EXISTS prior_support TEXT;
        ALTER TABLE submissions ADD COLUMN IF NOT EXISTS connection_preference TEXT;
        ALTER TABLE submissions ADD COLUMN IF NOT EXISTS city TEXT;
      `)
      .then(() => undefined);
  }
  return schemaReady;
}

export async function insertSubmission(record: SubmissionRecord): Promise<void> {
  await ensureSchema();
  await pool.query(
    `INSERT INTO submissions (
      id, created_at,
      parent_name, parent_email, parent_phone,
      athlete_name, athlete_age, athlete_gender, athlete_sport, athlete_level, prior_support,
      noticing_text, concern_areas, duration_noticed, helpful_text, connection_preference, city,
      consent_accepted, consent_timestamp, privacy_version, terms_version, consent_ip, consent_user_agent,
      status
    ) VALUES (
      $1, $2,
      $3, $4, $5,
      $6, $7, $8, $9, $10, $11,
      $12, $13, $14, $15, $16, $17,
      $18, $19, $20, $21, $22, $23,
      $24
    )`,
    [
      record.id,
      record.created_at,
      record.parent_name,
      record.parent_email,
      record.parent_phone,
      record.athlete_name,
      record.athlete_age,
      record.athlete_gender,
      record.athlete_sport,
      record.athlete_level,
      record.prior_support,
      record.noticing_text,
      record.concern_areas,
      record.duration_noticed,
      record.helpful_text,
      record.connection_preference,
      record.city,
      record.consent_accepted,
      record.consent_timestamp,
      record.privacy_version,
      record.terms_version,
      record.consent_ip,
      record.consent_user_agent,
      record.status,
    ]
  );
}

export async function getAllSubmissions(): Promise<SubmissionRecord[]> {
  await ensureSchema();
  const { rows } = await pool.query(
    `SELECT * FROM submissions ORDER BY created_at DESC`
  );
  return rows.map((r) => ({
    ...r,
    created_at: new Date(r.created_at).toISOString(),
    consent_timestamp: new Date(r.consent_timestamp).toISOString(),
  })) as SubmissionRecord[];
}

export async function getSubmissionsPage(
  page: number,
  pageSize: number
): Promise<{ rows: SubmissionRecord[]; total: number; totalPages: number }> {
  await ensureSchema();

  const { rows: countRows } = await pool.query(`SELECT COUNT(*)::int AS count FROM submissions`);
  const total = countRows[0]?.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const offset = (safePage - 1) * pageSize;

  const { rows } = await pool.query(
    `SELECT * FROM submissions ORDER BY created_at DESC LIMIT $1 OFFSET $2`,
    [pageSize, offset]
  );

  return {
    rows: rows.map((r) => ({
      ...r,
      created_at: new Date(r.created_at).toISOString(),
      consent_timestamp: new Date(r.consent_timestamp).toISOString(),
    })) as SubmissionRecord[],
    total,
    totalPages,
  };
}
