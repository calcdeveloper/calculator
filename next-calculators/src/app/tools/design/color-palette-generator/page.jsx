export const dynamic = "force-static";

import ColorPaletteGeneratorClient from './ColorPaletteGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Color Palette Generator | Fast, Harmonious Design Colors',
  description: 'Generate beautiful, mathematically harmonious color palettes instantly by pressing the spacebar. Perfect for UI/UX designers and modern web architecture.',
  path: '/tools/design/color-palette-generator',
  keywords: ['color palette generator', 'color scheme generator', 'ui design colors', 'random color generator', 'hex colors'],
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

export default function ColorPaletteGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ColorPaletteGeneratorClient />
    </>
  );
}
