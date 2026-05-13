"use client";

import React, { useState, useCallback } from 'react';
import { 
  Code, Copy, Download, Trash2, CheckCircle2, ShieldCheck, 
  Zap, Info, ChevronRight, FileText, Lock, Globe, Terminal 
} from 'lucide-react';

export default function Base64EncoderClient() {
  const [textInput, setTextInput] = useState('');
  const [base64Output, setBase64Output] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleEncode = () => {
    if (!textInput.trim()) return;
    setIsProcessing(true);
    setError(null);

    try {
      const encoded = btoa(textInput);
      setBase64Output(encoded);
    } catch (err) {
      setError("Encoding failed. Please check your input text.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(base64Output);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([base64Output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'encoded_base64.txt';
    a.click();
  };

  const clearAll = () => {
    setTextInput('');
    setBase64Output('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">Base64 Encoder</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight">
            Base64 Encoder
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert text or binary data to Base64 format instantly. Secure, fast, and processed entirely in your browser.
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
                  <FileText size={20} className="text-enc-primary" /> Text Input
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea 
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder='Enter text to encode to Base64 (e.g., "Hello World")'
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Code size={20} className="text-enc-primary" /> Base64 Output
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!base64Output}
                    onClick={handleCopy}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg/50"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 className="text-emerald-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!base64Output}
                    onClick={handleDownload}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg/50"
                    title="Download Base64"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <textarea 
                readOnly
                value={base64Output}
                placeholder="Base64 encoded output will appear here..."
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm outline-none resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleEncode}
              disabled={!textInput || isProcessing}
              className="w-full md:w-auto bg-enc-primary hover:bg-enc-primaryDark disabled:bg-enc-gray text-enc-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-enc-primary/20 flex items-center justify-center gap-3"
            >
              {isProcessing ? "Encoding..." : <><Code size={22} /> Encode to Base64</>}
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
            <p className="text-enc-gray leading-relaxed text-sm">Your text is processed locally. We never transmit your data to our servers, keeping your sensitive information private and secure.</p>
          </div>
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Encoding</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Our optimized algorithm converts text to Base64 in milliseconds, handling large amounts of data without any delay or lag.</p>
          </div>
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-enc-primary/10 text-enc-primary rounded-xl flex items-center justify-center mb-6"><Terminal /></div>
            <h3 className="text-xl font-bold mb-3">Developer-Friendly</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Perfect for encoding data for HTTP requests, embedding images in HTML/CSS, or preparing data for APIs and web services.</p>
          </div>
        </section>

        {/* Long-form SEO Content */}
        <article className="prose prose-slate max-w-none bg-enc-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-enc-gray">
          <h2 className="text-3xl font-bold text-enc-dark">Introduction to Base64 Encoding</h2>
          <p>
            Base64 encoding is a fundamental method for converting binary data into an ASCII string format, making it safe for transmission over systems that only support text. Whether you're a developer preparing data for API requests, a security professional encoding sensitive information, or a data analyst working with various file formats, our <strong>Base64 encoder</strong> provides a fast, secure, and user-friendly solution for all your encoding needs.
          </p>

          <p>
            At its core, Base64 works by dividing binary data into groups of 6 bits, which are then mapped to a set of 64 printable ASCII characters. This encoding scheme is widely used in email systems (MIME), for embedding images in HTML and CSS, and in authentication protocols like Basic Authentication. Our free online Base64 encoder makes this process effortless, requiring no installation or technical knowledge.
          </p>

          <h3 className="text-2xl font-bold mt-10">Benefits of Using Our Base64 Encoder</h3>
          <p>
            Choosing the right Base64 encoder can significantly impact your workflow efficiency and data security. Our tool offers several key advantages that set it apart from other online converters:
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
                <li>• Instant encoding results</li>
                <li>• Handles large text blocks</li>
                <li>• No upload/download delays</li>
                <li>• Optimized JavaScript performance</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">How to Use Our Base64 Encoder</h3>
          <p>
            Using our Base64 encoder is incredibly simple, designed for both technical and non-technical users. The intuitive interface requires just three simple steps to convert your text to Base64 format:
          </p>

          <ol className="space-y-4 text-enc-gray">
            <li><strong>Step 1: Enter Your Text</strong> - Simply type or paste your text into the input field. This can be plain text, JSON data, HTML code, or any other string content you need to encode.</li>
            <li><strong>Step 2: Click Encode</strong> - Press the "Encode to Base64" button. Our algorithm will instantly process your text and generate the Base64 output.</li>
            <li><strong>Step 3: Copy or Download</strong> - Use the copy button to copy the Base64 string to your clipboard, or download it as a text file for future use.</li>
          </ol>

          <h3 className="text-2xl font-bold mt-10">Key Features of Our Tool</h3>
          <p>
            Our Base64 encoder is packed with features designed to enhance your encoding experience and provide maximum utility for various use cases:
          </p>

          <ul className="space-y-3 text-enc-gray">
            <li><strong>Real-time Processing:</strong> See your Base64 output instantly as you encode, with no waiting or loading times.</li>
            <li><strong>Copy to Clipboard:</strong> One-click copying makes it easy to transfer your encoded data to other applications.</li>
            <li><strong>Download Option:</strong> Save your Base64 output as a text file for documentation or sharing purposes.</li>
            <li><strong>Clear Function:</strong> Quickly reset the tool to start fresh with new data.</li>
            <li><strong>Error Handling:</strong> Clear error messages help you identify and fix any encoding issues.</li>
            <li><strong>Responsive Design:</strong> Works seamlessly on desktop, tablet, and mobile devices.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10">Common Use Cases for Base64 Encoding</h3>
          <p>
            Base64 encoding serves numerous practical purposes across different industries and applications. Understanding these use cases can help you leverage our tool effectively:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-8 my-8">
            <div className="p-6 bg-enc-bg/30 rounded-2xl border border-enc-gray">
              <h4 className="font-bold text-enc-dark mb-3 flex items-center gap-2"><Globe size={18} /> Web Development</h4>
              <ul className="text-sm space-y-2 text-enc-gray">
                <li>• Embedding images in HTML/CSS</li>
                <li>• Encoding API request data</li>
                <li>• Storing binary data in JSON</li>
                <li>• Creating data URIs</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2"><Terminal size={18} /> Data Transmission</h4>
              <ul className="text-sm space-y-2 text-enc-gray">
                <li>• Email attachments (MIME)</li>
                <li>• HTTP authentication</li>
                <li>• XML data encoding</li>
                <li>• URL-safe data transfer</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">Why Choose Our Base64 Encoder</h3>
          <p>
            With numerous Base64 encoders available online, you might wonder what makes our tool the superior choice. The answer lies in our commitment to privacy, performance, and user experience:
          </p>

          <p>
            Unlike many online converters that require you to upload data to their servers, our Base64 encoder operates entirely within your browser. This means your sensitive information—whether it's passwords, API keys, or personal data—never leaves your device. This client-side processing approach not only ensures maximum security but also eliminates network latency, providing instant results regardless of your internet connection speed.
          </p>

          <p>
            Furthermore, our tool is completely free with no hidden costs, registration requirements, or usage limits. Whether you need to encode a single string or process large batches of data, our Base64 encoder handles everything without any restrictions. The clean, intuitive interface requires no learning curve, making it accessible to users of all technical backgrounds.
          </p>

          <h3 className="text-2xl font-bold mt-10">Frequently Asked Questions</h3>
          <div className="not-prose space-y-4 mt-6">
            {[
              { q: "What is Base64 encoding used for?", a: "Base64 encoding is commonly used to encode binary data for transmission over text-based protocols like email, HTTP, and XML. It's also used to embed images in HTML/CSS and store binary data in JSON." },
              { q: "Is Base64 encryption?", a: "No, Base64 is not encryption. It's an encoding scheme that converts binary data to text format. Anyone with the Base64 string can decode it back to the original data. For security, use proper encryption methods." },
              { q: "Can I encode special characters and emojis?", a: "Yes, our Base64 encoder handles all Unicode characters including special characters, emojis, and non-English text. The encoding process preserves all characters accurately." },
              { q: "What's the maximum text length I can encode?", a: "There's no strict limit on text length. Our encoder can handle large amounts of text efficiently. Performance depends on your browser's capabilities and available memory." },
              { q: "Is my encoded data stored on your servers?", a: "Absolutely not. All encoding happens locally in your browser. We never store, transmit, or have access to your input or output data. Your information remains completely private." },
              { q: "Can I use this for encoding files?", a: "While this tool is designed for text encoding, you can use it to encode small file contents by pasting the file data as text. For larger files, consider using specialized file-to-Base64 converters." }
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
            Base64 encoding remains an essential tool in modern computing, bridging the gap between binary data and text-based systems. Whether you're a developer embedding images in web pages, a security professional encoding sensitive data, or simply need to convert text to Base64 format, our free online encoder provides the perfect solution.
          </p>

          <p>
            With its focus on privacy, speed, and ease of use, our Base64 encoder stands out as the ideal choice for all your encoding needs. Experience the convenience of instant, secure encoding without any installation or registration. Try our tool today and see how simple Base64 encoding can be.
          </p>
        </article>
      </main>

      <footer className="bg-enc-white border-t border-enc-gray py-8 px-6">
        <p className="text-sm text-enc-gray text-center">© 2026 CalcPilot - Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
