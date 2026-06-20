import ProtectPdfClient from './ProtectPdfClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Password Protect PDF Online Free | Secure PDF Encryption',
  description:
    'Encrypt and password protect your PDF files online for free. Secure, client-side browser tool ensures your files remain completely private.',
  path: '/tools/pdf-tools/password-protect',
  keywords: [
    'password protect PDF', 'encrypt PDF', 'secure PDF', 'lock PDF',
    'add password to PDF', 'PDF encryption online', 'free PDF protector',
    'client-side PDF security', 'AES PDF encryption', 'protect PDF file'
  ],
  openGraph: {
    title: 'Password Protect PDF Online - Free & Secure',
    description:
      'Encrypt and password protect your PDF files online for free. Processed securely in your browser.',
  },
  twitter: {
    title: 'Password Protect PDF Online | Free Encryption',
    description:
      'Encrypt and password protect your PDF files online for free. Processed securely in your browser.',
  },
});

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Password Protector",
  "description": "Free online tool to encrypt and password protect PDF files securely in your web browser.",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Password protect PDF documents",
    "Client-side processing",
    "No file size limits",
    "Instant download",
    "No registration required"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is my document uploaded to a server?", "acceptedAnswer": { "@type": "Answer", "text": "No. The entire process runs strictly locally in your web browser. We never see, upload, or store your unencrypted PDF or your password." } },
    { "@type": "Question", "name": "How strong is the encryption?", "acceptedAnswer": { "@type": "Answer", "text": "The strength of the protection is highly dependent on your chosen password. Always use complex passwords with mixed characters and numbers for the highest security." } },
    { "@type": "Question", "name": "Can I remove the password later?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you know the password, you can use any standard PDF viewer or unlock tool to remove the password in the future. However, if you forget the password, the document cannot be recovered." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://toolswizard.com" },
    { "@type": "ListItem", "position": 2, "name": "PDF Tools", "item": "https://toolswizard.com/tools/pdf-tools" },
    { "@type": "ListItem", "position": 3, "name": "Protect PDF", "item": "https://toolswizard.com/tools/pdf-tools/password-protect" }
  ]
};

export default function ProtectPdfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <ProtectPdfClient />
    </>
  );
}
