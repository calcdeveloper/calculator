import GuessYourAgeClient from './GuessYourAgeClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Guess Your Age Quiz - What is Your Mental Age? | ToolsWizard',
  description:
    'Take our fun, free Guess Your Age quiz! Answer a few playful questions about your habits and discover your true mental age instantly.',
  path: '/tools/fun-tools/guess-your-age',
  keywords: [
    'guess your age',
    'mental age test',
    'how old am i quiz',
    'fun age calculator',
    'mental age quiz online',
  ],
  openGraph: {
    title: 'Guess Your Mental Age Quiz',
    description:
      'Are you an old soul or young at heart? Take this fun, instant quiz to find out your true mental age.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this a scientifically accurate test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. This tool is designed purely for fun and entertainment. It uses generalizations about generational habits to generate a playful score. It is not a psychological or medical assessment."
      }
    },
    {
      "@type": "Question",
      "name": "Can my mental age change over time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! As you grow, experience new things, and change your habits, your mental age will shift."
      }
    },
    {
      "@type": "Question",
      "name": "Why did it guess an age much older/younger than my real age?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This means your personal preferences align more closely with a different demographic than your own. Embrace it! Being an old soul or young at heart are both wonderful traits."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Guess Your Age Quiz",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A fun interactive quiz that estimates your mental age based on your lifestyle choices and preferences.",
  "featureList": [
    "Interactive 5-question quiz",
    "Instant mental age calculation",
    "Playful result descriptions",
    "100% private and browser-based"
  ]
};

export default function GuessYourAgePage() {
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
      
      <GuessYourAgeClient />
    </>
  );
}
