import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Roman Numerals to Numbers</h2>
        <p className="mb-4">
          Originating in ancient Rome, the Roman numeral system uses combinations of letters from the Latin alphabet to represent values. Unlike our modern decimal system which uses place values (ones, tens, hundreds), Roman numerals rely on adding and subtracting specific fixed-value symbols.
        </p>
        <p>
          To manually convert Roman numerals into numbers, you first need to memorize the seven basic symbols:
        </p>
        
        <ul className="list-disc list-inside text-sm mt-4 space-y-1 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <li><strong>I</strong> = 1</li>
          <li><strong>V</strong> = 5</li>
          <li><strong>X</strong> = 10</li>
          <li><strong>L</strong> = 50</li>
          <li><strong>C</strong> = 100</li>
          <li><strong>D</strong> = 500</li>
          <li><strong>M</strong> = 1,000</li>
        </ul>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Rule 1: The Addition Rule</h3>
        <p className="text-sm mb-4">When Roman numeral symbols are placed from largest to smallest (reading left to right), you simply add their values together.</p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Example 1: VI</strong><br/> V (5) is larger than I (1). So, 5 + 1 = <strong>6</strong>.</li>
            <li><strong>Example 2: XVII</strong><br/> X (10) + V (5) + I (1) + I (1) = <strong>17</strong>.</li>
            <li><strong>Example 3: CX</strong><br/> C (100) + X (10) = <strong>110</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Rule 2: The Subtraction Rule</h3>
        <p className="text-sm mb-4">To avoid repeating a single character four times in a row, the Romans used "subtractive notation." If a smaller symbol is placed <em>before</em> a larger symbol, you subtract the smaller value from the larger value.</p>
        
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Example 1: IV</strong><br/> I (1) is smaller than V (5). So, 5 - 1 = <strong>4</strong>. (Instead of writing IIII).</li>
            <li><strong>Example 2: IX</strong><br/> I (1) is smaller than X (10). So, 10 - 1 = <strong>9</strong>.</li>
            <li><strong>Example 3: XIV</strong><br/> X (10) + IV (4) = <strong>14</strong>.</li>
            <li><strong>Example 4: MCM</strong><br/> M (1000) + CM (900) = <strong>1900</strong>.</li>
          </ul>
        </div>
      </section>
      
      <section className="space-y-4 mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Why does the Roman Numeral system stop at 3,999?</h3>
        <p className="text-sm">
          A standard rule of Roman numerals is that you cannot place more than three identical symbols next to each other. Because the largest standard symbol is <strong>M (1,000)</strong>, the highest you can count using standard rules is <strong>MMM (3,000)</strong> plus CM (900) plus XC (90) plus IX (9), totaling <strong>3,999</strong>. 
        </p>
        <p className="text-sm">
          To write 4,000 or higher, the Romans used a line over the letter (called a vinculum) to indicate that the value should be multiplied by 1,000. For example, a <strong>V</strong> with a line over it represents 5,000. Because modern keyboards cannot easily type these special characters, most digital converters top out at 3,999!
        </p>
      </section>
    </div>
  );
}