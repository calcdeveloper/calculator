export const dynamic = "force-static";

import TokenGeneratorClient from './TokenGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'JWT Token Generator | Sign JSON Web Tokens Instantly',
  description: 'Generate and sign secure JSON Web Tokens (JWT) directly in your browser. Customize the JSON payload and symmetrically sign with HMAC SHA256 (HS256) for OAuth testing.',
  path: '/tools/generators/token-generator',
  keywords: ['jwt generator', 'token generator', 'json web token', 'sign jwt', 'oauth token generator', 'hs256 token'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'JWT Token Generator',
  description: 'Generate and sign secure JSON Web Tokens (JWT) directly in your browser. Customize the JSON payload and symmetrically sign with HMAC SHA256 (HS256) for OAuth testing.',
  path: '/tools/generators/token-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'JWT Token Generator', path: '/tools/generators/token-generator' }
]);

export default function TokenGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <TokenGeneratorClient />
    </>
  );
}
