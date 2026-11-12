import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { calculators } from '@/utils/calculatorData';
import { createPageMetadata, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { category } = await params;
  const categoryName = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
  const title = `Free ${categoryName} Calculators`;
  const path = `/calculator/${category}`;

  return createPageMetadata({
    title,
    description: `Browse free, fast, and accurate online ${category} calculators on ToolsWizard. Mobile-friendly tools with instant results.`,
    path,
    keywords: [
      `${category} calculator`,
      `online ${category} calculators`,
      `free ${category} tool`,
      `calculator suite`
    ]
  });
}

export function generateStaticParams() {
  const uniqueCategories = [...new Set(calculators.map((calc) => calc.category))];
  return uniqueCategories.filter(Boolean).map((category) => ({
    category: category.toLowerCase(),
  }));
}

export default async function CalculatorCategoryPage({ params }) {
  const { category } = await params;
  const categoryName = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;

  const categoryCalculators = calculators.filter(
    (calc) => calc.category?.toLowerCase() === category?.toLowerCase()
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Calculators', path: '/calculator' },
    { name: `${categoryName} Calculators`, path: `/calculator/${category}` },
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-calc-gray mb-6">
        <Link href="/" className="hover:text-calc-green transition-colors">Home</Link>
        <ChevronRight size={14} className="text-gray-400" />
        <Link href="/calculator" className="hover:text-calc-green transition-colors">Calculators</Link>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-calc-black font-semibold">{categoryName}</span>
      </nav>

      <div className="mb-10 border-b border-calc-lightGray pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-calc-black mb-4">
          Free {categoryName} Calculators
        </h1>
        <p className="text-lg text-calc-gray">
          Choose a calculator below to calculate instant results with full schedules and breakdowns.
        </p>
      </div>

      {categoryCalculators.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCalculators.map((calc, index) => (
            <Link
              href={calc.path || `/calculator/${category}/${calc.id}`}
              key={index}
              className="bg-calc-white p-6 rounded-xl border border-calc-lightGray hover:border-calc-green hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <h2 className="font-bold text-calc-black text-xl mb-2 group-hover:text-calc-green transition-colors">
                  {calc.name}
                </h2>
                <p className="text-calc-darkGray text-sm mb-6">
                  {calc.description ||
                    `Calculate your ${calc.name.toLowerCase()} easily, quickly, and accurately.`}
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
          <p className="text-calc-gray text-lg font-medium">
            No calculators found for this category yet.
          </p>
          <Link
            href="/calculator"
            className="text-calc-green font-bold mt-4 inline-block hover:underline"
          >
            &larr; Back to Calculators
          </Link>
        </div>
      )}
    </div>
  );
}
