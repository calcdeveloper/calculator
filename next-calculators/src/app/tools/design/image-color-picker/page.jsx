export const dynamic = "force-static";

import ImageColorPickerClient from './ImageColorPickerClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Image Color Picker - Extract HEX & RGB from Photos Online',
  description: 'Upload any image to extract exact HEX, RGB, and HSL color codes online. Generate dominant color palettes with 100% private client-side browser processing.',
  path: '/tools/design/image-color-picker',
  keywords: ['image color picker', 'color from image', 'extract hex from image', 'photo color palette', 'color dropper online', 'dominant color extractor', 'hex code from photo'],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Image Color Picker',
  description: 'Upload any image to extract exact HEX, RGB, and HSL color codes online. Generate dominant color palettes with 100% private client-side browser processing.',
  path: '/tools/design/image-color-picker',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Image Color Picker', path: '/tools/design/image-color-picker' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does this tool upload my image to a cloud server or external API?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The tool operates under a strict zero-trust client-side architecture. Images are drawn exclusively onto a local HTML5 Canvas in your browser memory and are never transmitted over the internet.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do adjacent pixels in digital photographs have slightly different hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digital photos exhibit sensor noise, demosaicing artifacts, and lossy JPEG compression variations across 8x8 pixel blocks, meaning a visually solid surface actually consists of subtle chromatic micro-variations.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the underlying pixel extraction algorithm work in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engine translates cursor coordinates to canvas bitmap pixels and executes CanvasRenderingContext2D.getImageData(x, y, 1, 1), extracting raw 8-bit RGBA integers and converting them to base-16 hexadecimal notation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this tool process massive high-resolution 4K and 8K images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The engine renders the image on an internal high-resolution canvas while scaling the display responsively via CSS, maintaining exact coordinate fidelity without memory lag.'
      }
    },
    {
      '@type': 'Question',
      name: 'What image formats can I upload to the color picker?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The tool supports all standard raster formats decoded natively by modern web browsers, including JPEG, PNG, WEBP, AVIF, and GIF.'
      }
    },
    {
      '@type': 'Question',
      name: 'What causes the Cross-Origin (CORS) tainted canvas error in web applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Browsers block getImageData() on canvases containing external cross-origin images to protect user privacy. Local file uploads bypass this restriction entirely as same-origin memory objects.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do automated algorithms extract dominant color palettes from images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Algorithms like Median Cut, K-Means clustering, and Octree quantization group millions of image pixels into statistical color clusters in 3D RGB space to extract the most prominent brand swatches.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I verify text readability over an extracted background photo color?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extract the lightest and darkest hex codes from the image area where typography will sit and evaluate them using a WCAG contrast checker to ensure compliance with the 4.5:1 ratio.'
      }
    }
  ]
};

export default function ImageColorPickerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ImageColorPickerClient />
    </>
  );
}
