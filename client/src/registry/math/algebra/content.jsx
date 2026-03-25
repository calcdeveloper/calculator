import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">What is Algebra?</h2>
        <p className="mb-4">
          Algebra is a branch of mathematics that substitutes letters (like x, y, and z) for unknown numbers. By using these variables, we can write general formulas and solve equations to find the missing values. The ultimate goal in basic algebra is to <strong>isolate the variable</strong> on one side of the equation.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Linear Equations</h3>
        <p>
          A linear equation is an equation for a straight line. The highest power of the variable is exactly 1 (e.g., you will see x, but never x²). 
        </p>
        <div className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-4">
          <p className="font-mono text-center text-lg mb-2 text-calc-green font-semibold">
            Standard Form: ax + b = c
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2 max-w-md mx-auto">
            <li><strong>Step 1:</strong> Use addition or subtraction to move all constant numbers (numbers without variables) to one side of the equals sign.</li>
            <li><strong>Step 2:</strong> Use multiplication or division to isolate the variable. Whatever you do to one side of the equation, you must do to the other.</li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Variables on Both Sides</h4>
          <p className="text-sm mb-3">
            If you have variables on both sides (e.g., 3x + 2 = x + 10), your first step is to group all the variables together.
          </p>
          <p className="text-sm">
            Subtract x from both sides to get 2x + 2 = 10. Then, subtract 2 from both sides to get 2x = 8. Finally, divide by 2 to find that x = 4.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Quadratic Equations</h4>
          <p className="text-sm mb-3">
            A quadratic equation involves a variable raised to the second power (x²). The standard form is <strong>ax² + bx + c = 0</strong>.
          </p>
          <p className="text-sm">
            To solve quadratics, you can factor the equation, complete the square, or use the <strong>Quadratic Formula</strong>: x = (-b ± √(b² - 4ac)) / 2a. The term inside the square root (b² - 4ac) is called the discriminant and tells you how many solutions the equation has.
          </p>
        </div>
      </section>
    </div>
  );
}