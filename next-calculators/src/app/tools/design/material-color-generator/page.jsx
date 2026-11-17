export const dynamic = "force-static";

import MaterialColorGeneratorClient from './MaterialColorGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Material Design Color Palette - Hex Codes & UI Tones',
  description: 'Browse, search, and copy official Google Material Design (M2) color palettes with exact 50-900 and accent HEX codes. Optimized for Android, Web, and MUI.',
  path: '/tools/design/material-color-generator',
  keywords: ['material color palette', 'google material design', 'material ui colors', 'android colors', 'material hex codes', 'mui color generator', 'accent colors m2'],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Material Design Color Palette',
  description: 'Browse, search, and copy official Google Material Design (M2) color palettes with exact 50-900 and accent HEX codes. Optimized for Android, Web, and MUI.',
  path: '/tools/design/material-color-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Material Design Color Palette', path: '/tools/design/material-color-generator' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Google Material Design and what inspired its color system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Material Design is a comprehensive design system introduced by Google in 2014, grounded in the tactile metaphor of paper and ink. Digital surfaces exist in physical 3D elevation (z-space) casting realistic shadows, while bold, saturated color palettes provide clear visual hierarchy and intuitive touch cues.'
      }
    },
    {
      '@type': 'Question',
      name: 'What do the "A" prefix accent shades (A100, A200, A400, A700) represent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "A" designation denotes Accent colors. Unlike the structural 50-900 tonal scale used for cards and headers, Accent colors are hyper-saturated, electric variants calibrated exclusively for high-conversion actionable elements like Floating Action Buttons (FABs), active tabs, and progress indicators.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Material Design 2 (M2) differ from Material You (M3)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Material Design 2 uses a static, universally standardized palette of vibrant 50-900 and accent hex codes. Material You (M3) replaces static swatches with dynamic tonal palettes extracted from user wallpapers using the HCT (Hue, Chroma, Tone) color space. M2 remains the preferred standard for enterprise web apps requiring fixed brand identity.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the Material Design 50-900 numeric scale function in UI architecture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 500 shade acts as the primary brand anchor for app toolbars and headers. The 700 shade is calibrated for the Android status bar, 600-900 shades provide hover and pressed states, and the 50-100 shades serve as low-luminance tinted backgrounds for cards and sidebars.'
      }
    },
    {
      '@type': 'Question',
      name: 'What built-in accessibility rules ensure WCAG contrast compliance in Material Design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google engineered the palette such that pure white text (#FFFFFF) achieves a compliant 4.5:1 contrast ratio against shades 500 through 900, while high-opacity dark text (#000000 with 87% alpha) satisfies contrast requirements against shades 50 through 400.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I legally use Material Design color hex codes in commercial iOS or web applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The underlying hexadecimal color strings and color specifications are open-source and free for commercial use across any platform, including iOS Swift, React, Flutter, Vue, and desktop applications, without Google trademark or copyright restrictions.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do Material Design colors compare to Tailwind CSS palettes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While both frameworks use a 50-900 numeric structure, Tailwind colors are tailored for modern desktop web minimalism with subtler saturation, whereas Material Design colors are engineered with intense saturation to combat outdoor mobile glare under direct sunlight.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I integrate Material Design hex codes into React and Material UI (MUI)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Material UI (MUI v5/v6), import color modules or pass exact hex codes into createTheme({ palette: { primary: { main: "#2196F3", dark: "#1976D2", light: "#BBDEFB" } } }) to systematically cascade theme tokens across all UI components.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the YIQ luminance formula calculate text legibility over Material colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The YIQ formula ((R*299) + (G*587) + (B*114)) / 1000 calculates perceptual brightness. Values of 128 or higher trigger dark text, while values below 128 trigger white text, automating instant contrast adaptation across UI swatches.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why did Material Design choose bold saturation over pastel tones for mobile devices?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under direct outdoor sunlight, ambient light reflections drastically reduce perceived display contrast. High-chroma, saturated 500-level hues maintain edge sharpness and color legibility where pastel tones wash out completely.'
      }
    }
  ]
};

export default function MaterialColorGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <MaterialColorGeneratorClient />
    </>
  );
}