import RandomStringGeneratorClient from './RandomStringGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random String Generator | Cryptographic Nonces & Salts',
  description: 'Generate massive arrays of highly complex, cryptographically secure random strings. Customize character sets, exclude similar characters, and guarantee uniqueness.',
  path: '/tools/generators/random-string-generator',
  keywords: ['random string generator', 'generate random text', 'cryptographic nonce', 'password salt', 'unique string generator'],
});

export default function RandomStringGeneratorPage() {
  return <RandomStringGeneratorClient />;
}
