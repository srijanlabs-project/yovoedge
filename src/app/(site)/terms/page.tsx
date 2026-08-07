import { LegalPage, H2, P, Ul } from "@/components/LegalPage";
import { TERMS_LAST_UPDATED } from "@/lib/config";

export const metadata = { title: "Terms of Service — YovoEdge" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated={TERMS_LAST_UPDATED}>
      <P>
        Welcome to YovoEdge. These terms explain how YovoEdge works, what you can expect from us, and what we expect
        from you. We&apos;ve written them in plain language because we&apos;d rather you actually read them than
        scroll past a wall of legal text. By using YovoEdge, you agree to these terms.
      </P>
      <P>
        These terms are written for parents and guardians, since a parent or guardian sets up and consents to
        everything on YovoEdge on behalf of a young athlete.
      </P>

      <H2>1. What YovoEdge is</H2>
      <P>
        YovoEdge is a service that connects young athletes (aged 9 to 18) with vetted sport and exercise
        psychologists. We help you find the right practitioner and set up sessions.
      </P>
      <P>
        We are a connector, not the provider of the sessions themselves. The practitioner your child works with is
        an independent professional. The support they provide is between them, your child, and you. We vet
        practitioners before they join, and we take that seriously, but we do not deliver the psychological support
        ourselves and we are not a party to the professional relationship between your child and their practitioner.
      </P>

      <H2>2. What YovoEdge is not</H2>
      <P>To be completely clear:</P>
      <Ul>
        <li>
          YovoEdge is not a crisis or emergency service. It supports performance and everyday wellbeing (nerves,
          confidence, focus, motivation). It is not for psychological emergencies.
        </li>
        <li>
          If your child is in crisis or in danger, do not use YovoEdge to seek help. Contact the appropriate
          emergency or professional services directly.
        </li>
        <li>
          YovoEdge is not a medical or diagnostic service, and using it is not a substitute for medical or clinical
          care where that is what&apos;s needed.
        </li>
      </Ul>
      <P>
        If a practitioner ever believes your child needs support beyond what YovoEdge is meant for, they will
        involve you and help point you toward the right professional help.
      </P>

      <H2>3. Who can use YovoEdge</H2>
      <P>The athletes we serve are aged 9 to 18, and are therefore minors.</P>
      <P>A parent or guardian must set up every match, consent to the sessions, and agree to these terms on the child&apos;s behalf.</P>
      <P>
        By using YovoEdge, you confirm that you are the parent or legal guardian of the athlete, and that you have
        the authority to agree to these terms for them.
      </P>

      <H2>4. Consent and your child&apos;s privacy</H2>
      <P>
        By setting up a match, you consent to sessions between your child and a vetted practitioner, and to how we
        handle your information, which is explained fully in our{" "}
        <a href="/privacy" className="underline">Privacy Note</a>.
      </P>
      <P>
        In short: what your child discusses in sessions stays private between your child and their practitioner. We
        share general progress with you. The one exception is safety: if a practitioner is concerned for your
        child&apos;s safety or wellbeing, they will involve you.
      </P>

      <H2>5. What we expect from you</H2>
      <P>When you use YovoEdge, you agree to:</P>
      <Ul>
        <li>give us accurate information, so we can match your child well and reach you</li>
        <li>be the parent or guardian you say you are</li>
        <li>use the service for its intended purpose, supporting a young athlete&apos;s performance and wellbeing</li>
        <li>treat the practitioners with the same respect we expect them to show your child</li>
      </Ul>

      <H2>6. What you can expect from us</H2>
      <P>We will:</P>
      <Ul>
        <li>vet every practitioner before they join, checking their qualifications and experience working with young athletes</li>
        <li>match your child thoughtfully, based on what you tell us</li>
        <li>keep your information secure and use it only as described in our Privacy Note</li>
        <li>be reachable; a real person reads every message, and we&apos;ll respond personally</li>
      </Ul>
      <P>
        We do our honest best to match your child well, but we cannot guarantee a particular outcome from the
        sessions, in the same way no professional can guarantee results. If a match isn&apos;t working, tell us, and
        we&apos;ll help put it right.
      </P>

      <H2>7. Payments</H2>
      <P>Using YovoEdge is currently free. We don&apos;t charge families to be matched or to use the platform.</P>
      <P>
        Sessions themselves are arranged directly between you and your child&apos;s practitioner, including their
        fees and how you pay them. YovoEdge doesn&apos;t take payment for sessions and isn&apos;t involved in that
        arrangement; it&apos;s between you and the practitioner.
      </P>
      <P>If this changes in the future, we&apos;ll tell you clearly and in advance. You&apos;ll never be charged by YovoEdge without knowing first.</P>

      <H2>8. Cancelling and stopping</H2>
      <P>
        You can stop using YovoEdge at any time. You can also withdraw your consent and ask us to delete your
        information, as described in our Privacy Note. Just let us know.
      </P>
      <P>
        Because YovoEdge connects you with a practitioner rather than managing the sessions themselves, individual
        sessions are arranged directly between you and your child&apos;s practitioner. If you need to cancel or
        reschedule a session, please let the practitioner know directly, and give them reasonable notice out of
        respect for their time. The specific notice for cancelling a session is between you and them.
      </P>

      <H2>9. Our responsibility and its limits</H2>
      <P>We take real care in how we run YovoEdge, especially because we work with children. But there are limits to what we&apos;re responsible for, and it&apos;s fair to be clear about them:</P>
      <Ul>
        <li>
          Because we connect you with independent practitioners rather than provide the sessions ourselves, we are
          not responsible for the professional judgment, conduct, or outcomes of an individual practitioner&apos;s
          sessions. We do, however, vet practitioners before they join, and we want to know immediately if you ever
          have a concern about one.
        </li>
        <li>We are not responsible for events outside our reasonable control.</li>
        <li>Nothing in these terms limits our responsibility where the law does not allow it to be limited, including anything relating to a child&apos;s safety.</li>
      </Ul>

      <H2>10. Raising a concern</H2>
      <P>
        If you&apos;re ever unhappy, or concerned about a practitioner, a session, or anything else, tell us straight
        away at <a href="mailto:hello@yovoedge.com" className="underline">hello@yovoedge.com</a>. We treat concerns
        about a child&apos;s wellbeing as the most serious thing we deal with, and we&apos;ll act on them.
      </P>

      <H2>11. Changes to these terms</H2>
      <P>
        If we change these terms, we&apos;ll update the date at the top and, if the change is significant, let you
        know directly. Continuing to use YovoEdge after a change means you accept the updated terms.
      </P>

      <H2>12. Contact</H2>
      <P>
        Questions about these terms? Just ask.{" "}
        <a href="mailto:hello@yovoedge.com" className="underline">hello@yovoedge.com</a>
      </P>
    </LegalPage>
  );
}
