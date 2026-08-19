"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  CONCERN_AREAS,
  GENDERS,
  LEVELS,
  PRIOR_SUPPORT,
  SPORTS,
  ATHLETE_AGES,
  DURATIONS,
  CONNECTION_PREFERENCES,
  intakeSchema,
  IntakeData,
} from "@/lib/validation";

const CITIES = [
  "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune",
  "Ahmedabad", "Jaipur", "Chandigarh", "Kochi", "Lucknow",
];

const FAQS = [
  {
    q: "How much does it cost?",
    a: "YovoEdge doesn't charge families to be matched. Session fees are set directly by each practitioner, so costs vary depending on who you work with. We'll explain this before you decide whether to move forward.",
  },
  {
    q: "What happens after I submit the form?",
    a: "A member of our team personally reviews every enquiry. We'll get in touch, understand your situation in more detail if needed, and discuss what the next step might look like.",
  },
  {
    q: "How quickly will someone contact me?",
    a: "Usually within 2-3 business days.",
  },
  {
    q: "Will my child need to attend every session?",
    a: "That depends on the practitioner and your athlete's needs. Some conversations involve parents as well, particularly at the beginning.",
  },
  {
    q: "Is what my child says kept private?",
    a: "Yes. Conversations remain between your child and their practitioner, except where there's a safety concern. In those situations, parents are involved.",
  },
  {
    q: "Is YovoEdge right for every situation?",
    a: "YovoEdge is designed to support everyday performance and wellbeing challenges in young athletes. It isn't an emergency, a crisis, or a medical service.",
  },
  {
    q: "Can sessions happen online?",
    a: "Yes. Depending on the practitioner, support may be available online, in person or both.",
  },
  {
    q: "I'm not sure whether my child needs support.",
    a: "That's okay. Many parents reach out because they're simply looking for guidance. The first conversation is about understanding your athlete's situation.",
  },
] as const;

const emptyForm = {
  parentName: "",
  parentEmail: "",
  parentPhone: "",
  athleteName: "",
  athleteAge: "",
  athleteGender: "",
  athleteSport: "",
  athleteLevel: "",
  priorSupport: "",
  noticingText: "",
  concernAreas: [] as string[],
  durationNoticed: "",
  helpfulText: "",
  connectionPreference: "",
  city: "",
};

