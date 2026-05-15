import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen text-calc-darkGray">
      <h1 className="text-4xl font-bold mb-6 text-calc-green">
        Terms and Conditions
      </h1>
      <p className="text-sm text-gray-500 mb-10">
        Last Updated: March 2026
      </p>

      <div className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm space-y-8 text-lg leading-relaxed">

        <p>
          Welcome to <strong className="text-calc-green">CalcPilot</strong>. By accessing or using our website and its complete ecosystem of online tools, including Calculator Tools, Generator Tools, PDF Tools, Text Tools, JSON Tools, Encoder/Decoder Tools, Converter Tools, Developer Tools, and Design Tools, you agree to comply with and be legally bound by the following Terms and Conditions.
        </p>

        <p>
          These terms govern your use of CalcPilot’s services, features, content, and digital resources. If you do not agree with any part of these terms, please discontinue use of our platform immediately.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By using CalcPilot, you acknowledge that you have read, understood, and agreed to these Terms and Conditions, along with our Privacy Policy and any future updates. Your continued use of the platform constitutes acceptance of all modifications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-red-600">
            2. General Service Disclaimer
          </h2>
          <p className="mb-3">
            <strong>Informational Use Only:</strong> All tools, calculations, generated outputs, conversions, and digital services provided by CalcPilot are intended for educational, informational, and productivity purposes only.
          </p>
          <p>
            While we strive for accuracy and performance, CalcPilot does not guarantee absolute correctness, completeness, or suitability for legal, financial, medical, technical, or business-critical decisions. Users should independently verify results before relying on them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Accuracy of Tools and Outputs
          </h2>
          <p>
            CalcPilot offers a wide range of automated tools built using industry-standard algorithms, formulas, and processing systems. However:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Results may vary depending on user input accuracy.</li>
            <li>Generated or converted outputs may contain limitations based on browser or file compatibility.</li>
            <li>Financial, health, coding, or legal tool outputs should not replace professional advice.</li>
            <li>Developers should validate generated code, JSON, or encoded outputs before deployment.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            4. User Responsibilities
          </h2>
          <p>
            By using our platform, you agree to:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Provide accurate information when using tools.</li>
            <li>Use services lawfully and ethically.</li>
            <li>Not misuse tools for harmful, fraudulent, or illegal activities.</li>
            <li>Not attempt unauthorized access, reverse engineering, or disruption of our systems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            5. Data Privacy and Security
          </h2>
          <p>
            CalcPilot prioritizes user privacy. Most tools operate directly in your browser, and we do not intentionally store sensitive personal data submitted through tool interfaces unless explicitly stated.
          </p>
          <p className="mt-3">
            However, users acknowledge that no online platform can guarantee complete security, and use of the website is at their own discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Intellectual Property Rights
          </h2>
          <p>
            All website content, tool structures, branding, logos, code, design systems, and proprietary materials are owned by CalcPilot unless otherwise stated.
          </p>
          <p className="mt-3">
            Unauthorized reproduction, redistribution, resale, or commercial exploitation of our services or content is strictly prohibited without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            7. Third-Party Services
          </h2>
          <p>
            Some features may integrate third-party APIs, libraries, advertisements, or external tools. CalcPilot is not responsible for:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Third-party service outages</li>
            <li>External data inaccuracies</li>
            <li>Privacy practices of external providers</li>
            <li>Content on linked websites</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            Under no circumstances shall CalcPilot, its developers, owners, affiliates, or partners be liable for any direct, indirect, incidental, or consequential damages arising from:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Use or misuse of our tools</li>
            <li>Calculation or conversion inaccuracies</li>
            <li>Business or financial losses</li>
            <li>Data loss or technical disruptions</li>
            <li>Website downtime or security breaches</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            9. Service Modifications
          </h2>
          <p>
            We reserve the right to modify, suspend, update, or discontinue any tool, feature, or service without prior notice. We may also revise these Terms and Conditions periodically to reflect platform improvements or legal requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            10. Governing Law
          </h2>
          <p>
            These Terms and Conditions shall be governed by applicable laws and legal regulations within the relevant jurisdiction, without regard to conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            11. Contact Information
          </h2>
          <p>
            If you have questions, concerns, legal inquiries, or suggestions regarding these Terms and Conditions, please visit our Contact page.
          </p>
        </section>

        <p>
          Thank you for choosing <strong className="text-calc-green">CalcPilot</strong> — your trusted all-in-one online productivity and utility platform.
        </p>

      </div>
    </div>
  );
}