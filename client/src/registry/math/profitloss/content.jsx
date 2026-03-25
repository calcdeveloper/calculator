import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Profit, Loss, and Discounts</h2>
        <p className="mb-4">
          Whether you are running a business, calculating a retail markdown, or studying for a math exam, understanding financial formulas is essential. The core metrics rely on the relationship between three primary numbers: <strong>Cost Price (CP)</strong>, <strong>Selling Price (SP)</strong>, and <strong>Marked Price (MP)</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Key Terms</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cost Price (CP):</strong> The total amount of money it costs a manufacturer or retailer to produce or purchase an item.</li>
          <li><strong>Selling Price (SP):</strong> The final amount of money a buyer pays for the item.</li>
          <li><strong>Marked Price (MP):</strong> The original price printed on an item's tag or list before any discounts are applied.</li>
        </ul>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Core Profit & Loss Formulas</h3>
        <p className="text-sm mb-4">
          A <strong>Profit</strong> occurs when the Selling Price is greater than the Cost Price. A <strong>Loss</strong> occurs when the Cost Price is greater than the Selling Price.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold text-sm text-calc-green mb-2">Calculating Profit</h4>
            <ul className="text-xs space-y-1">
              <li>Profit Amount = SP - CP</li>
              <li>Profit % = (Profit Amount / CP) × 100</li>
              <li>SP = CP × (1 + (Profit % / 100))</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold text-sm text-red-600 mb-2">Calculating Loss</h4>
            <ul className="text-xs space-y-1">
              <li>Loss Amount = CP - SP</li>
              <li>Loss % = (Loss Amount / CP) × 100</li>
              <li>SP = CP × (1 - (Loss % / 100))</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Discount Formulas</h3>
        <p className="text-sm mb-4">
          A discount is a reduction in the Marked Price. It is important to remember that discounts are always calculated on the <strong>Marked Price (MP)</strong>, never on the Cost Price.
        </p>
        <div className="bg-white p-4 rounded shadow-sm">
          <ul className="text-sm space-y-2">
            <li><strong>Discount Amount</strong> = Marked Price (MP) - Selling Price (SP)</li>
            <li><strong>Discount %</strong> = (Discount Amount / MP) × 100</li>
            <li><strong>Selling Price after Discount</strong> = MP - (MP × (Discount % / 100))</li>
          </ul>
        </div>
      </section>
    </div>
  );
}