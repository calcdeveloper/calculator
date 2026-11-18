export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ProtectPdfClient from './ProtectPdfClient';

export const metadata = createPageMetadata({
  title: 'Password Protect PDF - Encrypt PDF Online Free & Private',
  description:
    'Encrypt and password protect PDF files online for free. Military-grade AES encryption locks documents securely with 100% private in-browser processing.',
  path: '/tools/pdf-tools/password-protect',
  keywords: [
    'password protect pdf',
    'encrypt pdf online',
    'secure pdf document',
    'lock pdf file',
    'aes pdf encryption',
    'client side pdf encryption',
    'free pdf protector',
    'private pdf protection',
    'add password to pdf'
  ],
  openGraph: {
    title: 'Password Protect PDF - Encrypt PDF Online Free & Private',
    description:
      'Encrypt and password protect PDF files online for free. Military-grade AES encryption locks documents securely with 100% private in-browser processing.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Password Protect PDF',
  description:
    'Encrypt and password protect PDF files online for free. Military-grade AES encryption locks documents securely with 100% private in-browser processing.',
  path: '/tools/pdf-tools/password-protect',
  category: 'SecurityApplication',
  featureList: [
    'Standards-compliant ISO 32000 AES encryption',
    '100% private client-side zero-trust browser execution',
    'Zero server uploads or cloud file storage',
    'Encrypted content streams, images, and attachments',
    'Instant local download with zero network latency'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Password Protect PDF', path: '/tools/pdf-tools/password-protect' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is my confidential document or password uploaded to an external server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, absolutely never. ToolsWizard operates under an uncompromising Zero-Trust client-side architecture. The entire encryption pipeline executes locally inside your web browser using JavaScript and WebAssembly cryptographic primitives. Your unencrypted PDF file, its internal text, embedded images, and your secret password never leave your device and are never transmitted over the internet or stored on external cloud servers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How strong is the encryption applied by this tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our tool employs industry-standard Advanced Encryption Standard (AES) cryptography aligned with ISO 32000 specifications. Content streams, vector paths, and embedded images are transformed into high-entropy ciphertext. Breaking modern AES encryption without the password key is computationally impossible using existing supercomputers, providing military-grade protection for personal, financial, and legal files.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I remove or change the password on my PDF later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, provided you know the current password. Once you open an encrypted PDF in any standard PDF editor or reader using the valid password, you can export or re-save an unencrypted version of the document. However, if you forget or lose the password, the document cannot be unlocked or recovered because no cryptographic backdoor exists.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the technical difference between a User Password and an Owner Password?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A User Password (Document Open Password) completely locks the file: no user can open, view, or read the document without entering it. An Owner Password (Permissions Password) controls functional capabilities: it allows users to view the file without a password, but restricts specific actions like printing, copying text, editing content, or extracting pages.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does password-protecting a PDF affect its visual quality or formatting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, visual quality is 100% preserved. Encryption is a mathematical security layer applied to the document internal streams and dictionaries; it does not compress, re-render, or resample underlying photographs, typography, or vector graphics. Once decrypted with the correct password, the document displays with exact pixel-for-pixel fidelity.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I protect PDF files on my mobile phone or tablet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ToolsWizard Password Protect PDF is engineered with a fully responsive layout that supports mobile browsers including Safari on iOS/iPadOS and Chrome on Android. You can select a PDF directly from your mobile device files app, set a secure password, and download the encrypted PDF instantly without installing third-party applications.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes a strong password for PDF document protection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cryptographically strong password should contain at least 12 to 16 characters, combining uppercase letters, lowercase letters, numbers, and special symbols (e.g., #, $, @, !). Avoid dictionary words, birthdates, or predictable sequences. Longer passphrases drastically expand mathematical keyspace entropy, rendering brute-force dictionary attacks completely infeasible.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does password protection encrypt document metadata like Author and Title?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under standard AES protection, document metadata (including title, author, creation date, and XMP metadata packages) is encrypted alongside content streams. This prevents search engines, desktop indexers, and unauthorized observers from gleaning sensitive operational information from document headers without entering the password.'
      }
    },
    {
      '@type': 'Question',
      name: 'What should I do if my recipient cannot open the encrypted PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, ensure the recipient is not accidentally copying trailing whitespace when pasting the password. Second, verify that their PDF viewing software is up to date; modern web browsers (Chrome, Edge, Safari, Firefox) and current Adobe Acrobat versions natively support AES decryption. Legacy third-party readers from over a decade ago may lack modern AES cryptographic libraries.'
      }
    },
    {
      '@type': 'Question',
      name: 'How should I securely send the password to my recipient?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always use an out-of-band multi-channel distribution strategy. Email the encrypted PDF attachment in one communication channel, and transmit the password via a separate, secure secondary medium: an end-to-end encrypted messaging app (Signal or WhatsApp), a direct phone call, or a secure corporate password vault. Never include the password in the same email thread as the attachment.'
      }
    }
  ]
};

export default function ProtectPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <ProtectPdfClient />
    </>
  );
}
