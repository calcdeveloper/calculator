import React from 'react';

export default function TermsAndConditions() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen text-calc-darkGray">
      <h1 className="text-4xl font-bold mb-2 text-calc-green">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-10">Last Updated: {lastUpdated}</p>

      <div className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm space-y-8 text-lg leading-relaxed">
        <p>
          Welcome to <strong className="text-calc-green">ToolsWizard</strong>. By accessing or using our website and its complete ecosystem of online tools, including Calculator Tools, Generator Tools, PDF Tools, Text Tools, Fun Tools, Encoder/Decoder Tools, Converter Tools, Developer Tools, and Design Tools, you agree to comply with and be legally bound by the following Terms and Conditions.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-calc-black mb-3">1. Acceptance of Terms</h2>
          <p>
            By utilizing ToolsWizard, you acknowledge that you have read, understood, and agreed to these Terms and Conditions, along with our Privacy Policy and any future updates. If you do not agree with any part of these terms, please discontinue use of our platform immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-calc-black mb-3">2. General Service Disclaimer & Informational Use</h2>
          <p className="mb-3">
            <strong>Informational and Productivity Use Only:</strong> All tools, calculations, generated outputs, conversions, and digital services provided by ToolsWizard are intended for educational, informational, and personal productivity purposes only.
          </p>
          <p>
            While we strive for accuracy and elite code performance, ToolsWizard does not guarantee absolute correctness, completeness, or suitability for legal, financial, medical, technical, or business-critical decisions. Users should independently verify results before relying on them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-calc-black mb-3">3. Acceptable Use Policy</h2>
          <p>By using our platform, you explicitly agree not to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Deploy automated bots, scrapers, or scripts to systematically harvest data or tools from our platform.</li>
            <li>Misuse our PDF or conversion tools by uploading malicious code, viruses, or illegal document assets.</li>
            <li>Attempt unauthorized access, reverse engineering, or intentional disruption of our edge hosting network parameters.</li>
            <li>Use the outputs of our developer or security utilities for malicious or fraudulent cyber operations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-calc-black mb-3">4. Intellectual Property Rights</h2>
          <p>
            All website structures, tool logic designs, branding graphics, logos, source code systems, layout configurations, and proprietary text content are owned entirely by ToolsWizard. Unauthorized replication, distribution, resale, or packaging of our tools within competing applications is strictly prohibited without explicit written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-calc-black mb-3">5. Third-Party Services & Display Advertisements</h2>
          <p>
            We utilize third-party ad networks (such as Google AdSense) to fund and maintain our free operations. These external integrations may implement background cookies or analytics to monitor advertising efficacy. ToolsWizard does not retain responsibility or liability for the content, privacy structures, or operations of third-party advertising targets linked from this platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-calc-black mb-3">6. Limitation of Liability</h2>
          <p>
            Under no circumstances shall ToolsWizard, its owners, developers, or affiliates be liable for any direct, indirect, incidental, or consequential damages arising from tool inaccuracies, processing issues, website downtime, data losses, or financial calculations performed on this interface.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-calc-black mb-3">7. Modifications and Governing Law</h2>
          <p>
            We reserve the right to add, modify, suspend, or discontinue any utility tool category or configuration without prior notice. These Terms shall be interpreted and governed in accordance with applicable standard legal regulations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-calc-black mb-3">8. Contact Channel</h2>
          <p>
            For legal inquiries, formal data assertions, or suggestions regarding our terms, please route communications directly to our administrative team at <strong>support@toolswizard.in</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}