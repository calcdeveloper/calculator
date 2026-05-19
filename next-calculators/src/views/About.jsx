import React from 'react';

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-calc-black mb-6">
        About ToolsWizard
      </h1>

      <div className="bg-calc-white p-8 rounded-xl border border-calc-lightGray shadow-sm text-calc-darkGray space-y-8 text-lg leading-relaxed">
        <p>
          Welcome to <strong className="text-calc-green">ToolsWizard</strong>, an advanced, all-in-one web utility ecosystem engineered to streamline digital productivity. Our platform eliminates the frustration of jumping between disjointed websites by combining a comprehensive suite of tools across 9 core architectural groups: <strong>Calculator, Generator, PDF, Text, JSON, Encoder/Decoder, Converter, Developer, and Design Tools</strong>.
        </p>

        <p>
          Every utility on ToolsWizard is precision-engineered using modern web development practices to ensure lightning-fast execution, clean interface design, and client-side processing speeds.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-8">Our Operational Core Mission</h2>
        <p>
          Our mission is to empower developers, students, content creators, business professionals, and casual internet users with direct access to accurate, free computational and formatting instruments. We design workflows to lower barriers to complex technological requirements—whether that means parsing complex JSON arrays, compressing PDFs securely, or computing detailed financial forecasting loops.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-8">Architecture Breakdown</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Calculator Tools:</strong> Precision instruments across financial evaluation, mathematical problems, wellness statistics, and everyday calculations.</li>
          <li><strong>Generator Tools:</strong> Instant platforms for cryptographic password design, variable QR generation, and productivity asset mockups.</li>
          <li><strong>PDF Tools:</strong> Front-end manipulation utilities to split, merge, convert, and format global standard documentation sets.</li>
          <li><strong>Text Tools:</strong> Content structural analyzers, parsing modules, case editors, and character calculators.</li>
          <li><strong>JSON Tools:</strong> Tree validation setups, minifiers, and beautification scripts compiled explicitly for technical developers.</li>
          <li><strong>Encoder/Decoder Tools:</strong> Client-side cryptographic operations for Base64 formats, HTML escaping, and URL transformations.</li>
          <li><strong>Converter Tools:</strong> Unified metrics for metric transformations, engineering standards, and file formatting frameworks.</li>
          <li><strong>Developer Tools:</strong> Regex validation engines, code minification scripts, and engineering assets.</li>
          <li><strong>Design Tools:</strong> Color space pickers, layout calculations, and pixel processing variables.</li>
        </ul>

        <h2 className="text-2xl font-bold text-calc-black mt-8">The Privacy and Engineering Advantage</h2>
        <p>
          Unlike legacy utility hubs, ToolsWizard prioritizes privacy and structural scale. By keeping processing models client-side whenever possible, your inputs never leave your computer. This architecture enables optimal performance for millions of concurrent users, keeping our systems efficient, safe, and lightning fast.
        </p>

        <h2 className="text-2xl font-bold text-calc-black mt-8">Corporate Engagement</h2>
        <p>
          We continuous adapt and grow our technical assets. For integration requests, functional enhancements, or platform support, connect directly with our engineering panel at <strong>calcdeveloper@outlook.com</strong>.
        </p>
      </div>
    </main>
  );
}