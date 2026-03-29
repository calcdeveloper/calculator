import React, { useState, useRef } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const textAreaRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setCopied(false);
  };

  const handleClear = () => {
    setText("");
    setCopied(false);
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  const handleCopy = () => {
    if (text.length > 0) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Real-time text calculations
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s+/g, "").length;
  // Split by whitespace but filter out empty strings to avoid counting empty text as 1 word
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const lines = text === "" ? 0 : text.split(/\r\n|\r|\n/).length;

  return (
    <div className="max-w-4xl mx-auto my-8 font-sans">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-calc-black mb-2">
          Word & Character Counter
        </h1>
        <p className="text-lg text-calc-gray">
          Type or paste your text below to get real-time statistics.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-calc-lightGray rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
        
        {/* Text Area */}
        <textarea
          ref={textAreaRef}
          value={text}
          onChange={handleTextChange}
          placeholder="Start typing or pasting here..."
          className="w-full border-2 border-calc-lightGray rounded-xl p-4 text-calc-black text-lg h-64 resize-y focus:outline-none focus:border-calc-green transition-colors"
        ></textarea>

        {/* 2x2 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-calc-beige/30 border border-calc-lightGray rounded-xl p-6 flex flex-col items-center justify-center shadow-sm">
            <span className="text-4xl font-bold text-calc-green mb-1">{words}</span>
            <span className="text-sm text-calc-gray font-medium uppercase tracking-wide">Words</span>
          </div>
          <div className="bg-calc-beige/30 border border-calc-lightGray rounded-xl p-6 flex flex-col items-center justify-center shadow-sm">
            <span className="text-4xl font-bold text-calc-green mb-1">{characters}</span>
            <span className="text-sm text-calc-gray font-medium uppercase tracking-wide">Characters</span>
          </div>
          <div className="bg-calc-beige/30 border border-calc-lightGray rounded-xl p-6 flex flex-col items-center justify-center shadow-sm text-center">
            <span className="text-4xl font-bold text-calc-green mb-1">{charactersNoSpaces}</span>
            <span className="text-sm text-calc-gray font-medium uppercase tracking-wide">Chars (No Spaces)</span>
          </div>
          <div className="bg-calc-beige/30 border border-calc-lightGray rounded-xl p-6 flex flex-col items-center justify-center shadow-sm">
            <span className="text-4xl font-bold text-calc-green mb-1">{lines}</span>
            <span className="text-sm text-calc-gray font-medium uppercase tracking-wide">Lines</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <button
            onClick={handleCopy}
            className="w-full bg-calc-green hover:bg-opacity-90 text-white font-bold py-4 rounded-xl transition-colors text-lg flex justify-center items-center gap-2 shadow-sm"
          >
            {copied ? (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Copied!
              </>
            ) : (
              "Copy Text"
            )}
          </button>
          <button
            onClick={handleClear}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-sm"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}