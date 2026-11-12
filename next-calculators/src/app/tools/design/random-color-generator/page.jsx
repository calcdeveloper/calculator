export const dynamic = "force-static";

import RandomColorGeneratorClient from './RandomColorGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random Color Generator | Bound & Constrain HEX Colors',
  description: 'Generate perfectly constrained random CSS Hex colors by controlling Hue, Saturation, and Lightness boundaries. Designed for frontend engineers.',
  path: '/tools/design/random-color-generator',
  keywords: ['random color generator', 'random hex code', 'random hsl color', 'css color generator', 'random color palette'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Random Color Generator',
  description: 'Generate perfectly constrained random CSS Hex colors by controlling Hue, Saturation, and Lightness boundaries. Designed for frontend engineers.',
  path: '/tools/design/random-color-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Random Color Generator', path: '/tools/design/random-color-generator' }
]);

export default function RandomColorGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <RandomColorGeneratorClient />
    </>
  );
}
