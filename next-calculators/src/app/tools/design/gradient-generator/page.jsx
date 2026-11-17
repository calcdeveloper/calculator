import React from 'react';
import GradientGeneratorClient from './GradientGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'CSS Gradient Generator - Linear & Radial Gradients Online',
  description: 'Create beautiful CSS linear and radial gradients online with our visual editor. Export production-ready CSS code and Tailwind utility classes instantly.',
  path: '/tools/design/gradient-generator',
  keywords: ['gradient generator', 'css gradient', 'linear gradient', 'radial gradient', 'tailwind gradient', 'css background generator', 'conic gradient', 'oklab gradient'],
  openGraph: {
    title: 'CSS Gradient Generator - Linear & Radial Gradients Online',
    description: 'Design beautiful linear and radial CSS gradients in real-time with instant CSS and Tailwind export.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'CSS Gradient Generator',
  description: 'Visual CSS gradient editor for linear and radial gradients with instant code export.',
  path: '/tools/design/gradient-generator',
  category: 'DesignApplication',
  featureList: [
    'Linear and radial gradient modes',
    'Custom angle control',
    'Multiple color stops',
    'Instant CSS and Tailwind CSS copy',
    'Client-side real-time rendering'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Gradient Generator', path: '/tools/design/gradient-generator' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the mathematical difference between a Linear and Radial gradient?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A linear gradient interpolates color along a straight mathematical directional vector defined by an angle, whereas a radial gradient radiates outward from a focal coordinate in circular or elliptical geometric contours.'
      }
    },
    {
      '@type': 'Question',
      name: 'What causes the "gray dead zone" in CSS gradients, and how is it resolved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard sRGB linear interpolation causes complementary colors to collapse into desaturated, muddy grays at their midpoint. This is resolved by adding intermediate harmonic color stops or utilizing CSS Color Module Level 4 perceptual interpolation spaces such as Oklab or Oklch.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you animate CSS gradients at silky-smooth 60 frames per second?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid animating background color stops directly, which triggers expensive CPU repaints. Instead, size the gradient to 200% and animate the background-position property, offloading the translation entirely to GPU composite layers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you create "hard color stops" (striped gradients) in CSS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Assign identical percentage positions to adjacent color stops (e.g., red 50%, blue 50%), instructing the browser rendering engine to bypass smooth interpolation and create an instantaneous, razor-sharp boundary.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do you export generated gradients directly into Tailwind CSS projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For standard 45-degree angles, map the stops to Tailwind utility classes like bg-gradient-to-r from-blue-500 to-indigo-600. For custom angles and complex stops, inject the compiled CSS string via Tailwind arbitrary value syntax: bg-[linear-gradient(117deg,#FF0055,#00FFCC)].'
      }
    },
    {
      '@type': 'Question',
      name: 'Can transparent alpha channels be mixed into CSS gradients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Hex codes can be combined with rgba() or transparent keywords to create frosted glassmorphism overlays and gradient text-protection scrims that guarantee WCAG contrast over dynamic photography.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do modern CSS gradients require vendor prefixes like -webkit- or -moz-?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Modern web browsers have fully standardized the W3C linear-gradient() and radial-gradient() specifications. Vendor prefixes are deprecated legacy artifacts only required for pre-2013 browsers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does font contrast compliance work when text overlays a gradient?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WCAG compliance requires that text meet at least a 4.5:1 contrast ratio against the lowest-contrast pixel along the gradient where typography is positioned, often requiring an underlying dark or light gradient scrim.'
      }
    }
  ]
};

export default function GradientGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <GradientGeneratorClient />
    </>
  );
}
