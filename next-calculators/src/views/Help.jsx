export default function Help() {
    const faqs = [
      { q: "Are the calculators free to use?", a: "Yes, all 500+ calculators on CalcPilot are completely free forever." },
      { q: "How accurate are the financial calculators?", a: "Our calculators use standard mathematical formulas used by banks, but you should always consult a financial advisor for final decisions." },
      { q: "Can I use this on my mobile phone?", a: "Absolutely! CalcPilot is fully optimized for all mobile devices." },
    ];
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Help Center & FAQ</h1>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-calc-white p-6 rounded-xl border border-calc-lightGray">
              <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-calc-gray">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }