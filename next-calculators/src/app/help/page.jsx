import Help from "../../views/Help";
import { createPageMetadata, createBreadcrumbSchema, createFaqSchema } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "ToolsWizard Help Center - Guides, FAQs & Troubleshooting",
  description:
    "Comprehensive user guides, FAQs, and technical troubleshooting for 500+ free online calculators and developer tools. Learn client-side browser features.",
  path: "/help",
  keywords: [
    "toolswizard help center",
    "calculator user guide",
    "how to use online calculators",
    "financial calculator help",
    "pdf tool guide",
    "developer tools troubleshooting",
    "faq online tools"
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Help Center", path: "/help" }
]);

const helpPageSchema = {
  "@context": "https://schema.org",
  "@type": "HelpPage",
  name: "ToolsWizard Help Center & User Guides",
  description:
    "Comprehensive user guides, FAQs, and technical troubleshooting for 500+ free online calculators and developer tools. Learn client-side browser features.",
  url: "https://toolswizard.in/help",
  mainEntity: {
    "@type": "Organization",
    name: "ToolsWizard",
    url: "https://toolswizard.in",
    email: "support@toolswizard.in"
  }
};

const faqSchema = createFaqSchema([
  {
    question: "Are all 500+ calculators and developer tools on ToolsWizard completely free?",
    answer: "Yes, 100% free forever. Every single computational utility across ToolsWizard is available without subscription paywalls, daily conversion caps, forced account registrations, or watermarks. We believe computational instruments should be universally accessible to students, software engineers, accountants, and businesses worldwide."
  },
  {
    question: "How accurate are ToolsWizard financial and loan amortization calculators?",
    answer: "Our financial engines implement institutional actuarial formulas used by commercial banks and regulatory bodies (including the US Federal Reserve, IRS, and RBI). We maintain 8 decimal places of floating-point precision during intermediate compounding steps, applying Banker's Rounding (Round Half to Even) at schedule boundaries to match commercial banking ledgers to within 0.0001%."
  },
  {
    question: "Is it safe to compress or edit confidential PDF documents on ToolsWizard?",
    answer: "Yes, completely safe. Unlike cloud converter websites, ToolsWizard executes all PDF parsing, compression, splitting, and merging locally in your web browser sandbox via WebAssembly (Wasm). Your documents never leave your device's physical RAM and are never transmitted over the internet or stored on remote servers."
  },
  {
    question: "Can I use ToolsWizard offline when traveling without an internet connection?",
    answer: "Yes. ToolsWizard leverages Service Worker Progressive Web App (PWA) caching. Once you visit a tool while online, its scripts and styles are cached locally. You can disconnect from Wi-Fi or cellular data, and every calculator, text converter, and diff checker will continue executing normally."
  },
  {
    question: "How do construction calculators estimate mortar requirements and wastage?",
    answer: "Our civil engineering estimators (Brick, AAC Block, and Concrete) incorporate standard dry-to-wet volumetric expansion factors (1.33 multiplier for mortar, 1.54 for concrete) to account for void settlement between particles. They also feature customizable job-site wastage inputs (typically 5% to 10%) to reflect brick cutting, transit breakage, and corner alignments."
  },
  {
    question: "Why does the Character Counter count emojis differently than other websites?",
    answer: "Legacy counters count UTF-16 code units, where complex emojis (like family emojis or skin-tone variants) register as 7 to 11 characters. ToolsWizard utilizes the native ECMAScript Intl.Segmenter API with grapheme granularity, enumerating true human-perceived characters with complete typographic fidelity."
  },
  {
    question: "How do I report a calculation discrepancy or request a new calculator?",
    answer: "If you identify an algorithmic variance or wish to submit a new calculation engine specification through our community RFC pipeline, contact our engineering desk at support@toolswizard.in or submit a dispatch through our Engineering Contact Portal. Inquiries are triaged within 24 to 48 hours."
  },
  {
    question: "Can I embed ToolsWizard calculators onto my company's website or blog?",
    answer: "Yes. We support responsive, sandboxed iframe widgets, headless JavaScript micro-libraries, and WebAssembly computational kernels for fintech platforms, real estate brokerages, educational portals, and corporate intranets. Inquire via support@toolswizard.in with subject '[ENTERPRISE INTEGRATION]'."
  },
  {
    question: "Does ToolsWizard store my calculation inputs in browser local storage?",
    answer: "No confidential numbers, tax variables, or uploaded files are saved to permanent local storage. Browser storage APIs (localStorage) are utilized exclusively for non-sensitive presentation preferences (such as light/dark mode and currency symbols). When you close the browser tab, all transient memory heap variables are permanently purged."
  },
  {
    question: "Which web browsers are officially supported by ToolsWizard?",
    answer: "ToolsWizard is tested and validated across all modern web browsers supporting ECMAScript 2020, WebAssembly, and HTML5 Canvas, including Google Chrome (v80+), Mozilla Firefox (v75+), Apple Safari (v14+), Microsoft Edge (v80+), and Brave. Both desktop and mobile viewports are fully supported."
  }
]);

export default function HelpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([helpPageSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <Help />
    </>
  );
}
