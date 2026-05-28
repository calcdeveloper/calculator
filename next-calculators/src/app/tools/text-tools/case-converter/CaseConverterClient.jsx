"use client";

import { useState } from "react";
import { Copy, Download, RefreshCw, Type } from "lucide-react";

export default function CaseConverterClient() {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const convertToUppercase = () => {
    setConvertedText(text.toUpperCase());
  };

  const convertToLowercase = () => {
    setConvertedText(text.toLowerCase());
  };

  const convertToTitleCase = () => {
    const titleCase = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setConvertedText(titleCase);
  };

  const convertToSentenceCase = () => {
    const sentenceCase = text
      .toLowerCase()
      .split(". ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    setConvertedText(sentenceCase);
  };

  const convertToCamelCase = () => {
    const camelCase = text
      .toLowerCase()
      .split(/[\s_-]+/)
      .map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
    setConvertedText(camelCase);
  };

  const convertToSnakeCase = () => {
    const snakeCase = text
      .toLowerCase()
      .split(/[\s-]+/)
      .join("_");
    setConvertedText(snakeCase);
  };

  const convertToKebabCase = () => {
    const kebabCase = text
      .toLowerCase()
      .split(/[\s_]+/)
      .join("-");
    setConvertedText(kebabCase);
  };

  const toggleCase = () => {
    const toggled = text
      .split("")
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        }
        return char.toUpperCase();
      })
      .join("");
    setConvertedText(toggled);
  };

  const copyToClipboard = async () => {
    if (!convertedText) return;
    await navigator.clipboard.writeText(convertedText);
  };

  const downloadText = () => {
    if (!convertedText) return;
    const blob = new Blob([convertedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "converted-text.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Converter</h1>
          <p className="text-xl text-gray-600">Convert text to different cases instantly</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Input Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here..."
              className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setText("")}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => {
                  setText(convertedText);
                  setConvertedText("");
                }}
                disabled={!convertedText}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Use Output
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Converted Text
            </label>
            <textarea
              value={convertedText}
              readOnly
              placeholder="Converted text will appear here..."
              className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-none"
            />
            <div className="mt-4 flex gap-2">
              <button
                onClick={copyToClipboard}
                disabled={!convertedText}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Copy size={18} />
                Copy
              </button>
              <button
                onClick={downloadText}
                disabled={!convertedText}
                className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Conversion Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={convertToUppercase}
              disabled={!text}
              className="bg-green-100 text-green-800 py-3 px-4 rounded-lg font-semibold hover:bg-green-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              UPPERCASE
            </button>
            <button
              onClick={convertToLowercase}
              disabled={!text}
              className="bg-blue-100 text-blue-800 py-3 px-4 rounded-lg font-semibold hover:bg-blue-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              lowercase
            </button>
            <button
              onClick={convertToTitleCase}
              disabled={!text}
              className="bg-purple-100 text-purple-800 py-3 px-4 rounded-lg font-semibold hover:bg-purple-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Title Case
            </button>
            <button
              onClick={convertToSentenceCase}
              disabled={!text}
              className="bg-pink-100 text-pink-800 py-3 px-4 rounded-lg font-semibold hover:bg-pink-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Sentence case
            </button>
            <button
              onClick={convertToCamelCase}
              disabled={!text}
              className="bg-yellow-100 text-yellow-800 py-3 px-4 rounded-lg font-semibold hover:bg-yellow-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              camelCase
            </button>
            <button
              onClick={convertToSnakeCase}
              disabled={!text}
              className="bg-orange-100 text-orange-800 py-3 px-4 rounded-lg font-semibold hover:bg-orange-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              snake_case
            </button>
            <button
              onClick={convertToKebabCase}
              disabled={!text}
              className="bg-teal-100 text-teal-800 py-3 px-4 rounded-lg font-semibold hover:bg-teal-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              kebab-case
            </button>
            <button
              onClick={toggleCase}
              disabled={!text}
              className="bg-red-100 text-red-800 py-3 px-4 rounded-lg font-semibold hover:bg-red-200 transition-colors disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              tOGGLE cASE
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Case Converter</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Our case converter tool allows you to instantly convert text between different cases. Whether you need to format text for code, documents, or social media, this tool makes it easy.
            </p>
            <p>
              All processing happens entirely in your browser. Your text is never sent to our servers, ensuring complete privacy and security.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Supported Conversions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>UPPERCASE:</strong> Convert all letters to uppercase</li>
              <li><strong>lowercase:</strong> Convert all letters to lowercase</li>
              <li><strong>Title Case:</strong> Capitalize the first letter of each word</li>
              <li><strong>Sentence case:</strong> Capitalize the first letter of each sentence</li>
              <li><strong>camelCase:</strong> First word lowercase, subsequent words capitalized</li>
              <li><strong>snake_case:</strong> Words separated by underscores</li>
              <li><strong>kebab-case:</strong> Words separated by hyphens</li>
              <li><strong>tOGGLE cASE:</strong> Invert the case of each letter</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
