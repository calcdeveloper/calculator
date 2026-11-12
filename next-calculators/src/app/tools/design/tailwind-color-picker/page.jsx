export const dynamic = "force-static";

import TailwindColorPickerClient from './TailwindColorPickerClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Tailwind Color Picker | Browse Official CSS Palette',
  description: 'Browse, select, and instantly copy utility classes and Hex codes from the official Tailwind CSS v3 color palette. An essential tool for utility-first design.',
  path: '/tools/design/tailwind-color-picker',
  keywords: ['tailwind color picker', 'tailwind colors', 'tailwind css palette', 'tailwind hex codes', 'utility classes'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Tailwind Color Picker',
  description: 'Browse, select, and instantly copy utility classes and Hex codes from the official Tailwind CSS v3 color palette. An essential tool for utility-first design.',
  path: '/tools/design/tailwind-color-picker',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Tailwind Color Picker', path: '/tools/design/tailwind-color-picker' }
]);

export default function TailwindColorPickerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <TailwindColorPickerClient />
    </>
  );
}
