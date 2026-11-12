export const dynamic = "force-static";

import RandomStringGeneratorClient from './RandomStringGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random String Generator | Cryptographic Nonces & Salts',
  description: 'Generate massive arrays of highly complex, cryptographically secure random strings. Customize character sets, exclude similar characters, and guarantee uniqueness.',
  path: '/tools/generators/random-string-generator',
  keywords: ['random string generator', 'generate random text', 'cryptographic nonce', 'password salt', 'unique string generator'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Random String Generator',
  description: 'Generate massive arrays of highly complex, cryptographically secure random strings. Customize character sets, exclude similar characters, and guarantee uniqueness.',
  path: '/tools/generators/random-string-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Random String Generator', path: '/tools/generators/random-string-generator' }
]);

export default function RandomStringGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <RandomStringGeneratorClient />
    </>
  );
}
