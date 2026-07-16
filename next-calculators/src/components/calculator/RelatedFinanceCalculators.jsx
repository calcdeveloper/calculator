import React from 'react';
import Link from 'next/link';
import { calculators } from '@/utils/calculatorData';

export default function RelatedFinanceCalculators({ category, currentCalculatorId }) {
  // Filter calculators by the current category
  // Exclude the current calculator from the list
  const related = calculators.filter(
    (calc) => calc.category === category && !calc.path.endsWith(`/${currentCalculatorId}`)
  );

  if (related.length === 0) return null;

  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="mt-8 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Explore Other {categoryName} Calculators
      </h2>
      <div className="flex flex-wrap gap-3">
        {related.map((calc, index) => (
          <Link
            key={index}
            href={calc.path}
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue font-medium"
          >
            {calc.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
