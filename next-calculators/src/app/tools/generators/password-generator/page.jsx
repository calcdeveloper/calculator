import PasswordGeneratorClient from './PasswordGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Secure Password Generator | Cryptographically Strong Passwords',
  description: 'Generate ultra-secure, cryptographically random passwords instantly in your browser. Customize length, symbols, and characters with 100% privacy.',
  path: '/tools/generators/password-generator',
  keywords: ['password generator', 'secure password generator', 'random password', 'strong password', 'cryptographic password generator'],
});

export default function PasswordGeneratorPage() {
  return <PasswordGeneratorClient />;
}
