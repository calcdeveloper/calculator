import ContrastCheckerClient from './ContrastCheckerClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'WCAG Contrast Checker | Color Accessibility Tool',
  description: 'Instantly calculate color contrast ratios to ensure your web design complies with WCAG 2.1 AA and AAA accessibility standards.',
  path: '/tools/design/contrast-checker',
  keywords: ['contrast checker', 'wcag contrast', 'color accessibility', 'a11y tools', 'text contrast calculator'],
});

export default function ContrastCheckerPage() {
  return <ContrastCheckerClient />;
}
