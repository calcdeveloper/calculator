export const dynamic = "force-static";

import CssColorGeneratorClient from './CssColorGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'CSS Custom Property Generator | Build Color Variables',
  description: 'Generate complete, production-ready CSS Custom Properties (:root variables) and color ramps from a single base color. Perfect for scalable frontend architecture.',
  path: '/tools/design/css-color-generator',
  keywords: ['css color generator', 'css custom properties', 'css variables', 'color ramp generator', 'tailwind color generator'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'CSS Custom Property Generator',
  description: 'Generate complete, production-ready CSS Custom Properties (:root variables) and color ramps from a single base color. Perfect for scalable frontend architecture.',
  path: '/tools/design/css-color-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'CSS Custom Property Generator', path: '/tools/design/css-color-generator' }
]);

export default function CssColorGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <CssColorGeneratorClient />
    </>
  );
}
