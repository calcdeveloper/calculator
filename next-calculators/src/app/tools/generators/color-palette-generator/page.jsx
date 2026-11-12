export const dynamic = "force-static";

import ColorPaletteGeneratorClient from './ColorPaletteGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Color Palette Generator | Fast, Beautiful UI Colors',
  description: 'Instantly generate beautiful, harmonious color palettes for web design and UI projects. Press spacebar to generate, lock your favorite colors, and copy hex codes instantly.',
  path: '/tools/generators/color-palette-generator',
  keywords: ['color palette generator', 'color scheme generator', 'ui colors', 'web design colors', 'random color generator', 'hex color palette'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Color Palette Generator',
  description: 'Instantly generate beautiful, harmonious color palettes for web design and UI projects. Press spacebar to generate, lock your favorite colors, and copy hex codes instantly.',
  path: '/tools/generators/color-palette-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Color Palette Generator', path: '/tools/generators/color-palette-generator' }
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
