export const dynamic = "force-static";

import StrongPasswordGeneratorClient from './StrongPasswordGeneratorClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Strong Passphrase Generator | Diceware Style Security',
  description: 'Generate unbreakable diceware-style passphrases (e.g., correct-horse-battery-staple). Mathematically secure for crypto wallets, yet incredibly easy to memorize.',
  path: '/tools/generators/strong-password-generator',
  keywords: ['strong password generator', 'passphrase generator', 'diceware', 'xkcd password generator', 'memorizable password'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Strong Passphrase Generator',
  description: 'Generate unbreakable diceware-style passphrases (e.g., correct-horse-battery-staple). Mathematically secure for crypto wallets, yet incredibly easy to memorize.',
  path: '/tools/generators/strong-password-generator',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' },
  { name: 'Strong Passphrase Generator', path: '/tools/generators/strong-password-generator' }
]);

export default function StrongPasswordGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <StrongPasswordGeneratorClient />
    </>
  );
}
