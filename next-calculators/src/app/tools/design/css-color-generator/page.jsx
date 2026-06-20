import CssColorGeneratorClient from './CssColorGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'CSS Custom Property Generator | Build Color Variables',
  description: 'Generate complete, production-ready CSS Custom Properties (:root variables) and color ramps from a single base color. Perfect for scalable frontend architecture.',
  path: '/tools/design/css-color-generator',
  keywords: ['css color generator', 'css custom properties', 'css variables', 'color ramp generator', 'tailwind color generator'],
});

export default function CssColorGeneratorPage() {
  return <CssColorGeneratorClient />;
}
