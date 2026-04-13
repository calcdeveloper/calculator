import Link from "next/link";
import { Search } from "lucide-react";

export default function HomeSearch({ calculators }) {
  const featuredCalculators = calculators.slice(0, 8);

  return (
    <div className="relative max-w-2xl mx-auto z-10 text-left">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-calc-gray" />
        </div>
        <input
          type="search"
          list="calculator-search-list"
          className="block w-full pl-10 pr-3 py-4 border border-calc-lightGray rounded-lg leading-5 bg-calc-white placeholder-calc-gray focus:outline-none focus:ring-2 focus:ring-calc-green transition-all shadow-sm text-lg"
          placeholder="Search calculator (e.g., SIP, BMI)..."
          aria-label="Search calculators"
        />
        <datalist id="calculator-search-list">
          {calculators.map((calc) => (
            <option key={calc.path} value={calc.name} />
          ))}
        </datalist>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 justify-center">
        {featuredCalculators.map((calc) => (
          <Link
            key={calc.path}
            href={calc.path}
            className="rounded-md border border-calc-lightGray bg-calc-white px-3 py-2 text-sm font-medium text-calc-gray hover:border-calc-green hover:text-calc-green transition"
          >
            {calc.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
