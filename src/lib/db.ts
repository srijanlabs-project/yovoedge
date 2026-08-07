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

          athlete_name           TEXT NOT NULL,
          athlete_age            INTEGER NOT NULL,
          athlete_gender         TEXT,
          athlete_sport          TEXT NOT NULL,
          athlete_level          TEXT,
          athlete_years_playing  TEXT,

          noticing_text          TEXT,
          concern_areas          TEXT[] NOT NULL DEFAULT '{}',
          duration_noticed       TEXT,
          concern_level          TEXT,
          helpful_text           TEXT,

          consent_accepted       BOOLEAN NOT NULL,
          consent_timestamp      TIMESTAMPTZ NOT NULL,
          privacy_version        TEXT NOT NULL,
          terms_version          TEXT NOT NULL,
          consent_ip             TEXT NOT NULL,
          consent_user_agent     TEXT NOT NULL,

          status                 TEXT NOT NULL DEFAULT 'new'
        );
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
      athlete_name, athlete_age, athlete_gender, athlete_sport, athlete_level, athlete_years_playing,
      noticing_text, concern_areas, duration_noticed, concern_level, helpful_text,
      consent_accepted, consent_timestamp, privacy_version, terms_version, consent_ip, consent_user_agent,
      status
    ) VALUES (
      $1, $2,
      $3, $4, $5,
      $6, $7, $8, $9, $10, $11,
      $12, $13, $14, $15, $16,
      $17, $18, $19, $20, $21, $22,
      $23
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
      record.athlete_years_playing,
      record.noticing_text,
      record.concern_areas,
      record.duration_noticed,
      record.concern_level,
      record.helpful_text,
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
