import StrongPasswordGeneratorClient from './StrongPasswordGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Strong Passphrase Generator | Diceware Style Security',
  description: 'Generate unbreakable diceware-style passphrases (e.g., correct-horse-battery-staple). Mathematically secure for crypto wallets, yet incredibly easy to memorize.',
  path: '/tools/generators/strong-password-generator',
  keywords: ['strong password generator', 'passphrase generator', 'diceware', 'xkcd password generator', 'memorizable password'],
});

export default function StrongPasswordGeneratorPage() {
  return <StrongPasswordGeneratorClient />;
}
