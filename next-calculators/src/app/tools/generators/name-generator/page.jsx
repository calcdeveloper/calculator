export const dynamic = "force-static";

import NameGeneratorClient from './NameGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random Name Generator | First, Last, and Middle Names',
  description: 'Generate thousands of realistic, culturally accurate human names instantly. Customize by gender, add prefixes and suffixes, and copy in bulk for database testing or character design.',
  path: '/tools/generators/name-generator',
  keywords: ['name generator', 'random name generator', 'fake names', 'character name generator', 'generate names'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Random Name Generator',
  description: 'Generate thousands of realistic, culturally accurate human names instantly. Customize by gender, add prefixes and suffixes, and copy in bulk for database testing or character design.',
  path: '/tools/generators/name-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Random Name Generator', path: '/tools/generators/name-generator' }
]);

export default function NameGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <NameGeneratorClient />
    </>
  );
}
