import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Between Fractions and Decimals</h2>
        <p className="mb-4">
          Fractions and decimals are simply two different ways of representing the same exact number. A fraction shows a value as a "part of a whole" using a top number (numerator) and a bottom number (denominator), while a decimal represents that same value using base-10 place values.
        </p>
        <p>
          Whether you are cutting wood for a carpentry project or helping a student with math homework, understanding the specific formulas to convert back and forth between these two formats is incredibly useful.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Converting a Fraction to a Decimal</h3>
        <p className="text-sm mb-4">This is the easiest conversion to make. The line separating the top and bottom of a fraction is literally just a division symbol!</p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <h4 className="font-bold text-gray-900 mb-1">The Formula: Numerator ÷ Denominator</h4>
          <p className="text-sm text-gray-600 mb-2">To turn any fraction into a decimal, simply divide the top number by the bottom number.</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li><strong>Example 1 (Half):</strong> For the fraction <strong>1/2</strong>, divide 1 by 2. The result is <strong>0.5</strong>.</li>
            <li><strong>Example 2 (Three-Quarters):</strong> For <strong>3/4</strong>, divide 3 by 4. The result is <strong>0.75</strong>.</li>
            <li><strong>Example 3 (Eighths):</strong> For <strong>5/8</strong>, divide 5 by 8. The result is <strong>0.625</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Converting a Decimal to a Fraction</h3>
        <p className="text-sm mb-4">Turning a decimal back into a fraction requires understanding "place values" (tenths, hundredths, thousandths) and then simplifying the result. Follow these steps:</p>
        

[Image of place value chart for decimals]

        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Step 1: Find the Place Value Base</h4>
            <p className="text-sm text-gray-600">Count how many numbers are to the right of the decimal point. This tells you what your "base" denominator will be.</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-700">
              <li>1 digit = Denominator is 10 (e.g., 0.8 becomes 8/10)</li>
              <li>2 digits = Denominator is 100 (e.g., 0.75 becomes 75/100)</li>
              <li>3 digits = Denominator is 1,000 (e.g., 0.125 becomes 125/1000)</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Step 2: Simplify the Fraction</h4>
            <p className="text-sm text-gray-600 mb-2">Once you have your base fraction, you must reduce it to its lowest terms by finding the Greatest Common Divisor (GCD)—the largest number that divides evenly into both the top and bottom.</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li><strong>Example (0.75):</strong> We know 0.75 has two decimal places, making it <strong>75/100</strong>.</li>
              <li>The largest number that divides evenly into both 75 and 100 is <strong>25</strong>.</li>
              <li>Divide the top (75 ÷ 25 = 3).</li>
              <li>Divide the bottom (100 ÷ 25 = 4).</li>
              <li>The final simplified fraction is <strong>3/4</strong>.</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">What about Repeating Decimals?</h3>
        <p className="text-sm">
          Some fractions do not convert into clean, terminating decimals. For example, if you convert 1/3 (1 ÷ 3), you get 0.33333... repeating infinitely. To convert a repeating decimal back into a fraction, the mathematical rule changes slightly: instead of placing the numbers over 10, 100, or 1000, you place them over 9, 99, or 999! (For example, 0.333 repeating becomes 3/9, which simplifies perfectly back to 1/3).
        </p>
      </section>
    </div>
  );
}