export const dynamic = "force-static";

import FakeDataGeneratorClient from './FakeDataGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Fake Data Generator | Create JSON, CSV, SQL Mock Data',
  description: 'Instantly generate thousands of rows of realistic dummy data. Export structured profiles, names, addresses, and emails into JSON, CSV, or SQL formats.',
  path: '/tools/generators/fake-data-generator',
  keywords: ['fake data generator', 'mock data generator', 'dummy json', 'generate csv data', 'sql mock data'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Fake Data Generator',
  description: 'Instantly generate thousands of rows of realistic dummy data. Export structured profiles, names, addresses, and emails into JSON, CSV, or SQL formats.',
  path: '/tools/generators/fake-data-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Fake Data Generator', path: '/tools/generators/fake-data-generator' }
]);

export default function FakeDataGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <FakeDataGeneratorClient />
    </>
  );
}
