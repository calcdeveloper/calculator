export const dynamic = "force-static";

import ImageColorPickerClient from './ImageColorPickerClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Image Color Picker | Extract HEX from Photos',
  description: 'Upload any image and instantly extract exact Hex color codes by hovering and clicking. 100% private, client-side browser processing.',
  path: '/tools/design/image-color-picker',
  keywords: ['image color picker', 'color from image', 'extract hex from image', 'photo color palette', 'color dropper online'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Image Color Picker',
  description: 'Upload any image and instantly extract exact Hex color codes by hovering and clicking. 100% private, client-side browser processing.',
  path: '/tools/design/image-color-picker',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Design Tools', path: '/tools/design' },
  { name: 'Image Color Picker', path: '/tools/design/image-color-picker' }
]);

export default function ImageColorPickerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ImageColorPickerClient />
    </>
  );
}
