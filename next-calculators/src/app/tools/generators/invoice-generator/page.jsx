export const dynamic = "force-static";

import InvoiceGeneratorClient from './InvoiceGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Free Professional Invoice Generator | Create & Print PDF',
  description: 'Instantly create beautiful, professional invoices in your browser. Calculate taxes automatically, add line items, and print directly to PDF for free.',
  path: '/tools/generators/invoice-generator',
  keywords: ['invoice generator', 'create invoice online', 'free pdf invoice', 'freelance invoice maker', 'billing template'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Free Professional Invoice Generator',
  description: 'Instantly create beautiful, professional invoices in your browser. Calculate taxes automatically, add line items, and print directly to PDF for free.',
  path: '/tools/generators/invoice-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Free Professional Invoice Generator', path: '/tools/generators/invoice-generator' }
]);

export default function InvoiceGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <InvoiceGeneratorClient />
    </>
  );
}
