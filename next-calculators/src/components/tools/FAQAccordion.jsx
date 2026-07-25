"use client";

import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-pdf-bg hover:bg-pdf-primary/5 border border-pdf-primary/20 p-5 rounded-2xl transition-colors text-left focus:outline-none focus:ring-2 focus:ring-pdf-primary/30"
      >
        <span className="text-lg font-bold text-pdf-dark">{question}</span>
        <svg 
          className={`w-5 h-5 text-pdf-primary transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-5 mt-2 bg-white border border-pdf-primary/10 rounded-2xl text-pdf-gray leading-relaxed shadow-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQAccordion({ faqs }) {
  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
