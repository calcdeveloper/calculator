import NumberGuessingGameClient from './NumberGuessingGameClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Number Guessing Game - Play the Classic Higher/Lower Game | ToolsWizard',
  description:
    'Play the classic Number Guessing Game online. Can you guess the secret number between 1 and 100 in the fewest tries? Test your logic and binary search skills.',
  path: '/tools/fun-tools/number-guessing-game',
  keywords: [
    'number guessing game',
    'guess the number',
    'higher lower game',
    'guess a number between 1 and 100',
    'number puzzle game',
  ],
  openGraph: {
    title: 'Play the Number Guessing Game',
    description:
      'I am thinking of a number between 1 and 100. Guess the number using Too High or Too Low hints. Play free instantly.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can the number be negative?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. For this version of the game, the secret number is strictly constrained between 1 and 100."
      }
    },
    {
      "@type": "Question",
      "name": "Does the game have a time limit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Take all the time you need! The game will wait patiently for your next guess. You can even leave the tab open and come back to it later."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you play optimally using the Binary Search strategy, you should be able to guess the number in 7 attempts or less."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Number Guessing Game",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A classic higher/lower number guessing puzzle game that helps develop logical deduction and binary search strategies.",
  "featureList": [
    "Random target generation from 1 to 100",
    "Instant Too High / Too Low feedback",
    "Visual history tracker for past guesses",
    "Attempt counter",
    "Responsive design for mobile and desktop"
  ]
};

export default function NumberGuessingGamePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      
      <NumberGuessingGameClient />
    </>
  );
}
