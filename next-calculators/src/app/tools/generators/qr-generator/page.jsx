import QRGeneratorClient from './QRGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free QR Code Generator Online | Create Custom QR Codes Instantly',
  description:
    'Generate custom QR codes instantly for URLs, text, WiFi, and more. Free online QR code generator with customization options. No registration required.',
  path: '/tools/generators/qr-generator',
  keywords: [
    'QR code generator',
    'generate QR code online',
    'free QR code generator',
    'QR code maker',
    'custom QR code',
    'QR code for URL',
    'WiFi QR code generator',
    'QR code with logo',
    'QR code creator',
    'online QR tool',
    'QR code generator free',
    'QR code for business',
    'QR code scanner',
    'QR code download',
  ],
  openGraph: {
    title: 'Free QR Code Generator Online - Create Custom QR Codes',
    description:
      'Generate custom QR codes instantly for URLs, text, WiFi, and more. Perfect for business cards, marketing, and sharing.',
  },
  twitter: {
    title: 'Free QR Code Generator Online',
    description:
      'Generate custom QR codes instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of QR codes can I generate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can generate QR codes for URLs, plain text, WiFi networks, email addresses, phone numbers, and SMS messages. Each type is optimized for its specific use case."
      }
    },
    {
      "@type": "Question",
      "name": "Can I customize the QR code colors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can customize both the foreground and background colors of your QR code. However, ensure there's enough contrast between colors for reliable scanning."
      }
    },
    {
      "@type": "Question",
      "name": "Are the generated QR codes free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all QR codes generated on ToolsWizard are completely free to use for both personal and commercial purposes. No watermarks or restrictions apply."
      }
    },
    {
      "@type": "Question",
      "name": "What size should I download the QR code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For print materials, download at least 300x300 pixels. For digital use, 200x200 pixels is sufficient. Larger sizes provide better quality when printed."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "QR Code Generator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online QR code generator for creating custom QR codes for URLs, text, WiFi, and more with customization options.",
  "featureList": [
    "Generate QR codes for URLs",
    "Text to QR code",
    "WiFi QR code generator",
    "Custom colors",
    "Multiple download formats",
    "No registration required",
    "Instant generation"
  ]
};

export default function QRGenerator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      
      <QRGeneratorClient />
    </>
  );
}
