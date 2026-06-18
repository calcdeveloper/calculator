"use client";

import { useState } from "react";
import { Copy, Download, FileCode, Braces, Check, ChevronRight } from "lucide-react";
import XMLtoJSONSeo from "@/components/tools/XMLtoJSONSeo";

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
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-conv-primary to-conv-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-conv-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Converter Tools</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-conv-white font-medium">XML to JSON</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <FileCode size={40} />
            XML to JSON Converter
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Transform your XML files into JSON format instantly. Fast, secure, and entirely within your browser.
          </p>
        </div>
      </section>

      {/* Converter Section */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray/30 p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="flex items-center gap-2 font-bold text-conv-dark">
                <FileCode className="text-conv-primary" size={20} />
                XML Input
              </label>
              <textarea
                value={xmlInput}
                onChange={(e) => setXmlInput(e.target.value)}
                placeholder={'<root>\n  <person>\n    <name>John Doe</name>\n    <age>30</age>\n  </person>\n</root>'}
                className="w-full h-96 px-4 py-3 border border-conv-gray/40 rounded-xl focus:ring-2 focus:ring-conv-primary focus:border-transparent resize-none font-mono text-sm bg-conv-bg/50"
              />
              <button
                onClick={() => setXmlInput("")}
                className="mt-2 text-conv-gray hover:text-red-500 font-semibold transition-colors text-sm"
              >
                Clear Input
              </button>
            </div>

            <div className="space-y-4">
              <label className="flex items-center gap-2 font-bold text-conv-dark">
                <Braces className="text-conv-primary" size={20} />
                JSON Output
              </label>
              <textarea
                value={jsonOutput}
                readOnly
                placeholder="JSON output will appear here..."
                className="w-full h-96 px-4 py-3 border border-conv-gray/40 rounded-xl bg-conv-bg/50 resize-none font-mono text-sm focus:outline-none"
              />
              <div className="mt-2 flex gap-3">
                <button
                  onClick={copyToClipboard}
                  disabled={!jsonOutput}
                  className="flex-1 bg-conv-bg hover:bg-conv-bg/80 text-conv-dark border border-conv-gray/30 py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  {copied ? "Copied" : "Copy JSON"}
                </button>
                <button
                  onClick={downloadJSON}
                  disabled={!jsonOutput}
                  className="flex-1 bg-conv-secondary text-conv-white py-3 rounded-xl font-semibold hover:bg-conv-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-conv-secondary/30"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={convertToJSON}
              disabled={!xmlInput.trim()}
              className="w-full md:w-auto mx-auto bg-conv-primary text-conv-white py-4 px-10 rounded-2xl font-black hover:bg-conv-primaryDark transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg shadow-xl shadow-conv-primary/30"
            >
              <Braces size={24} />
              Convert to JSON
            </button>
          </div>
        </div>

        <XMLtoJSONSeo />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}