import HTMLFormatterClient from './HTMLFormatterClient';

export const dynamic = "force-static";

export const metadata = {
  title: 'HTML Formatter - Free Online HTML Beautifier & Prettier | CalcPilot',
  description: 'Format and beautify HTML code instantly with proper indentation and structure. Free, secure, and private browser-side HTML formatter.',
  keywords: [
    'html formatter',
    'html beautifier',
    'html prettifier',
    'html code formatter',
    'format html online',
    'html indentation tool',
    'html code beautifier',
    'free html formatter'
  ],
  alternates: { canonical: 'https://calcpilot.com/tools/developer-tools/html-formatter' },
  openGraph: {
    title: 'HTML Formatter - 100% Private & Free',
    description: 'Format and beautify HTML code locally in your browser. Fast, secure, and free.',
    url: 'https://calcpilot.com/tools/developer-tools/html-formatter',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "HTML Formatter",
      "operatingSystem": "Any",
      "applicationCategory": "DeveloperApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "HowTo",
      "name": "How to Format HTML Code",
      "step": [
        { "@type": "HowToStep", "text": "Paste your HTML code into the input field." },
        { "@type": "HowToStep", "text": "Click the 'Format HTML' button." },
        { "@type": "HowToStep", "text": "Copy the formatted HTML or download it as a file." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is HTML formatting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HTML formatting is the process of organizing HTML code with proper indentation, spacing, and structure to make it readable and maintainable."
          }
        },
        {
          "@type": "Question",
          "name": "Is my HTML code secure when using this formatter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Our HTML formatter processes all code entirely in your browser. Your HTML never leaves your device, ensuring complete privacy and security."
          }
        },
        {
          "@type": "Question",
          "name": "Can I format large HTML files?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our HTML formatter can handle large HTML files efficiently. The processing happens locally, so performance depends on your device's capabilities."
          }
        }
      ]
    }
  ]
};

export default function HTMLFormatterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HTMLFormatterClient />
    </>
  );
}
