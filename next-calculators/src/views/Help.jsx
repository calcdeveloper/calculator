import React from 'react';
import Link from 'next/link';

export default function Help() {
  const faqs = [
    { q: "Are the calculators free to use?", a: "Yes, all 500+ calculators on ToolsWizard are completely free forever." },
    { q: "How accurate are the financial calculators?", a: "Our calculators use standard mathematical formulas used by banks, but you should always consult a financial advisor for final decisions." },
    { q: "Can I use this on my mobile phone?", a: "Absolutely! ToolsWizard is fully optimized for all mobile devices." },
  ];
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-calc-black">Help Center &amp; FAQ</h1>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-calc-white p-6 rounded-xl border border-calc-lightGray shadow-xs">
            <h3 className="font-bold text-lg mb-2 text-calc-black">{faq.q}</h3>
            <p className="text-calc-gray">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center p-8 bg-calc-white rounded-2xl border border-calc-lightGray shadow-xs">
        <h3 className="font-bold text-xl mb-2 text-calc-black">Still Need Specialized Technical Assistance?</h3>
        <p className="text-calc-gray text-sm max-w-xl mx-auto mb-6 leading-relaxed">
          Have an unresolved technical question, wish to report an algorithmic formula discrepancy, or want to propose a new calculator? Our domain engineers are available to review your dispatch.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-calc-green text-calc-white px-8 py-3.5 rounded-xl font-bold hover:bg-opacity-90 transition-all text-sm shadow-sm"
        >
          Contact Engineering Support &rarr;
        </Link>
      </div>
    </main>
  );
}
