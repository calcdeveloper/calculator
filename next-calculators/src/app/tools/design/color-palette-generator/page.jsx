export const dynamic = "force-static";

import ColorPaletteGeneratorClient from './ColorPaletteGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Color Palette Generator - Harmonious Color Schemes Online',
  description: 'Generate beautiful, mathematically harmonious color palettes instantly by pressing the spacebar. Perfect for UI/UX designers and modern web architecture.',
  path: '/tools/design/color-palette-generator',
  keywords: ['color palette generator', 'color scheme generator', 'ui design colors', 'random color generator', 'hex colors', 'tailwind colors', 'hsl color harmony'],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Color Palette Generator',
  description: 'Generate beautiful, mathematically harmonious color palettes instantly by pressing the spacebar. Perfect for UI/UX designers and modern web architecture.',
  path: '/tools/design/color-palette-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Color Palette Generator', path: '/tools/design/color-palette-generator' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do algorithmically generated palettes in HSL look more harmonious than random RGB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Random RGB generation produces chaotic, muddy, or oversaturated tones because Red, Green, and Blue channels correlate non-linearly with human perception. By constraining Hue, Saturation, and Lightness (HSL), the generator preserves chromatic vibrancy and contrast while preventing extreme lightness blowouts.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the spacebar interaction streamline UI/UX design workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Binding generation to the keyboard spacebar eliminates repetitive mouse-targeting friction, allowing designers to cycle through hundreds of harmonic palettes per minute and rapidly break creative blocks without leaving their creative flow state.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the iterative color locking mechanism work behind the scenes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clicking the lock icon freezes a selected color index in the React state array. Subsequent spacebar presses randomize only the unlocked columns, allowing designers to iteratively curate full five-token design palettes around a single anchor hue.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the generator ensure text overlay legibility across contrasting colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engine evaluates the perceived brightness of each column using standard luminance metrics. When background brightness drops below 128, the overlay text automatically flips to stark white, ensuring W3C readability compliance.'
      }
    },
    {
      '@type': 'Question',
      name: 'What mathematical formula determines WCAG AA and AAA accessibility compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WCAG contrast calculates the ratio between the relative luminance of the foreground and background: (L1 + 0.05) / (L2 + 0.05). Level AA requires 4.5:1 for body copy and 3.0:1 for large text, while Level AAA requires 7.0:1.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I export generated colors directly into Tailwind CSS or CSS Custom Properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Copy the 6-character hex strings directly into your tailwind.config.js theme extension or map them to CSS variables like --brand-primary and --brand-accent in your global stylesheet.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between monochromatic, analogous, and triadic color harmonies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monochromatic schemes vary saturation and lightness across a single hue; analogous schemes use adjacent hues within 30 degrees; triadic schemes space three hues evenly at 120-degree intervals across the 360-degree color wheel.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I adapt a 5-color palette for dark mode without breaking brand consistency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Invert the lightness scale while preserving brand hue identities. Desaturate primary accents slightly by 5% to 15% to eliminate eye strain against deep slate or charcoal backgrounds.'
      }
    }
  ]
};

export default function ColorPaletteGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ColorPaletteGeneratorClient />
    </>
  );
}
