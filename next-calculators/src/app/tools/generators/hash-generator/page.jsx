export const dynamic = "force-static";

import HashGeneratorClient from './HashGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Cryptographic Hash Generator | SHA-256, SHA-512, MD5',
  description: 'Compute secure cryptographic hashes instantly in your browser. Supports SHA-256, SHA-512, SHA-3, MD5, and RIPEMD-160 algorithms with zero-trust local processing.',
  path: '/tools/generators/hash-generator',
  keywords: ['hash generator', 'sha256 generator', 'md5 hash', 'cryptographic hash', 'sha512', 'hash string'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Cryptographic Hash Generator',
  description: 'Compute secure cryptographic hashes instantly in your browser. Supports SHA-256, SHA-512, SHA-3, MD5, and RIPEMD-160 algorithms with zero-trust local processing.',
  path: '/tools/generators/hash-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Cryptographic Hash Generator', path: '/tools/generators/hash-generator' }
]);

export default function HashGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <HashGeneratorClient />
    </>
  );
}
