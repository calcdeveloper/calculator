import LoremIpsumGeneratorClient from './LoremIpsumGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Lorem Ipsum Generator | Free Dummy Text for UI Mockups',
  description: 'Generate customizable Lorem Ipsum placeholder text instantly. Choose paragraphs, sentences, or words. Perfect for web designers, developers, and typography mockups.',
  path: '/tools/generators/lorem-ipsum-generator',
  keywords: ['lorem ipsum generator', 'dummy text', 'placeholder text', 'typography mockup', 'design text generator'],
});

export default function LoremIpsumGeneratorPage() {
  return <LoremIpsumGeneratorClient />;
}
