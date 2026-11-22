import Privacy from "../../views/Privacy";
import { createPageMetadata, createBreadcrumbSchema, createFaqSchema } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Privacy Policy - Zero-Data Architecture & Telemetry Charter",
  description: "ToolsWizard privacy policy: learn how our zero-data client-side architecture protects your documents, calculations, and files with zero cloud telemetry.",
  path: "/privacy",
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", item: "/" },
  { name: "Privacy Policy", item: "/privacy" },
]);

const faqSchema = createFaqSchema([
  {
    question: "Does ToolsWizard send my calculation inputs or uploaded files to a remote server?",
    answer: "No. ToolsWizard operates on a pure zero-trust, client-side execution model. All calculations, text transformations, PDF compressions, image transcoding, and cryptographic hashing routines execute exclusively within your local web browser's random access memory (RAM). Your files and numbers never leave your device and are never transmitted to our servers."
  },
  {
    question: "How can I independently verify that no data is leaving my computer?",
    answer: "You can audit network traffic in real time using native browser tools. Press F12 (or Cmd+Option+I on Mac) to open Developer Tools, select the Network panel, and filter by Fetch/XHR. Perform any calculation or file conversion. You will verify exactly 0 outbound HTTP POST or payload requests containing your data."
  },
  {
    question: "Does ToolsWizard store my generated passwords or cryptographic keys?",
    answer: "No. Our Strong Password Generator and Bcrypt/SHA-256 hash engines utilize the native Web Crypto API (crypto.getRandomValues()) directly in your browser. Generated passwords and cryptographic hashes exist only in ephemeral browser memory. When you refresh or close the tab, all generated secrets are permanently wiped."
  },
  {
    question: "Is ToolsWizard compliant with the European Union GDPR?",
    answer: "Yes, fully compliant. ToolsWizard fulfills GDPR Article 25 (Data Protection by Design and by Default) and Article 5 (Data Minimization). Because we collect zero personally identifiable information (PII) on our servers during tool usage, European users face zero risk of unauthorized cross-border data transfers."
  },
  {
    question: "Can healthcare providers use ToolsWizard calculators without violating HIPAA?",
    answer: "Yes. Under HIPAA 45 CFR § 164.514, electronic Protected Health Information (ePHI) must not be transmitted to non-compliant cloud repositories. Because our clinical calculators execute entirely inside the healthcare provider's local web browser without transmitting patient metrics over the internet, ToolsWizard establishes a secure, compliant local computing sandbox."
  },
  {
    question: "What information is stored in my browser's local storage?",
    answer: "We store only non-sensitive, user-consented presentation preferences in your browser's localStorage, such as your light/dark theme preference and default currency symbol. No calculation inputs, personal numbers, or uploaded files are ever saved to local storage. You can clear preferences at any time via localStorage.clear()."
  },
  {
    question: "How do third-party advertising cookies work on ToolsWizard?",
    answer: "Third-party advertising partners like Google AdSense may use cookies (such as the DART cookie) to serve relevant advertisements based on prior web visits. You can opt out of personalized advertising by visiting Google's Ad Settings. Advertising scripts run in isolated iframes and cannot read or interact with your calculations or document contents."
  },
  {
    question: "Does ToolsWizard sell user data to commercial data brokers?",
    answer: "Never. We have never sold, rented, leased, or monetized personal information, and our architectural model prevents such commercialization by design. We do not maintain user databases, user profiles, or tracking dossiers."
  },
  {
    question: "What happens if I email the ToolsWizard support desk directly?",
    answer: "If you email support@toolswizard.in or submit a form dispatch, we receive your email address, name, and message content. This information is utilized strictly to investigate and resolve your technical inquiry or bug report. Correspondence is never shared with third parties and is permanently purged following resolution."
  },
  {
    question: "How do I contact the Data Protection Officer (DPO) for formal inquiries?",
    answer: "For formal regulatory inquiries, legal correspondence, or statutory rights requests under GDPR or CCPA, contact our Data Protection Officer directly at privacy@toolswizard.in or through our central support desk at support@toolswizard.in with 'ATTN: Data Protection Officer'."
  }
]);

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Privacy />
    </>
  );
}