import React from 'react';

export default function PuttyPrimerCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Calculate Wall Putty and Primer Needed for Painting</h2>
      <p>
        Before you can apply beautiful interior emulsions or exterior paints, your walls must be perfectly prepped. This involves applying wall putty to fill in the pores of the cement plaster, followed by a coat of primer to ensure the paint adheres properly. Use our calculator to accurately estimate the materials needed for your renovation.
      </p>

      <h3>Understanding Wall Putty Coverage Area</h3>
      <p>
        The <strong>wall putty coverage area</strong> depends entirely on the condition of your base plaster and the number of coats you plan to apply. In India, leading brands like Birla White, JK Cement, and Asian Paints generally provide the following coverage:
      </p>
      <ul>
        <li><strong>Fresh / Rough Plaster (2 Coats):</strong> Approximately <strong>10 to 14 sq. ft. per Kg</strong>. Fresh plaster absorbs more material to level the undulations.</li>
        <li><strong>Repainting / Smooth Wall (2 Coats):</strong> Approximately <strong>14 to 16 sq. ft. per Kg</strong>.</li>
        <li><strong>Single Coat (Touch-ups):</strong> Approximately <strong>20 to 25 sq. ft. per Kg</strong>.</li>
      </ul>

      <h3>Primer Coverage Area</h3>
      <p>
        Primer is applied <em>after</em> the wall putty has dried and been sanded smooth. Because the putty seals the wall's pores, primer coverage is excellent. A standard interior or exterior wall primer (1 Coat) will cover approximately <strong>120 to 140 sq. ft. per Liter</strong>.
      </p>

      <hr className="my-6" />

      <h3>Example: How Much Putty Required for 100 Sq Ft?</h3>
      <p>
        This is the most common question asked by homeowners in India. Let's calculate the material for a standard 10 ft x 10 ft wall (100 sq ft) with fresh plaster, requiring the standard 2 coats of putty and 1 coat of primer.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>1. Putty Calculation:</strong><br />
        Total Area = 100 sq. ft.<br />
        Coverage Rate (2 coats on rough plaster) = 12 sq. ft. per Kg.<br />
        Putty Required = 100 ÷ 12 = <strong>8.33 Kg of Wall Putty</strong>.
        <br /><br />
        <em>(You would typically buy a 10 Kg pack from the hardware store).</em>
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>2. Primer Calculation:</strong><br />
        Total Area = 100 sq. ft.<br />
        Coverage Rate (1 coat over putty) = 120 sq. ft. per Liter.<br />
        Primer Required = 100 ÷ 120 = <strong>0.83 Liters of Primer</strong>.
        <br /><br />
        <em>(You would buy a standard 1 Liter tin).</em>
      </div>

      <h3>Important Tips for Application</h3>
      <ul>
        <li><strong>Drying Time:</strong> Always allow the first coat of putty to dry for at least 3 to 4 hours before applying the second coat.</li>
        <li><strong>Sanding is Crucial:</strong> After the second coat of putty dries overnight, it must be sanded with waterproof emery paper (grit 320 or 400) to get a glass-like finish before applying primer.</li>
        <li><strong>Deduct Openings:</strong> Don't forget to subtract the square footage of your doors and windows from your total wall area to avoid over-ordering materials!</li>
      </ul>
    </div>
  );
}