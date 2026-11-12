export const dynamic = "force-static";

import PasswordGeneratorClient from './PasswordGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Secure Password Generator | Cryptographically Strong Passwords',
  description: 'Generate ultra-secure, cryptographically random passwords instantly in your browser. Customize length, symbols, and characters with 100% privacy.',
  path: '/tools/generators/password-generator',
  keywords: ['password generator', 'secure password generator', 'random password', 'strong password', 'cryptographic password generator'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Secure Password Generator',
  description: 'Generate ultra-secure, cryptographically random passwords instantly in your browser. Customize length, symbols, and characters with 100% privacy.',
  path: '/tools/generators/password-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Secure Password Generator', path: '/tools/generators/password-generator' }
]);

export default function PasswordGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <PasswordGeneratorClient />
    </>
  );
}
