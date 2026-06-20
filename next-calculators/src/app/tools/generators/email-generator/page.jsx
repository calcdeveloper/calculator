import EmailGeneratorClient from './EmailGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random Email Generator | Fake Email Addresses for Testing',
  description: 'Generate massive lists of highly realistic dummy email addresses instantly. Customize domains, username formats, and copy in bulk for database testing or QA.',
  path: '/tools/generators/email-generator',
  keywords: ['email generator', 'random email generator', 'fake emails', 'dummy email address', 'generate test emails'],
});

export default function EmailGeneratorPage() {
  return <EmailGeneratorClient />;
}
