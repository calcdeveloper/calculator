export const dynamic = "force-static";

import ApiKeyGeneratorClient from './ApiKeyGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'API Key Generator | High-Entropy Secure Tokens',
  description: 'Generate massive, cryptographically secure API keys and access tokens. Customize organizational prefixes, set string lengths up to 128 chars, and export securely.',
  path: '/tools/generators/api-key-generator',
  keywords: ['api key generator', 'access token generator', 'secure api key', 'generate token', 'random api key', 'bearer token'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'API Key Generator',
  description: 'Generate massive, cryptographically secure API keys and access tokens. Customize organizational prefixes, set string lengths up to 128 chars, and export securely.',
  path: '/tools/generators/api-key-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'API Key Generator', path: '/tools/generators/api-key-generator' }
]);

export default function ApiKeyGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ApiKeyGeneratorClient />
    </>
  );
}
