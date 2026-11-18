export const dynamic = "force-static";

import RandomColorGeneratorClient from './RandomColorGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random Color Generator - Constrained HEX & HSL Codes',
  description: 'Generate random HEX and HSL colors online with custom Hue, Saturation, and Lightness constraints. Built for frontend UI, generative art, and data charts.',
  path: '/tools/design/random-color-generator',
  keywords: ['random color generator', 'random hex code', 'random hsl color', 'css color generator', 'constrained random color', 'pastel color generator', 'random rgb generator'],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Random Color Generator',
  description: 'Generate random HEX and HSL colors online with custom Hue, Saturation, and Lightness constraints. Built for frontend UI, generative art, and data charts.',
  path: '/tools/design/random-color-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Random Color Generator', path: '/tools/design/random-color-generator' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is unconstrained JavaScript Math.random() problematic for web design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unconstrained randomness in RGB space frequently produces muddy browns, washed-out grays, or extreme blacks (#000000) and whites (#FFFFFF) that destroy UI hierarchy and render typography illegible. Constrained generation in HSL space guarantees aesthetic harmony and contrast compliance.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does "constrained randomness" mean in color generation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Constrained randomness applies mathematical boundaries to specific color parameters (such as clamping Lightness between 80% and 90% and Saturation between 50% and 70% for pastels). While Hue varies randomly, the resulting output consistently satisfies strict stylistic and contrast rules.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you mathematically generate random pastel colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pastels require high Lightness (80% to 92%) and moderate Saturation (40% to 65%) with an unconstrained Hue (0 to 360 degrees). This bounds the color to the upper perimeter of the HSL cylinder, preventing harsh neon glare or muddy dark tones.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you generate dark mode background colors automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dark mode surfaces require clamping Lightness between 6% and 15% and Saturation between 5% and 20%. Restricting saturation prevents cartoonish tints while maintaining elevated contrast against white typography.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is Math.random() cryptographically secure for production tokens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Standard JavaScript Math.random() is a pseudo-random number generator (PRNG) using xoshiro128+, which is deterministic and predictable. While ideal for UI design and generative art, security-critical tokens should use crypto.getRandomValues().'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do colors with identical HSL lightness integers appear differently bright?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The human eye is biologically more sensitive to green and yellow wavelengths than blue. In HSL, yellow at 50% lightness appears blindingly bright, while pure blue at 50% lightness appears deep and dark. Perceptually uniform color spaces like Oklch resolve this discrepancy.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can developers use the Golden Ratio to generate distinct categorical colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By incrementing Hue by the Golden Ratio conjugate (~137.508 degrees), sequential random colors are distributed evenly across the color wheel without clustering, producing maximally distinct colors for data visualization charts.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do default user avatar algorithms guarantee readable white initials?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Platforms constrain background Lightness strictly between 28% and 42%. Under WCAG 2.1 mathematics, any hue generated within this lightness range guarantees at least a 4.5:1 contrast ratio against white typography.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you convert HSL coordinates to a standard 6-character Hex string?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First calculate chroma as C = (1 - |2L - 1|) * S, then derive intermediate channel values based on Hue sectors, shift by match factor m = L - C/2, convert the resulting RGB floats (0-255) to base-16 integers, and zero-pad to 6 characters.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does automated fuzz testing with random colors catch CSS bugs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'QA engineering suites inject thousands of randomized hex codes into CSS custom properties during headless Playwright tests, validating that text contrast ratios and dynamic shadows never drop below WCAG AA thresholds across extreme color states.'
      }
    }
  ]
};

export default function RandomColorGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <RandomColorGeneratorClient />
    </>
  );
}