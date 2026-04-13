import React from 'react';

export default function SteelCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Steel Weight Calculator: Check Sariya Weight and Bundles</h2>
      <p>
        In Indian construction, reinforcement steel is the backbone of any RCC (Reinforced Cement Concrete) structure. While steel bars are priced and sold by weight (in kilograms or metric tons), they are measured and cut on-site by length. Our <strong>sariya weight calculator</strong> bridges this gap instantly.
      </p>

      <h3>What Does TMT Stand For?</h3>
      <p>
        <strong>TMT</strong> stands for <strong>Thermo Mechanically Treated</strong>. TMT bars are manufactured using a unique process that rapidly cools the tough outer core while keeping the inner core soft and ductile. This makes them highly resistant to earthquakes, corrosion, and immense tensile stress.
      </p>

      <hr className="my-6" />

      <h3>The Steel Weight Formula (D² / 162)</h3>
      <p>
        Civil engineers use universally accepted mathematical formulas to find the weight of steel bars based on their diameter. Here is how you calculate the weight manually:
      </p>

      <h4>1. Weight Per Meter Formula</h4>
      <p>
        To find the weight of a steel bar in kilograms per meter, use the formula:
      </p>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-center text-lg">
        W = D² / 162
      </div>
      <p>
        <em>Where <strong>D</strong> is the diameter of the bar in millimeters.</em><br />
        <strong>Example (12mm Bar):</strong> (12 × 12) / 162 = 144 / 162 = 0.888 kg per meter.
      </p>

      <h4>2. Weight Per Foot Formula</h4>
      <p>
        If you are measuring length in feet, the formula changes slightly:
      </p>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-center text-lg">
        W = D² / 533
      </div>
      <p>
        <strong>Example (12mm Bar):</strong> (12 × 12) / 533 = 144 / 533 = 0.270 kg per foot.
      </p>

      <hr className="my-6" />

      <h3>TMT Bar Weight Per Bundle in India</h3>
      <p>
        A standard full-length TMT bar in India is always <strong>12 meters (approx 39.4 feet)</strong> long. Because thin bars are light and thick bars are heavy, manufacturers bundle them in specific quantities to keep the total bundle weight manageable for workers (usually between 45 kg and 55 kg).
      </p>
      
      <p>Here is the standard Indian code for <strong>TMT bar weight per bundle</strong>:</p>
      
      <div className="overflow-x-auto my-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-calc-darkGray text-calc-darkGray">
              <th className="p-2">Diameter (mm)</th>
              <th className="p-2">Pieces per Bundle</th>
              <th className="p-2">Weight per 12m Bar (kg)</th>
              <th className="p-2">Approx. Bundle Weight (kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>8 mm</strong></td>
              <td className="p-2">10 pieces</td>
              <td className="p-2">4.74 kg</td>
              <td className="p-2">47.4 kg</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>10 mm</strong></td>
              <td className="p-2">7 pieces</td>
              <td className="p-2">7.40 kg</td>
              <td className="p-2">51.8 kg</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50 bg-calc-lightGray/10">
              <td className="p-2"><strong>12 mm</strong></td>
              <td className="p-2">5 pieces</td>
              <td className="p-2">10.66 kg</td>
              <td className="p-2">53.3 kg</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>16 mm</strong></td>
              <td className="p-2">3 pieces</td>
              <td className="p-2">18.95 kg</td>
              <td className="p-2">56.8 kg</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>20 mm</strong></td>
              <td className="p-2">2 pieces</td>
              <td className="p-2">29.60 kg</td>
              <td className="p-2">59.2 kg</td>
            </tr>
            <tr>
              <td className="p-2"><strong>25 mm</strong></td>
              <td className="p-2">1 piece</td>
              <td className="p-2">46.24 kg</td>
              <td className="p-2">46.2 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm italic mt-2 text-calc-darkGray">
        *Note: The exact weight can vary slightly (ISI tolerance limit allows up to a ±5% variation depending on the manufacturer).
      </p>
    </div>
  );
}