export const dynamic = "force-static";

import ColorMixerClient from './ColorMixerClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'CSS Color Mixer - Blend HEX Colors Online with Linear Lerp',
  description: 'Mathematically blend two colors together using precise RGB interpolation. Generate exact intermediate HEX codes, CSS color-mix fallbacks, and UI palettes.',
  path: '/tools/design/color-mixer',
  keywords: ['color mixer', 'blend colors', 'css color blending', 'mix hex codes', 'color interpolation', 'linear interpolation color', 'css color-mix generator'],
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does digital CSS color mixing differ from physical paint mixing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital color mixing operates under the Additive Color Model (RGB), blending wavelengths of light emitted by digital displays. Physical paint mixing operates under the Subtractive Color Model (CMYK), where pigments absorb light. Mixing pure red (#FF0000) and pure green (#00FF00) in additive RGB generates bright yellow (#FFFF00), whereas mixing red and green physical paints produces a dull brownish-gray."
      }
    },
    {
      "@type": "Question",
      "name": "What mathematical formula is used to blend two HEX colors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hex color blending uses Linear Interpolation (Lerp). The hexadecimal strings are first converted into integer RGB channels (0-255). For a mix ratio t between 0 and 1, each channel is calculated as: Mixed = Round(ColorA * (1 - t) + ColorB * t). The resulting integer channels are then converted back into a 6-digit hex string."
      }
    },
    {
      "@type": "Question",
      "name": "What is the native CSS color-mix() function?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The native CSS color-mix() function, introduced in CSS Color Module Level 5, allows browsers to blend two colors directly in stylesheets. The syntax is: color-mix(in <color-space>, <color1> [percentage], <color2> [percentage]). Supported interpolation spaces include srgb, oklab, lch, and display-p3."
      }
    },
    {
      "@type": "Question",
      "name": "Why do complementary colors create a muddy gray midpoint in sRGB?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Complementary colors (such as red and cyan, or blue and yellow) sit on opposite sides of the color spectrum. In Cartesian sRGB space, linear interpolation travels directly through the center of the color cube where color saturation drops to zero, producing a desaturated neutral gray (#808080) known as the gradient 'dead zone'."
      }
    },
    {
      "@type": "Question",
      "name": "Why is the Oklab color space superior for digital color blending?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oklab is engineered for perceptual uniformity, matching human retinal perception. Unlike standard sRGB, which exhibits non-linear perceived lightness shifts and distorts blue-white transitions into purple artifacts, Oklab preserves constant perceived hue and smooth lightness transitions during interpolation."
      }
    },
    {
      "@type": "Question",
      "name": "How does flattening alpha transparency with a color mixer boost website performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CSS alpha opacity (such as rgba() or opacity) forces the browser's Graphics Processing Unit (GPU) to recompute composited pixels on every scroll event, causing layout thrashing. Blending an accent color into a solid background with a color mixer generates an opaque hex code that provides identical aesthetics with zero GPU compositing overhead."
      }
    }
  ]
};

const softwareSchema = createSoftwareAppSchema({
  name: 'CSS Color Mixer',
  description: 'Mathematically blend two colors together using precise RGB interpolation to generate the perfect intermediate Hex code for your UI design.',
  path: '/tools/design/color-mixer',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'CSS Color Mixer', path: '/tools/design/color-mixer' }
]);

export default function ColorMixerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ColorMixerClient />
    </>
  );
}
