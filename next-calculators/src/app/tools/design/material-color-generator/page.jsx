export const dynamic = "force-static";

import MaterialColorGeneratorClient from './MaterialColorGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Material Design Color Palette | Google UI Colors',
  description: 'Browse, select, and instantly copy Hex codes from the official Google Material Design (M2) color palette. Engineered for vibrant, accessible Android and Web interfaces.',
  path: '/tools/design/material-color-generator',
  keywords: ['material color palette', 'google material design', 'material ui colors', 'android colors', 'material hex codes'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Material Design Color Palette',
  description: 'Browse, select, and instantly copy Hex codes from the official Google Material Design (M2) color palette. Engineered for vibrant, accessible Android and Web interfaces.',
  path: '/tools/design/material-color-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Material Design Color Palette', path: '/tools/design/material-color-generator' }
]);

export default function MaterialColorGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <MaterialColorGeneratorClient />
    </>
  );
}
