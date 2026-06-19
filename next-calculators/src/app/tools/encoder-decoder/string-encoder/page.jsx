import StringEncoderClient from './StringEncoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free String Encoder / Escaper - Escape Strings Online',
  description:
    'Instantly escape raw text into safe string literals for JSON and programming languages, or unescape encoded strings back into readable text entirely in your browser.',
  path: '/tools/encoder-decoder/string-encoder',
  keywords: [
    'String Encoder',
    'String Escaper',
    'JSON string escape',
    'escape quotes',
    'unescape string',
    'text to string literal',
    'backslash escape tool'
  ],
  openGraph: {
    title: 'Free String Encoder / Escaper - Escape Strings Online',
    description:
      'Instantly escape raw text into safe string literals for JSON and programming languages, or unescape encoded strings back into readable text.',
  },
  twitter: {
    title: 'Free String Encoder / Escaper Online',
    description:
      'Escape and unescape strings instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is string escaping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "String escaping is the process of explicitly placing a backslash (\\) directly in front of highly dangerous structural characters (like quotes) or invisible formatting characters (like line breaks) so a computer compiler treats them as plain text rather than executing them as code."
      }
    },
    {
      "@type": "Question",
      "name": "Why does JSON require string escaping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "JSON uses double quotes to mark the start and end of a text string. If you put an unescaped double quote inside the text, the parser thinks the string ended prematurely, instantly causing a fatal syntax error."
      }
    },
    {
      "@type": "Question",
      "name": "Is my proprietary source code secure here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All mathematical encoding algorithms happen entirely and strictly within your local computer's web browser. Your sensitive source code is never sent to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "String Encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online String Encoder tool for escaping and unescaping text literals.",
  "featureList": [
    "Escape strings",
    "Unescape strings",
    "JSON string formatting",
    "Instant real-time conversion",
    "Copy to clipboard",
    "Client-side processing"
  ]
};

export default function StringEncoder() {
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

      <StringEncoderClient />
    </>
  );
}
