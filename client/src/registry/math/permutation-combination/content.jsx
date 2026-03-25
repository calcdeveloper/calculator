import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Permutations vs. Combinations: What is the difference?</h2>
        <p className="mb-4">
          In probability and statistics, permutations and combinations are used to figure out how many different ways you can select items from a larger group. The core difference between the two comes down to one simple question: <strong>Does the order matter?</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Permutations:</strong> Order <em>does</em> matter. A combination lock is actually a permutation lock! The sequence 1-2-3 is completely different from 3-2-1.</li>
          <li><strong>Combinations:</strong> Order <em>does not</em> matter. If you are making a fruit salad, adding apples, bananas, and grapes is the exact same salad as adding grapes, bananas, and apples.</li>
        </ul>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">The Mathematical Formulas</h3>
        <p className="text-sm mb-4">
          In these formulas, <strong>n</strong> represents the total number of items available, <strong>r</strong> represents the number of items being chosen, and the exclamation point (<strong>!</strong>) represents a factorial (multiplying a number by every whole number below it).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold text-calc-green mb-2">Combinations (nCr)</h4>
            <p className="text-xs mb-2">Used when forming groups, teams, or selecting lottery numbers.</p>
            <p className="font-mono bg-gray-50 p-2 rounded border border-gray-100 text-center">
              n! / (r! × (n - r)!)
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">Permutations (nPr)</h4>
            <p className="text-xs mb-2">Used for passwords, seating arrangements, or race finishes.</p>
            <p className="font-mono bg-gray-50 p-2 rounded border border-gray-100 text-center">
              n! / (n - r)!
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 mt-8">
        <h3 className="text-xl font-semibold text-gray-900">What does "With Replacement" mean?</h3>
        <p>
          Standard permutations and combinations assume that once you pick an item, you cannot pick it again (like drawing a card from a deck). 
        </p>
        <p>
          If you <em>replace</em> the item after picking it (like rolling a die multiple times or creating a PIN code where numbers can repeat), you must use the <strong>"With Replacement"</strong> calculation modes. Permutations with replacement simply follow the formula <strong>n^r</strong>.
        </p>
      </section>
    </div>
  );
}