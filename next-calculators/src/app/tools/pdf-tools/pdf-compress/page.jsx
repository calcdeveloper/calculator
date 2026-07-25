import { createPageMetadata } from '@/utils/seo';
import PdfCompressClient from './PdfCompressClient';

export const metadata = createPageMetadata({
  title: 'PDF Compressor - Reduce PDF File Size Online Free & Private',
  description: 'Compress large PDF files instantly. Reduce file size without losing quality. 100% free, secure, and browser-based PDF optimization. No server uploads.',
  path: '/tools/pdf-tools/pdf-compress',
  keywords: ['pdf compressor', 'compress pdf online', 'reduce pdf file size', 'shrink pdf', 'optimize pdf', 'free pdf compressor'],
});

export default function PdfCompressPage() {
  return <PdfCompressClient />;
}
