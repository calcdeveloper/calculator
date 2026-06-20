import React from 'react';
import GradientGeneratorClient from './GradientGeneratorClient';
import GradientGeneratorSeo from '@/components/tools/GradientGeneratorSeo';

export const metadata = {
  title: 'CSS Gradient Generator | Beautiful Linear & Radial Gradients',
  description: 'Create stunning, complex CSS linear and radial gradients with our visual Gradient Generator. Export perfect CSS code and Tailwind classes instantly.',
  alternates: {
    canonical: 'https://toolswizard.in/tools/design/gradient-generator',
  },
};

export default function GradientGeneratorPage() {
  return (
    <>
      <GradientGeneratorClient />
      <GradientGeneratorSeo />
    </>
  );
}
