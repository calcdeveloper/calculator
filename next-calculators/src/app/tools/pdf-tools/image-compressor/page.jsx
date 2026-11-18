export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ImageCompressorClient from './ImageCompressorClient';

export const metadata = createPageMetadata({
  title: 'Image Compressor - Compress Images to Exact KB Size Online',
  description:
    'Compress JPEG, PNG, and WebP images to exact KB size online for free. Fast, private client-side image compressor for exam portals with zero server uploads.',
  path: '/tools/pdf-tools/image-compressor',
  keywords: [
    'image compressor',
    'compress image to 50kb',
    'compress image to 20kb',
    'reduce image size in kb',
    'compress jpeg online',
    'compress png online',
    'image compressor for exam',
    'upsc photo compressor',
    'ssc signature compressor',
    'private image compressor'
  ],
  openGraph: {
    title: 'Image Compressor - Compress Images to Exact KB Size Online',
    description:
      'Compress JPEG, PNG, and WebP images to exact KB size online for free. Fast, private client-side image compressor for exam portals with zero server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Image Compressor',
  description:
    'Compress JPEG, PNG, and WebP images to exact KB size online for free. Fast, private client-side image compressor for exam portals with zero server uploads.',
  path: '/tools/pdf-tools/image-compressor',
  category: 'WebApplication',
  featureList: [
    'Compress JPEG, PNG, and WebP images',
    'Exact target file size compression mode (e.g. 20KB, 50KB, 100KB)',
    '100% client-side zero-trust privacy',
    'Real-time multi-pass binary search algorithm',
    'Lossless metadata stripping for maximum compression',
    'Instant local download with zero server uploads'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Image Compressor', path: '/tools/pdf-tools/image-compressor' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the binary search algorithm compress an image to an exact target KB size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our engine implements an iterative logarithmic binary search over the quality domain Q in [0.01, 1.00]. It evaluates the midpoint quality factor, renders an in-memory Canvas Blob, and compares the resulting byte size against your target threshold. If the size exceeds your limit, it prunes the upper quality bracket; if below, it tests the higher range. This converges to the absolute maximum visual fidelity within your exact KB constraint in just 6 to 8 passes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does reducing an image file size change its physical pixel width and height?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our Image Compressor optimizes the frequency-domain quantization matrices and strips non-visual metadata without altering the canvas pixel dimensions. An 800x600 pixel image remains exactly 800x600 pixels after compression. If your application portal specifically requires modifying dimensional measurements (such as 200x230 pixels), use our companion Image Resizer tool.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why does converting a photographic PNG to JPG or WebP drastically reduce file size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PNG is a lossless format that records the exact mathematical color value of every pixel, making it incapable of efficiently compressing continuous-tone camera noise. JPEG and WebP utilize lossy quantization and chrominance subsampling to discard visually imperceptible high-frequency color variations, typically reducing photographic file sizes by 80% to 90% without visible degradation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to compress confidential identity cards, passports, and signatures on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, unconditionally. ToolsWizard operates on an uncompromising Zero-Trust client-side architecture. The entire compression pipeline executes strictly within your browser local memory sandbox using HTML5 Canvas primitives. Your photographs, signatures, Aadhaar cards, and passport documents are never transmitted across the network or stored on remote cloud servers.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the optimal JPEG quality setting to balance small file size and visual sharpness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For general web publication and digital archiving, a quality factor between 80% and 85% represents the mathematical sweet spot. In this range, quantization matrices prune high-frequency noise while preserving authentic textural detail, delivering a 70% to 80% reduction in byte size with an SSIM score exceeding 0.96.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do government and exam portals enforce strict 20KB and 50KB upload limits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Public recruitment portals handle millions of concurrent applicants within narrow multi-day submission windows. Strict byte limits prevent database server crashes, preserve network bandwidth, and ensure automated PDF admit card generation software can compile tens of thousands of hall tickets per hour without buffer overruns.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does metadata stripping reduce file size without degrading visual image quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digital cameras embed extensive non-visual data inside application marker segments, including EXIF GPS coordinates, camera telemetry, and embedded 160x120 pixel thumbnail previews. For small web avatars or signatures, this non-visual metadata can consume 15 KB to 50 KB. Stripping these markers reclaims byte budget without modifying a single rendered pixel.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this tool compress Apple iPhone HEIC and HEIF photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! For Apple iPhone photos saved in the high-efficiency .heic format, we recommend running them first through our companion HEIC to JPG Converter. Once decoded into a standard JPEG container, you can compress the image to any target KB threshold using our binary search engine.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between lossy compression and lossless compression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lossless compression (such as PNG or ZIP) reduces file size by identifying and eliminating statistical redundancy, allowing exact bit-for-bit reconstruction of the original data. Lossy compression (such as JPEG) permanently discards subtle, visually imperceptible high-frequency visual information, achieving dramatically smaller file sizes.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does image compression improve Google Core Web Vitals and website SEO rankings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uncompressed imagery is the leading cause of poor Largest Contentful Paint (LCP) performance. Compressing page banner images from 2 MB to under 150 KB accelerates resource load times, decreases network bandwidth contention, and elevates mobile user experience scores, directly boosting search ranking algorithms.'
      }
    }
  ]
};

export default function ImageCompressorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ImageCompressorClient />
    </>
  );
}
