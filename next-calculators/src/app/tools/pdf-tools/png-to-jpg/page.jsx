export const dynamic = "force-static";

import React from 'react';
import PngToJpgClient from './PngToJpgClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'PNG to JPG Converter - Convert PNG to JPG Online Free',
  description:
    'Convert PNG images to JPG format online for free. Reduce image size with custom quality tuning, white alpha flattening, and zero-trust browser privacy.',
  path: '/tools/pdf-tools/png-to-jpg',
  keywords: [
    'png to jpg',
    'convert png to jpg',
    'png converter',
    'change png to jpg',
    'free png to jpeg converter',
    'reduce image file size',
    'png to jpg high quality',
    'convert transparent png to jpg',
    'client side image converter'
  ],
  openGraph: {
    title: 'PNG to JPG Converter - Convert PNG to JPG Online Free',
    description:
      'Convert PNG images to JPG format online for free. Reduce image size with custom quality tuning, white alpha flattening, and zero-trust browser privacy.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PNG to JPG Converter',
  description:
    'Convert PNG images to JPG format online for free. Reduce image size with custom quality tuning, white alpha flattening, and zero-trust browser privacy.',
  path: '/tools/pdf-tools/png-to-jpg',
  category: 'WebApplication',
  featureList: [
    'Lossy Discrete Cosine Transform (DCT) image compression',
    'Automatic white alpha matte compositing for transparent PNGs',
    'Dynamic quality tuning slider (10% to 100%)',
    '100% private client-side in-browser canvas processing',
    'Zero server uploads, cloud tracking, or third-party storage',
    'Instant local JPEG download with zero network delay'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PNG to JPG Converter', path: '/tools/pdf-tools/png-to-jpg' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my original PNG file so much larger than the converted JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PNG is a lossless format that records the exact 24-bit RGB or 32-bit RGBA color values for every single pixel on the canvas using DEFLATE compression. For photographic images with millions of subtle color gradients, this requires enormous storage space. In contrast, JPG utilizes lossy Discrete Cosine Transform (DCT) compression and chroma subsampling, actively discarding high-frequency visual details that human eyes cannot perceive. This allows JPG to reduce file size by 70% to 90% while appearing identical to viewers.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens to the transparent background of my PNG during JPG conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The JPEG/JPG format fundamentally lacks an alpha transparency channel and can only store opaque pixels. When our tool converts a transparent PNG, it automatically executes Porter-Duff alpha compositing against a pure solid white background matte. Transparent areas become clean white, preventing the infamous black rectangle rendering bug that frequently occurs on legacy government upload portals and PDF print drivers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to convert confidential identity cards (Aadhaar, PAN, Passport) on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100% safe and unconditionally private. ToolsWizard operates on a strict Zero-Trust client-side architecture. The entire image decoding, alpha compositing, and JPEG re-encoding pipeline executes directly inside your local web browser memory using HTML5 Canvas Web APIs. Your confidential identity cards, financial records, and personal photographs are never uploaded to any remote server or third-party cloud database.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between .jpg and .jpeg file extensions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is zero technical or mathematical difference between .jpg and .jpeg. Both represent the exact same ISO/IEC 10918-1 JFIF image standard. The .jpg three-letter extension originated because early Microsoft DOS and Windows 95 file systems enforced a strict 8.3 filename structure requiring three-letter extensions, whereas Unix and Macintosh systems used .jpeg. Today, all modern operating systems and web browsers treat them as completely interchangeable.'
      }
    },
    {
      '@type': 'Question',
      name: 'What quality slider setting provides the best balance of file size and visual fidelity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For standard photography and web publishing, a quality setting between 80% and 85% represents the mathematical sweet spot. At 85%, JPEG quantization removes high-frequency imperceptible noise, reducing file weight by approximately 80% with zero visible degradation on standard or Retina displays. For strict government examination uploads requiring sub-50KB file sizes, lowering the slider to 65%–70% aggressively reduces byte weight while preserving facial features.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert a PNG image to JPG on my smartphone or tablet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The tool is fully responsive and leverages native hardware-accelerated Canvas Web APIs in mobile Safari on iOS/iPadOS, Google Chrome on Android, and Samsung Internet. You can select an image directly from your mobile photo library or files app, execute the conversion instantly, and download the lightweight JPG directly to your device without installing third-party apps.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do government exam portals reject PNG format images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legacy examination portals (such as UPSC, SSC, and IBPS) process tens of millions of concurrent applicant records. Storing multi-megabyte PNG files would overwhelm database clusters and broadband bandwidth. Furthermore, older automated document generation engines cannot parse alpha transparency channels and render transparent backgrounds as solid black. To guarantee universal database compatibility and lightweight storage, portals enforce strict .jpg requirements and sub-50KB size caps.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will converting a PNG to JPG change the pixel dimensions of my photo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Format conversion changes the internal mathematical encoding of color data from lossless DEFLATE to lossy DCT; it does not alter the width or height pixel dimensions of your image. A 1920x1080 PNG image will produce an exact 1920x1080 JPG output file. If you need to modify pixel dimensions or crop margins, use our companion Image Resizer or Image Cropper.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert Apple iPhone HEIC/HEIF photos to JPG with this tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This specific tool is optimized for PNG raster images. If you need to convert high-efficiency photos captured by modern Apple iPhones (.heic or .heif format), use our dedicated companion HEIC to JPG Converter, which includes specialized client-side WebAssembly codecs designed specifically for High Efficiency Image File containers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there an artificial file size limit or daily conversion quota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Because ToolsWizard processes all images directly within your local browser memory using client-side JavaScript, we incur zero cloud hosting or server processing costs. Consequently, we impose no daily conversion limits, no file size ceilings, and no paywalls. You can convert as many high-resolution PNG images as you need, 100% free forever.'
      }
    }
  ]
};

export default function PngToJpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <PngToJpgClient />
    </>
  );
}
