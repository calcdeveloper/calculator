export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import SvgConverterClient from './SvgConverterClient';

export const metadata = createPageMetadata({
  title: 'SVG Converter - Convert Vector Graphics to PNG/JPG Free',
  description: 'Instantly convert SVG vector files to high-resolution PNG, JPG, or WebP images online. 100% free, browser-based processing. Scale SVGs without losing quality.',
  path: '/tools/pdf-tools/svg-converter',
  keywords: ['svg converter', 'svg to png', 'convert svg to jpg', 'rasterize svg', 'vector to image', 'free svg to png converter'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'SVG Converter',
  description: 'Instantly convert SVG vector files to high-resolution PNG, JPG, or WebP images online. 100% free, browser-based processing. Scale SVGs without losing quality.',
  path: '/tools/pdf-tools/svg-converter',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'SVG Converter', path: '/tools/pdf-tools/svg-converter' }
]);

export default function SvgConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <SvgConverterClient />
    </>
  );
}
