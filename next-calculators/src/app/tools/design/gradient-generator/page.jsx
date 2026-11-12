import React from 'react';
import GradientGeneratorClient from './GradientGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'CSS Gradient Generator - Linear & Radial Gradients',
  description: 'Create stunning, complex CSS linear and radial gradients with our visual Gradient Generator. Export CSS code and Tailwind classes instantly.',
  path: '/tools/design/gradient-generator',
  keywords: ['gradient generator', 'css gradient', 'linear gradient', 'radial gradient', 'tailwind gradient', 'css background generator'],
  openGraph: {
    title: 'CSS Gradient Generator - Visual Background Tool',
    description: 'Design beautiful linear and radial CSS gradients in real-time with instant CSS and Tailwind export.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'CSS Gradient Generator',
  description: 'Visual CSS gradient editor for linear and radial gradients with instant code export.',
  path: '/tools/design/gradient-generator',
  category: 'DesignApplication',
  featureList: [
    'Linear and radial gradient modes',
    'Custom angle control',
    'Multiple color stops',
    'Instant CSS and Tailwind CSS copy',
    'Client-side real-time rendering'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Gradient Generator', path: '/tools/design/gradient-generator' }
]);

export default function GradientGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <GradientGeneratorClient />
    </>
  );
}
