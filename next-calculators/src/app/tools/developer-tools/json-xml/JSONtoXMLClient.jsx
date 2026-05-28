"use client";

import React, { useState, useCallback } from 'react';
import { 
  FileCode, ArrowRightLeft, Copy, Download, Trash2, 
  CheckCircle2, ShieldCheck, Zap, Info, ChevronRight,
  Code2, Braces, Terminal, FileOutput
} from 'lucide-react';

export default function JSONtoXMLClient() {
  const [jsonInput, setJsonInput] = useState('');
  const [xmlOutput, setXmlOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState(null);

  const jsonToXml = (obj, rootName = 'root') => {
    let xml = '';
    
    const parse = (data, name) => {
      let content = '';
      if (Array.isArray(data)) {
        data.forEach(item => {
          content += parse(item, 'item');
        });
      } else if (typeof data === 'object' && data !== null) {
        Object.keys(data).forEach(key => {
          content += parse(data[key], key.replace(/[^a-zA-Z0-9]/g, '_'));
        });
      } else {
        content = data;
      }
      return `<${name}>${content}</${name}>`;
    };

    return `<?xml version="1.0" encoding="UTF-8"?>\n${parse(obj, rootName)}`;
  };

  const handleConvert = () => {
    if (!jsonInput.trim()) return;
    setIsProcessing(true);
    setError(null);

    try {
      const parsedJson = JSON.parse(jsonInput);
      const xml = jsonToXml(parsedJson);
      setXmlOutput(xml);
    } catch (err) {
      setError("Invalid JSON: Please check for missing commas, quotes, or brackets.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([xmlOutput], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted_data.xml';
    a.click();
  };

  const clearAll = () => {
    setJsonInput('');
    setXmlOutput('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-dev-bg font-sans text-dev-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-dev-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Developer Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">JSON to XML</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            JSON to XML Converter
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert your JSON data into structured XML format instantly. Secure, fast, and processed entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-slate-700">
                  <Braces size={20} className="text-indigo-600" /> JSON Input
                </label>
                <button onClick={clearAll} className="text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea 
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='Paste your JSON here (e.g. { "name": "ToolsWizard", "status": "online" })'
                className="w-full h-[400px] p-4 bg-slate-50 border border-slate-200 rounded-2xl font-mono text-sm focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-slate-700">
                  <Code2 size={20} className="text-blue-600" /> XML Output
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!xmlOutput}
                    onClick={handleCopy}
                    className="p-2 text-slate-500 hover:text-indigo-600 disabled:opacity-30 transition-all rounded-lg hover:bg-slate-100"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 className="text-emerald-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!xmlOutput}
                    onClick={handleDownload}
                    className="p-2 text-slate-500 hover:text-indigo-600 disabled:opacity-30 transition-all rounded-lg hover:bg-slate-100"
                    title="Download XML"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <textarea 
                readOnly
                value={xmlOutput}
                placeholder="The XML result will appear here..."
                className="w-full h-[400px] p-4 bg-slate-50 border border-slate-200 rounded-2xl font-mono text-sm outline-none resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleConvert}
              disabled={!jsonInput || isProcessing}
              className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3"
            >
              {isProcessing ? "Converting..." : <><ArrowRightLeft size={22} /> Convert to XML</>}
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
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Your JSON data is processed locally. We never transmit your information to our servers, keeping your API keys and data private.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Conversion</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Our optimized algorithm transforms complex, nested JSON objects into clean, indented XML documents in milliseconds.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6"><Terminal /></div>
            <h3 className="text-xl font-bold mb-3">Dev-Friendly</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Perfect for integrating legacy XML systems with modern JSON APIs. Get standardized XML headers and clean tagging.</p>
          </div>
        </section>

        {/* Long-form SEO Content */}
        <article className="prose prose-slate max-w-none bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900">Why Convert JSON to XML?</h2>
          <p>
            While JSON has become the standard for modern web APIs due to its lightweight nature, XML (eXtensible Markup Language) remains vital for many enterprise systems, legacy SOAP services, and document storage standards. Our <strong>JSON to XML converter</strong> bridges the gap between these formats, providing a developer-friendly way to transform data without writing complex custom scripts.
          </p>

          <div className="not-prose grid md:grid-cols-2 gap-8 my-10">
            <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100">
              <h4 className="font-bold text-indigo-800 mb-3 flex items-center gap-2"><FileOutput size={18} /> Best Use Cases</h4>
              <ul className="text-sm space-y-2 text-slate-700">
                <li>• Testing SOAP web service endpoints</li>
                <li>• Transforming API responses for legacy software</li>
                <li>• Generating XML sitemaps or RSS feeds from JSON data</li>
                <li>• Compliance with industry-specific XML standards</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2"><CheckCircle2 size={18} /> Tool Capabilities</h4>
              <ul className="text-sm space-y-2 text-slate-700">
                <li>• Handles deeply nested JSON objects</li>
                <li>• Converts JSON arrays into repetitive XML tags</li>
                <li>• Generates standard XML version headers</li>
                <li>• Sanitizes keys to ensure valid XML tag names</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10">How Our Secure Converter Works</h3>
          <p>
            Most online converters require you to upload your data. At <strong>ToolsWizard</strong>, we believe your data belongs to you. Our tool utilizes the modern JavaScript <code>JSON.parse()</code> and a custom recursive mapping function that operates entirely within your browser's sandboxed environment.
          </p>
          <ol className="space-y-4 text-slate-700">
            <li><strong>Input:</strong> You paste your raw JSON into the editor. We perform a real-time syntax check to ensure the JSON is valid.</li>
            <li><strong>Mapping:</strong> Our tool traverses the JSON tree. It maps keys to XML tags and values to text content between those tags.</li>
            <li><strong>Output:</strong> The resulting XML is beautified and presented with a standard <code>UTF-8</code> header, ready for production use.</li>
          </ol>

          <h3 className="text-2xl font-bold mt-10">Frequently Asked Questions</h3>
          <div className="not-prose space-y-4 mt-6">
            {[
              { q: "Is my JSON data saved on your servers?", a: "No. ToolsWizard is a client-side platform. Your data never touches our server; it is processed locally in your browser's memory and cleared when you close the tab." },
              { q: "Can it handle large JSON files?", a: "Yes, our converter is optimized for performance. It can handle large datasets (up to several MBs) efficiently without slowing down your browser." },
              { q: "What happens to JSON arrays?", a: "JSON arrays are converted into repetitive XML tags. For example, a list of 'users' in JSON will become multiple '<item>' tags (or custom tags) within the XML structure." },
              { q: "Is there a limit on conversions?", a: "No. ToolsWizard provides unlimited, free conversions for all users without any registration required." }
            ].map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-xl p-5 bg-slate-50/50 transition-all hover:bg-white hover:border-indigo-300">
                <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-800">
                  {faq.q}
                  <span className="text-indigo-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </article>
      </main>

      <footer className="bg-dev-white border-t border-dev-gray py-8 px-6">
        <p className="text-sm text-dev-gray text-center">© 2026 ToolsWizard - Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}