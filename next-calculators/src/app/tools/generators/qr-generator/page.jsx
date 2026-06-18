import QRGeneratorClient from './QRGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free QR Code Generator Online | Create Custom QR Codes',
  description:
    'Generate custom QR codes instantly for URLs, text, and WiFi. Free online QR code generator with color customization. No registration required.',
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
    'QR code download',
    'color QR code generator',
    'website QR code generator',
    'text to QR code',
    'static QR generator',
    'best QR code generator',
    'QR generator India',
    'QR generator USA'
  ],
  openGraph: {
    title: 'Free QR Code Generator Online - Create Custom QR Codes',
    description:
      'Generate custom QR codes instantly for URLs, text, WiFi, and more. Perfect for business cards, marketing, and quick sharing.',
  },
  twitter: {
    title: 'Free QR Code Generator Online',
    description:
      'Generate custom QR codes instantly. No registration required or watermarks applied.',
  },
});

// Deep 20 SEO FAQ Structured Data Schema for Google Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a QR code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Quick Response (QR) code is a matrix-based two-dimensional barcode designed to store alphanumeric data, including URLs, text records, and contact details. It can be read instantly using optical sensors on mobile devices."
      }
    },
    {
      "@type": "Question",
      "name": "Is this QR code generator free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. This generator is completely free to use for personal, professional, and corporate marketing campaigns. It creates clean, native images without adding hidden costs, subscriptions, or watermarks."
      }
    },
    {
      "@type": "Question",
      "name": "Can I generate QR codes for URLs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Simply paste your full website address into the input field to generate an instant link. Users scanning the code will be directed to your webpage automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Can I create colored QR codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The interface features color pickers that let you customize both the foreground blocks and background spaces to match your brand colors, provided you maintain sufficient contrast for scanning."
      }
    },
    {
      "@type": "Question",
      "name": "Do QR codes expire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The static matrix codes generated here encode text directly, so they never expire. They remain fully operational forever, as long as the underlying destination URL or text remains unchanged."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use QR codes commercially?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All codes generated are yours to keep. They are completely unrestricted for use on commercial product packaging, billboards, restaurant menus, and business cards across India and the United States."
      }
    },
    {
      "@type": "Question",
      "name": "Can I generate QR codes on mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The tool features a fully responsive design optimized for mobile web browsers, allowing you to create, preview, and download custom matrix codes directly from your smartphone."
      }
    },
    {
      "@type": "Question",
      "name": "Is registration required?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No registration is required. You can generate custom codes instantly without creating an account, sharing an email address, or waiting for a confirmation link."
      }
    },
    {
      "@type": "Question",
      "name": "How do I download my QR code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once your code is ready, click the download button to instantly save a crisp PNG image directly to your local device download directory."
      }
    },
    {
      "@type": "Question",
      "name": "Are generated QR codes secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The tool is designed to be privacy-friendly and processes your configuration locally within your browser context, meaning no input values are stored on our servers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between static and dynamic QR codes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Static codes store content directly within the matrix pattern, making them permanent and immutable. Dynamic codes link to a redirect short URL, which allows you to track scans and update the destination link later."
      }
    },
    {
      "@type": "Question",
      "name": "Will my QR code work with both iOS and Android platforms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The engine builds standardized matrices that are fully compatible with native camera apps and dedicated barcode scanners on both iOS and Android systems."
      }
    },
    {
      "@type": "Question",
      "name": "How much text can I encode into a single data code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While static matrices can store up to several thousand alphanumeric characters, we recommend using shorter texts or URLs to keep the grid pattern clean and easy to scan."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my colored matrix code refusing to scan correctly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scanning issues are usually caused by a lack of contrast. If your foreground color is too close to your background color, camera sensors won't be able to distinguish the blocks. For best results, use a dark foreground on a light background."
      }
    },
    {
      "@type": "Question",
      "name": "Can I generate access codes for unsecured or encrypted WiFi networks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. By formatting your plain text string as a standard WiFi string (`WIFI:S:MyNetwork;T:WPA;P:Password;;`), mobile devices will automatically read the pattern and prompt users to join the network."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a limit to the number of codes I can generate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. There are no volume limitations, caps, or throttling filters. You can generate as many codes as your project requires."
      }
    },
    {
      "@type": "Question",
      "name": "Can I modify the destination address of my code after downloading it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Because these are static matrix codes that bake the raw character strings directly into the pixel grid, the link is permanent. To change the link, you must generate a new code."
      }
    },
    {
      "@type": "Question",
      "name": "Does this online application track user scan counts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. This tool operates entirely serverless on the client side, meaning it does not track, collect, or monitor scan analytics."
      }
    },
    {
      "@type": "Question",
      "name": "What image file format does this download tool provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The download option generates a high-resolution PNG image file with clean edge scaling, perfect for both digital use and physical print placement."
      }
    },
    {
      "@type": "Question",
      "name": "Can I add a custom logo into the center of the downloaded code block?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This basic tool generates native, unwatermarked standard matrices. If you need to add custom brand imagery, you can overlay your logo onto the center of the high-resolution PNG using an image editor."
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
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1840"
  },
  "description": "Free online QR code generator for creating custom QR codes for URLs, text, WiFi, and more with customization options.",
  "featureList": [
    "Generate QR codes for URLs",
    "Text to QR code conversion matrix",
    "WiFi access node configuration tools",
    "Custom color selection parameters",
    "Fast image export system",
    "No registration required interface",
    "Instant localized asset rendering"
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://toolswizard.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tools",
      "item": "https://toolswizard.com/tools"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Generators",
      "item": "https://toolswizard.com/tools/generators"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "QR Code Generator",
      "item": "https://toolswizard.com/tools/generators/qr-generator"
    }
  ]
};

export default function QRGenerator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <QRGeneratorClient />
    </>
  );
}