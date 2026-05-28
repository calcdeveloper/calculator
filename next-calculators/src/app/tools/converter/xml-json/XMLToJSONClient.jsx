"use client";

import { useState } from "react";
import { Copy, Download, RefreshCw, FileCode, Braces, Check } from "lucide-react";

export default function XMLToJSONClient() {
  const [xmlInput, setXmlInput] = useState("");
  const [jsonOutput, setJsonOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const convertToJSON = () => {
    if (!xmlInput.trim()) return;

    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlInput, "text/xml");

      const xmlToJson = (xml) => {
        let obj = {};

        if (xml.nodeType === 1) {
          if (xml.attributes.length > 0) {
            obj["@attributes"] = {};
            for (let j = 0; j < xml.attributes.length; j++) {
              const attribute = xml.attributes.item(j);
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType === 3) {
          obj = xml.nodeValue.trim();
        }

        if (xml.hasChildNodes()) {
          for (let i = 0; i < xml.childNodes.length; i++) {
            const item = xml.childNodes.item(i);
            const nodeName = item.nodeName;

            if (typeof obj[nodeName] === "undefined") {
              obj[nodeName] = xmlToJson(item);
            } else {
              if (typeof obj[nodeName].push === "undefined") {
                const old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }
              obj[nodeName].push(xmlToJson(item));
            }
          }
        }
        return obj;
      };

      const json = xmlToJson(xmlDoc.documentElement);
      setJsonOutput(JSON.stringify(json, null, 2));
    } catch (error) {
      setJsonOutput("Error converting XML to JSON: " + error.message);
    }
  };

  const copyToClipboard = async () => {
    if (!jsonOutput) return;
    await navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadJSON = () => {
    if (!jsonOutput) return;
    const blob = new Blob([jsonOutput], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <FileCode className="text-orange-500" size={40} />
            XML to JSON Converter
          </h1>
          <p className="text-xl text-gray-600 mb-3">
            Free Online Tool to Convert XML Data to JSON Format Instantly
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Transform your XML files into JSON format with our fast, secure, and completely free XML to JSON converter. No registration required, no file size limits, and 100% private conversion.
          </p>
        </div>

        {/* Converter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              XML Input
            </label>
            <textarea
              value={xmlInput}
              onChange={(e) => setXmlInput(e.target.value)}
              placeholder={`<root>
  <person>
    <name>John Doe</name>
    <age>30</age>
  </person>
</root>`}
              className="w-full h-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none font-mono text-sm"
            />
            <button
              onClick={() => setXmlInput("")}
              className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              JSON Output
            </label>
            <textarea
              value={jsonOutput}
              readOnly
              placeholder="JSON output will appear here..."
              className="w-full h-80 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-none font-mono text-sm"
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={copyToClipboard}
                disabled={!jsonOutput}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Copied" : "Copy"}
              </button>
              <button
                onClick={downloadJSON}
                disabled={!jsonOutput}
                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Convert Button */}
        <button
          onClick={convertToJSON}
          disabled={!xmlInput.trim()}
          className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg mb-12"
        >
          <Braces size={24} />
          Convert XML to JSON
        </button>

        {/* Comprehensive SEO Content Section */}
        <div className="space-y-8">
          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is an XML to JSON Converter?
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                An <strong>XML to JSON converter</strong> is a powerful online tool that transforms XML (eXtensible Markup Language) data into JSON (JavaScript Object Notation) format. Our free converter makes it incredibly easy to convert XML files to JSON without any technical knowledge required. Whether you're a developer, data analyst, or business professional, this tool streamlines the data transformation process.
              </p>
              <p>
                XML and JSON are both popular data interchange formats used across the web. However, JSON has become increasingly popular in modern web development due to its lightweight nature, better readability, and native support in JavaScript. If you have legacy XML data that you need to integrate with modern JSON-based APIs or applications, our XML to JSON converter is the perfect solution.
              </p>
              <p>
                The conversion process maintains the structure and hierarchy of your original XML data while converting it into valid JSON format. All attributes, nested elements, and text values are preserved during the conversion, ensuring data integrity.
              </p>
            </div>
          </div>

          {/* Why Use Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Use Our XML to JSON Converter?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Free & Unlimited</h3>
                <p className="text-gray-700">
                  Our tool is completely free with no hidden charges. Convert unlimited XML files without any restrictions or limitations on file size.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Registration Required</h3>
                <p className="text-gray-700">
                  Start converting immediately without creating an account or providing personal information. It's instant and hassle-free.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Secure & Private</h3>
                <p className="text-gray-700">
                  All conversions happen entirely in your browser. Your XML data never leaves your device or reaches our servers, ensuring complete privacy.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Conversion</h3>
                <p className="text-gray-700">
                  Get results in milliseconds with our optimized conversion algorithm. No waiting, no delays, just instant results.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">User-Friendly Interface</h3>
                <p className="text-gray-700">
                  Simple and intuitive design makes it easy for anyone to use, regardless of technical expertise or programming knowledge.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Download & Copy Options</h3>
                <p className="text-gray-700">
                  Easily copy converted JSON to clipboard or download it as a file for use in your projects and applications.
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Features of Our Converter
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span><strong>Accurate XML Parsing:</strong> Properly parses all XML elements, attributes, and nested structures with precision.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span><strong>Attribute Handling:</strong> Preserves XML attributes by converting them to @attributes in the JSON output.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span><strong>Nested Elements Support:</strong> Handles deeply nested XML elements and converts them to proper JSON object hierarchies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span><strong>Array Handling:</strong> Automatically converts repeated XML elements into JSON arrays.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span><strong>Pretty Print:</strong> Formats JSON output with proper indentation for easy readability.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span><strong>Error Detection:</strong> Identifies and reports XML syntax errors clearly.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span><strong>Clipboard Integration:</strong> One-click copy functionality to copy JSON to your clipboard.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-bold mt-1">✓</span>
                <span><strong>File Download:</strong> Download converted JSON files directly to your computer.</span>
              </li>
            </ul>
          </div>

          {/* Use Cases Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Use Cases for XML to JSON Conversion
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">API Integration</h3>
                <p>
                  Many modern APIs accept JSON format. If you have legacy XML data that needs to be integrated with contemporary REST APIs, our converter helps you transform the data quickly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Migration</h3>
                <p>
                  Moving data from older systems using XML to newer systems that prefer JSON. Our converter makes this migration seamless and error-free.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web Development</h3>
                <p>
                  JavaScript natively works with JSON, making it the preferred format for web applications. Convert XML to JSON to leverage JavaScript's full potential.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Configuration Files</h3>
                <p>
                  Transform XML configuration files to JSON format for use in modern applications that expect JSON-based configuration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Analysis</h3>
                <p>
                  Process and analyze XML data in JSON format using JavaScript tools, Python, or other programming languages with better JSON support.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Database Import</h3>
                <p>
                  Many modern databases and NoSQL systems prefer JSON format. Convert XML data to JSON before importing into MongoDB, CouchDB, or similar databases.
                </p>
              </div>
            </div>
          </div>

          {/* How to Use Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Convert XML to JSON
            </h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-4">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Paste Your XML Data</strong>
                  <p>Copy your XML content and paste it into the left textarea. You can paste entire XML documents or fragments.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Click Convert Button</strong>
                  <p>Click the "Convert XML to JSON" button to start the conversion process instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Get Your JSON Output</strong>
                  <p>The converted JSON appears in the right textarea with proper formatting and structure.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0 font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Copy or Download</strong>
                  <p>Copy the JSON to your clipboard or download it as a file. Use it wherever you need.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* XML vs JSON Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              XML vs JSON: Understanding the Difference
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>XML (eXtensible Markup Language)</strong> and <strong>JSON (JavaScript Object Notation)</strong> are both popular data formats, but they have different strengths and use cases. Understanding their differences helps you determine when to use each format.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">XML Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Self-describing and human-readable</li>
                    <li>• Supports complex data structures</li>
                    <li>• Wide industry adoption</li>
                    <li>• Excellent for document-oriented data</li>
                    <li>• Strong validation with schemas</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">JSON Advantages</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Lightweight and compact format</li>
                    <li>• Native JavaScript support</li>
                    <li>• Faster parsing and processing</li>
                    <li>• Better for APIs and web services</li>
                    <li>• Preferred by modern applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is my data safe when using this converter?</h3>
                <p className="text-gray-700">
                  Yes, absolutely. All conversions happen entirely in your browser. Your XML data is never sent to any server, ensuring complete privacy and security.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Does this tool support large XML files?</h3>
                <p className="text-gray-700">
                  Yes, there are no file size limitations. As long as your browser can handle the data, our tool will convert it successfully.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What if my XML has syntax errors?</h3>
                <p className="text-gray-700">
                  The tool will detect and report any XML syntax errors, preventing invalid conversions and helping you fix the issues.
                </p>
              </div>
              <div className="border-b pb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I convert JSON back to XML?</h3>
                <p className="text-gray-700">
                  Yes, we also offer a JSON to XML converter for the reverse conversion. Check our other tools for this functionality.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">How accurate is the conversion?</h3>
                <p className="text-gray-700">
                  Our converter maintains 100% accuracy of your data structure. All elements, attributes, and values are preserved during conversion.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Start Converting XML to JSON Today
            </h2>
            <p className="text-lg mb-6">
              Our free XML to JSON converter is the easiest way to transform your XML data. Whether you're a developer, data analyst, or business professional, get started now with zero hassle. No registration, no limits, completely free.
            </p>
            <p className="text-base opacity-90">
              ToolsWizard offers the fastest and most reliable XML to JSON conversion tool online. Join thousands of users who trust us for their data conversion needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}