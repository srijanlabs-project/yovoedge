export type HowItWorksStep = {
  n: number;
  title: string;
  body: string;
  note: string;
  highlight?: string;
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    n: 1,
    title: "You tell us what's going on",
    body: "Fill in a short form. Your athlete's sport and age, and what you're noticing — nerves before games, confidence dips, pressure, whatever it is. You don't need to have it all figured out. Ticking what sounds familiar is enough.",
    note: "Takes about two minutes.",
  },
  {
    n: 2,
    title: "We find the right specialist, so you don't have to",
    body: "You won't be handed a list of strangers to sift through. A real person reads your request and matches your athlete with a vetted sport psychologist who fits their sport, age, and what they're working through.",
    note: "Every practitioner is vetted before they work with a child.",
  },
  {
    n: 3,
    title: "You approve, and sessions begin",
    body: "You set it up and consent before anything starts. Sessions are arranged directly with the practitioner, at a time that works for your family.",
    note: "Nothing happens with your child without you setting it up first.",
    highlight:
      "Most sessions happen online, so your athlete can work with the right specialist wherever you are, even if there's no one nearby. In some cities, in-person may also be possible, and we'll tell you if that's an option for you when we match you.",
  },
  {
    n: 4,
    title: "Your child gets support, you stay in the loop",
    body: "What your child talks about in sessions stays private between them and their practitioner, that's what helps them open up. You'll hear about general progress, so you're never in the dark.",
    note: "If it's ever not the right fit, tell us and we'll help.",
  },
];
