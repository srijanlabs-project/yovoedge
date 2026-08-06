import { LegalPage, H2, P, Ul } from "@/components/LegalPage";
import { PRIVACY_LAST_UPDATED } from "@/lib/config";

export const metadata = { title: "Privacy Note — YovoEdge" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Note" lastUpdated={PRIVACY_LAST_UPDATED}>
      <H2>Who we are</H2>
      <P>
        YovoEdge connects young athletes (aged 9 to 18) with vetted sport and exercise psychologists. When you use
        YovoEdge, we are responsible for the information you share with us through the platform.
      </P>
      <P>
        Contact: <a className="underline" href="mailto:hello@yovoedge.com">hello@yovoedge.com</a>
      </P>

      <H2>What we collect</H2>
      <P>We keep this to the minimum we need to match your child well and run the sessions.</P>
      <Ul>
        <li>About you (the parent or guardian): your name and a way to reach you (email or phone).</li>
        <li>
          About your athlete: their first name, age, and sport, and what you&apos;ve told us you&apos;d like help
          with (for example, nerves before games or losing confidence after a mistake).
        </li>
        <li>
          About the sessions: that sessions have taken place, and general progress. We do not collect or store a
          detailed record of what your child discusses in their sessions. That stays between your child and their
          practitioner (see &ldquo;What stays private&rdquo; below).
        </li>
      </Ul>
      <P>We don&apos;t ask for, and you don&apos;t need to give us, more than this.</P>

      <H2>Why we collect it</H2>
      <P>We use this information to:</P>
      <Ul>
        <li>match your child with the right practitioner</li>
        <li>set up and run the sessions</li>
        <li>keep you, the parent, informed that sessions are happening and how things are generally going</li>
        <li>reach you if we need to</li>
      </Ul>
      <P>We do not sell your information, and we do not share it with advertisers.</P>

      <H2>What stays private</H2>
      <P>This is the part that matters most, so we want to be clear about it.</P>
      <P>
        What your child discusses in their sessions stays private, between your child and their practitioner. We
        don&apos;t collect it, and it isn&apos;t shared back to you as a running transcript. This privacy is what
        lets a young person actually open up and get help.
      </P>
      <P>What we do share with you is general progress, so you&apos;re never in the dark about whether things are working.</P>
      <P>
        The one exception is safety. If a practitioner ever becomes concerned about your child&apos;s safety or
        wellbeing beyond what our sessions are meant for, they will involve you and help point you toward the right
        support. Your child&apos;s safety comes before their privacy. This is the only reason we would ever break
        confidentiality above.
      </P>

      <H2>Who can see your information</H2>
      <Ul>
        <li>You, the parent or guardian.</li>
        <li>Your child&apos;s matched practitioner, who needs it to help your child.</li>
        <li>YovoEdge core team.</li>
      </Ul>
      <P>We keep this list short on purpose. Nobody sees your child&apos;s information who doesn&apos;t need to.</P>

      <H2>Where your information is kept</H2>
      <P>
        We store your information in a secure, access-restricted system. Access is limited to the people listed
        above. We keep the information you&apos;d expect us to keep to run the relationship, and we don&apos;t hold
        on to more than we need.
      </P>

      <H2>How long we keep it</H2>
      <P>
        We keep your information for as long as your child is using YovoEdge, and for a reasonable period of 24
        months after the last session. After that, we delete it, unless you&apos;ve asked us to keep it.
      </P>

      <H2>Your rights</H2>
      <P>At any time, you can:</P>
      <Ul>
        <li>See what information we hold about you and your child.</li>
        <li>Ask us to delete your information.</li>
        <li>Withdraw your consent and stop sessions.</li>
      </Ul>
      <P>
        Just email us at <a className="underline" href="mailto:hello@yovoedge.com">hello@yovoedge.com</a> and
        we&apos;ll take care of it.
      </P>

      <H2>Children&apos;s information</H2>
      <P>
        Because our athletes are minors, a parent or guardian sets up every match and consents on their child&apos;s
        behalf. We don&apos;t knowingly collect information directly from a child without a parent involved. If you
        believe a child has been signed up without a parent&apos;s involvement, tell us and we&apos;ll put it right.
      </P>

      <H2>Changes to this note</H2>
      <P>
        If we change how we handle your information, we&apos;ll update this note and change the date at the top. If
        it&apos;s a significant change, we&apos;ll let you know directly.
      </P>

      <H2>Questions</H2>
      <P>
        If anything here worries you or isn&apos;t clear, please just ask. We&apos;d rather over-explain than leave
        you unsure. <a className="underline" href="mailto:hello@yovoedge.com">hello@yovoedge.com</a>
      </P>
    </LegalPage>
  );
}
