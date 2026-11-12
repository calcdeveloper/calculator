export const dynamic = "force-static";

import EmailGeneratorClient from './EmailGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random Email Generator | Fake Email Addresses for Testing',
  description: 'Generate massive lists of highly realistic dummy email addresses instantly. Customize domains, username formats, and copy in bulk for database testing or QA.',
  path: '/tools/generators/email-generator',
  keywords: ['email generator', 'random email generator', 'fake emails', 'dummy email address', 'generate test emails'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Random Email Generator',
  description: 'Generate massive lists of highly realistic dummy email addresses instantly. Customize domains, username formats, and copy in bulk for database testing or QA.',
  path: '/tools/generators/email-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Random Email Generator', path: '/tools/generators/email-generator' }
]);

export default function EmailGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <EmailGeneratorClient />
    </>
  );
}
