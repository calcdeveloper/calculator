import React from 'react';

export default function ConstructionCostContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Estimate House Construction Cost in India</h2>
      <p>
        Building a home is one of the biggest financial decisions you will make. Before hiring an architect or talking to a contractor, you need a realistic budget. A reliable <strong>house construction cost calculator india</strong> uses industry-standard "Thumb Rules" to give you a highly accurate breakdown of expenses based purely on your plot's built-up area.
      </p>

      <h3>Crucial Construction Abbreviations</h3>
      <ul>
        <li><strong>TMT (Thermo Mechanically Treated) Bars:</strong> The high-strength steel rebars used to reinforce concrete. They are the backbone of your house.</li>
        <li><strong>RCC (Reinforced Cement Concrete):</strong> The mixture of cement, sand, gravel (aggregate), water, and TMT steel used to cast your pillars, beams, and roof slabs.</li>
        <li><strong>AAC (Autoclaved Aerated Concrete):</strong> Lightweight, grey-colored blocks increasingly replacing traditional red clay bricks for building walls because they insulate better and speed up construction.</li>
        <li><strong>MEP (Mechanical, Electrical, and Plumbing):</strong> The hidden lifelines of your house—wiring, pipes, and ventilation.</li>
      </ul>

      <hr className="my-6" />

      <h3>The "Building Estimate Per Sq Ft" Method</h3>
      <p>
        In India, civil contractors quote construction rates based on a <strong>building estimate per sq ft</strong> of the "slab area" (the total roof area being cast). These rates are categorized into three broad classes:
      </p>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-calc-darkGray text-calc-darkGray">
              <th className="p-2">Quality Class</th>
              <th className="p-2">Estimated Rate</th>
              <th className="p-2">Characteristics</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>C Class (Basic)</strong></td>
              <td className="p-2">₹1,300 to ₹1,500 / sq.ft</td>
              <td className="p-2">Standard cement, local sand, basic ceramic tiles, standard switches.</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50 bg-calc-lightGray/10">
              <td className="p-2"><strong>B Class (Standard)</strong></td>
              <td className="p-2">₹1,600 to ₹1,900 / sq.ft</td>
              <td className="p-2">Branded TMT, vitrified tiles, modular kitchen basics, branded UPVC windows.</td>
            </tr>
            <tr>
              <td className="p-2"><strong>A Class (Premium)</strong></td>
              <td className="p-2">₹2,000 to ₹2,500+ / sq.ft</td>
              <td className="p-2">Italian marble, teak wood doors, premium CP fittings (Grohe/Kohler), smart home wiring.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Total Cost Formula:</strong><br />
        Total Cost = Built-up Area × Number of Floors × Cost Per Sq.Ft<br /><br />
        <strong>Example:</strong> A 1000 sq.ft plot, building 2 floors at Standard Quality (₹1800).<br />
        1000 × 2 = 2000 Sq.ft total area.<br />
        2000 × ₹1,800 = <strong>₹36,00,000 (36 Lakhs)</strong>.
      </div>

      <hr className="my-6" />

      <h3>The Standard Material Thumb Rule Breakdown</h3>
      <p>
        Once you have your total estimated budget (e.g., 36 Lakhs), how do you know how much cash to keep ready for cement versus labor? The Indian civil engineering thumb rule dictates this highly consistent percentage breakdown:
      </p>

      <ul>
        <li><strong>Steel (TMT) - 24%:</strong> Steel is the most expensive raw material. It absorbs roughly a quarter of your entire budget.</li>
        <li><strong>Finishing - 17%:</strong> This includes floor tiles, granite counters, wooden doors, and paint.</li>
        <li><strong>Cement - 16%:</strong> Required for everything from RCC slabs to brick mortar and wall plastering.</li>
        <li><strong>Labour - 15%:</strong> The cost paid to the contractor (Thekedar) for masons, helpers, and shuttering.</li>
        <li><strong>Fittings - 12%:</strong> Electrical wires, switchboards, plumbing pipes, and bathroom sanitaryware.</li>
        <li><strong>Sand & Aggregate - 11%:</strong> River sand (or crush sand) and crushed stone (Rodi/Bajri).</li>
        <li><strong>Bricks / Blocks - 5%:</strong> Interestingly, the actual walls are the cheapest part of the structure!</li>
      </ul>

      <p className="mt-4 text-sm text-calc-darkGray italic">
        *Disclaimer: This estimator provides a preliminary budget based on standard RCC framed structures. Soil conditions, depth of foundation, and highly customized architectural elevations will alter these percentages.
      </p>
    </div>
  );
}