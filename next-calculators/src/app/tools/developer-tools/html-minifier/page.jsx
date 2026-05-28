import HTMLMinifierClient from './HTMLMinifierClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free HTML Minifier Online | Minify HTML Code Instantly | ToolsWizard',
  description:
    'Minify HTML code instantly. Free online HTML minifier tool for developers. Reduce file size and optimize your HTML for faster loading websites.',
  path: '/tools/developer-tools/html-minifier',
  keywords: [
    'HTML minifier',
    'minify HTML',
    'HTML compressor',
    'HTML optimizer',
    'reduce HTML size',
    'HTML minification',
    'online HTML minifier',
    'free HTML tool',
    'HTML code compressor',
    'web optimization',
    'developer tool',
  ],
  openGraph: {
    title: 'Free HTML Minifier Online - Minify HTML Code Instantly',
    description:
      'Minify HTML code instantly. Optimize your HTML for faster loading websites.',
  },
  twitter: {
    title: 'Free HTML Minifier Online',
    description:
      'Minify HTML code instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HTML minification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HTML minification removes unnecessary characters from HTML code like whitespace, comments, and newlines without changing functionality. This reduces file size and improves page load times."
      }
    },
    {
      "@type": "Question",
      "name": "Is minified HTML still readable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minified HTML is harder to read for humans but works perfectly for browsers. We recommend keeping a readable version for development and using minified HTML for production."
      }
    },
    {
      "@type": "Question",
      "name": "Is my HTML code secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all minification happens entirely in your browser. Your HTML code is never sent to our servers, ensuring complete privacy and security."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HTML Minifier",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online HTML minifier tool for reducing HTML file size and optimizing web performance.",
  "featureList": [
    "Minify HTML code",
    "Remove whitespace",
    "Remove comments",
    "Reduce file size",
    "Copy to clipboard",
    "Download minified HTML",
    "Instant processing",
    "No character limits"
  ]
};

export default function HTMLMinifier() {
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
      
      <HTMLMinifierClient />
    </>
  );
}
