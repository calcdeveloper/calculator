export const dynamic = "force-static";

import HexToHslClient from './HexToHslClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Hex to HSL Converter | Fast & Accurate Color Tool',
  description: 'Convert Hexadecimal color codes to HSL (Hue, Saturation, Lightness) format instantly. Perfect for modern CSS variable architecture and Tailwind UI design.',
  path: '/tools/design/hex-to-hsl',
  keywords: ['hex to hsl', 'hexadecimal to hsl', 'color converter', 'css color codes', 'ui design colors'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Hex to HSL Converter',
  description: 'Convert Hexadecimal color codes to HSL (Hue, Saturation, Lightness) format instantly. Perfect for modern CSS variable architecture and Tailwind UI design.',
  path: '/tools/design/hex-to-hsl',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Hex to HSL Converter', path: '/tools/design/hex-to-hsl' }
]);

export default function HexToHslPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <HexToHslClient />
    </>
  );
}
