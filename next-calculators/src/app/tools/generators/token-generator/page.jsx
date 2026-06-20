import TokenGeneratorClient from './TokenGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'JWT Token Generator | Sign JSON Web Tokens Instantly',
  description: 'Generate and sign secure JSON Web Tokens (JWT) directly in your browser. Customize the JSON payload and symmetrically sign with HMAC SHA256 (HS256) for OAuth testing.',
  path: '/tools/generators/token-generator',
  keywords: ['jwt generator', 'token generator', 'json web token', 'sign jwt', 'oauth token generator', 'hs256 token'],
});

export default function TokenGeneratorPage() {
  return <TokenGeneratorClient />;
}
