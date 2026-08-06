# YovoEdge — web app

Built from the design mockups and legal docs in the `yovoedge` source folder (5 PNG screens + a 9-page
design PDF + Privacy Note / Terms of Service docx). This README explains what's here, what's an
assumption, and what still needs a decision before this handles real families' data.

## Stack

- **Next.js 16 (App Router, TypeScript)** — one codebase for pages, the intake form, and the API.
- **Tailwind CSS 4** — styling, using a small custom theme (`src/app/globals.css`) matching the mockups'
  serif/olive/cream look.
- **Plain JSON-lines file storage** (`data/submissions.jsonl`, created automatically, one submission per
  line, `src/lib/db.ts`). Two earlier options were tried and dropped: Prisma (its engine binaries
  couldn't be downloaded in the build sandbox) and better-sqlite3 (a native module — it needs node-gyp
  plus a C++ toolchain to compile if no prebuilt binary matches your exact Node version/OS, which failed
  on a Windows machine without Visual Studio Build Tools installed). Plain JSON-lines has zero native
  dependencies and behaves identically on any OS or Node version. It's fine for an intake form's write
  volume; it is not built for concurrent multi-process writers or real scale — swap for a hosted
  database (Postgres, etc.) before this handles production traffic. `src/lib/db.ts` is a small,
  self-contained module, so that swap only touches one file.
- **Zod** — one schema (`src/lib/validation.ts`) used for both the client-side form validation and the
  server-side API validation, so the two can't drift apart.

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
```

Set `ADMIN_PASSWORD` and `SESSION_SECRET` in `.env.local` before using `/admin` for real (a starter
`.env.local` is included with placeholder values — change them).

## Site map

| Route | What it is |
|---|---|
| `/` | Home |
| `/understanding-young-athletes` | Psychoeducation content (3 chapters, 12 items) — from PDF page 2, was missing from the PNG set |
| `/finding-support` | "Finding the Right Support" marketing page |
| `/our-principles` | Our Principles |
| `/how-it-works` | "How YovoEdge Works" 4-step explainer — from PDF page 7 |
| `/connect` | Contact |
| `/get-started` | The intake form ("Find Support" in the mockups) |
| `/get-started/consent` | The consent screen ("Request a match" in the mockups) |
| `/get-started/confirmation` | **New** — thank-you/reference screen. No confirmation screen existed in the source designs; without one the user flow just dead-ends after submitting. |
| `/privacy` | Privacy Note |
| `/terms` | **New design** — the source only had this as docx text with no screen; styled to match the Privacy Note page |
| `/admin` | Internal, password-gated list of submissions (see below) |

## What changed from the source designs, and why

1. **Added "About you" to the intake form** (name, email, phone). The Privacy Note promises to collect
   "the parent or guardian's name and a way to reach you," and the confirmation flow promises a reply
   within 2–3 business days — but no field for it existed anywhere in the original Find Support or
   Request a Match mockups. Without it there's no way to actually contact anyone back.
2. **Consent checkbox gates submission, enforced twice.** The checkbox on `/get-started/consent` disables
   nothing visually until checked, but the *Request a match* button only proceeds once it's checked
   (client-side), and — more importantly — the `POST /api/submissions` endpoint independently rejects
   any request where `consentAccepted` isn't `true` (`src/app/api/submissions/route.ts`). A disabled
   button is not a security boundary by itself; the server check is the one that actually matters.
3. **Consent is versioned.** Each saved submission stores which version/date of the Privacy Note and
   Terms of Service was current when the parent accepted them (`privacy_version` / `terms_version`
   columns, defined in `src/lib/config.ts`), plus a timestamp, IP, and user agent. If the legal copy
   changes later, old consent records still show what was actually agreed to.
4. **Confirmation screen added** (see site map above).
5. **Terms of Service given an actual screen**, matching the Privacy Note page design, since the source
   only had it as a Word doc with no visual mockup.
6. **A minimal internal admin view** (`/admin`) — the copy on the intake form promises "our team carefully
   reads your responses," but no internal tool was designed for that. This is intentionally basic
   (single shared password) — see "Before this goes further" below.
7. Hero imagery is CSS gradients, not photography — the mockups use real photos we don't have licensed
   copies of. Swap in real images by replacing the gradient `div`s in `src/components/Hero.tsx` and the
   page files.

## Data captured per submission

Parent: name, email, phone.
Athlete: first name, age (9–18 enforced), gender, sport, level, years playing.
Concern details: free-text "what you've noticed," selected concern areas, how long, how concerned.
Free-text: "what would help."
Consent: accepted flag, timestamp, Privacy/Terms version, IP, user agent.

See `src/lib/db.ts` for the full schema.

## Before this goes further (compliance and security — flagged, not solved)

The source PDF itself ends the Privacy Note page with a note: *"it's worth having this reviewed against
India's Digital Personal Data Protection Act, 2023 and its rules on children's data before publishing."*
That review hasn't happened — this build makes reasonable engineering assumptions, not legal ones. Before
this holds real children's mental-health-adjacent data:

- **Verifiable parental consent.** A checkbox is a UX pattern, not necessarily what DPDP's children's-data
  rules require for "verifiable consent." Worth a legal read on whether more (e.g. an OTP/ID check) is
  needed.
- **Admin auth is a single shared password**, fine for a first internal look at submissions, not fine
  once more than a couple of people need access or once this is handling real families. Swap for
  per-person accounts with an audit log before then.
- **Retention isn't automated.** The Privacy Note promises deletion ~24 months after the last session;
  nothing in this codebase currently enforces that on a schedule.
- **No encryption-at-rest configuration, no backups, no hosting decision** — this runs on a local flat
  file for development. Production needs a real database host, TLS, and a backup policy.
- **No practitioner-matching or profile-review screen** exists yet, even though `/finding-support` promises
  "you review profiles... and choose who feels like the right fit." Right now that step is implied to be
  manual (email), matching "a real person reads it" elsewhere in the copy.
