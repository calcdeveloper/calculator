import NameGeneratorClient from './NameGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random Name Generator | First, Last, and Middle Names',
  description: 'Generate thousands of realistic, culturally accurate human names instantly. Customize by gender, add prefixes and suffixes, and copy in bulk for database testing or character design.',
  path: '/tools/generators/name-generator',
  keywords: ['name generator', 'random name generator', 'fake names', 'character name generator', 'generate names'],
});

export default function NameGeneratorPage() {
  return <NameGeneratorClient />;
}
