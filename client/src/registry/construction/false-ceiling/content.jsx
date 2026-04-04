import React from 'react';

export default function FalseCeilingContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Estimate Materials for a False Ceiling</h2>
      <p>
        A false ceiling (or dropped ceiling) completely transforms the look of a room. Whether you are using pre-made boards or a wet mix, an accurate <strong>false ceiling material calculation</strong> ensures your contractor doesn't over-order expensive metal framing or plaster.
      </p>

      <h3>Important Ceiling Abbreviations</h3>
      <ul>
        <li><strong>POP (Plaster of Paris):</strong> A white powder that hardens when mixed with water. It is applied wet over a metal mesh (chicken mesh) to create completely seamless, highly customized ceiling curves and designs.</li>
        <li><strong>Gypsum Board:</strong> Factory-made sheets of plaster sandwiched between thick paper. They are fast to install, very clean, and create perfectly flat surfaces.</li>
        <li><strong>GI (Galvanized Iron):</strong> The rust-proof metal used to create the hidden grid framework that hangs from your actual concrete roof to hold the false ceiling.</li>
        <li><strong>Sq.ft (Square Feet) & RFT (Running Feet):</strong> Area is measured in Sq.ft, while the metal framing edges are measured in RFT.</li>
      </ul>

      <hr className="my-6" />

      <h3>The Gypsum Board Calculator Formula</h3>
      <p>
        Gypsum boards are standard in modern Indian apartments. The most common board size used by carpenters is <strong>6 feet by 4 feet</strong> because it is easy to carry into elevators and up stairs.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1: Calculate Room Area</strong><br />
        Length × Width<br />
        Example: 15 ft × 12 ft = <strong>180 Sq.ft</strong>.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 2: Calculate Board Area</strong><br />
        6 ft × 4 ft = <strong>24 Sq.ft per board</strong>.<br />
        <em>(If using large commercial boards: 8 ft × 4 ft = 32 Sq.ft).</em>
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 3: Find Total Boards (with Wastage)</strong><br />
        Area ÷ Board Area = 180 ÷ 24 = 7.5 Boards.<br />
        Add 10% Wastage for cuts: 7.5 × 1.10 = 8.25.<br />
        <em>Result: You need to purchase <strong>9 Gypsum Boards</strong>.</em>
      </div>

      <hr className="my-6" />

      <h3>The POP Ceiling Formula</h3>
      <p>
        If you choose a traditional POP ceiling, the calculation shifts from boards to bags. In India, a standard POP bag weighs <strong>20 kg</strong>. 
      </p>
      <p>
        <strong>The Thumb Rule:</strong> A 20 kg bag of POP will cover approximately <strong>20 Square Feet</strong> of ceiling area at the standard 12mm (half-inch) thickness. Therefore, for a 180 Sq.ft room, you would need about 9 bags of POP, plus an equal square footage of chicken wire mesh.
      </p>

      <hr className="my-6" />

      <h3>How to Calculate GI Framing Channels</h3>
      <p>
        The hidden metal grid is made of two main parts, usually sold in standard <strong>12-foot lengths</strong> in the hardware store:
      </p>
      <ol>
        <li>
          <strong>Perimeter Channel (L-Patti):</strong> This runs along the top edges of your walls. Calculate the perimeter of your room and divide by 12.<br />
          <em>Example: (15+15+12+12) = 54 RFT. 54 ÷ 12 = 4.5 (Buy 5 Lengths).</em>
        </li>
        <li>
          <strong>Intermediate / Ceiling Section:</strong> This forms the inner grid to support the weight. The standard Indian contractor thumb rule is that you need roughly 1 length (12 ft) for every <strong>16 Sq.ft</strong> of ceiling area.
        </li>
      </ol>
      <p className="mt-4 text-sm italic text-calc-darkGray">
        *Disclaimer: Material quantities will vary if you are building complex multi-level cove lighting designs, which require significantly more vertical GI framing and board wastage!
      </p>
    </div>
  );
}