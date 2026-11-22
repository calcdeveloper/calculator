import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Server,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  HelpCircle,
  ArrowRight,
  Globe,
  Database,
  Cpu,
  Clock,
  HardDrive
} from 'lucide-react';

export default function PrivacySeo() {
  const lastUpdated = "November 2026";

  return (
    <article className="prose prose-lg max-w-none text-text-dark mt-16 bg-white p-6 sm:p-10 md:p-14 rounded-3xl shadow-xs border border-text-gray/30">
      
      {/* SECTION 1: HEADER & ZERO-EGRESS CHARTER */}
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-700 text-xs sm:text-sm font-semibold mb-4 border border-teal-200">
          <ShieldCheck className="w-4 h-4" /> Zero-Data Telemetry Charter, Cryptographic Privacy &amp; Statutory Compliance
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark mb-6 tracking-tight leading-tight">
          ToolsWizard Privacy Architecture: Zero-Data Telemetry Governance, Client-Side RAM Processing &amp; Regulatory Compliance Charter
        </h2>
        <p className="text-xs text-text-gray mb-6 font-mono">
          Document Reference: TW-SEC-PRIV-2026-V4 | Last Comprehensive Audit &amp; Legal Review: {lastUpdated}
        </p>
        <p className="lead text-lg sm:text-xl text-text-gray leading-relaxed mb-6">
          In an era dominated by predatory surveillance capitalism, invasive telemetry trackers, and centralized cloud data brokers, ToolsWizard is founded on an uncompromising architectural principle: <strong>privacy by design, privacy by default, and zero data egress</strong>. Unlike legacy utility websites that force users to upload sensitive financial balance sheets, personal tax documents, source code repositories, and confidential PDF contracts to remote multi-tenant cloud servers for processing, ToolsWizard executes 100% of its computational operations inside your device&apos;s local web browser runtime.
        </p>
        <p className="text-text-gray leading-relaxed mb-6">
          This comprehensive Privacy Architecture and Telemetry Charter outlines our legal commitments, mathematical privacy guarantees, browser sandbox memory governance, and regulatory compliance with global data protection frameworks, including the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA/CPRA), the Health Insurance Portability and Accountability Act (HIPAA), and the Indian Digital Personal Data Protection Act (DPDPA).
        </p>

        <div className="p-6 bg-gray-50 rounded-2xl border border-text-gray/30 not-prose mb-8">
          <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
            <EyeOff className="w-5 h-5 text-teal-600" /> The Taxonomy of Surveillance Telemetry: Why Client-Side Computing Matters
          </h4>
          <p className="text-xs text-text-gray leading-relaxed mb-3">
            Legacy online converters and financial portals frequently deploy invasive, covert client-fingerprinting mechanisms designed to track users across unrelated web sessions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs mb-3">
            <div className="p-3 bg-white rounded-lg border border-text-gray/20">
              <strong className="text-text-dark block mb-1">Canvas Fingerprinting</strong>
              Querying subtle GPU raster differences across WebGL contexts to assign unique hardware IDs. Banned on ToolsWizard.
            </div>
            <div className="p-3 bg-white rounded-lg border border-text-gray/20">
              <strong className="text-text-dark block mb-1">AudioContext Probing</strong>
              Synthesizing inaudible frequency signals to measure sound card clock frequency anomalies. Banned on ToolsWizard.
            </div>
            <div className="p-3 bg-white rounded-lg border border-text-gray/20">
              <strong className="text-text-dark block mb-1">Font Enumeration</strong>
              Measuring CSS layout rendering times across hundreds of installed local system fonts. Banned on ToolsWizard.
            </div>
            <div className="p-3 bg-white rounded-lg border border-text-gray/20">
              <strong className="text-text-dark block mb-1">Battery &amp; Device APIs</strong>
              Querying battery charge levels and accelerometer sensors to correlate cross-device profiles. Banned on ToolsWizard.
            </div>
          </div>
          <p className="text-xs text-text-gray leading-relaxed">
            ToolsWizard strips and disallows all client-fingerprinting scripts. Our runtime treats every browser session as an anonymous, ephemeral, generic execution environment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-8">
          <div className="p-5 bg-gray-50 rounded-2xl border border-text-gray/20">
            <div className="text-2xl font-bold text-teal-600 mb-1">Zero Cloud Egress</div>
            <div className="font-semibold text-text-dark text-sm mb-1">Local RAM Sandboxing</div>
            <p className="text-xs text-text-gray leading-relaxed">
              Files, numeric strings, and calculation inputs never leave your device&apos;s local memory space.
            </p>
          </div>
          <div className="p-5 bg-gray-50 rounded-2xl border border-text-gray/20">
            <div className="text-2xl font-bold text-emerald-600 mb-1">Zero Database Risk</div>
            <div className="font-semibold text-text-dark text-sm mb-1">No Storage Buckets</div>
            <p className="text-xs text-text-gray leading-relaxed">
              Because user data is never stored on our servers, systemic cloud database breaches are impossible.
            </p>
          </div>
          <div className="p-5 bg-gray-50 rounded-2xl border border-text-gray/20">
            <div className="text-2xl font-bold text-blue-600 mb-1">Empirical Proof</div>
            <div className="font-semibold text-text-dark text-sm mb-1">DevTools Auditable</div>
            <p className="text-xs text-text-gray leading-relaxed">
              Independently inspect all network traffic in 60 seconds using native browser developer tools.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: ARCHITECTURAL COMPARISON MATRIX */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <Layers className="w-7 h-7 text-teal-600" /> Architectural Privacy: ToolsWizard vs. Legacy Cloud SaaS &amp; Desktop Software
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          The privacy risks associated with digital utilities stem directly from their underlying infrastructure. The comparative matrix below highlights why client-side WebAssembly and JavaScript execution provides mathematical superiority over traditional cloud converter and calculation models:
        </p>
        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full text-left text-sm border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-text-gray/30">
            <thead>
              <tr className="bg-gray-50 text-text-dark border-b border-text-gray/30">
                <th className="p-4 font-bold">Privacy Evaluation Dimension</th>
                <th className="p-4 font-bold text-teal-700">ToolsWizard Client-Side RAM</th>
                <th className="p-4 font-bold text-red-600">Traditional Cloud SaaS Tools</th>
                <th className="p-4 font-bold text-gray-700">Native Desktop Applications</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-text-gray">
              <tr>
                <td className="p-4 font-semibold text-text-dark">Data Transmission Vector</td>
                <td className="p-4 text-emerald-700 font-bold">Zero (Processed 100% locally in browser RAM)</td>
                <td className="p-4 text-red-600">Full payload uploaded over HTTP POST</td>
                <td className="p-4 text-amber-700">Local disk, but often phones home telemetry</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-text-dark">Server-Side Data Retention</td>
                <td className="p-4 text-emerald-700 font-bold">0 Seconds (Zero server persistence)</td>
                <td className="p-4 text-red-600">Hours to months in cloud buckets / S3</td>
                <td className="p-4 text-emerald-700 font-semibold">Local drive only</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-text-dark">Third-Party Sub-processor Exposure</td>
                <td className="p-4 text-emerald-700 font-bold">Zero sub-processors touch calculation data</td>
                <td className="p-4 text-red-600">AWS, GCP, Azure, OCR APIs, AI models</td>
                <td className="p-4 text-amber-700">Variable (analytics SDKs, crash reporters)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-text-dark">Regulatory Liability (GDPR / HIPAA)</td>
                <td className="p-4 text-emerald-700 font-bold">Safe Harbor (No PII / PHI handled by servers)</td>
                <td className="p-4 text-red-600">High Risk (Requires Data Processing Agreements)</td>
                <td className="p-4 text-emerald-700 font-semibold">User enterprise responsibility</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-text-dark">Independent Verifiability</td>
                <td className="p-4 text-emerald-700 font-bold">Instant (Inspect browser Network Tab)</td>
                <td className="p-4 text-red-600">Impossible (Closed server-side black box)</td>
                <td className="p-4 text-amber-700">Difficult (Requires Wireshark packet capture)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-text-dark">Account Registration &amp; Tracking</td>
                <td className="p-4 text-emerald-700 font-bold">Zero mandatory logins or user profiles</td>
                <td className="p-4 text-red-600">Mandatory email logins, credit cards, profiles</td>
                <td className="p-4 text-amber-700">Often requires license key and activation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 3: IN-BROWSER EXECUTION & MEMORY GOVERNANCE */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <Cpu className="w-7 h-7 text-teal-600" /> In-Browser Execution Sandboxing &amp; Memory Lifecycle Governance
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          To enforce mathematical guarantees of privacy, ToolsWizard delegates all computational tasks to client-side sandboxes built into modern web browser engines (Google V8, Mozilla SpiderMonkey, and Apple JavaScriptCore). When you interact with our instruments, data processing adheres to a strict four-stage memory lifecycle:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="font-bold text-text-dark text-base">Local Buffer Ingestion</h4>
            </div>
            <p className="text-xs text-text-gray leading-relaxed mb-2">
              When you paste text into a formatter or upload a multi-page PDF document, the file is read into your browser&apos;s transient memory heap via standard HTML5 <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-text-dark">FileReader.readAsArrayBuffer()</code> or input event handlers.
            </p>
            <p className="text-xs text-emerald-700 font-semibold">
              Data remains exclusively in volatile RAM and is never buffered to local hard disks or remote staging servers.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">2</div>
              <h4 className="font-bold text-text-dark text-base">Isolated Thread Execution</h4>
            </div>
            <p className="text-xs text-text-gray leading-relaxed mb-2">
              Heavy operations (such as Myers&apos; diff calculations, Bcrypt hashing, and image compression) execute in isolated background Web Worker threads. Data is passed via zero-copy transferable objects (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-text-dark">ArrayBuffer</code>) rather than shared global memory.
            </p>
            <p className="text-xs text-emerald-700 font-semibold">
              Worker threads operate in secure sandboxes without access to the DOM or cross-origin session storage.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">3</div>
              <h4 className="font-bold text-text-dark text-base">Ephemeral Blob Generation</h4>
            </div>
            <p className="text-xs text-text-gray leading-relaxed mb-2">
              Processed outputs (e.g., merged PDF files, converted WebP images, or formatted JSON exports) are instantiated as local binary Object URLs (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-text-dark">blob:https://toolswizard.in/...</code>).
            </p>
            <p className="text-xs text-emerald-700 font-semibold">
              Blob URLs reference temporary browser memory allocations and cannot be resolved or accessed by external web domains.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">4</div>
              <h4 className="font-bold text-text-dark text-base">Defensive Memory Disposal</h4>
            </div>
            <p className="text-xs text-text-gray leading-relaxed mb-2">
              Immediately upon user download or component navigation, our React teardown hooks execute <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-text-dark">URL.revokeObjectURL()</code>, release internal typed array pointers, and invoke <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-text-dark">worker.terminate()</code>.
            </p>
            <p className="text-xs text-emerald-700 font-semibold">
              The browser&apos;s garbage collection engine instantly reclaims allocated memory blocks, leaving zero persistent artifacts.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl border border-text-gray/30 not-prose mb-8">
          <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
            <Cpu className="w-5 h-5 text-teal-600" /> WebAssembly (Wasm) Linear Memory Isolation &amp; Zero-Trust Sandboxing
          </h4>
          <p className="text-xs text-text-gray leading-relaxed mb-3">
            For computationally intensive document and image transformations—such as our <Link href="/tools/pdf-tools/merge-pdf" className="text-teal-600 font-semibold hover:underline">PDF Merger</Link>, <Link href="/tools/pdf-tools/pdf-ocr" className="text-teal-600 font-semibold hover:underline">PDF OCR</Link>, and <Link href="/tools/pdf-tools/image-compressor" className="text-teal-600 font-semibold hover:underline">Image Compressor</Link>—ToolsWizard compiles battle-tested C++ and Rust libraries into WebAssembly (Wasm) bytecode:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-3">
            <div className="p-3 bg-white rounded-lg border border-text-gray/20">
              <strong className="text-text-dark block mb-1">Hardware MMU Bounds Checking</strong>
              Wasm executes within an isolated linear memory instance (<code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-text-dark">WebAssembly.Memory</code>). Memory accesses outside allocated array bounds trigger immediate hardware traps, preventing buffer overflows.
            </div>
            <div className="p-3 bg-white rounded-lg border border-text-gray/20">
              <strong className="text-text-dark block mb-1">Zero Host System Calls</strong>
              The Wasm virtual machine possesses no access to operating system file handles, raw network sockets, or external host device drivers. Execution is completely restricted to browser-provided array buffers.
            </div>
            <div className="p-3 bg-white rounded-lg border border-text-gray/20">
              <strong className="text-text-dark block mb-1">Near-Native Micro-Performance</strong>
              Wasm binaries execute at near-native CPU speeds inside browser Web Worker threads, enabling multi-megabyte document rendering without locking the user interface or emitting telemetry.
            </div>
          </div>
          <p className="text-xs text-text-gray leading-relaxed">
            By combining WebAssembly linear memory sandboxing with strict zero-egress network controls, ToolsWizard guarantees that your confidential contracts, medical scans, and financial spreadsheets remain mathematically isolated on your local processor.
          </p>
        </div>
      </section>

      {/* SECTION 4: CLIENT-SIDE WEB STORAGE GOVERNANCE */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <HardDrive className="w-7 h-7 text-teal-600" /> Client-Side Web Storage Governance: LocalStorage vs. RAM Boundaries
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          Transparency requires explicitly documenting where data resides on your device. Web browsers provide multiple storage tiers with differing persistence lifecycles. ToolsWizard strictly limits its use of web storage APIs to maintain complete privacy:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
          <div className="p-6 bg-emerald-50/50 rounded-2xl border border-emerald-200">
            <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> What ToolsWizard MAY Store in LocalStorage
            </h4>
            <p className="text-xs text-text-gray leading-relaxed mb-3">
              Only non-sensitive, user-consented presentation preferences are persisted across browser sessions:
            </p>
            <ul className="text-xs text-text-gray space-y-2 list-disc pl-5">
              <li><strong>Theme Configuration:</strong> Your active visual display preference (e.g., Light Mode vs. Dark Mode).</li>
              <li><strong>Default Unit System:</strong> Preferred measurement standard (e.g., Metric SI vs. Imperial US Customary).</li>
              <li><strong>Currency Symbol Setting:</strong> Selected display currency symbol (e.g., USD $, INR ₹, EUR €, GBP £).</li>
              <li><strong>UI State Toggles:</strong> Accordion expansion states or recently selected color converter tabs.</li>
            </ul>
          </div>

          <div className="p-6 bg-red-50/40 rounded-2xl border border-red-200">
            <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
              <EyeOff className="w-5 h-5 text-red-600" /> What ToolsWizard NEVER Stores in Any Web Storage
            </h4>
            <p className="text-xs text-text-gray leading-relaxed mb-3">
              ToolsWizard enforces an absolute architectural ban on writing sensitive assets to local storage:
            </p>
            <ul className="text-xs text-text-gray space-y-2 list-disc pl-5">
              <li><strong>Zero Calculation Inputs:</strong> Salaries, loan principal balances, debt numbers, and tax figures are never saved.</li>
              <li><strong>Zero Documents or Files:</strong> Uploaded PDFs, images, Excel files, and text strings are never persisted to disk.</li>
              <li><strong>Zero Cryptographic Seeds:</strong> Generated passwords, API keys, Bcrypt salts, and private keys vanish on tab close.</li>
              <li><strong>Zero Tracking Profiles:</strong> No persistent device fingerprints, cross-site advertiser IDs, or behavioral heatmaps.</li>
            </ul>
          </div>
        </div>

        <p className="text-text-gray leading-relaxed">
          You have absolute sovereignty over stored preferences. You can completely wipe all ToolsWizard client preferences at any moment by clearing your browser cookies and site data, or by opening your browser console (<kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs font-mono">F12</kbd>) and executing <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-xs text-text-dark">localStorage.clear()</code>.
        </p>
      </section>

      {/* SECTION 5: 4-STEP NETWORK EGRESS AUDIT GUIDE */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <Terminal className="w-7 h-7 text-teal-600" /> Independent 4-Step Network Egress Audit Protocol (Chrome DevTools Guide)
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          We believe technical trust should be empirically verifiable, not blindly accepted. Any software engineer, information security auditor, compliance officer, or privacy-conscious citizen can independently verify our zero-egress architecture in less than 60 seconds using native web developer tools:
        </p>

        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-text-gray/30 not-prose mb-8">
          <h4 className="font-bold text-text-dark mb-4 text-base flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-600" /> Step-by-Step Technical Verification Walkthrough:
          </h4>
          <ol className="space-y-4 text-sm text-text-gray list-decimal pl-5 leading-relaxed">
            <li>
              <strong className="text-text-dark">Open Browser Developer Tools:</strong> In Google Chrome, Mozilla Firefox, Brave, Microsoft Edge, or Apple Safari, press <kbd className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs font-mono">F12</kbd> (or <kbd className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs font-mono">Ctrl+Shift+I</kbd> on Windows/Linux, <kbd className="px-2 py-0.5 bg-white border border-gray-300 rounded text-xs font-mono">Cmd+Option+I</kbd> on macOS).
            </li>
            <li>
              <strong className="text-text-dark">Navigate to the Network Panel:</strong> Select the <strong className="text-text-dark">&quot;Network&quot;</strong> tab in the developer inspector. In the filter bar, click <strong className="text-text-dark">&quot;Fetch/XHR&quot;</strong> to monitor all asynchronous background HTTP requests and WebSocket connections.
            </li>
            <li>
              <strong className="text-text-dark">Execute a Sensitive Computational Action:</strong> Navigate to any ToolsWizard tool. Paste proprietary source code into our <Link href="/tools/text-tools/text-cleaner" className="text-teal-600 font-semibold hover:underline">Text Cleaner</Link>, calculate financial amortization in our <Link href="/calculator/finance/business-loan" className="text-teal-600 font-semibold hover:underline">Business Loan Calculator</Link>, or compress a multi-page PDF in our <Link href="/tools/pdf-tools/pdf-compress" className="text-teal-600 font-semibold hover:underline">PDF Compressor</Link>.
            </li>
            <li>
              <strong className="text-text-dark">Confirm Zero Outbound Payload Transmission:</strong> Inspect the network request stream. You will observe exactly <strong>0 outbound HTTP POST, PUT, or PATCH requests</strong> containing your input files, numeric amounts, or text data. The entire calculation lifecycle completes within local client memory.
            </li>
          </ol>
        </div>

        <p className="text-text-gray leading-relaxed">
          This empirical test proves that ToolsWizard does not possess a covert server-side ingestion backend. Even if a bad actor were to compromise our edge CDN hosting servers, your personal data could never be exfiltrated because it is never transmitted to us in the first place.
        </p>
      </section>

      {/* SECTION 6: STATUTORY INTERNATIONAL DATA PROTECTION COMPLIANCE */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <Globe className="w-7 h-7 text-teal-600" /> Statutory International Data Protection &amp; Regulatory Frameworks
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          ToolsWizard complies with global data privacy legislation through architectural preemption. By eliminating data collection at the source, we achieve mathematical adherence to international privacy statutes:
        </p>

        <div className="space-y-4 not-prose mb-8">
          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-teal-100 text-teal-700 font-bold text-xs">EU / EEA</span>
              <h4 className="font-bold text-text-dark text-base">General Data Protection Regulation (GDPR, Regulation (EU) 2016/679)</h4>
            </div>
            <p className="text-sm text-text-gray leading-relaxed mb-2">
              ToolsWizard fulfills <strong>Article 25 (Data Protection by Design and by Default)</strong> and <strong>Article 5 (Data Minimization and Storage Limitation)</strong>. Because we do not process, store, or transmit Personally Identifiable Information (PII) on our servers, European users do not risk unauthorized cross-border data transfers to foreign jurisdictions.
            </p>
            <p className="text-xs text-text-gray leading-relaxed">
              Under Articles 15 through 22, European residents possess the rights to access, rectification, erasure, and restriction. Because our servers maintain no user databases, there is zero customer data to rectify, disclose, or delete. If you contact our support desk directly via email, your correspondence is retained strictly to resolve your inquiry and is purged upon resolution.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-700 font-bold text-xs">United States (California)</span>
              <h4 className="font-bold text-text-dark text-base">California Consumer Privacy Act &amp; CPRA (Cal. Civ. Code &sect; 1798.100 et seq.)</h4>
            </div>
            <p className="text-sm text-text-gray leading-relaxed mb-2">
              Under the CCPA and California Privacy Rights Act (CPRA), California consumers possess the right to know what personal information is collected, the right to delete personal information, and the absolute right to opt out of the sale or sharing of personal information.
            </p>
            <p className="text-xs text-text-gray leading-relaxed font-semibold text-text-dark">
              ToolsWizard does not sell, rent, monetize, or trade your personal information. We have never sold consumer personal information to third-party data brokers, and our architectural model prevents such monetization by design.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-purple-100 text-purple-700 font-bold text-xs">United States (Healthcare)</span>
              <h4 className="font-bold text-text-dark text-base">Health Insurance Portability and Accountability Act (HIPAA Safe Harbor)</h4>
            </div>
            <p className="text-sm text-text-gray leading-relaxed mb-2">
              Medical clinicians, hospitals, and healthcare administrative professionals frequently utilize our <Link href="/calculator/health" className="text-teal-600 font-semibold hover:underline">Clinical Health Calculators</Link> (such as BMI, BMR, and body composition estimators) and document formatting tools.
            </p>
            <p className="text-xs text-text-gray leading-relaxed">
              Under HIPAA 45 CFR &sect; 164.514, electronic Protected Health Information (ePHI) must never be transmitted to non-compliant cloud repositories. Because ToolsWizard operates purely in-browser, patient metrics are never transmitted across the network, establishing a secure HIPAA-safe sandbox for clinical calculations.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-700 font-bold text-xs">India</span>
              <h4 className="font-bold text-text-dark text-base">Digital Personal Data Protection Act (DPDPA 2023)</h4>
            </div>
            <p className="text-sm text-text-gray leading-relaxed">
              In accordance with India&apos;s DPDPA 2023, ToolsWizard acts in full harmony with data fiduciary requirements. Indian users calculating Employee Provident Fund (EPF), House Rent Allowance (HRA) exemptions, and capital gains enjoy complete privacy with zero personal data logged or retained within centralized telecommunications infrastructure.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-700 font-bold text-xs">United Kingdom</span>
              <h4 className="font-bold text-text-dark text-base">UK Data Protection Act 2018 &amp; UK GDPR (ICO Guidelines)</h4>
            </div>
            <p className="text-sm text-text-gray leading-relaxed mb-2">
              Following the UK&apos;s exit from the European Union, the Data Protection Act 2018 and the retained UK GDPR govern personal information processing under the supervision of the Information Commissioner&apos;s Office (ICO).
            </p>
            <p className="text-xs text-text-gray leading-relaxed">
              ToolsWizard fulfills the ICO&apos;s stringent Age-Appropriate Design Code (Children&apos;s Code) and statutory fairness principles. Because zero telemetry, analytics identifiers, or user input files are exported from British devices, UK enterprises and educational authorities can deploy our calculators without executing international data transfer agreements (IDTAs).
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-700 font-bold text-xs">Canada</span>
              <h4 className="font-bold text-text-dark text-base">Personal Information Protection and Electronic Documents Act (PIPEDA)</h4>
            </div>
            <p className="text-sm text-text-gray leading-relaxed mb-2">
              Under Canada&apos;s PIPEDA and substantially similar provincial legislation (such as Alberta PIPA, British Columbia PIPA, and Quebec Law 25), organizations must limit personal data collection to what is strictly necessary for identified purposes.
            </p>
            <p className="text-xs text-text-gray leading-relaxed">
              ToolsWizard complies with all 10 Fair Information Principles set forth in Schedule 1 of PIPEDA. By collecting zero personal data during tool usage, we eliminate the risks of unauthorized commercial disclosure or cross-border data retention.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-700 font-bold text-xs">Australia</span>
              <h4 className="font-bold text-text-dark text-base">Privacy Act 1988 &amp; Australian Privacy Principles (APPs)</h4>
            </div>
            <p className="text-sm text-text-gray leading-relaxed mb-2">
              Regulated by the Office of the Australian Information Commissioner (OAIC), the Australian Privacy Principles (APPs) mandate transparency and restrict overseas data transfers (APP 8).
            </p>
            <p className="text-xs text-text-gray leading-relaxed">
              ToolsWizard preemptively satisfies APPs 1, 3, 6, and 8. Australian users calculating mortgage borrowing power, concrete volumes, or cryptographic hashes maintain absolute confidentiality with zero data logged across Australian telecommunications networks or exported overseas.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: THIRD-PARTY ADVERTISING, COOKIES & EDGE CDNS */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <Database className="w-7 h-7 text-teal-600" /> Third-Party Advertising, Web Cookies &amp; Edge CDN Infrastructure
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          To maintain ToolsWizard as a 100% free computational resource for students, developers, and educators without charging subscription fees or locking tools behind paywalls, we display non-intrusive digital advertisements through certified advertising networks:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
              <Globe className="w-5 h-5 text-teal-600" /> Google AdSense &amp; DART Cookie Policy
            </h4>
            <p className="text-xs text-text-gray leading-relaxed mb-3">
              Google is a third-party vendor on our website. Google uses cookies (including the DoubleClick DART cookie) to serve advertisements to visitors based upon their visits to ToolsWizard and other websites across the internet.
            </p>
            <p className="text-xs text-text-gray leading-relaxed mb-3">
              You can opt out of personalized advertising by visiting the Google Ad and Content Network Privacy Policy: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-semibold underline">https://policies.google.com/technologies/ads</a>.
            </p>
            <p className="text-xs text-text-gray leading-relaxed font-semibold text-text-dark">
              Critical Security Barrier: Google AdSense scripts execute in strictly sandboxed iframe contexts and have zero access to the internal state, memory buffers, or input values of our calculation tools.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs">
            <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
              <Server className="w-5 h-5 text-teal-600" /> Edge CDN Hosting &amp; Server Access Logs
            </h4>
            <p className="text-xs text-text-gray leading-relaxed mb-3">
              ToolsWizard is delivered globally via high-speed edge Content Delivery Networks (CDNs). When your web browser requests our web pages, edge server nodes temporarily log standard network connection metadata:
            </p>
            <ul className="text-xs text-text-gray space-y-1.5 list-disc pl-4 mb-3">
              <li>Internet Protocol (IP) address and approximate geographical region.</li>
              <li>HTTP User-Agent string, browser version, and operating system.</li>
              <li>Requested URL path, HTTP status code, and transmission timestamp.</li>
            </ul>
            <p className="text-xs text-text-gray leading-relaxed">
              These technical server access logs are utilized strictly for DDoS mitigation, edge routing optimization, and network security diagnostics. Server logs are automatically rotated and permanently purged after 30 days. They are never joined with user identities.
            </p>
          </div>
        </div>

        <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-200 not-prose mb-8">
          <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-600" /> Content Security Policy (CSP) Directives &amp; Subresource Integrity (SRI)
          </h4>
          <p className="text-xs text-text-gray leading-relaxed mb-3">
            To prevent cross-site scripting (XSS), malicious script injection, and clickjacking attacks, ToolsWizard enforces strict HTTP security response headers across its entire edge CDN infrastructure:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-3">
            <div className="p-3 bg-white rounded-lg border border-teal-100">
              <strong className="text-text-dark block mb-1">Strict Script-Src Boundaries</strong>
              Restricts executable JavaScript to first-party origins and certified Google AdSense hosts. Unprompted inline script injection or unauthorized external domains are blocked by the browser engine.
            </div>
            <div className="p-3 bg-white rounded-lg border border-teal-100">
              <strong className="text-text-dark block mb-1">Frame-Ancestors Restrictions</strong>
              Enforces <code className="bg-gray-100 px-1 py-0.5 rounded font-mono text-text-dark">frame-ancestors &apos;self&apos;</code> (and X-Frame-Options: SAMEORIGIN), preventing malicious third-party websites from framing ToolsWizard for clickjacking exploits.
            </div>
            <div className="p-3 bg-white rounded-lg border border-teal-100">
              <strong className="text-text-dark block mb-1">Subresource Integrity (SRI)</strong>
              All external font libraries and CDN-delivered dependencies include cryptographic SHA-384 integrity hashes, ensuring browser execution halts immediately if an upstream script is tampered with.
            </div>
          </div>
          <p className="text-xs text-text-gray leading-relaxed">
            These defensive header configurations guarantee that user execution threads remain completely isolated from hostile client-side tampering.
          </p>
        </div>
      </section>

      {/* SECTION 8: CLIENT-SIDE CRYPTOGRAPHY & ZERO-KNOWLEDGE PROOFS */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <Lock className="w-7 h-7 text-teal-600" /> Client-Side Cryptography &amp; Zero-Knowledge Security Guarantees
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          When utilizing our cryptographic security instruments—including our <Link href="/tools/generators/strong-password-generator" className="text-teal-600 font-semibold hover:underline">Strong Password Generator</Link>, <Link href="/tools/encoder-decoder/sha256-hash-generator" className="text-teal-600 font-semibold hover:underline">SHA-256 Hash Generator</Link>, and <Link href="/tools/encoder-decoder/bcrypt-hash-generator" className="text-teal-600 font-semibold hover:underline">Bcrypt Hash Generator</Link>—your credentials are protected by native browser cryptographic APIs:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 not-prose">
          <div className="p-6 bg-gray-50 rounded-2xl border border-text-gray/30">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-text-dark text-base mb-1">CSPRNG Hardware Entropy</h4>
            <p className="text-xs text-text-gray leading-relaxed">
              Random passwords and tokens derive entropy directly from your operating system&apos;s cryptographic random pool (<code className="bg-white px-1 py-0.5 rounded font-mono text-text-dark">crypto.getRandomValues()</code>), preventing PRNG predictability.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-text-gray/30">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-text-dark text-base mb-1">Zero-Knowledge Hashes</h4>
            <p className="text-xs text-text-gray leading-relaxed">
              When generating SHA-256 or Bcrypt hashes, the plaintext input string is processed strictly inside your device&apos;s Web Crypto API sandbox. ToolsWizard servers never see or log your secret keys.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl border border-text-gray/30">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
              <EyeOff className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-text-dark text-base mb-1">Zero Clipboard Telemetry</h4>
            <p className="text-xs text-text-gray leading-relaxed">
              When clicking our one-tap &quot;Copy to Clipboard&quot; buttons, the action invokes the secure browser <code className="bg-white px-1 py-0.5 rounded font-mono text-text-dark">navigator.clipboard.writeText()</code> API without emitting tracking events.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl border border-text-gray/30 not-prose mb-8">
          <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
            <Cpu className="w-5 h-5 text-teal-600" /> Mathematical Privacy Theory: Why Client-Side Execution Achieves Epsilon = 0
          </h4>
          <p className="text-xs text-text-gray leading-relaxed mb-3">
            In modern data privacy research, Cynthia Dwork&apos;s differential privacy framework defines privacy loss via parameter <strong>&epsilon; (epsilon)</strong>, where smaller epsilon values indicate greater privacy protection achieved by injecting statistical Laplace or Gaussian noise into centralized database queries.
          </p>
          <p className="text-xs text-text-gray leading-relaxed mb-3">
            In traditional cloud SaaS architectures, achieving meaningful privacy requires deliberately degrading calculation accuracy by injecting synthetic noise into analytics queries.
          </p>
          <p className="text-xs text-text-gray leading-relaxed">
            By shifting computation 100% to the client device, ToolsWizard achieves the theoretical ideal of <strong>&epsilon; = 0 (perfect mathematical privacy)</strong> without sacrificing a single decimal place of mathematical accuracy. Because no central database exists to query, your raw inputs never undergo statistical sampling, information leakage, or re-identification attacks.
          </p>
        </div>
      </section>

      {/* SECTION 9: CHILDREN'S PRIVACY PROTECTION */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-teal-600" /> Children&apos;s Online Privacy Protection (COPPA &amp; GDPR-K Compliance)
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          ToolsWizard is committed to protecting the privacy of young students, minors, and educational learners. We fully adhere to the <strong>Children&apos;s Online Privacy Protection Act (COPPA, 15 U.S.C. &sect;&sect; 6501–6506)</strong> and European GDPR Article 8 provisions governing children&apos;s data.
        </p>
        <p className="text-text-gray leading-relaxed mb-6">
          Our website does not knowingly collect, solicit, or maintain Personally Identifiable Information from children under 13 years of age (or under 16 years of age in applicable European jurisdictions). Because ToolsWizard requires zero account signups, zero email registrations, and zero user profile creations, children and students can freely use our mathematics, geometry, and unit conversion calculators without providing any personal data.
        </p>
        <p className="text-text-gray leading-relaxed">
          If a parent, guardian, or teacher discovers that a child has inadvertently contacted our administration desk and transmitted personal details, please notify us immediately at <strong>privacy@toolswizard.in</strong>. We will promptly delete such correspondence from our support records.
        </p>
      </section>

      {/* SECTION 10: DATA BREACH PROTOCOLS & RESPONSIBLE DISCLOSURE */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <AlertTriangle className="w-7 h-7 text-teal-600" /> Data Breach Impossibility Architecture &amp; Security Escalations
        </h3>
        <p className="text-text-gray leading-relaxed mb-6">
          The most effective way to protect user data from catastrophic database breaches is to never store it in the first place. In traditional cloud SaaS architectures, centralized databases represent attractive high-value targets for ransomware cartels and state-sponsored threat actors.
        </p>
        <p className="text-text-gray leading-relaxed mb-6">
          Because ToolsWizard maintains <strong>zero customer databases, zero user credentials, zero uploaded documents, and zero financial calculation histories</strong>, our attack surface is fundamentally minimized. There is no customer database to exfiltrate, decrypt, or leak on the dark web.
        </p>
        <div className="p-6 bg-gray-50 rounded-2xl border border-text-gray/30 not-prose mb-6">
          <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
            <Lock className="w-5 h-5 text-teal-600" /> Coordinated Security Vulnerability Escalation Desk
          </h4>
          <p className="text-xs text-text-gray leading-relaxed mb-3">
            If you are a cybersecurity researcher and believe you have discovered a client-side vulnerability (such as a DOM XSS vector or prototype pollution flaw), report your findings under our responsible disclosure policy to <strong>security@toolswizard.in</strong> or dispatch a ticket through our <Link href="/contact" className="text-teal-600 font-semibold hover:underline">Engineering Contact Desk</Link>.
          </p>
          <p className="text-xs text-text-gray leading-relaxed">
            Security advisories receive expedited triage within 12 hours. We commit to working collaboratively with ethical researchers under our Safe Harbor legal protection charter.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-text-gray/30 shadow-xs not-prose mb-6">
          <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
            <Server className="w-5 h-5 text-teal-600" /> Third-Party Infrastructure Sub-processor Governance Policy
          </h4>
          <p className="text-xs text-text-gray leading-relaxed mb-3">
            In compliance with GDPR Article 28, ToolsWizard maintains a strict sub-processor governance policy. We engage only Tier-1 enterprise cloud infrastructure providers whose operational scope is strictly restricted to static asset delivery:
          </p>
          <div className="space-y-2 text-xs text-text-gray">
            <div className="p-3 bg-gray-50 rounded-lg border border-text-gray/20">
              <strong className="text-text-dark">Vercel Inc. (Global Edge Content Delivery Network):</strong> Hosts pre-rendered static HTML, CSS stylesheets, Webpack JavaScript bundles, and WebAssembly compilation binaries across its globally distributed edge network. Vercel acts purely as a static content delivery network and possesses zero access to client-side runtime calculations, DOM inputs, or file streams.
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-text-gray/20">
              <strong className="text-text-dark">Google LLC (Google AdSense):</strong> Serves digital advertisements in sandboxed iframe elements. Bound by strict Google Publisher Policies, AdSense scripts are cryptographically prevented from inspecting, capturing, or intercepting mathematical calculation state or file buffer data within the main browsing window.
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl border border-text-gray/30 not-prose mb-6">
          <h4 className="font-bold text-text-dark mb-3 text-base flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-teal-600" /> User Autonomy &amp; Persistent Storage Scrubbing Protocols
          </h4>
          <p className="text-xs text-text-gray leading-relaxed mb-3">
            To guarantee complete user autonomy, ToolsWizard provides full manual control over any client-side persistence mechanisms. While mathematical tools execute in transient RAM, presentation settings such as UI dark/light theme and selected currency are saved to the browser&apos;s local storage for user convenience.
          </p>
          <p className="text-xs text-text-gray leading-relaxed">
            Users may completely wipe all locally cached assets, Web Workers, and preference keys at any time through standard browser controls or by executing a clean cache refresh. Closing the browser tab terminates all active WebAssembly threads and immediately purges document buffers from system memory.
          </p>
        </div>
      </section>

      {/* SECTION 11: FREQUENTLY ASKED QUESTIONS (10 ACCORDIONS) */}
      <section className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark mb-6 flex items-center gap-3">
          <HelpCircle className="w-7 h-7 text-teal-600" /> Frequently Asked Questions: Privacy Architecture &amp; Data Security
        </h3>
        <p className="text-text-gray leading-relaxed mb-8">
          Detailed legal and technical answers addressing data residency, network auditing, advertising cookies, and enterprise compliance:
        </p>

        <div className="space-y-4 not-prose">
          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>Does ToolsWizard send my calculation inputs or uploaded files to a remote server?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              No. ToolsWizard operates on a pure zero-trust, client-side execution model. All calculations, text transformations, PDF compressions, image transcoding, and cryptographic hashing routines execute exclusively within your local web browser&apos;s random access memory (RAM). Your files and numbers never leave your device and are never transmitted to our servers.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>How can I independently verify that no data is leaving my computer?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              You can audit network traffic in real time using native browser tools. Press F12 (or Cmd+Option+I on Mac) to open Developer Tools, select the &quot;Network&quot; panel, and filter by &quot;Fetch/XHR&quot;. Perform any calculation or file conversion. You will verify exactly 0 outbound HTTP POST or payload requests containing your data.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>Does ToolsWizard store my generated passwords or cryptographic keys?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              No. Our Strong Password Generator and Bcrypt/SHA-256 hash engines utilize the native Web Crypto API (crypto.getRandomValues()) directly in your browser. Generated passwords and cryptographic hashes exist only in ephemeral browser memory. When you refresh or close the tab, all generated secrets are permanently wiped.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>Is ToolsWizard compliant with the European Union GDPR?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              Yes, fully compliant. ToolsWizard fulfills GDPR Article 25 (Data Protection by Design and by Default) and Article 5 (Data Minimization). Because we collect zero personally identifiable information (PII) on our servers during tool usage, European users face zero risk of unauthorized cross-border data transfers.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>Can healthcare providers use ToolsWizard calculators without violating HIPAA?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              Yes. Under HIPAA 45 CFR &sect; 164.514, electronic Protected Health Information (ePHI) must not be transmitted to non-compliant cloud repositories. Because our clinical calculators execute entirely inside the healthcare provider&apos;s local web browser without transmitting patient metrics over the internet, ToolsWizard establishes a secure, compliant local computing sandbox.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>What information is stored in my browser&apos;s local storage?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              We store only non-sensitive, user-consented presentation preferences in your browser&apos;s localStorage, such as your light/dark theme preference and default currency symbol. No calculation inputs, personal numbers, or uploaded files are ever saved to local storage. You can clear preferences at any time via localStorage.clear().
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>How do third-party advertising cookies work on ToolsWizard?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              Third-party advertising partners like Google AdSense may use cookies (such as the DART cookie) to serve relevant advertisements based on prior web visits. You can opt out of personalized advertising by visiting Google&apos;s Ad Settings. Advertising scripts run in isolated iframes and cannot read or interact with your calculations or document contents.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>Does ToolsWizard sell user data to commercial data brokers?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              Never. We have never sold, rented, leased, or monetized personal information, and our architectural model prevents such commercialization by design. We do not maintain user databases, user profiles, or tracking dossiers.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>What happens if I email the ToolsWizard support desk directly?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              If you email support@toolswizard.in or submit a form dispatch, we receive your email address, name, and message content. This information is utilized strictly to investigate and resolve your technical inquiry or bug report. Correspondence is never shared with third parties and is permanently purged following resolution.
            </p>
          </details>

          <details className="group bg-white rounded-2xl border border-text-gray/30 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-200 open:shadow-md">
            <summary className="flex items-center justify-between cursor-pointer font-bold text-lg text-text-dark group-open:text-teal-600 select-none">
              <span>How do I contact the Data Protection Officer (DPO) for formal inquiries?</span>
              <span className="text-xl font-bold text-text-gray group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="text-sm text-text-gray mt-4 leading-relaxed">
              For formal regulatory inquiries, legal correspondence, or statutory rights requests under GDPR or CCPA, contact our Data Protection Officer directly at privacy@toolswizard.in or through our central support desk at support@toolswizard.in with &quot;ATTN: Data Protection Officer&quot;.
            </p>
          </details>
        </div>
      </section>

      {/* SECTION 12: DIRECTORY CROSS-NAVIGATION */}
      <section className="mt-12 p-8 bg-gradient-to-br from-teal-50/50 via-white to-gray-50 rounded-3xl border border-text-gray/30 not-prose">
        <h4 className="text-xl font-bold text-text-dark mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-600" /> Explore Companion Computational &amp; Governance Hubs
        </h4>
        <p className="text-sm text-text-gray mb-6 leading-relaxed">
          Discover our full suite of private, browser-based computational engines and support documentation:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/help"
            className="p-4 bg-white rounded-2xl border border-text-gray/40 hover:border-teal-500 hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-text-dark group-hover:text-teal-600 transition-colors flex items-center justify-between">
              Help Center &amp; Guides
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-text-gray mt-1 leading-relaxed">
              Step-by-step user manuals, mathematical formulas, and forensic troubleshooting.
            </p>
          </Link>

          <Link
            href="/contact"
            className="p-4 bg-white rounded-2xl border border-text-gray/40 hover:border-teal-500 hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-text-dark group-hover:text-teal-600 transition-colors flex items-center justify-between">
              Engineering Support
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-text-gray mt-1 leading-relaxed">
              Algorithmic discrepancy reports, security disclosures, and new tool RFCs.
            </p>
          </Link>

          <Link
            href="/calculator"
            className="p-4 bg-white rounded-2xl border border-text-gray/40 hover:border-teal-500 hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-text-dark group-hover:text-teal-600 transition-colors flex items-center justify-between">
              Calculators Hub
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-text-gray mt-1 leading-relaxed">
              150+ computational engines across finance, health, construction, and mathematics.
            </p>
          </Link>

          <Link
            href="/tools"
            className="p-4 bg-white rounded-2xl border border-text-gray/40 hover:border-teal-500 hover:shadow-md transition-all group"
          >
            <div className="font-bold text-sm text-text-dark group-hover:text-teal-600 transition-colors flex items-center justify-between">
              Developer &amp; Web Tools
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-text-gray mt-1 leading-relaxed">
              Text tools, JSON formatters, cryptographic encoders, PDF, and design engines.
            </p>
          </Link>
        </div>
      </section>

    </article>
  );
}
