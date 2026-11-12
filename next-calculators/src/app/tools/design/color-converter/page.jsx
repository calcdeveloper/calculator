export const dynamic = "force-static";

import ColorConverterClient from './ColorConverterClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Universal Color Converter | HEX, RGB, HSL, CMYK',
  description: 'Instantly convert colors between HEX, RGB, HSL, and CMYK formats. Built for professional frontend engineers and print designers.',
  path: '/tools/design/color-converter',
  keywords: ['color converter', 'hex to rgb', 'rgb to cmyk', 'hsl to hex', 'css color codes'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Universal Color Converter',
  description: 'Instantly convert colors between HEX, RGB, HSL, and CMYK formats. Built for professional frontend engineers and print designers.',
  path: '/tools/design/color-converter',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Universal Color Converter', path: '/tools/design/color-converter' }
]);

export default function ColorConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ColorConverterClient />
    </>
  );
}
