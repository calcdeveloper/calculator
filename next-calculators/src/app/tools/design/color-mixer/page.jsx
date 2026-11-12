export const dynamic = "force-static";

import ColorMixerClient from './ColorMixerClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'CSS Color Mixer | Blend HEX Codes Mathematically',
  description: 'Mathematically blend two colors together using precise RGB interpolation to generate the perfect intermediate Hex code for your UI design.',
  path: '/tools/design/color-mixer',
  keywords: ['color mixer', 'blend colors', 'css color blending', 'mix hex codes', 'color interpolation'],
});


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
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ColorMixerClient />
    </>
  );
}
