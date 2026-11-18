export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import HeicToJpgClient from './HeicToJpgClient';

export const metadata = createPageMetadata({
  title: 'HEIC to JPG Converter - Convert Apple Photos Online Free',
  description:
    'Convert Apple iPhone HEIC and HEIF photos to high-quality JPG images online. Free, fast, and 100% private in-browser conversion with zero server uploads.',
  path: '/tools/pdf-tools/heic-to-jpg',
  keywords: [
    'heic to jpg',
    'convert heic to jpg',
    'iphone photo converter',
    'apple heic format',
    'heif to jpeg',
    'free online heic converter',
    'private heic to jpg',
    'heic to jpg windows',
    'batch heic converter'
  ],
  openGraph: {
    title: 'HEIC to JPG Converter - Convert Apple Photos Online Free',
    description:
      'Convert Apple iPhone HEIC and HEIF photos to high-quality JPG images online. Free, fast, and 100% private in-browser conversion with zero server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'HEIC to JPG Converter',
  description:
    'Convert Apple iPhone HEIC and HEIF photos to high-quality JPG images online. Free, fast, and 100% private in-browser conversion with zero server uploads.',
  path: '/tools/pdf-tools/heic-to-jpg',
  category: 'WebApplication',
  featureList: [
    'Convert Apple HEIC and HEIF photos to JPG',
    '100% client-side zero-trust privacy',
    'Adjustable output JPG compression quality',
    'Preserves EXIF camera telemetry and orientation',
    'Instant local download with zero server uploads',
    'Works on Windows PCs without HEVC extensions'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'HEIC to JPG Converter', path: '/tools/pdf-tools/heic-to-jpg' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do Apple iPhones default to saving photos in HEIC format instead of standard JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apple adopted the High-Efficiency Image Container (HEIC) starting in iOS 11 to solve the storage crisis created by high-resolution 48-megapixel camera sensors and 4K video. Powered by H.265/HEVC intra-frame compression, HEIC files deliver the exact same visual quality as legacy JPEGs while consuming approximately 50% less physical flash memory, doubling the photo storage capacity of your iPhone.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does converting HEIC to JPG degrade photographic image quality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because both HEIC and JPG utilize lossy compression mathematics, transcoding involves decompressing the HEVC bitstream to raw pixels and re-quantizing them through discrete cosine transforms. However, when using ToolsWizard at our default quality setting of 90% or higher, the mathematical variance is completely imperceptible to the human eye, preserving crisp sharpness and authentic color fidelity.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is the resulting JPG file size often larger than the original HEIC image?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This size disparity directly reflects the generational superiority of HEVC compression over legacy 1992 JPEG algorithms. HEVC utilizes recursive quadtree coding units up to 64x64 pixels and 35 directional prediction modes, whereas JPEG is constrained to rigid 8x8 macroblocks. To represent the same high-resolution textural detail without blocking artifacts, JPEG requires approximately 1.5 to 2 times more bytes.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my personal privacy protected when converting sensitive iPhone photos on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, unconditionally. ToolsWizard operates on a strict Zero-Trust client-side architecture. The entire transcoding pipeline executes within your local browser sandbox utilizing WebAssembly and your computer CPU. Your photos, private memories, identity documents, and personal metadata are never uploaded to any remote server or stored in external cloud databases.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I configure my iPhone to capture photos in JPG format by default?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On your iPhone, open the Settings app, scroll down and tap Camera, select Formats, and change the active selection from "High Efficiency" to "Most Compatible." This instructs iOS to shoot and store new photos as standard JPGs. However, note that 4K 60fps video and cinematic modes require the High Efficiency setting due to hardware data bandwidth limits.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this converter open HEIC files on Windows PCs lacking the HEVC codec?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! This is one of the primary benefits of our platform. Standard Windows operating systems cannot display HEIC thumbnails without paid Microsoft Store extensions. Because ToolsWizard packages its own WebAssembly-compiled H.265 decoding kernel inside modern web browsers (Chrome, Edge, Firefox), you can drag unrecognized HEIC files directly into our converter to view and convert them instantly.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens to Apple Live Photos, audio, and motion during JPG conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Apple Live Photo consists of a full-resolution HEIC still photo paired with an auxiliary 3-second QuickTime video (.mov) file. When uploaded to our converter, our engine parses the ISOBMFF primary item box (pitm) and extracts the ultra-high-resolution master still photograph, converting it into a pristine static JPG while safely discarding the secondary video track.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are EXIF camera metadata, capture timestamps, and GPS coordinates retained?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our transcoding pipeline extracts the EXIF item metadata chunk from the HEIF container and re-encodes the camera metadata, exposure settings, focal length, capture timestamp, and GPS coordinates into compliant APP1 application markers in the resulting JPEG container, ensuring forensic and legal authenticity.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the quality slider affect mathematical compression and file size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The quality slider directly scales the discrete cosine transform quantization matrix Q(u,v). Setting the slider to 90% or 100% preserves subtle textural details and high-frequency chrominance data with minimal quantization error. Lowering the slider to 50% or 70% aggressively zeros out high-frequency coefficients, resulting in smaller files ideal for strict web portal limits.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the technical difference between the .heic and .heif file extensions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HEIF (High Efficiency Image File Format) is the overarching container standard defined by MPEG. HEIC is a specific profile of HEIF that designates that the image data inside is encoded using the High Efficiency Video Coding (HEVC / H.265) compression codec. Apple uses the .heic extension to explicitly signal HEVC intra-frame encoding.'
      }
    }
  ]
};

export default function HeicToJpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <HeicToJpgClient />
    </>
  );
}
