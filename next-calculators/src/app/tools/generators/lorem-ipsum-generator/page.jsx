export const dynamic = "force-static";

import LoremIpsumGeneratorClient from './LoremIpsumGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Lorem Ipsum Generator | Free Dummy Text for UI Mockups',
  description: 'Generate customizable Lorem Ipsum placeholder text instantly. Choose paragraphs, sentences, or words. Perfect for web designers, developers, and typography mockups.',
  path: '/tools/generators/lorem-ipsum-generator',
  keywords: ['lorem ipsum generator', 'dummy text', 'placeholder text', 'typography mockup', 'design text generator'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Lorem Ipsum Generator',
  description: 'Generate customizable Lorem Ipsum placeholder text instantly. Choose paragraphs, sentences, or words. Perfect for web designers, developers, and typography mockups.',
  path: '/tools/generators/lorem-ipsum-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Lorem Ipsum Generator', path: '/tools/generators/lorem-ipsum-generator' }
]);

export default function LoremIpsumGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <LoremIpsumGeneratorClient />
    </>
  );
}
