export const dynamic = "force-static";

import ContrastCheckerClient from './ContrastCheckerClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'WCAG Contrast Checker | Color Accessibility Tool',
  description: 'Instantly calculate color contrast ratios to ensure your web design complies with WCAG 2.1 AA and AAA accessibility standards.',
  path: '/tools/design/contrast-checker',
  keywords: ['contrast checker', 'wcag contrast', 'color accessibility', 'a11y tools', 'text contrast calculator'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'WCAG Contrast Checker',
  description: 'Instantly calculate color contrast ratios to ensure your web design complies with WCAG 2.1 AA and AAA accessibility standards.',
  path: '/tools/design/contrast-checker',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'WCAG Contrast Checker', path: '/tools/design/contrast-checker' }
]);

export default function ContrastCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ContrastCheckerClient />
    </>
  );
}
