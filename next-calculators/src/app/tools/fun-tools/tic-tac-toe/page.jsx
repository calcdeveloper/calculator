import TicTacToeClient from './TicTacToeClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Play Tic Tac Toe Online - Free Browser Game | ToolsWizard',
  description:
    'Play the classic game of Tic Tac Toe (Noughts and Crosses) online for free. Play against our built-in AI computer or challenge a friend in local 2-player mode.',
  path: '/tools/fun-tools/tic-tac-toe',
  keywords: [
    'tic tac toe online',
    'play tic tac toe',
    'noughts and crosses',
    'tic tac toe vs computer',
    '2 player tic tac toe',
  ],
  openGraph: {
    title: 'Free Tic Tac Toe Online Game',
    description:
      'Play the ultimate classic right in your browser. Play locally against a friend or test your skills against our computer opponent.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the computer opponent unbeatable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No! We purposely designed our computer to play randomly so that the game remains fun and winnable for younger players and casual gamers."
      }
    },
    {
      "@type": "Question",
      "name": "Why is it called a 'Cat's Game'?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A drawn game is often called a 'Cat's Game'. The exact origin is debated, but the most common theory is that a cat cannot catch its own tail, just like a player cannot catch a win when the board is locked up."
      }
    },
    {
      "@type": "Question",
      "name": "Can I play online with a friend remotely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Currently, our 2-Player mode is 'local' only, meaning you both need to look at the same screen and take turns clicking."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tic Tac Toe",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A digital version of the classic Tic Tac Toe game featuring single-player (vs AI) and local two-player modes.",
  "featureList": [
    "Single player mode vs Computer",
    "Local 2-Player mode",
    "Animated winning sequences",
    "Clean, ad-free interface",
    "Mobile-optimized touch controls"
  ]
};

export default function TicTacToePage() {
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
      
      <TicTacToeClient />
    </>
  );
}
