import React from 'react';
import SvgConverterClient from './SvgConverterClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'SVG Converter - Convert SVG to PNG, JPG & PDF Online Free',
  description:
    'Convert SVG vector graphics to high-resolution PNG, JPG, WebP, and PDF online for free. Scale vector files cleanly with zero-trust in-browser processing.',
  path: '/tools/pdf-tools/svg-converter',
  keywords: [
    'svg converter',
    'svg to png',
    'convert svg to jpg',
    'svg to pdf',
    'rasterize svg',
    'svg to webp',
    'scale svg',
    'vector to image',
    'free svg converter'
  ],
  openGraph: {
    title: 'SVG Converter - Convert SVG to PNG, JPG & PDF Online Free',
    description:
      'Convert SVG vector graphics to high-resolution PNG, JPG, WebP, and PDF online for free with complete privacy and zero server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'SVG Converter',
  description:
    'Convert SVG vector graphics to high-resolution PNG, JPG, WebP, and PDF online for free. Scale vector files cleanly with zero-trust in-browser processing.',
  path: '/tools/pdf-tools/svg-converter',
  category: 'WebApplication',
  featureList: [
    'Convert SVG vector files to PNG, JPG, WebP, and PDF formats',
    'Dynamic scale multiplier slider (up to 16x supersampling)',
    'Full alpha transparency preservation for PNG and WebP exports',
    'Automatic white background alpha matte compositing for clean JPG output',
    '100% private client-side processing in local browser memory',
    'Instant local download with zero server uploads or registration required'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'SVG Converter', path: '/tools/pdf-tools/svg-converter' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do social media platforms (Twitter, Instagram, LinkedIn) reject SVG uploads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SVG files are authored in Extensible Markup Language (XML) and can contain executable JavaScript code inside <script> tags or event listeners. If social media platforms allowed direct SVG uploads, malicious actors could embed Cross-Site Scripting (XSS) payloads to hijack user sessions. To maintain platform security, social networks reject vector files, requiring authors to rasterize SVGs into static, safe pixel formats like PNG or JPG.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will converting an SVG vector file into a PNG image make it blurry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Converting an SVG to PNG does not cause blur if rasterized at an appropriate scale. While SVGs are infinitely scalable math, PNGs possess a fixed pixel resolution. If you convert a tiny 24×24 icon and later stretch that PNG on a 4K display, it will blur. Our Scale Multiplier slider allows you to rasterize the original vector math at 2x, 4x, 8x, or 16x scale (up to 8,000 pixels wide), ensuring crystal-clear sharpness for any intended display or print size.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens to the transparent background of my SVG when converting to JPG?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The JPEG/JPG format fundamentally lacks an alpha transparency channel and can only store opaque color pixels. When converting a transparent SVG to JPG, our engine automatically applies Porter-Duff alpha compositing against a solid pure white background matte. Transparent areas become clean white, eliminating the black box artifacting common in legacy converters. If you need transparency preserved, choose PNG or WebP.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my proprietary logo or vector artwork uploaded to any cloud server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ToolsWizard operates on a strict zero-trust client architecture. All XML parsing, sub-pixel rasterization, and image encoding execute entirely inside your local web browser\'s JavaScript and HTML5 Canvas engine. Your vector files never leave your computer, traverse public networks, or touch remote third-party disks, guaranteeing total confidentiality for unreleased brand assets and proprietary schematics.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this tool convert a raster PNG or JPG image back into an SVG vector?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Rasterizing vector math into pixels is a direct computational projection. Converting a pixel mosaic back into mathematical vector paths (known as Vector Tracing or Vectorization) requires complex curve-fitting algorithms and AI edge-detection software like Adobe Illustrator Image Trace or Potrace. Our tool specializes strictly in high-fidelity forward conversion from vector SVG to raster or PDF formats.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why does text inside my converted SVG look distorted or render in a different font?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If an SVG references live text via <text> nodes without embedding the font file, the rendering engine must fall back to local system fonts if the referenced typeface is missing. This causes character metrics and alignments to shift. To guarantee 100% identical typographic rendering, always convert text into vector outlines (Cmd+Shift+O in Figma/Illustrator) before exporting and converting your SVG.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between converting to PNG vs. WebP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both PNG and WebP support full alpha transparency. However, WebP utilizes advanced predictive compression algorithms that produce file sizes 25% to 35% smaller than PNG while maintaining comparable visual fidelity. For modern web design, WebP improves Google Core Web Vitals and page load speeds. For graphic design software, print workflows, and legacy environments, PNG offers broader universal application compatibility.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert SVG vector files into printable vector PDF documents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. When exporting to PDF, our engine translates SVG paths directly into PostScript vector drawing operators. The resulting PDF preserves true mathematical vector curves rather than embedding a flattened bitmap image. This ensures your artwork can be zoomed infinitely in Adobe Acrobat and printed with razor-sharp quality on commercial offset presses.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a maximum file size or resolution limit for SVG conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because all rasterization runs locally on your computer\'s CPU and graphics hardware, ToolsWizard does not impose artificial upload quotas or file size limits. You can convert complex SVGs containing tens of thousands of path elements and export colossal bitmaps up to 8,000×8,000 pixels. Practical limits depend solely on your computer\'s available RAM.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert SVG vector graphics on my mobile phone or tablet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ToolsWizard is engineered to be fully responsive and works smoothly in mobile browsers including Safari for iOS/iPadOS and Chrome for Android. You can select an SVG from your device\'s Files app, iCloud Drive, or Google Drive, adjust scale multipliers, convert to PNG or JPG in seconds, and save the image directly to your mobile photo library.'
      }
    }
  ]
};

export default function SvgConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <SvgConverterClient />
    </>
  );
}
