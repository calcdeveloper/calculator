export const dynamic = "force-static";

import TailwindColorPickerClient from './TailwindColorPickerClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Tailwind Color Picker - Official Palette & HEX Shades',
  description: 'Browse, search, and copy official Tailwind CSS HEX shades and utility classes from 50 to 950. Essential tool for modern utility-first frontend UI design.',
  path: '/tools/design/tailwind-color-picker',
  keywords: ['tailwind color picker', 'tailwind colors', 'tailwind css palette', 'tailwind hex codes', 'utility classes', 'tailwind shades', 'tailwind 50-950'],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Tailwind Color Picker',
  description: 'Browse, search, and copy official Tailwind CSS HEX shades and utility classes from 50 to 950. Essential tool for modern utility-first frontend UI design.',
  path: '/tools/design/tailwind-color-picker',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Tailwind Color Picker', path: '/tools/design/tailwind-color-picker' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes the Tailwind CSS color palette uniquely suited for UI design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Tailwind CSS color palette was hand-crafted by expert product designers to solve the perceptual flaws of automated color algorithms. Instead of relying on linear mathematical calculations, each 50-950 ramp features customized hue shifts and saturation adjustments that prevent muddy darks and washed-out highlights, ensuring seamless visual harmony across digital interfaces.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why are there five distinct gray palettes (Slate, Gray, Zinc, Neutral, Stone)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pure achromatic gray (#808080) appears lifeless and sterile on digital screens. Tailwind provides temperature-tuned grays to match diverse brand personalities: Slate features cool blue undertones for tech SaaS; Gray offers balanced cool neutrality; Zinc delivers modern metallic minimalism; Neutral maintains pure geometric balance; and Stone incorporates warm earth undertones for editorial and luxury brands.'
      }
    },
    {
      '@type': 'Question',
      name: 'What do the 50 through 950 numeric shade steps represent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The numbers represent the relative luminous reflectance and chromatic depth of the color. 50 is the lightest tint (subtle card backgrounds), 500 serves as the primary vibrant anchor, 600 acts as standard hover states, and 900-950 represent ultra-dark tones engineered for sharp typography and deep dark-mode surface elevation.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the "400-Step Rule" for WCAG 2.1 accessibility compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 400-Step Rule is a reliable heuristic in Tailwind design systems: maintaining a numeric delta of at least 400 steps between text and background (e.g., text-slate-900 over bg-slate-100, delta 800) virtually guarantees compliance with WCAG Level AA 4.5:1 contrast requirements for standard body copy.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Tailwind CSS v4 change color configuration compared to v3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tailwind CSS v4 eliminates the JavaScript-based tailwind.config.js in favor of native CSS theme directives (@theme). Furthermore, v4 transitions the internal color engine to CSS Color Level 4 Oklch, providing wide-gamut Display P3 support and mathematically uniform perceptual brightness across all hues.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use these Tailwind Hex codes in projects not built with Tailwind?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Hex codes in our Tailwind Color Picker are completely universal. Developers working in vanilla CSS, SCSS, styled-components, CSS Modules, or UI kits like Bootstrap can copy the Hex codes directly to leverage Tailwind\'s world-class color science in any tech stack.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why should developers avoid dynamic string class names like bg-${color}-500?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Tailwind JIT compiler scans source files using static regex extractors before code execution. Dynamic runtime string concatenation (e.g., `bg-${theme}-500`) hides complete class names from the compiler, preventing the required CSS from being generated. Developers must use full static class names or configure safelist arrays.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I enable alpha opacity modifiers on custom CSS variable colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Tailwind v3, define your color variable as space-separated RGB channel numbers (e.g., --color-brand: 59 130 246) and configure it in tailwind.config.js using rgb(var(--color-brand) / <alpha-value>). In Tailwind v4, native color-mix() and Oklch support handles opacity automatically via standard slash syntax (e.g., bg-brand/50).'
      }
    },
    {
      '@type': 'Question',
      name: 'Why does Tailwind recommend slate-950 instead of pure #000000 for dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pure #000000 causes intense optical glare, ocular fatigue, and visible OLED pixel smearing when scrolling high-contrast white text. Slate-950 (#020617) provides an ultra-deep canvas that preserves chromatic undertones, accommodates subtle elevation shadows, and softens optical strain.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the Tailwind JIT compiler ensure unused colors do not bloat production bundles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Just-In-Time (JIT) compiler evaluates source files and synthesizes CSS rules on-demand strictly for the exact utility classes detected in your markup. Unused colors, shades, and pseudo-variants are completely excluded, keeping production CSS bundles exceptionally lightweight (typically under 15KB compressed).'
      }
    }
  ]
};

export default function TailwindColorPickerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <TailwindColorPickerClient />
    </>
  );
}
