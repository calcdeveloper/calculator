import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Number Bases (Binary, Decimal, Hex)</h2>
        <p className="mb-4">
          In everyday life, we count using a <strong>Base-10 (Decimal)</strong> system, meaning we have ten digits (0-9). But computers don't have ten fingers! They process information using electronic switches that are either ON or OFF, which is why they use a <strong>Base-2 (Binary)</strong> system consisting only of 1s and 0s. 
        </p>
        <p>
          To make long strings of binary easier for humans to read, programmers group them into <strong>Base-16 (Hexadecimal)</strong>. Understanding how to manually convert between these systems is a foundational skill in computer science and digital electronics.
        </p>
        
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Converting Decimal to Binary (Base-10 to Base-2)</h3>
        <p className="text-sm mb-4">To convert a standard decimal number into binary, you use the "Divide by 2 and keep the remainder" method.</p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <h4 className="font-bold text-gray-900 mb-1">Step-by-Step Formula:</h4>
          <ol className="list-decimal list-inside text-sm space-y-2 text-gray-700 mt-2">
            <li>Divide your decimal number by 2.</li>
            <li>Write down the remainder (it will always be either 0 or 1).</li>
            <li>Take the quotient (the whole number answer) and divide it by 2 again.</li>
            <li>Repeat this process until the quotient is 0.</li>
            <li>Read the remainders from <strong>bottom to top</strong> to get your binary number!</li>
          </ol>
          <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
            <strong>Example: Convert 13 to Binary</strong><br/>
            13 ÷ 2 = 6 (Remainder <strong>1</strong>)<br/>
            6 ÷ 2 = 3 (Remainder <strong>0</strong>)<br/>
            3 ÷ 2 = 1 (Remainder <strong>1</strong>)<br/>
            1 ÷ 2 = 0 (Remainder <strong>1</strong>)<br/>
            <em>Reading bottom to top, 13 in binary is <strong>1101</strong>.</em>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Converting Binary to Decimal (Base-2 to Base-10)</h3>
        <p className="text-sm mb-4">To convert binary back to a readable decimal, you multiply each bit by powers of 2, starting from the right side at $2^0$. The formal polynomial expansion is written as:</p>
        <p className="text-center font-semibold my-4">
          N = d<sub>n</sub> &times; 2<sup>n</sup> + d<sub>n-1</sub> &times; 2<sup>n-1</sup> + ... + d<sub>0</sub> &times; 2<sup>0</sup>
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
          <h4 className="font-bold text-gray-900 mb-1">Step-by-Step Formula:</h4>
          <ol className="list-decimal list-inside text-sm space-y-2 text-gray-700 mt-2">
            <li>Write down your binary number.</li>
            <li>Under each digit, starting from the right, write the powers of 2 (1, 2, 4, 8, 16, 32...).</li>
            <li>If the binary digit is a 1, keep the power of 2. If it is a 0, cross it out.</li>
            <li>Add the remaining powers of 2 together.</li>
          </ol>
          <div className="mt-3 p-3 bg-gray-50 rounded text-sm">
            <strong>Example: Convert 1011 to Decimal</strong><br/>
            Binary: 1 - 0 - 1 - 1<br/>
            Powers: 8 - 4 - 2 - 1<br/>
            Math: (1 × 8) + (0 × 4) + (1 × 2) + (1 × 1)<br/>
            <em>8 + 0 + 2 + 1 = <strong>11</strong>.</em>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Hexadecimal (Base-16)</h3>
        <p className="text-sm mb-4">
          Because a base-16 system requires 16 unique symbols, numbers 0-9 aren't enough! Hexadecimal uses letters to represent values from 10 to 15:
          <strong> A=10, B=11, C=12, D=13, E=14, F=15.</strong>
        </p>
        
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Hex to Decimal Formula</h4>
            <p className="text-sm text-gray-600 mb-2">Just like binary uses powers of 2, Hex uses powers of 16 (1, 16, 256, 4096...). Multiply each hex digit by its corresponding power of 16 from right to left.</p>
            <div className="p-3 bg-gray-50 rounded text-sm">
              <strong>Example: Convert 2F to Decimal</strong><br/>
              Right digit: F (which is 15) × 1 = 15<br/>
              Left digit: 2 × 16 = 32<br/>
              <em>32 + 15 = <strong>47</strong>.</em>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}