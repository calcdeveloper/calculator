export const dynamic = "force-static";

import BarcodeGeneratorClient from './BarcodeGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Barcode Generator | Create UPC, EAN, CODE128 Instantly',
  description: 'Free online barcode generator. Create high-resolution CODE128, EAN-13, UPC, and CODE39 barcodes. Download as PNG directly from your browser with no limits.',
  path: '/tools/generators/barcode-generator',
  keywords: ['barcode generator', 'create barcode', 'upc generator', 'ean generator', 'code128 generator', 'code39 generator'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Barcode Generator',
  description: 'Free online barcode generator. Create high-resolution CODE128, EAN-13, UPC, and CODE39 barcodes. Download as PNG directly from your browser with no limits.',
  path: '/tools/generators/barcode-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Barcode Generator', path: '/tools/generators/barcode-generator' }
]);

export default function BarcodeGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <BarcodeGeneratorClient />
    </>
  );
}
