import TailwindColorPickerClient from './TailwindColorPickerClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Tailwind Color Picker | Browse Official CSS Palette',
  description: 'Browse, select, and instantly copy utility classes and Hex codes from the official Tailwind CSS v3 color palette. An essential tool for utility-first design.',
  path: '/tools/design/tailwind-color-picker',
  keywords: ['tailwind color picker', 'tailwind colors', 'tailwind css palette', 'tailwind hex codes', 'utility classes'],
});

export default function TailwindColorPickerPage() {
  return <TailwindColorPickerClient />;
}
