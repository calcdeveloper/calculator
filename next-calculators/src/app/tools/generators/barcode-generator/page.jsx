import BarcodeGeneratorClient from './BarcodeGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Barcode Generator | Create UPC, EAN, CODE128 Instantly',
  description: 'Free online barcode generator. Create high-resolution CODE128, EAN-13, UPC, and CODE39 barcodes. Download as PNG directly from your browser with no limits.',
  path: '/tools/generators/barcode-generator',
  keywords: ['barcode generator', 'create barcode', 'upc generator', 'ean generator', 'code128 generator', 'code39 generator'],
});

export default function BarcodeGeneratorPage() {
  return <BarcodeGeneratorClient />;
}
