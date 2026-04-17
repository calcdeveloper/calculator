"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function HomeSearch({ calculators }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const featuredCalculators = calculators.slice(0, 8);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return calculators
      .filter((calc) => calc.name.trim().toLowerCase().includes(q))
      .slice(0, 8);
  }, [calculators, query]);

  const navigateTo = (calc) => {
    if (!calc?.path) return;
    router.push(calc.path);
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;

    const exact = calculators.find(
      (calc) => calc.name.trim().toLowerCase() === q
    );
    if (exact) {
      navigateTo(exact);
      return;
    }

    if (matches.length === 1) navigateTo(matches[0]);
  };

  return (
    <div className="relative max-w-2xl mx-auto z-10 text-left">
      <form className="relative" onSubmit={handleSubmit}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-calc-gray" />
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-10 pr-3 py-4 border border-calc-lightGray rounded-lg leading-5 bg-calc-white placeholder-calc-gray focus:outline-none focus:ring-2 focus:ring-calc-green transition-all shadow-sm text-lg"
          placeholder="Search calculator (e.g., SIP, BMI)..."
          aria-label="Search calculators"
        />
        <button type="submit" className="sr-only">
          Search
        </button>

        {query.trim().length > 0 && matches.length > 0 && (
          <div className="absolute mt-2 w-full rounded-lg border border-calc-lightGray bg-calc-white shadow-lg overflow-hidden z-20">
            <ul role="listbox" aria-label="Search suggestions">
              {matches.map((calc) => (
                <li key={calc.path}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => navigateTo(calc)}
                    className="w-full text-left px-4 py-3 text-calc-black hover:bg-calc-lightGray/40 transition"
                  >
                    {calc.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>

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
