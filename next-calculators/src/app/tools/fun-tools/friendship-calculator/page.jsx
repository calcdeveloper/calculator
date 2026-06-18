import FriendshipCalculatorClient from './FriendshipCalculatorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Friendship Calculator Online - 100% Free Friendship Test & Meter',
  description:
    'Use our free online Friendship Calculator to instantly check your friendship compatibility score. Test your bond, share results, and have fun with friends—no signup required!',
  path: '/tools/fun-tools/friendship-calculator',
  keywords: [
    'friendship calculator',
    'friendship calculator online',
    'friendship test',
    'friendship test online',
    'friendship percentage',
    'friendship meter',
    'calculate friendship',
    'friendship score',
    'friendship compatibility',
    'best friend calculator',
    'best friends test',
    'friendship checker',
  ],
  openGraph: {
    title: 'Friendship Calculator Online - 100% Free Friendship Test',
    description:
      'Instantly calculate your friendship percentage with our free online Friendship Calculator. Test your bond and share with friends!',
  },
  twitter: {
    title: 'Friendship Calculator Online - Free Friendship Test',
    description:
      'Instantly calculate your friendship percentage with our free online Friendship Calculator. Fun, fast, and free!',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Friendship Calculator scientifically accurate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, the friendship calculator is not scientifically accurate. It uses a mathematical algorithm based on the ASCII values of the letters in your names to generate a random percentage. It is designed purely for fun and entertainment purposes."
      }
    },
    {
      "@type": "Question",
      "name": "Does it matter if I use uppercase or lowercase letters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, it does not matter. Our tool automatically converts all input text to lowercase and removes any white spaces before running the calculation. 'John' and 'john' will yield the exact same results."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data safe when using this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. The friendship calculation happens entirely on your local device (client-side) within your web browser. We do not store, track, or save the names you enter into any database or server."
      }
    },
    {
      "@type": "Question",
      "name": "Can I calculate friendship between more than two people?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Currently, the tool is optimized to calculate the bond between exactly two names. For group dynamics, you would need to calculate the compatibility of each pair individually!"
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Friendship Calculator",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A free online utility that calculates a friendship percentage between two names instantly for entertainment.",
  "featureList": [
    "Instant friendship compatibility percentage",
    "Shareable results to social media",
    "100% client-side privacy",
    "No registration or email required",
    "Mobile-friendly interface"
  ]
};

export default function FriendshipCalculator() {
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
      
      <FriendshipCalculatorClient />
    </>
  );
}
