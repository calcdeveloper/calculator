import Link from 'next/link';
import { calculators } from '../../../utils/calculatorData';
import { absoluteUrl } from '@/config/site';

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { categoryId } = await params;
  const title = `${categoryId.charAt(0).toUpperCase()}${categoryId.slice(1)} Calculators`;
  const path = `/category/${categoryId}`;

  return {
    title,
    description: `Browse free ${categoryId} calculators on ToolsWizard. Fast, accurate, and mobile-friendly.`,
    alternates: { canonical: absoluteUrl(path) },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  const uniqueCategories = [...new Set(calculators.map(calc => calc.category))];
  return uniqueCategories.filter(Boolean).map((category) => ({
    categoryId: category.toLowerCase(),
  }));
}

// 1. We added 'async' right here!
export default async function CategoryPage({ params }) {
  
  // 2. We 'await' the params before trying to read the categoryId!
  const resolvedParams = await params;
  const categoryId = resolvedParams.categoryId; 

  // Filter the calculators to only show ones matching this category
  const categoryCalculators = calculators.filter(
    (calc) => calc.category?.toLowerCase() === categoryId?.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* Page Header */}
      <div className="mb-10 border-b border-calc-lightGray pb-6">
        <h1 className="text-4xl font-bold text-calc-black mb-4 capitalize">
          {categoryId} Calculators
        </h1>
        <p className="text-lg text-calc-gray">
          Select a calculator below to get started.
        </p>
      </div>

      {/* Calculator Grid */}
      {categoryCalculators.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCalculators.map((calc, index) => (
            <Link
              href={calc.path || `/calculator/${categoryId}/${calc.id}`}
              key={index}
              className="bg-calc-white p-6 rounded-xl border border-calc-lightGray hover:border-calc-green hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-calc-black text-xl mb-2 group-hover:text-calc-green transition-colors">
                  {calc.name}
                </h3>
                <p className="text-calc-darkGray text-sm mb-6">
                  {calc.description || `Calculate your ${calc.name.toLowerCase()} easily and accurately.`}
                </p>
              </div>
              <span className="inline-block bg-calc-green/10 text-calc-green font-semibold px-4 py-2 rounded-lg text-center group-hover:bg-calc-green group-hover:text-calc-white transition-colors">
                Open Calculator
              </span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-calc-white rounded-xl border border-calc-lightGray">
          <p className="text-calc-gray text-lg font-medium">No calculators found for this category yet.</p>
          <Link href="/" className="text-calc-green font-bold mt-4 inline-block hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}
