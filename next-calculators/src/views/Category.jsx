import Link from 'next/link';
import { Calculator } from 'lucide-react';
import { calculators } from '../utils/calculatorData';

// Helper to capitalize the first letter of the category for the title
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default function Category() {
  const { id } = useParams(); // Gets 'finance', 'health', etc. from the URL
  
  // Find all calculators that match this category
  const categoryCalculators = calculators.filter(calc => calc.category === id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* Page Header */}
      <div className="mb-10 text-center md:text-left border-b border-calc-lightGray pb-6">
        <h1 className="text-4xl font-bold text-calc-black mb-4">
          {capitalize(id)} Calculators
        </h1>
        <p className="text-lg text-calc-gray">
          Explore our collection of free {id} tools and calculators.
        </p>
      </div>

      {/* Grid of Calculators */}
      {categoryCalculators.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCalculators.map((calc, index) => (
            <Link 
              key={index} 
              to={calc.path}
              className="bg-calc-white p-6 rounded-xl border border-calc-lightGray hover:border-calc-green hover:shadow-md transition-all group flex items-start space-x-4"
            >
              <div className="bg-calc-green/10 text-calc-green p-3 rounded-lg group-hover:bg-calc-green group-hover:text-calc-white transition-colors">
                <Calculator size={24} />
              </div>
              <div>
                <h3 className="font-bold text-calc-black text-lg mb-1 group-hover:text-calc-green transition-colors">
                  {calc.name}
                </h3>
                <p className="text-calc-gray text-sm">
                  Click to use this calculator instantly.
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State if no calculators exist for this category yet */
        <div className="text-center py-20 bg-calc-white rounded-xl border border-calc-lightGray">
          <Calculator size={48} className="mx-auto text-calc-lightGray mb-4" />
          <h2 className="text-2xl font-bold text-calc-black mb-2">Coming Soon</h2>
          <p className="text-calc-gray">We are currently building the best calculators for this category.</p>
          <Link href="/" className="inline-block mt-6 text-calc-green font-semibold hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      )}

    </main>
  );
} 