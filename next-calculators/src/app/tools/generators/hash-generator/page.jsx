import HashGeneratorClient from './HashGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Cryptographic Hash Generator | SHA-256, SHA-512, MD5',
  description: 'Compute secure cryptographic hashes instantly in your browser. Supports SHA-256, SHA-512, SHA-3, MD5, and RIPEMD-160 algorithms with zero-trust local processing.',
  path: '/tools/generators/hash-generator',
  keywords: ['hash generator', 'sha256 generator', 'md5 hash', 'cryptographic hash', 'sha512', 'hash string'],
});

export default function HashGeneratorPage() {
  return <HashGeneratorClient />;
}
