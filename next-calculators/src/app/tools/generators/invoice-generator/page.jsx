import InvoiceGeneratorClient from './InvoiceGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Free Professional Invoice Generator | Create & Print PDF',
  description: 'Instantly create beautiful, professional invoices in your browser. Calculate taxes automatically, add line items, and print directly to PDF for free.',
  path: '/tools/generators/invoice-generator',
  keywords: ['invoice generator', 'create invoice online', 'free pdf invoice', 'freelance invoice maker', 'billing template'],
});

export default function InvoiceGeneratorPage() {
  return <InvoiceGeneratorClient />;
}
