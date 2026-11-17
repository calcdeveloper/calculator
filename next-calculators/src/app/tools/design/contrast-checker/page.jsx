export const dynamic = "force-static";

import ContrastCheckerClient from './ContrastCheckerClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'WCAG Contrast Checker - Color Accessibility Ratio Calculator',
  description: 'Calculate color contrast ratios online to verify WCAG 2.1 AA and AAA compliance for body copy, large headings, buttons, and digital interface components.',
  path: '/tools/design/contrast-checker',
  keywords: ['contrast checker', 'wcag contrast', 'color accessibility', 'a11y tools', 'text contrast calculator', 'wcag 2.1 aa', 'wcag aaa compliance', 'relative luminance'],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'WCAG Contrast Checker',
  description: 'Calculate color contrast ratios online to verify WCAG 2.1 AA and AAA compliance for body copy, large headings, buttons, and digital interface components.',
  path: '/tools/design/contrast-checker',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'WCAG Contrast Checker', path: '/tools/design/contrast-checker' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the WCAG 2.1 Contrast standard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Web Content Accessibility Guidelines (WCAG 2.1/2.2) establish internationally recognized mathematical contrast ratios between text or interactive UI elements and their background surfaces to ensure readability for users with low vision or color blindness.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between WCAG Level AA and Level AAA compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Level AA requires a minimum 4.5:1 ratio for regular text and 3.0:1 for large text or UI components, serving as the international legal standard. Level AAA requires a stricter 7.0:1 ratio for regular text and 4.5:1 for large text, representing the gold standard for healthcare, banking, and government platforms.'
      }
    },
    {
      '@type': 'Question',
      name: 'How is relative luminance mathematically calculated under W3C specifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Channels are normalized from 8-bit sRGB (0-255) to 0.0-1.0 and linearized to reverse gamma companding. Photopic luminance is then weighted according to human spectral cone sensitivity: L = 0.2126 * R + 0.7152 * G + 0.0722 * B.'
      }
    },
    {
      '@type': 'Question',
      name: 'What qualifies as "Large Text" under WCAG guidelines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Large text is defined as typography rendered at 18pt (24px in standard CSS) or larger, or 14pt (18.5px in CSS) if explicitly bolded (font-weight 700 or greater).'
      }
    },
    {
      '@type': 'Question',
      name: 'What is WCAG 2.1 Criterion 1.4.11 Non-Text Contrast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Criterion 1.4.11 mandates a minimum 3.0:1 contrast ratio for user interface components (such as form field borders, toggle switches, and radio buttons) and graphical objects against adjacent background surfaces.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is APCA, and how does it improve upon WCAG 2 contrast algorithms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Advanced Perceptual Contrast Algorithm (APCA) is the contrast engine proposed for WCAG 3.0. It models human spatial vision, accounting for text font size, weight, and positive/negative polarity (light text on dark vs dark on light) with greater anatomical accuracy.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you audit contrast for semi-transparent alpha overlays and CSS gradients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alpha transparency must be flattened against the solid background surface using alpha compositing formulas before calculating contrast. For gradients or background photography, test against the lowest-contrast pixel where typography appears.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can automated crawlers like Google Lighthouse replace manual contrast testing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Automated crawlers evaluate static CSS color declarations but cannot accurately composite layered elements, dynamic canvas renderings, video backgrounds, or pseudo-elements, making manual sampling mandatory for full compliance.'
      }
    }
  ]
};

export default function ContrastCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ContrastCheckerClient />
    </>
  );
}
