import MaterialColorGeneratorClient from './MaterialColorGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Material Design Color Palette | Google UI Colors',
  description: 'Browse, select, and instantly copy Hex codes from the official Google Material Design (M2) color palette. Engineered for vibrant, accessible Android and Web interfaces.',
  path: '/tools/design/material-color-generator',
  keywords: ['material color palette', 'google material design', 'material ui colors', 'android colors', 'material hex codes'],
});

export default function MaterialColorGeneratorPage() {
  return <MaterialColorGeneratorClient />;
}
