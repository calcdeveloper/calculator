export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ImageCropperClient from './ImageCropperClient';

export const metadata = createPageMetadata({
  title: 'Image Cropper - Crop Photos & Signatures Online Free',
  description:
    'Crop photos, signatures, and documents online for free. Precision frame adjustment with aspect ratios for exams, social media, and zero-trust privacy.',
  path: '/tools/pdf-tools/image-cropper',
  keywords: [
    'image cropper',
    'crop photo online',
    'crop signature online',
    'crop image for upsc',
    'ssc photo cropper',
    'passport photo cropper',
    'crop picture free',
    'aspect ratio cropper',
    'client side image cropper',
    'private photo cropper'
  ],
  openGraph: {
    title: 'Image Cropper - Crop Photos & Signatures Online Free',
    description:
      'Crop photos, signatures, and documents online for free. Precision frame adjustment with aspect ratios for exams, social media, and zero-trust privacy.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Image Cropper',
  description:
    'Crop photos, signatures, and documents online for free. Precision frame adjustment with aspect ratios for exams, social media, and zero-trust privacy.',
  path: '/tools/pdf-tools/image-cropper',
  category: 'WebApplication',
  featureList: [
    'Interactive drag-and-drop bounding box cropping',
    'Sub-pixel coordinate transformation on HTML5 Canvas',
    '100% private client-side zero-trust browser processing',
    'Preserves original pixel quality and alpha transparency',
    'Optimized for passport photos, signatures, and social media',
    'Instant local downloads with zero cloud server uploads'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Image Cropper', path: '/tools/pdf-tools/image-cropper' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does cropping an image reduce its file size in kilobytes (KB)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cropping physically deletes outer pixel rows and columns from the raster data matrix. For example, cropping a 4000x3000 pixel image (12 million pixels) down to an 800x600 pixel rectangle (480,000 pixels) removes 96% of the raw visual data arrays. When the resulting bitmap is serialized, the encoder processes vastly fewer pixels, resulting in dramatic byte-size reductions often exceeding 80% to 90% without degrading visual sharpness inside the crop frame.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the exact technical difference between cropping and resizing an image?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cropping permanently excises unwanted peripheral areas of an image, altering the visual field of view (FOV) and changing the aspect ratio while leaving the native pixels inside the selection box 100% unaltered. Resizing, on the other hand, retains the entire scene but applies mathematical interpolation (bilinear or bicubic resampling) to compress or expand all existing pixels into a different dimensional grid.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to crop confidential documents like Aadhaar, PAN, and Passports on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100% safe. ToolsWizard operates under an uncompromising Zero-Trust architecture. All image rasterization, vector coordinate mapping, and file downloads occur completely inside your local browser memory using HTML5 Canvas primitives. Your confidential photos and legal identity documents are never uploaded to remote cloud servers, never cached in external storage, and never logged in databases.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do government and examination portals reject uncropped passport photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Government portals (such as UPSC, SSC, NTA, and visa systems) use automated facial recognition and image verification algorithms. If you upload a full-body photograph or a scanned picture with thick white margins, the face detection bounding box will fail to detect key biometric landmarks (pupillary distance, chin contour, crown height) within the required 70% to 80% frame area, triggering instant rejection.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does cropping an image cause pixelation or degrade photo quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our in-browser cropping engine extracts the exact native pixels from your source file without applying any lossy downsampling or artificial sharpening filters. The pixels within your crop box retain 100% of their original sensor resolution and color accuracy. Blur only occurs if you crop a microscopic region from a low-resolution file and view it at extreme magnification.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the standard aspect ratio for an official passport-size photo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard passport photo specifications vary by country: The United States, India (Passport Seva), and visa lotteries utilize a strictly square 1:1 aspect ratio (2x2 inches or 51x51 mm, typically 600x600 px). The United Kingdom, European Union (Schengen), and Indian exam boards (UPSC, SSC) utilize a 3.5x4.5 cm standard, corresponding to an aspect ratio of approximately 7:9 (or 0.777 decimal).'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use this online image cropper on mobile devices without installing an app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The interface is engineered with a responsive touch gesture layer supporting Android Chrome, iOS Mobile Safari, and iPadOS. You can capture a photograph with your phone camera, open ToolsWizard in your mobile browser, drag your finger across the screen to draw a precision crop box, and save the cropped image directly to your device camera roll with zero app installations.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do I crop a handwritten signature cleanly without including shadows or paper edges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sign your name on clean, bright white unlined paper using dark ink. Photograph the signature in even, diffused daylight without direct top lighting that casts phone shadows. Upload the photo and draw a tight bounding box closely around the text margins, leaving roughly 5 to 10 pixels of white border around the outermost strokes. This eliminates desk surfaces, paper borders, and edge shadows cleanly.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I crop Apple iPhone HEIC photos directly with this tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apple iPhones capture photos in the high-efficiency HEIC (.heic) container by default. If your browser does not natively decode HEIC containers, first convert your photo into standard high-resolution JPEG using our companion HEIC to JPG Converter. Once converted, you can crop and re-frame the resulting JPG seamlessly.'
      }
    },
    {
      '@type': 'Question',
      name: 'What image file formats are supported for cropping?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ToolsWizard Image Cropper natively supports all web-standard raster formats including JPEG (.jpg, .jpeg), Portable Network Graphics (.png), and Google WebP (.webp). Transparent areas in PNG and WebP files are preserved losslessly. For format transcoding, visit our companion Image Converter or JPG to PNG Converter.'
      }
    }
  ]
};

export default function ImageCropperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ImageCropperClient />
    </>
  );
}
