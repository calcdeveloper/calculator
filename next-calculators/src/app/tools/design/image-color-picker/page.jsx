import ImageColorPickerClient from './ImageColorPickerClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Image Color Picker | Extract HEX from Photos',
  description: 'Upload any image and instantly extract exact Hex color codes by hovering and clicking. 100% private, client-side browser processing.',
  path: '/tools/design/image-color-picker',
  keywords: ['image color picker', 'color from image', 'extract hex from image', 'photo color palette', 'color dropper online'],
});

export default function ImageColorPickerPage() {
  return <ImageColorPickerClient />;
}
