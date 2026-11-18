export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ImageResizerClient from './ImageResizerClient';

export const metadata = createPageMetadata({
  title: 'Image Resizer - Resize Images Online to Exact Pixels',
  description:
    'Resize images online to exact pixel dimensions for free. Adjust photo width, height, and aspect ratios for exams, social media, with zero-trust privacy.',
  path: '/tools/pdf-tools/image-resizer',
  keywords: [
    'image resizer',
    'resize image online',
    'resize photo in pixels',
    'resize image for exam',
    'ssc photo resizer',
    'upsc image resizer',
    'change image dimensions',
    'aspect ratio resizer',
    'client side image resizer',
    'private photo resizer'
  ],
  openGraph: {
    title: 'Image Resizer - Resize Images Online to Exact Pixels',
    description:
      'Resize images online to exact pixel dimensions for free. Adjust photo width, height, and aspect ratios for exams, social media, with zero-trust privacy.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Image Resizer',
  description:
    'Resize images online to exact pixel dimensions for free. Adjust photo width, height, and aspect ratios for exams, social media, with zero-trust privacy.',
  path: '/tools/pdf-tools/image-resizer',
  category: 'WebApplication',
  featureList: [
    'Resize images to exact pixel width and height',
    'Lock or unlock aspect ratio for proportional or forced sizing',
    'High-fidelity bicubic canvas interpolation',
    '100% private client-side zero-trust browser processing',
    'Instant local download with zero server uploads',
    'Supports JPEG, PNG, and WebP image formats'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Image Resizer', path: '/tools/pdf-tools/image-resizer' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I resize an image to exact pixel dimensions (width and height in px)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upload your image into ToolsWizard Image Resizer. The interface will immediately detect and display the original pixel dimensions. Enter your required target width and height values in pixels into the input boxes. If you need exact independent values (such as 200x230 px), click the lock icon to unlock the aspect ratio. Click Resize Image to render the new bitmap instantly, and click Download to save the file.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between image resizing and image cropping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Image resizing scales the entire visual scene up or down using mathematical interpolation kernels (such as bicubic or bilinear resampling), retaining all content within the frame. Image cropping, in contrast, physically cuts away outer pixel rows and columns, altering the visual field of view (FOV) and isolating a specific rectangular region of interest while preserving native pixel resolution.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does resizing an image reduce its file size in kilobytes (KB)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, dramatically when downsampling. Reducing an image from 4000x3000 pixels (12 million pixels) down to 400x300 pixels (120,000 pixels) eliminates 99% of the pixel samples. Because the encoder processes far fewer pixels, the resulting file size typically drops from multiple megabytes down to tens of kilobytes. For exact KB limits, pair this with our Image Compressor.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does the Aspect Ratio Lock icon do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the lock icon is engaged (locked), the width and height maintain a strictly proportional mathematical relationship. Changing the width automatically recalculates the height, preventing the image from appearing stretched, squished, or warped. When unlocked, you can set width and height independently to satisfy strict administrative application portals.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to resize confidential documents and identity cards on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100% private and secure. ToolsWizard operates under an uncompromising Zero-Trust architecture. All image loading, canvas interpolation, and file generation execute entirely inside your local web browser memory using HTML5 Canvas APIs. Your photographs, signatures, and identity cards are never uploaded to remote servers or stored in cloud databases.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do government and examination portals enforce strict pixel dimensions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Government portals (such as SSC, UPSC, and IBPS) utilize automated server pipelines that insert candidate photographs and signatures directly into fixed-coordinate bounding boxes on admit cards, attendance sheets, and certificates. Submitting an image with mismatched dimensions would break printable PDF layouts or distort facial biometric verification markers, prompting automated rejection.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I convert physical centimeters (cm) to digital pixels (px)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert centimeters to pixels, use the formula: Pixels = (Centimeters / 2.54) * DPI. For standard 3.5 cm by 4.5 cm passport photos: at 200 DPI (standard scanner resolution), the dimensions are approximately 276 by 354 pixels; at 300 DPI (high-quality print resolution), the dimensions are approximately 413 by 531 pixels. Check your portal notification for the specific pixel target required.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I resize an image on my mobile phone without installing an application?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ToolsWizard Image Resizer is engineered with a responsive touch-friendly layout supporting mobile Chrome, Safari, and Firefox across Android and iOS devices. You can capture a picture with your phone camera, upload it directly from your camera roll, type your desired pixel dimensions, and download the resized file instantly without installing third-party apps.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this tool resize Apple iPhone HEIC photographs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apple iPhones capture photos in high-efficiency HEIC format by default. If your browser does not natively decode HEIC files, first convert your photo into standard high-resolution JPEG using our companion HEIC to JPG Converter. Once converted, you can resize the JPEG image to your exact target pixel dimensions smoothly.'
      }
    },
    {
      '@type': 'Question',
      name: 'What image file formats are supported for resizing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ToolsWizard Image Resizer natively supports standard web raster formats including JPEG (.jpg, .jpeg), Portable Network Graphics (.png), and Google WebP (.webp). Transparency in PNG and WebP files is preserved losslessly during resampling. For format transcoding, visit our Image Converter or JPG to PNG Converter.'
      }
    }
  ]
};

export default function ImageResizerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ImageResizerClient />
    </>
  );
}
