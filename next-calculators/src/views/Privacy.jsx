import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  Cpu,
  EyeOff,
  Server,
  FileCheck,
  ChevronRight,
  ExternalLink,
  HelpCircle,
  Mail
} from 'lucide-react';
import PrivacySeo from '../components/privacy/PrivacySeo';

export default function Privacy() {
  const lastUpdated = "November 2026";

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 sm:py-12 min-h-screen">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-text-gray">
          <li>
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-3.5 h-3.5 mx-1" />
            <span className="text-text-dark font-medium">Privacy Policy</span>
          </li>
        </ol>
      </nav>

      {/* HERO HEADER */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-text-gray/30 shadow-xs mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs sm:text-sm font-semibold mb-4 border border-teal-200">
          <ShieldCheck className="w-4 h-4" /> Zero-Data Telemetry Architecture
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-dark tracking-tight mb-4">
          Privacy Policy &amp; Security Charter
        </h1>
        <p className="text-base sm:text-lg text-text-gray leading-relaxed max-w-3xl mb-6">
          ToolsWizard is built from the ground up on a zero-trust, client-side execution model. We never store, transmit, inspect, or monetize your documents, calculation inputs, or cryptographic credentials.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-gray font-mono border-t border-text-gray/20 pt-4">
          <span>Effective Date: November 2026</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Charter: Zero-Data Telemetry</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Compliance: GDPR Art. 25 &amp; CCPA</span>
        </div>
      </div>

      {/* KEY GUARANTEES CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="p-5 bg-white rounded-2xl border border-text-gray/30 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-text-dark text-base mb-1">Local RAM Processing</h2>
            <p className="text-xs text-text-gray leading-relaxed">
              All calculations, text conversions, and image processing run 100% in your browser memory.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-teal-600 mt-3 inline-block">0 Bytes Server Egress</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-text-gray/30 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-text-dark text-base mb-1">Zero Databases</h2>
            <p className="text-xs text-text-gray leading-relaxed">
              No user accounts, no login passwords, and no persistent server storage of your calculations.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-teal-600 mt-3 inline-block">No Breach Risk</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-text-gray/30 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <EyeOff className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-text-dark text-base mb-1">Zero Cloud Telemetry</h2>
            <p className="text-xs text-text-gray leading-relaxed">
              We do not track keypresses, keystroke buffers, pasted payloads, or numerical input values.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-teal-600 mt-3 inline-block">GDPR Article 5 Compliant</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-text-gray/30 shadow-xs flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <FileCheck className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-text-dark text-base mb-1">Sandboxed Ad Delivery</h2>
            <p className="text-xs text-text-gray leading-relaxed">
              Google AdSense scripts run in sandboxed iframes with zero programmatic access to tool data.
            </p>
          </div>
          <span className="text-[11px] font-semibold text-teal-600 mt-3 inline-block">Strict Isolation</span>
        </div>
      </div>

      {/* CORE STATUTORY POLICY DOCUMENT */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-text-gray/30 shadow-xs text-text-dark space-y-8 leading-relaxed mb-12">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-3 flex items-center gap-2">
            1. Consent &amp; Acceptance of Terms
          </h2>
          <p className="text-sm text-text-gray leading-relaxed">
            By accessing or using ToolsWizard (accessible at <strong className="text-text-dark">https://toolswizard.in</strong>), you acknowledge and consent to this Privacy Policy and agree to abide by its terms. If you do not agree with any provision of this charter, you should discontinue use of our web applications immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-3 flex items-center gap-2">
            2. Information We Process vs. Zero Server Collection
          </h2>
          <p className="text-sm text-text-gray leading-relaxed mb-3">
            The core mathematical and computational engines of ToolsWizard (encompassing all 150+ calculators, text processors, JSON formatters, base64 encoders, and cryptographic utilities) run exclusively within your device&apos;s client browser environment. <strong>We do not transmit, save, process, intercept, or store your mathematical inputs, uploaded documents, or string values on our remote servers.</strong>
          </p>
          <p className="text-sm text-text-gray leading-relaxed">
            If you voluntarily initiate contact with our engineering desk via email or direct form submission, we receive standard communication data (such as your return email address, sender name, and the specific message content). This correspondence is utilized strictly for technical resolution and quality verification, after which it is archived and deleted in accordance with data minimization policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-3 flex items-center gap-2">
            3. Server Log Files &amp; Edge Network Telemetry
          </h2>
          <p className="text-sm text-text-gray leading-relaxed">
            Like all modern web hosting infrastructures, our global edge CDN provider (Vercel Inc.) maintains standard access log records. These log files record non-identifying operational metrics, including Internet Protocol (IP) addresses, user-agent browser identifiers, Internet Service Provider (ISP) network signatures, timestamp headers, referring/exit URLs, and coarse HTTP status codes. These records contain zero user calculation data, cannot identify individual users, and are utilized solely for network routing, DDoS mitigation, and aggregate traffic diagnostics.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-3 flex items-center gap-2">
            4. Third-Party Advertising &amp; Google AdSense DART Cookies
          </h2>
          <p className="text-sm text-text-gray leading-relaxed mb-3">
            ToolsWizard partners with Google AdSense to serve relevant commercial advertisements that sustain our free utility ecosystem. Google utilizes cookies (such as the DART cookie) to serve advertisements based on your visits to our site and other destinations across the web.
          </p>
          <p className="text-sm text-text-gray leading-relaxed mb-3">
            Users retain full statutory rights to opt out of personalized interest-based advertising by visiting Google&apos;s Privacy &amp; Terms page at{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 font-semibold underline hover:text-teal-700 inline-flex items-center gap-1"
            >
              https://policies.google.com/technologies/ads <ExternalLink className="w-3.5 h-3.5" />
            </a>.
          </p>
          <p className="text-sm text-text-gray leading-relaxed">
            Crucially, third-party advertising scripts operate inside isolated iframe security sandboxes. They have zero programmatic access to your active calculation parameters, cryptographic keys, form entries, or memory buffers.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-3 flex items-center gap-2">
            5. California Consumer Privacy Act (CCPA) Disclosures
          </h2>
          <p className="text-sm text-text-gray leading-relaxed mb-3">
            Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents maintain statutory protections regarding their personal information:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-text-gray">
            <li><strong>Right to Know &amp; Access:</strong> You have the right to request disclosure of the categories and specific pieces of personal data collected about you.</li>
            <li><strong>Right to Deletion:</strong> You have the right to request erasure of any personal data collected from you, subject to legal exceptions.</li>
            <li><strong>Right to Opt-Out of Sale:</strong> ToolsWizard does not sell, lease, or monetize personal information to data brokers or commercial marketers.</li>
            <li><strong>Right to Non-Discrimination:</strong> We provide identical computational services regardless of whether you exercise statutory privacy rights.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-3 flex items-center gap-2">
            6. European General Data Protection Regulation (GDPR) Rights
          </h2>
          <p className="text-sm text-text-gray leading-relaxed mb-3">
            In accordance with EU Regulation 2016/679 (GDPR), every data subject is entitled to fundamental data protection rights:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-text-gray">
            <li><strong>The Right to Access:</strong> The right to request copies of your personal data records held by ToolsWizard.</li>
            <li><strong>The Right to Rectification:</strong> The right to request that we correct information you believe is inaccurate or incomplete.</li>
            <li><strong>The Right to Erasure (Right to Be Forgotten):</strong> The right to request the permanent deletion of your communication logs.</li>
            <li><strong>The Right to Restrict Processing:</strong> The right to demand that we halt active processing of your direct correspondence records.</li>
            <li><strong>The Right to Object to Processing:</strong> The right to challenge our legitimate-interest processing of administrative inquiries.</li>
            <li><strong>The Right to Data Portability:</strong> The right to receive your communication data in a structured, machine-readable format.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-text-dark mb-3 flex items-center gap-2">
            7. Data Protection Officer (DPO) &amp; Compliance Inquiries
          </h2>
          <p className="text-sm text-text-gray leading-relaxed">
            For formal regulatory correspondence, compliance verification audits, or to exercise your statutory rights under GDPR or CCPA, contact our Data Protection Officer at <strong>privacy@toolswizard.in</strong> or dispatch an inquiry through our <Link href="/contact" className="text-teal-600 underline font-semibold hover:text-teal-700">Official Contact &amp; Compliance Desk</Link>. For technical guidance on client-side caching and troubleshooting, visit our <Link href="/help" className="text-teal-600 underline font-semibold hover:text-teal-700">Help Center &amp; User Manuals</Link>.
          </p>
        </section>
      </div>

      {/* COMPREHENSIVE TECHNICAL SEO COMPONENT */}
      <PrivacySeo />
    </main>
  );
}