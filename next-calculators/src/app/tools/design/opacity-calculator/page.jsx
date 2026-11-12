export const dynamic = "force-static";

import OpacityCalculatorClient from './OpacityCalculatorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'CSS Opacity Calculator | HEX to RGBA Converter',
  description: 'Instantly convert solid Hex color codes into transparent RGBA functions and modern 8-character Hex Alpha codes for UI design.',
  path: '/tools/design/opacity-calculator',
  keywords: ['opacity calculator', 'hex to rgba', 'hex alpha code', 'css transparency', 'color opacity converter'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'CSS Opacity Calculator',
  description: 'Instantly convert solid Hex color codes into transparent RGBA functions and modern 8-character Hex Alpha codes for UI design.',
  path: '/tools/design/opacity-calculator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'CSS Opacity Calculator', path: '/tools/design/opacity-calculator' }
]);

export default function OpacityCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <OpacityCalculatorClient />
    </>
  );
}
