import ApiKeyGeneratorClient from './ApiKeyGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'API Key Generator | High-Entropy Secure Tokens',
  description: 'Generate massive, cryptographically secure API keys and access tokens. Customize organizational prefixes, set string lengths up to 128 chars, and export securely.',
  path: '/tools/generators/api-key-generator',
  keywords: ['api key generator', 'access token generator', 'secure api key', 'generate token', 'random api key', 'bearer token'],
});

export default function ApiKeyGeneratorPage() {
  return <ApiKeyGeneratorClient />;
}
