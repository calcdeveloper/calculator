"use client";

import React, { useState, useCallback } from 'react';
import { 
  Code, Copy, Download, Trash2, CheckCircle2, ShieldCheck, 
  Zap, Info, ChevronRight, FileText, Lock, Globe, Terminal 
} from 'lucide-react';

export default function Base64DecoderClient() {
  const [base64Input, setBase64Input] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleDecode = () => {
    if (!base64Input.trim()) return;
    setIsProcessing(true);
    setError(null);

    try {
      const decoded = atob(base64Input);
      setTextOutput(decoded);
    } catch (err) {
      setError("Decoding failed. Please check your Base64 input for errors.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(textOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([textOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'decoded_text.txt';
    a.click();
  };

  const clearAll = () => {
    setBase64Input('');
    setTextOutput('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">Base64 Decoder</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight">
            Base64 Decoder
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Decode Base64 strings to original text instantly. Secure, fast, and processed entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-enc-white rounded-3xl shadow-2xl border border-enc-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Code size={20} className="text-enc-primary" /> Base64 Input
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea 
                value={base64Input}
                onChange={(e) => setBase64Input(e.target.value)}
                placeholder='Paste your Base64 string here (e.g., "SGVsbG8gV29ybGQ=")'
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <FileText size={20} className="text-enc-primary" /> Decoded Text
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!textOutput}
                    onClick={handleCopy}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg/50"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 className="text-emerald-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!textOutput}
                    onClick={handleDownload}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg/50"
                    title="Download Text"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <textarea 
                readOnly
                value={textOutput}
                placeholder="Decoded text will appear here..."
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm outline-none resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleDecode}
              disabled={!base64Input || isProcessing}
              className="w-full md:w-auto bg-enc-primary hover:bg-enc-primaryDark disabled:bg-enc-gray text-enc-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-enc-primary/20 flex items-center justify-center gap-3"
            >
              {isProcessing ? "Decoding..." : <><Code size={22} /> Decode to Text</>}
            </button>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center gap-3 animate-pulse">
              <Info size={20} /> {error}
            </div>
          )}
        </div>

        {/* Informational Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Your Base64 strings are processed locally. We never transmit your data to our servers, keeping your sensitive information private and secure.</p>
          </div>
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Decoding</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Our optimized algorithm converts Base64 to text in milliseconds, handling large amounts of data without any delay or lag.</p>
          </div>
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-enc-primary/10 text-enc-primary rounded-xl flex items-center justify-center mb-6"><Terminal /></div>
            <h3 className="text-xl font-bold mb-3">Developer-Friendly</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Perfect for decoding API responses, debugging encoded data, or extracting information from Base64-encoded files.</p>
          </div>
        </section>

        {/* Long-form SEO Content */}
        <article className="prose prose-slate max-w-none bg-enc-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-enc-gray">
          <h2 className="text-3xl font-bold text-enc-dark">Introduction to Base64 Decoding</h2>
          <p>
            Base64 decoding is the essential process of converting Base64-encoded strings back to their original binary or text format. Whether you're a developer debugging API responses, a security professional analyzing encoded data, or simply need to decode Base64 strings for personal use, our <strong>Base64 decoder</strong> provides a fast, secure, and user-friendly solution for all your decoding needs.
          </p>

          <p>
            Base64 encoding is widely used in email systems, web applications, and data transmission protocols to safely represent binary data as text. When you receive Base64-encoded data, you need a reliable decoder to convert it back to readable format. Our free online Base64 decoder makes this process effortless, requiring no installation or technical knowledge.
          </p>

          <h3 className="text-2xl font-bold mt-10">Benefits of Using Our Base64 Decoder</h3>
          <p>
            Choosing the right Base64 decoder can significantly impact your workflow efficiency and data security. Our tool offers several key advantages that set it apart from other online converters:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-enc-primary/5 rounded-2xl border border-enc-primary/10">
              <h4 className="font-bold text-enc-primary mb-3 flex items-center gap-2"><Lock size={18} /> Complete Privacy</h4>
              <ul className="text-sm space-y-2 text-enc-gray">
                <li>• 100% browser-side processing</li>
                <li>• No data sent to servers</li>
                <li>• No registration required</li>
                <li>• Zero data retention</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2"><Zap size={18} /> Lightning Fast</h4>
              <ul className="text-sm space-y-2 text-enc-gray">
                <li>• Instant decoding results</li>
                <li>• Handles large Base64 strings</li>
                <li>• No upload/download delays</li>
                <li>• Optimized JavaScript performance</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">How to Use Our Base64 Decoder</h3>
          <p>
            Using our Base64 decoder is incredibly simple, designed for both technical and non-technical users. The intuitive interface requires just three simple steps to convert your Base64 strings to readable text:
          </p>

          <ol className="space-y-4 text-enc-gray">
            <li><strong>Step 1: Paste Base64 String</strong> - Simply paste your Base64-encoded string into the input field. This can be data from API responses, email attachments, or any other Base64-encoded content.</li>
            <li><strong>Step 2: Click Decode</strong> - Press the "Decode to Text" button. Our algorithm will instantly process your Base64 string and generate the decoded output.</li>
            <li><strong>Step 3: Copy or Download</strong> - Use the copy button to copy the decoded text to your clipboard, or download it as a text file for future use.</li>
          </ol>

          <h3 className="text-2xl font-bold mt-10">Key Features of Our Tool</h3>
          <p>
            Our Base64 decoder is packed with features designed to enhance your decoding experience and provide maximum utility for various use cases:
          </p>

          <ul className="space-y-3 text-enc-gray">
            <li><strong>Real-time Processing:</strong> See your decoded text instantly as you decode, with no waiting or loading times.</li>
            <li><strong>Copy to Clipboard:</strong> One-click copying makes it easy to transfer your decoded data to other applications.</li>
            <li><strong>Download Option:</strong> Save your decoded text as a text file for documentation or sharing purposes.</li>
            <li><strong>Clear Function:</strong> Quickly reset the tool to start fresh with new data.</li>
            <li><strong>Error Handling:</strong> Clear error messages help you identify and fix any decoding issues.</li>
            <li><strong>Responsive Design:</strong> Works seamlessly on desktop, tablet, and mobile devices.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10">Common Use Cases for Base64 Decoding</h3>
          <p>
            Base64 decoding serves numerous practical purposes across different industries and applications. Understanding these use cases can help you leverage our tool effectively:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-8 my-8">
            <div className="p-6 bg-enc-bg/30 rounded-2xl border border-enc-gray">
              <h4 className="font-bold text-enc-dark mb-3 flex items-center gap-2"><Globe size={18} /> Web Development</h4>
              <ul className="text-sm space-y-2 text-enc-gray">
                <li>• Decoding API responses</li>
                <li>• Debugging encoded data</li>
                <li>• Extracting embedded images</li>
                <li>• Parsing JSON with Base64 fields</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2"><Terminal size={18} /> Data Analysis</h4>
              <ul className="text-sm space-y-2 text-enc-gray">
                <li>• Analyzing email attachments</li>
                <li>• Decoding HTTP authentication</li>
                <li>• Processing XML data</li>
                <li>• Inspecting encoded files</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">Why Choose Our Base64 Decoder</h3>
          <p>
            With numerous Base64 decoders available online, you might wonder what makes our tool the superior choice. The answer lies in our commitment to privacy, performance, and user experience:
          </p>

          <p>
            Unlike many online converters that require you to upload data to their servers, our Base64 decoder operates entirely within your browser. This means your sensitive information—whether it's API keys, authentication tokens, or personal data—never leaves your device. This client-side processing approach not only ensures maximum security but also eliminates network latency, providing instant results regardless of your internet connection speed.
          </p>

          <p>
            Furthermore, our tool is completely free with no hidden costs, registration requirements, or usage limits. Whether you need to decode a single string or process large batches of Base64 data, our Base64 decoder handles everything without any restrictions. The clean, intuitive interface requires no learning curve, making it accessible to users of all technical backgrounds.
          </p>

          <h3 className="text-2xl font-bold mt-10">Frequently Asked Questions</h3>
          <div className="not-prose space-y-4 mt-6">
            {[
              { q: "What is Base64 decoding used for?", a: "Base64 decoding is used to convert Base64-encoded strings back to their original format. It's commonly used to decode API responses, email attachments, authentication tokens, and embedded images in HTML/CSS." },
              { q: "Is Base64 decoding the same as decryption?", a: "No, Base64 decoding is not decryption. It's simply reversing the encoding process. Anyone with the Base64 string can decode it. For security, use proper encryption methods alongside Base64 encoding." },
              { q: "Can I decode Base64 with special characters?", a: "Yes, our Base64 decoder handles all valid Base64 strings including those with special characters, line breaks, and URL-safe variants. The decoding process preserves all data accurately." },
              { q: "What's the maximum Base64 string length I can decode?", a: "There's no strict limit on Base64 string length. Our decoder can handle large amounts of Base64 data efficiently. Performance depends on your browser's capabilities and available memory." },
              { q: "Is my decoded data stored on your servers?", a: "Absolutely not. All decoding happens locally in your browser. We never store, transmit, or have access to your input or output data. Your information remains completely private." },
              { q: "What if my Base64 string is invalid?", a: "If your Base64 string is invalid or corrupted, our tool will display a clear error message. Common issues include missing padding characters, incorrect characters, or incomplete strings." }
            ].map((faq, i) => (
              <details key={i} className="group border border-enc-gray rounded-xl p-5 bg-enc-bg/30 transition-all hover:bg-white hover:border-enc-primary">
                <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-enc-dark">
                  {faq.q}
                  <span className="text-enc-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-enc-gray text-sm leading-relaxed border-t border-enc-gray pt-4">{faq.a}</p>
              </details>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-10">Conclusion</h3>
          <p>
            Base64 decoding is an essential skill for anyone working with encoded data in modern computing. Whether you're a developer debugging API responses, a security professional analyzing authentication tokens, or simply need to decode Base64 strings for personal use, our free online decoder provides the perfect solution.
          </p>

          <p>
            With its focus on privacy, speed, and ease of use, our Base64 decoder stands out as the ideal choice for all your decoding needs. Experience the convenience of instant, secure decoding without any installation or registration. Try our tool today and see how simple Base64 decoding can be.
          </p>
        </article>
      </main>

      <footer className="bg-enc-white border-t border-enc-gray py-8 px-6">
        <p className="text-sm text-enc-gray text-center">© 2026 CalcPilot - Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