export default function GetStartedPage() {
  const router = useRouter();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleConcern(area: string) {
    setForm((f) => ({
      ...f,
      concernAreas: f.concernAreas.includes(area)
        ? f.concernAreas.filter((a) => a !== area)
        : [...f.concernAreas, area],
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const candidate = {
      ...form,
      athleteAge: form.athleteAge === "" ? undefined : Number(form.athleteAge),
    };

    const result = intakeSchema.safeParse(candidate);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      const firstKey = result.error.issues[0]?.path[0];
      if (firstKey) {
        document.getElementById(String(firstKey))?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setErrors({});
    sessionStorage.setItem("ye_intake", JSON.stringify(result.data satisfies IntakeData));
    router.push("/get-started/consent");
  }

  return (
    <>
      <section className="relative bg-ink text-white overflow-hidden">
        <Header dark />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/get-started-hero.jpg"
          alt="A mother and son sitting together on a courtside bench at sunset"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,10,8,0.75)_0%,rgba(10,10,8,0.55)_30%,rgba(10,10,8,0.15)_50%,transparent_65%)]" />
        <Container className="relative pt-40 pb-16">
          <h1 className="font-serif text-4xl mb-3">Find Support</h1>
          <p className="text-lg text-white/80 mb-2">Tell us about your athlete.</p>
          <p className="text-sm text-white/60 max-w-md mb-4">
            Every young athlete&apos;s journey is different. Share a little about what you&apos;ve been noticing, and
            we&apos;ll help you understand what the next step could look like.
          </p>
          <p className="text-xs text-white/50">🔒 Your information is private and confidential.</p>
        </Container>
      </section>

      <section className="bg-cream py-16">
        <Container className="grid md:grid-cols-[1fr_320px] gap-12">
          <form onSubmit={handleSubmit} noValidate className="space-y-12">
            <fieldset>
              <Legend n={0} title="About you" sub="So we know who to reach, and when." />
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Your full name" error={errors.parentName}>
                  <input
                    id="parentName"
                    className={inputClass}
                    placeholder="e.g. Priya Sharma"
                    value={form.parentName}
                    onChange={(e) => set("parentName", e.target.value)}
                  />
                </Field>
                <Field label="Email" error={errors.parentEmail}>
                  <input
                    id="parentEmail"
                    type="email"
                    className={inputClass}
                    placeholder="you@example.com"
                    value={form.parentEmail}
                    onChange={(e) => set("parentEmail", e.target.value)}
                  />
                </Field>
                <Field label="Phone" error={errors.parentPhone}>
                  <input
                    id="parentPhone"
                    type="tel"
                    className={inputClass}
                    placeholder="e.g. +91 98765 43210"
                    value={form.parentPhone}
                    onChange={(e) => set("parentPhone", e.target.value)}
                  />
                </Field>
              </div>
            </fieldset>

            <fieldset>
              <Legend n={1} title="About your athlete" sub="Help us understand who they are." />
              <div className="grid md:grid-cols-3 gap-4">
                <Field label="Athlete's first name (optional)" error={errors.athleteName} hint="Parents may not want to share immediately.">
                  <input
                    id="athleteName"
                    className={inputClass}
                    placeholder="e.g. Aarav"
                    value={form.athleteName}
                    onChange={(e) => set("athleteName", e.target.value)}
                  />
                </Field>
                <Field label="Age" error={errors.athleteAge}>
                  <select
                    id="athleteAge"
                    className={inputClass}
                    value={form.athleteAge}
                    onChange={(e) => set("athleteAge", e.target.value)}
                  >
                    <option value="">Select</option>
                    {ATHLETE_AGES.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Gender">
                  <select
                    className={inputClass}
                    value={form.athleteGender}
                    onChange={(e) => set("athleteGender", e.target.value)}
                  >
                    <option value="">Select</option>
                    {GENDERS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Primary sport" error={errors.athleteSport}>
                  <input
                    id="athleteSport"
                    list="sports-list"
                    className={inputClass}
                    placeholder="e.g. Tennis"
                    value={form.athleteSport}
                    onChange={(e) => set("athleteSport", e.target.value)}
                  />
                  <datalist id="sports-list">
                    {SPORTS.map((s) => (
                      <option key={s} value={s} />
                    ))}
                  </datalist>
                </Field>
                <Field label="Competition level">
                  <select
                    className={inputClass}
                    value={form.athleteLevel}
                    onChange={(e) => set("athleteLevel", e.target.value)}
                  >
                    <option value="">Select</option>
                    {LEVELS.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Has anyone previously supported your athlete?">
                  <select
                    className={inputClass}
                    value={form.priorSupport}
                    onChange={(e) => set("priorSupport", e.target.value)}
                  >
                    <option value="">Select</option>
                    {PRIOR_SUPPORT.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </Field>
              </div>
            </fieldset>

            <fieldset>
              <Legend n={2} title="What have you been noticing?" sub="There's no right or wrong. We just want to understand your perspective." />
              <label className="block text-sm mb-2">Tell us what&apos;s been happening.</label>
              <div className="relative mb-6">
                <textarea
                  className={inputClass + " min-h-28"}
                  maxLength={1000}
                  placeholder="Share in your own words..."
                  value={form.noticingText}
                  onChange={(e) => set("noticingText", e.target.value)}
                />
                <span className="absolute bottom-2 right-3 text-xs text-muted">{form.noticingText.length} / 1000</span>
              </div>

              <label className="block text-sm mb-2">Which of these feel familiar? (optional)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                {CONCERN_AREAS.map((area) => (
                  <label key={area} className="flex items-center gap-2 text-sm bg-paper border border-line rounded-md px-3 py-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.concernAreas.includes(area)}
                      onChange={() => toggleConcern(area)}
                    />
                    {area}
                  </label>
                ))}
              </div>

              <Field label="How long have you noticed this?">
                <select className={inputClass} value={form.durationNoticed} onChange={(e) => set("durationNoticed", e.target.value)}>
                  <option value="">Select</option>
                  {DURATIONS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </Field>
            </fieldset>

            <fieldset>
              <Legend n={3} title="What are you hoping for?" sub="Tell us what you'd like to be different for your athlete." />
              <div className="relative mb-6">
                <textarea
                  className={inputClass + " min-h-28"}
                  maxLength={1000}
                  placeholder="Tell us what you'd like to be different for your athlete."
                  value={form.helpfulText}
                  onChange={(e) => set("helpfulText", e.target.value)}
                />
                <span className="absolute bottom-2 right-3 text-xs text-muted">{form.helpfulText.length} / 1000</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="How would you prefer to connect?">
                  <select
                    className={inputClass}
                    value={form.connectionPreference}
                    onChange={(e) => set("connectionPreference", e.target.value)}
                  >
                    <option value="">Select</option>
                    {CONNECTION_PREFERENCES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="City">
                  <input
                    id="city"
                    list="cities-list"
                    className={inputClass}
                    placeholder="e.g. Mumbai"
                    value={form.city}
                    onChange={(e) => set("city", e.target.value)}
                  />
                  <datalist id="cities-list">
                    {CITIES.map((c) => (
                      <option key={c} value={c} />
                    ))}
                  </datalist>
                </Field>
              </div>
            </fieldset>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-ink text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-olive-dark transition-colors"
              >
                Submit and Continue →
              </button>
              <span className="text-xs text-muted">🛡 Secure. Private. Confidential.</span>
            </div>
          </form>

          <aside className="space-y-8 text-sm">
            <div>
              <h4 className="font-medium mb-2">You&apos;re not alone.</h4>
              <p className="text-muted">
                Many parents reach out because something just doesn&apos;t feel the same. Getting support early can
                make a meaningful difference.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What happens next?</h4>
              <ol className="space-y-3 text-muted">
                <li><strong className="text-ink">1. We read every submission personally.</strong></li>
                <li><strong className="text-ink">2. We&apos;ll reach out within 2–3 business days.</strong></li>
                <li><strong className="text-ink">3. If we believe support could be helpful, we&apos;ll guide you through the next steps and discuss a suitable practitioner.</strong></li>
                <li><strong className="text-ink">4. There&apos;s no obligation to continue.</strong></li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium mb-2">Your privacy matters.</h4>
              <p className="text-muted">
                Everything you share is kept confidential and used only to understand how we can help. We never share
                your information.
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-paper py-16 border-t border-line">
        <Container className="max-w-2xl">
          <h2 className="font-serif text-2xl mb-6 text-center">Questions parents often ask</h2>
          <FaqAccordion items={FAQS} />
        </Container>
      </section>

      <section className="grid md:grid-cols-2">
        <Container className="!max-w-none py-14 md:py-0 flex flex-col justify-center px-6 md:px-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Our promise</p>
          <h3 className="font-serif text-2xl mb-3">We&apos;re here to help you and your athlete.</h3>
          <p className="text-sm text-muted max-w-sm">
            We&apos;ll listen, understand and guide you toward the right support at the right time.
          </p>
        </Container>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/get-started-table.jpg"
          alt="A quiet reading corner"
          className="h-56 md:h-auto w-full object-cover"
        />
      </section>

      <Footer />
    </>
  );
}

function Legend({ n, title, sub }: { n: number; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <span className="w-9 h-9 shrink-0 rounded-full border border-olive/50 text-olive flex items-center justify-center font-serif">
        {n}
      </span>
      <div>
        <h2 className="font-serif text-xl">{title}</h2>
        <p className="text-sm text-muted">{sub}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      {children}
      {hint && !error && <p className="text-xs text-muted mt-1">{hint}</p>}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full rounded-md border border-line bg-paper px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-olive/40";
