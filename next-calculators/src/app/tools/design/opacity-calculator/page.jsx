export const dynamic = "force-static";

import OpacityCalculatorClient from './OpacityCalculatorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'CSS Opacity Calculator - HEX to RGBA & 8-Digit Alpha',
  description: 'Convert HEX colors to RGBA and 8-digit HEX alpha codes with live opacity slider. Calculate alpha compositing, CSS variables, and WCAG contrast online.',
  path: '/tools/design/opacity-calculator',
  keywords: ['opacity calculator', 'hex to rgba', 'hex alpha code', 'css transparency', 'color opacity converter', '8 digit hex', 'alpha compositing calculator'],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'CSS Opacity Calculator',
  description: 'Convert HEX colors to RGBA and 8-digit HEX alpha codes with live opacity slider. Calculate alpha compositing, CSS variables, and WCAG contrast online.',
  path: '/tools/design/opacity-calculator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'CSS Opacity Calculator', path: '/tools/design/opacity-calculator' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Alpha Channel in CSS color architecture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Alpha channel is a mathematical fourth channel in digital graphics (RGBA) governing opacity. A value of 1.0 (100% or FF) indicates complete opacity, while 0.0 (0% or 00) renders the surface entirely transparent, allowing underlying DOM layers to show through.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the critical difference between the CSS opacity property and rgba() background colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The CSS opacity property applies transparency to an entire DOM element, including all nested child typography, icons, and buttons, destroying readability. Applying rgba() or 8-digit hex alpha to background-color makes only the background surface transparent while preserving 100% solid, fully legible child content.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does an 8-Digit Hexadecimal color code (#RRGGBBAA) work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An 8-digit hex code appends two base-16 characters representing the alpha channel to a standard 6-digit hex string. For instance, in #3B82F680, 80 represents 128 in base-10, yielding exactly 50% opacity (128/255).'
      }
    },
    {
      '@type': 'Question',
      name: 'Are 8-digit hex alpha codes safe to use in production across modern browsers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The CSS Color Module Level 4 8-digit hex specification enjoys over 96% global browser support, including Google Chrome, Apple Safari, Mozilla Firefox, Microsoft Edge, and modern iOS/Android mobile web runtimes.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the Porter-Duff alpha compositing equation compute flattened pixel colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard Porter-Duff Over compositing equation computes output color as: C_out = C_src * A_src + C_dst * (1 - A_src). The foreground color multiplied by its alpha is added to the background color multiplied by the remaining inverse alpha.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does semi-transparent opacity impact WCAG 2.1 contrast compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Transparency lightens or darkens background colors depending on the canvas beneath them. A semi-transparent overlay placed on a light surface reduces the effective contrast ratio against white text, frequently causing silent accessibility failures that automated scanners miss.'
      }
    },
    {
      '@type': 'Question',
      name: 'What causes GPU frame drops and jank when overusing CSS transparency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Semi-transparent layers force the GPU into continuous alpha overdraw calculation loops during scrolling. Stacking multiple transparent blur elements creates fill-rate bottlenecks, depletes mobile GPU bandwidth, and drops frame rates below 60fps.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you decouple RGB channels with CSS Custom Properties for dynamic opacity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Declare space-delimited or comma-separated raw integers in :root (e.g., --primary-rgb: 59, 130, 246;). You can then compose any dynamic opacity on the fly using rgba(var(--primary-rgb), 0.5) without duplicating static color variables.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Tailwind CSS handle opacity with arbitrary hex values?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While theme-configured classes support slash syntax like bg-blue-500/50, arbitrary values like bg-[#3B82F6]/50 fail in older compilers. Passing the pre-computed 8-digit hex code directly (e.g., bg-[#3B82F680]) works universally across all Tailwind versions.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you engineer accessible Glassmorphism frosted card interfaces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Combine a low-alpha background (rgba(255,255,255,0.1) or 8-digit hex), a subtle 1px semi-transparent border (rgba(255,255,255,0.2)) to simulate edge refraction, and backdrop-filter: blur(12px) with solid text colors to guarantee readability.'
      }
    }
  ]
};

export default function OpacityCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <OpacityCalculatorClient />
    </>
  );
}