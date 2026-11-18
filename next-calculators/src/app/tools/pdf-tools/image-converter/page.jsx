export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ImageConverterClient from './ImageConverterClient';

export const metadata = createPageMetadata({
  title: 'Image Converter - Convert JPG, PNG, WebP Online Free',
  description:
    'Convert images online between JPG, PNG, and WebP formats instantly. Free, secure client-side photo converter with custom quality and zero server uploads.',
  path: '/tools/pdf-tools/image-converter',
  keywords: [
    'image converter',
    'convert photo format',
    'jpg to png',
    'png to jpg',
    'convert to webp',
    'png to webp',
    'jpg to webp',
    'free image converter online',
    'client side image converter',
    'secure photo format converter'
  ],
  openGraph: {
    title: 'Image Converter - Convert JPG, PNG, WebP Online Free',
    description:
      'Convert images online between JPG, PNG, and WebP formats instantly. Free, secure client-side photo converter with custom quality and zero server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Image Converter',
  description:
    'Convert images online between JPG, PNG, and WebP formats instantly. Free, secure client-side photo converter with custom quality and zero server uploads.',
  path: '/tools/pdf-tools/image-converter',
  category: 'WebApplication',
  featureList: [
    'Convert images between JPG, PNG, and WebP formats',
    'Custom compression quality slider (1% to 100%)',
    'Automatic white alpha compositing for PNG-to-JPG conversions',
    '100% private client-side browser processing',
    'Instant local downloads with zero cloud uploads',
    'Batch multi-format image processing'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Image Converter', path: '/tools/pdf-tools/image-converter' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do government and university portals reject my PNG or WebP image?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legacy examination and government servers (such as UPSC, SSC, and state recruitment portals) utilize backend frameworks programmed decades ago that strictly validate file MIME types against image/jpeg. Furthermore, automated admit card PDF generation engines often fail to process transparency in PNGs, printing solid black boxes. Converting your image to a compliant JPG resolves all backend validation checks.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does converting a PNG to a JPG reduce the file size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost always, and frequently by 80% to 90% for photographs. PNG is a lossless format that records every single pixel value precisely, resulting in massive file bloat for complex photographs with sensor noise. JPEG applies lossy discrete cosine transform quantization to discard subtle, visually imperceptible color variations, dramatically compressing byte size.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens to transparent backgrounds when converting a PNG to a JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because standard JPEG does not support an alpha transparency channel, our engine applies mathematical alpha compositing, flattening all transparent and translucent pixels smoothly against a clean, opaque white background. This prevents the disastrous black background errors commonly seen in substandard conversion tools.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can converting an image format restore lost quality or fix blurry photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Format conversion repackages existing pixel data into a new container architecture. If an original JPEG image is blurry, pixelated, or compressed heavily, converting it to a lossless PNG will not restore deleted detail; it simply preserves the existing degraded pixels losslessly in a larger container.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to convert confidential identity documents and signatures on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100%. ToolsWizard operates under an uncompromising Zero-Trust client-side architecture. The entire transcoding pipeline runs inside your local browser memory using HTML5 Canvas primitives and your computer CPU. Your photos, signatures, Aadhaar cards, and passport scans are never uploaded to remote cloud servers or logged in external databases.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why does converting a small JPG to a PNG often cause the file size to balloon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPG relies on lossy quantization to keep file sizes small. When you convert to PNG, the lossless DEFLATE engine must map and preserve every single pixel value rigidly. Because photographic pixel variations cannot be compressed efficiently by LZ77 string matching, the resulting PNG file size will almost always increase significantly.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the technical difference between WebP, JPEG, and PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JPEG is a lossy format optimal for digital photos without transparency. PNG is a lossless format optimal for sharp graphics, logos, and typography with full alpha transparency. WebP is a modern next-generation hybrid format developed by Google that supports both lossy and lossless modes with alpha transparency, delivering 25% to 35% smaller file sizes than JPEG or PNG.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this tool convert Apple iPhone HEIC photos into JPG or PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Apple iPhone photos stored in the high-efficiency .heic container, we recommend utilizing our companion HEIC to JPG Converter, which features a dedicated WebAssembly-compiled H.265 video decoding kernel. Once converted to standard JPEG, you can transcode files into any web format using this tool.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does converting an image preserve EXIF metadata, camera settings, and timestamps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During browser canvas re-encoding, non-visual metadata segments (EXIF GPS coordinates, camera serial numbers, and embedded thumbnail bitmaps) are stripped to optimize file size and protect personal privacy. However, physical image orientation tags are mathematically applied to ensure images never render sideways.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does converting images to WebP improve website speed and SEO rankings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WebP files are approximately 30% smaller than JPEGs at identical visual fidelity. Serving WebP assets reduces total page payload weight, accelerates Largest Contentful Paint (LCP) times below Google 2.5-second benchmark, and conserves mobile cellular bandwidth, directly elevating Google search ranking algorithms.'
      }
    }
  ]
};

export default function ImageConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ImageConverterClient />
    </>
  );
}
