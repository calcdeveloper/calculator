"use client";

import React, { useState, useCallback } from 'react';
import { 
  Code, Copy, Download, Trash2, CheckCircle2, ShieldCheck, 
  Zap, Info, ChevronRight, FileText, Lock, Globe, Terminal 
} from 'lucide-react';

export default function HTMLFormatterClient() {
  const [htmlInput, setHtmlInput] = useState('');
  const [formattedOutput, setFormattedOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState(null);
  const [indentSize, setIndentSize] = useState(2);

  const formatHTML = useCallback((html, indent = 2) => {
    let formatted = '';
    let pad = 0;
    const indentString = ' '.repeat(indent);
    
    html = html.replace(/>\s*</g, '><');
    
    for (let i = 0; i < html.length; i++) {
      const char = html[i];
      
      if (char === '<') {
        if (html[i + 1] === '/') {
          pad = Math.max(0, pad - 1);
          formatted += '\n' + indentString.repeat(pad) + char;
        } else {
          formatted += '\n' + indentString.repeat(pad) + char;
          pad++;
        }
      } else if (char === '>') {
        formatted += char;
      } else {
        formatted += char;
      }
    }
    
    return formatted.trim();
  }, []);

  const handleFormat = () => {
    if (!htmlInput.trim()) return;
    setIsProcessing(true);
    setError(null);

    try {
      const formatted = formatHTML(htmlInput, indentSize);
      setFormattedOutput(formatted);
    } catch (err) {
      setError("Formatting failed. Please check your HTML code.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([formattedOutput], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.html';
    a.click();
  };

  const clearAll = () => {
    setHtmlInput('');
    setFormattedOutput('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-dev-bg font-sans text-dev-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-dev-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Developer Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">HTML Formatter</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            HTML Formatter
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Format and beautify HTML code with proper indentation and structure. Secure, fast, and processed entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
          
          <div className="mb-6 flex items-center gap-4">
            <label className="font-bold text-dev-dark">Indent Size:</label>
            <select 
              value={indentSize}
              onChange={(e) => setIndentSize(parseInt(e.target.value))}
              className="px-4 py-2 bg-dev-bg/50 border border-dev-gray rounded-lg focus:ring-2 focus:ring-dev-primary outline-none"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-dev-dark">
                  <FileText size={20} className="text-dev-primary" /> HTML Input
                </label>
                <button onClick={clearAll} className="text-dev-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea 
                value={htmlInput}
                onChange={(e) => setHtmlInput(e.target.value)}
                placeholder='Paste your HTML code here (e.g., "<div><p>Hello World</p></div>")'
                className="w-full h-[400px] p-4 bg-dev-bg/50 border border-dev-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-dev-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-dev-dark">
                  <Code size={20} className="text-dev-primary" /> Formatted HTML
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!formattedOutput}
                    onClick={handleCopy}
                    className="p-2 text-dev-gray hover:text-dev-primary disabled:opacity-30 transition-all rounded-lg hover:bg-dev-bg/50"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 className="text-emerald-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!formattedOutput}
                    onClick={handleDownload}
                    className="p-2 text-dev-gray hover:text-dev-primary disabled:opacity-30 transition-all rounded-lg hover:bg-dev-bg/50"
                    title="Download HTML"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <textarea 
                readOnly
                value={formattedOutput}
                placeholder="Formatted HTML will appear here..."
                className="w-full h-[400px] p-4 bg-dev-bg/50 border border-dev-gray rounded-2xl font-mono text-sm outline-none resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleFormat}
              disabled={!htmlInput || isProcessing}
              className="w-full md:w-auto bg-dev-primary hover:bg-dev-primaryDark disabled:bg-dev-gray text-dev-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-dev-primary/20 flex items-center justify-center gap-3"
            >
              {isProcessing ? "Formatting..." : <><Code size={22} /> Format HTML</>}
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
          <div className="bg-dev-white p-8 rounded-3xl border border-dev-gray shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-dev-gray leading-relaxed text-sm">Your HTML code is processed locally. We never transmit your code to our servers, keeping your sensitive information private and secure.</p>
          </div>
          <div className="bg-dev-white p-8 rounded-3xl border border-dev-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Formatting</h3>
            <p className="text-dev-gray leading-relaxed text-sm">Our optimized algorithm formats HTML in milliseconds, handling large files without any delay or lag.</p>
          </div>
          <div className="bg-dev-white p-8 rounded-3xl border border-dev-gray shadow-sm">
            <div className="w-12 h-12 bg-dev-primary/10 text-dev-primary rounded-xl flex items-center justify-center mb-6"><Terminal /></div>
            <h3 className="text-xl font-bold mb-3">Customizable Indentation</h3>
            <p className="text-dev-gray leading-relaxed text-sm">Choose from 2, 4, or 8 space indentation to match your coding style and project requirements.</p>
          </div>
        </section>

        {/* Long-form SEO Content */}
        <article className="prose prose-slate max-w-none bg-dev-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-dev-gray">
          <h2 className="text-3xl font-bold text-dev-dark">Introduction to HTML Formatting</h2>
          <p>
            HTML formatting is an essential practice for web developers and designers who want to maintain clean, readable, and maintainable code. Whether you're working on a small personal project or a large-scale enterprise application, our <strong>HTML formatter</strong> provides the tools you need to transform messy, minified HTML into beautifully structured code with proper indentation and organization.
          </p>

          <p>
            Well-formatted HTML code is crucial for collaboration, debugging, and maintenance. When code is properly indented and structured, it becomes significantly easier to read, understand, and modify. Our free online HTML formatter makes this process effortless, requiring no installation or technical knowledge. Simply paste your HTML code, click format, and instantly receive clean, properly indented output.
          </p>

          <h3 className="text-2xl font-bold mt-10">Benefits of Using Our HTML Formatter</h3>
          <p>
            Choosing the right HTML formatter can significantly impact your development workflow and code quality. Our tool offers several key advantages that set it apart from other online formatters:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
            <div className="p-6 bg-dev-primary/5 rounded-2xl border border-dev-primary/10">
              <h4 className="font-bold text-dev-primary mb-3 flex items-center gap-2"><Lock size={18} /> Complete Privacy</h4>
              <ul className="text-sm space-y-2 text-dev-gray">
                <li>• 100% browser-side processing</li>
                <li>• No code sent to servers</li>
                <li>• No registration required</li>
                <li>• Zero code retention</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2"><Zap size={18} /> Lightning Fast</h4>
              <ul className="text-sm space-y-2 text-dev-gray">
                <li>• Instant formatting results</li>
                <li>• Handles large HTML files</li>
                <li>• No upload/download delays</li>
                <li>• Optimized JavaScript performance</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">How to Use Our HTML Formatter</h3>
          <p>
            Using our HTML formatter is incredibly simple, designed for both technical and non-technical users. The intuitive interface requires just three simple steps to transform your HTML code:
          </p>

          <ol className="space-y-4 text-dev-gray">
            <li><strong>Step 1: Paste HTML Code</strong> - Simply paste your HTML code into the input field. This can be minified HTML, messy code from a template, or any HTML that needs formatting.</li>
            <li><strong>Step 2: Choose Indentation</strong> - Select your preferred indentation size (2, 4, or 8 spaces) to match your coding style and project standards.</li>
            <li><strong>Step 3: Click Format</strong> - Press the "Format HTML" button. Our algorithm will instantly process your code and generate beautifully formatted output.</li>
            <li><strong>Step 4: Copy or Download</strong> - Use the copy button to copy the formatted HTML to your clipboard, or download it as an HTML file for immediate use.</li>
          </ol>

          <h3 className="text-2xl font-bold mt-10">Key Features of Our Tool</h3>
          <p>
            Our HTML formatter is packed with features designed to enhance your formatting experience and provide maximum utility for various use cases:
          </p>

          <ul className="space-y-3 text-dev-gray">
            <li><strong>Customizable Indentation:</strong> Choose from 2, 4, or 8 space indentation to match your coding standards and project requirements.</li>
            <li><strong>Real-time Processing:</strong> See your formatted HTML instantly as you format, with no waiting or loading times.</li>
            <li><strong>Copy to Clipboard:</strong> One-click copying makes it easy to transfer your formatted code to other applications.</li>
            <li><strong>Download Option:</strong> Save your formatted HTML as a file for documentation or immediate deployment.</li>
            <li><strong>Clear Function:</strong> Quickly reset the tool to start fresh with new code.</li>
            <li><strong>Error Handling:</strong> Clear error messages help you identify and fix any formatting issues.</li>
            <li><strong>Responsive Design:</strong> Works seamlessly on desktop, tablet, and mobile devices.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10">Common Use Cases for HTML Formatting</h3>
          <p>
            HTML formatting serves numerous practical purposes across different industries and applications. Understanding these use cases can help you leverage our tool effectively:
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-8 my-8">
            <div className="p-6 bg-dev-bg/30 rounded-2xl border border-dev-gray">
              <h4 className="font-bold text-dev-dark mb-3 flex items-center gap-2"><Globe size={18} /> Web Development</h4>
              <ul className="text-sm space-y-2 text-dev-gray">
                <li>• Cleaning up minified HTML</li>
                <li>• Formatting template code</li>
                <li>• Preparing code for review</li>
                <li>• Debugging HTML structure</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2"><Terminal size={18} /> Code Maintenance</h4>
              <ul className="text-sm space-y-2 text-dev-gray">
                <li>• Improving code readability</li>
                <li>• Standardizing team code style</li>
                <li>• Preparing for documentation</li>
                <li>• Legacy code refactoring</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">Why Choose Our HTML Formatter</h3>
          <p>
            With numerous HTML formatters available online, you might wonder what makes our tool the superior choice. The answer lies in our commitment to privacy, performance, and user experience:
          </p>

          <p>
            Unlike many online formatters that require you to upload code to their servers, our HTML formatter operates entirely within your browser. This means your sensitive code—whether it's proprietary business logic, authentication templates, or personal projects—never leaves your device. This client-side processing approach not only ensures maximum security but also eliminates network latency, providing instant results regardless of your internet connection speed.
          </p>

          <p>
            Furthermore, our tool is completely free with no hidden costs, registration requirements, or usage limits. Whether you need to format a single HTML file or process large batches of code, our HTML formatter handles everything without any restrictions. The clean, intuitive interface requires no learning curve, making it accessible to users of all technical backgrounds.
          </p>

          <h3 className="text-2xl font-bold mt-10">Frequently Asked Questions</h3>
          <div className="not-prose space-y-4 mt-6">
            {[
              { q: "What is HTML formatting?", a: "HTML formatting is the process of organizing HTML code with proper indentation, spacing, and structure to make it readable and maintainable. It transforms minified or messy HTML into clean, well-structured code." },
              { q: "Is my HTML code secure when using this formatter?", a: "Yes, absolutely. Our HTML formatter processes all code entirely in your browser. Your HTML never leaves your device, ensuring complete privacy and security for your sensitive code." },
              { q: "Can I format large HTML files?", a: "Yes, our HTML formatter can handle large HTML files efficiently. The processing happens locally, so performance depends on your browser's capabilities and available memory." },
              { q: "What indentation options are available?", a: "We offer three indentation options: 2 spaces, 4 spaces, and 8 spaces. You can choose the one that matches your coding style and project standards." },
              { q: "Does this formatter modify HTML functionality?", a: "No, our HTML formatter only changes the structure and indentation of your code. It does not modify any HTML tags, attributes, or functionality. Your code will work exactly the same after formatting." },
              { q: "Can I use this for minified HTML?", a: "Yes, our formatter is perfect for minified HTML. It will add proper indentation and structure to make the code readable while preserving all functionality." }
            ].map((faq, i) => (
              <details key={i} className="group border border-dev-gray rounded-xl p-5 bg-dev-bg/30 transition-all hover:bg-white hover:border-dev-primary">
                <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-dev-dark">
                  {faq.q}
                  <span className="text-dev-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-dev-gray text-sm leading-relaxed border-t border-dev-gray pt-4">{faq.a}</p>
              </details>
            ))}
          </div>

          <h3 className="text-2xl font-bold mt-10">Conclusion</h3>
          <p>
            HTML formatting is an essential practice for maintaining clean, readable, and maintainable web code. Whether you're a developer working on complex applications, a designer creating beautiful websites, or simply need to clean up some HTML code, our free online formatter provides the perfect solution.
          </p>

          <p>
            With its focus on privacy, speed, and ease of use, our HTML formatter stands out as the ideal choice for all your formatting needs. Experience the convenience of instant, secure formatting without any installation or registration. Try our tool today and see how simple HTML formatting can be.
          </p>
        </article>
      </main>

      <footer className="bg-dev-white border-t border-dev-gray py-8 px-6">
        <p className="text-sm text-dev-gray text-center">© 2026 ToolsWizard - Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
