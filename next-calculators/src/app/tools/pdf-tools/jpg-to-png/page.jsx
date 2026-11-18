export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import JpgToPngClient from './JpgToPngClient';

export const metadata = createPageMetadata({
  title: 'JPG to PNG Converter - Convert Images Online Free',
  description:
    'Convert JPG to PNG online instantly for free. Lossless RGB and alpha transparency support with zero generational quality loss and 100% private processing.',
  path: '/tools/pdf-tools/jpg-to-png',
  keywords: [
    'jpg to png',
    'convert jpg to png',
    'jpeg to png',
    'change jpg to png',
    'lossless image conversion',
    'free jpg to png converter',
    'jpg to png transparent background',
    'client side jpg to png',
    'private photo converter'
  ],
  openGraph: {
    title: 'JPG to PNG Converter - Convert Images Online Free',
    description:
      'Convert JPG to PNG online instantly for free. Lossless RGB and alpha transparency support with zero generational quality loss and 100% private processing.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'JPG to PNG Converter',
  description:
    'Convert JPG to PNG online instantly for free. Lossless RGB and alpha transparency support with zero generational quality loss and 100% private processing.',
  path: '/tools/pdf-tools/jpg-to-png',
  category: 'WebApplication',
  featureList: [
    'Lossless JPG to PNG container transcoding',
    'Eliminates generational loss during iterative edits',
    'Prepares photographic assets for alpha transparency workflows',
    '100% private client-side zero-trust browser execution',
    'Instant local download with zero cloud server uploads',
    'Hardware-accelerated HTML5 Canvas 2D rasterization'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'JPG to PNG Converter', path: '/tools/pdf-tools/jpg-to-png' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will converting a JPG to a PNG improve its visual quality or sharpness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Converting a JPG to a PNG will not restore deleted detail or make a blurry image sharp. The original JPG file has already permanently discarded visual information through lossy Discrete Cosine Transform quantization. Converting to PNG simply takes the existing, compressed pixels and encapsulates them inside a mathematically lossless container, preventing any further compression degradation during future re-saving operations.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why does the file size in MB increase so drastically after converting JPG to PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is completely normal and expected. JPG uses lossy compression to discard imperceptible color variations, keeping byte sizes small. PNG is a lossless format using the DEFLATE algorithm, which records every single pixel value with 100% precision. Furthermore, subtle JPEG compression artifacts (block boundaries and ringing) are treated by the PNG encoder as complex photographic data that cannot be compressed by LZ77 pattern matching, causing file sizes to increase by 4x to 10x.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will converting my JPG image to PNG make the background transparent automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. While the resulting PNG format natively supports alpha transparency, converting a file does not automatically delete existing background pixels. If your JPG has a solid white or colored background, the resulting PNG will preserve that background. However, once your image is in the PNG container, you can easily open it in photo editing software or Canva to erase the background cleanly with full alpha channel support.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is generational loss, and how does converting to PNG prevent it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generational loss occurs when an image is repeatedly edited and re-saved in a lossy format like JPEG. Each save cycle applies new Discrete Cosine Transform quantization, causing compounding compression artifacts, block boundary blurring, and color shifts. Converting to PNG locks your pixels into a lossless format; subsequent edits and re-saves in software like Photoshop will cause zero generational quality loss.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to convert sensitive identity documents and signatures on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100% safe. ToolsWizard operates under an uncompromising Zero-Trust architecture. All image decompression, canvas rasterization, and PNG encoding execute entirely inside your local browser memory using HTML5 Canvas primitives and your device CPU/GPU. Your confidential documents, contracts, and signatures are never transmitted across the network or stored in cloud databases.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use this online converter on mobile smartphones without installing an app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ToolsWizard JPG to PNG Converter is fully responsive and leverages modern browser APIs across mobile Chrome, iOS Safari, Samsung Internet, and Firefox. You can select a photo directly from your smartphone camera roll, execute the conversion in milliseconds, and download the lossless PNG file directly to your device storage without installing any third-party apps.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does PNG predictive filtering improve image compression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Before running DEFLATE entropy compression, the PNG encoder applies one of five predictive mathematical filters (None, Sub, Up, Average, or Paeth) to every horizontal scanline. These filters replace absolute RGB pixel values with relative difference values compared to neighboring pixels. This transforms smooth visual gradients into long strings of identical zero or small-integer bytes, dramatically boosting LZ77 string-matching efficiency.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this tool convert Apple iPhone HEIC photos into PNG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apple iPhones capture photos in high-efficiency HEIC container format by default. If your browser does not natively decode HEIC files, first convert your photo to high-resolution JPEG using our companion HEIC to JPG Converter. Once converted to standard JPEG, you can transcode the image into lossless PNG using this tool.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between converting to PNG vs converting to WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PNG is a legacy, universal lossless format supported by every image editor and operating system on earth, ideal for archiving and graphic design workflows. WebP is a modern next-generation hybrid format developed by Google that offers both lossy and lossless modes with alpha transparency. WebP files are approximately 25% to 35% smaller than PNGs at identical visual quality, making WebP superior for website delivery and Core Web Vitals.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert a PNG back into a JPG later if I need a smaller file size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you finish your graphic design work, remove the background, and subsequently need a compact file for an application portal or email attachment, you can convert the PNG back into a lightweight JPG using our companion PNG to JPG Converter or Image Converter, which automatically applies white alpha compositing to flatten transparent areas cleanly.'
      }
    }
  ]
};

export default function JpgToPngPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <JpgToPngClient />
    </>
  );
}
