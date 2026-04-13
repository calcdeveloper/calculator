import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How is Education Loan EMI Calculated in India?</h2>
        <p className="mb-4">
          Calculating an Education Loan is different from a standard Personal or Car loan because of the <strong>Moratorium Period</strong> (also known as a repayment holiday). Banks like SBI, HDFC, and ICICI allow you to pause your EMI payments while you are studying, plus an additional grace period (usually 6 months after graduation or getting a job, whichever is earlier).
        </p>
        <p className="mb-4">
          However, <strong>interest still accrues during this time</strong>. To accurately calculate your EMI, you must first calculate the interest piled up during your studies, add it to your main loan, and then calculate the EMI.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: The Moratorium Interest Formula</h3>
        <p className="text-sm mb-4">
          During your study period, banks charge Simple Interest. This accumulated interest is added to your original loan amount before your EMIs begin.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-yellow-500 mb-4 overflow-x-auto">
          <p className="font-bold text-gray-900 mb-2">Simple Interest Formula:</p>
          <div className="my-4 text-lg text-center font-mono text-gray-800">
            SI = (P &times; R &times; T) &divide; 100
          </div>
          <ul className="text-sm space-y-2 text-gray-700 mt-4">
            <li><strong>P</strong> = Principal Loan Amount</li>
            <li><strong>R</strong> = Annual Interest Rate</li>
            <li><strong>T</strong> = Time in years (Moratorium Months &divide; 12)</li>
          </ul>
          
          <h4 className="font-bold text-gray-900 mb-1 mt-4">Example:</h4>
          <p className="text-sm text-gray-700">You take a ₹10,00,000 loan at 8.5% interest for a 2-year master&apos;s degree (24 months moratorium).</p>
          <div className="my-2 text-sm text-center font-mono text-gray-800">
            SI = (10,00,000 &times; 8.5 &times; 2) &divide; 100 = 1,70,000
          </div>
          <p className="text-sm font-semibold mt-2 text-gray-900">New Loan Amount at Graduation = ₹11,70,000</p>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: The Education Loan EMI Formula</h3>
        <p className="text-sm mb-4">
          Once your moratorium ends, the bank applies the standard Equated Monthly Installment (EMI) formula using your <em>new</em> loan amount.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-blue-200 mb-4 overflow-x-auto">
          <p className="font-bold text-gray-900 mb-2">Mathematical Formula:</p>
          <div className="my-4 text-lg text-center font-mono text-gray-800">
            E = P<sub>new</sub> &times; r &times; [ (1+r)<sup>n</sup> &divide; ((1+r)<sup>n</sup> - 1) ]
          </div>
          
          <ul className="text-sm space-y-2 text-gray-700 mt-4">
            <li><strong>E</strong> = Monthly EMI</li>
            <li><strong>P<sub>new</sub></strong> = Revised Principal (Original Loan + Moratorium Interest)</li>
            <li><strong>r</strong> = Monthly Interest Rate (Annual Rate &divide; 12 &divide; 100)</li>
            <li><strong>n</strong> = Repayment Tenure in Months (Years &times; 12)</li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Pro-Tip to Save Money</h3>
        <p className="text-sm">
          If you or your parents pay off the <strong>simple interest during the moratorium period</strong> (before the EMI officially begins), banks usually offer a concession of 0.5% to 1% on the interest rate, and you prevent the interest from capitalizing into your main principal!
        </p>
      </section>
    </div>
  );
}
