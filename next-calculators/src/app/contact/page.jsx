import Contact from "../../views/Contact";
import { createPageMetadata, createBreadcrumbSchema, createFaqSchema } from "@/utils/seo";

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: "Contact ToolsWizard - Support, Bug Reports & Feedback",
  description:
    "Contact ToolsWizard for algorithmic support, bug reports, feature requests, and partnerships. Connect with our engineering desk for 24-hour response.",
  path: "/contact",
  keywords: [
    "contact toolswizard",
    "engineering support",
    "calculator bug report",
    "algorithmic discrepancy",
    "feature request",
    "responsible disclosure",
    "enterprise calculator integration"
  ],
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" }
]);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact ToolsWizard Engineering",
  description:
    "Contact ToolsWizard for algorithmic support, bug reports, feature requests, and partnerships. Connect with our engineering desk for 24-hour response.",
  url: "https://toolswizard.in/contact",
  mainEntity: {
    "@type": "Organization",
    name: "ToolsWizard",
    url: "https://toolswizard.in",
    email: "support@toolswizard.in"
  }
};

const faqSchema = createFaqSchema([
  {
    question: "What is the expected response turnaround time for general inquiries?",
    answer: "Our engineering and administration desk operates Monday through Friday, 08:00 to 18:00 UTC. Standard general inquiries and tool feedback receive a substantive technical response within 24 to 48 business hours. Critical algorithmic discrepancy reports and security disclosures are monitored 24/7 and escalated to on-call domain engineers within 4 to 12 hours."
  },
  {
    question: "How do I report a mathematical or calculation discrepancy in a tool?",
    answer: "To report a mathematical discrepancy, email support@toolswizard.in with the subject line formatted as '[ALGORITHM BUG] Tool Name'. Please include the exact numerical input parameters, the output rendered on screen, your expected output, and the statutory, regulatory, or academic standard you are referencing. Providing browser environment details (e.g., Chrome on macOS) accelerates our automated property-based test reproduction."
  },
  {
    question: "Can I request a custom calculator or utility for my specialized business workflow?",
    answer: "Yes. We welcome proposals for new computational instruments through our formal Request for Comments (RFC) pipeline. Send your specification to support@toolswizard.in with the mathematical formula, statutory authority, variable boundary limits, and at least 3 verified test vectors. Proposals with broad educational, engineering, or commercial utility are prioritized in our bi-weekly development roadmap."
  },
  {
    question: "Are ToolsWizard computational engines available for commercial enterprise integration?",
    answer: "Yes. We support embeddable responsive iframe widgets, headless JavaScript computational micro-libraries, and high-throughput WebAssembly modules for enterprise software platforms, commercial banking portals, real estate portals, and corporate intranets. Email support@toolswizard.in with the subject '[ENTERPRISE INTEGRATION]' to discuss technical requirements, white-labeling, and SLA support."
  },
  {
    question: "How do I submit a confidential security vulnerability report?",
    answer: "Security researchers can disclose vulnerabilities under our coordinated disclosure policy by emailing security@toolswizard.in (or support@toolswizard.in with the prefix '[SECURITY DISCLOSURE]'). Please include a CVSS severity estimate, reproducible proof of concept, and environment strings. We offer Safe Harbor protection against legal action for ethical researchers adhering to responsible disclosure guidelines."
  },
  {
    question: "Does ToolsWizard store or inspect my confidential documents or financial numbers?",
    answer: "No. ToolsWizard operates on a pure zero-trust, client-side execution model. All calculations, regex formatters, JSON parsers, cryptographic hashers, and PDF transformations execute directly in your web browser's local memory sandbox. Your sensitive inputs are never transmitted to remote cloud servers, stored in backend databases, or logged in server telemetry. You can confirm this independently via the Chrome DevTools Network Tab."
  },
  {
    question: "Can universities, schools, and non-profits use ToolsWizard tools for free?",
    answer: "Absolutely. ToolsWizard is 100% free and open for academic, educational, scientific research, and non-profit use. Professors, teachers, and students may freely incorporate our calculators, unit converters, and developer tools into course curricula, laboratory exercises, and academic publications without licensing fees or registration requirements."
  },
  {
    question: "How often are statutory financial formulas and tax slabs updated?",
    answer: "Our financial engineering desk continuously monitors legislative publications and gazette updates from major regulatory bodies, including the US Internal Revenue Service (IRS), the UK HM Revenue & Customs (HMRC), the Reserve Bank of India (RBI), and the Employees' Provident Fund Organisation (EPFO). Statutory updates (such as annual income tax slabs, standard deduction modifications, and interest rate adjustments) are patched and deployed within 48 hours of legislative promulgation."
  },
  {
    question: "What should I do if a calculation tool fails to load or freezes my browser tab?",
    answer: "If an intensive tool (such as sorting a 100,000-line list or diffing massive source code files) becomes unresponsive, your browser thread may be encountering temporary memory constraints. Try refreshing the page, disabling conflicting browser extensions (especially script blockers), or reducing the input batch size. If the failure persists, report the incident with your input data size to support@toolswizard.in so our team can investigate potential algorithmic optimizations."
  },
  {
    question: "Where is ToolsWizard headquartered and how do I contact the legal desk?",
    answer: "ToolsWizard is developed and maintained by a globally distributed consortium of software engineers, financial actuaries, and digital product specialists. Formal legal correspondence, regulatory notices, and corporate governance inquiries should be directed to our central administration desk at legal@toolswizard.in or support@toolswizard.in with 'ATTN: Legal & Corporate Governance'."
  }
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([contactPageSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <Contact />
    </>
  );
}
