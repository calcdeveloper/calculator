import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- HIGH-IMPACT SEO TAGS --- */}
      <Helmet>
        <title>Fraction Calculator | Simplify, Fraction to Decimal, Decimal to Fraction</title>
        <meta 
          name="description" 
          content="The ultimate free online fraction calculator. Easily simplify fractions, convert fractions to decimals, turn decimals into fractions, and solve mixed numbers." 
        />
        <meta name="keywords" content="fraction calculator, fraction to decimal, decimal to fraction, simplify fractions calculator, mixed numbers calculator, reduce fractions" />
      </Helmet>

      {/* --- ON-PAGE CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Ultimate All-in-One Fraction Calculator</h2>
        <p className="mb-4">
          Whether you are doing math homework, working on a construction project, or scaling a recipe, dealing with fractions can be tricky. Our multi-tool calculator is designed to solve every fraction problem instantly. Use the dropdown at the top to switch between basic math, mixed numbers, simplification, or decimal conversions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Convert a Fraction to a Decimal</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            Converting a fraction to a decimal is incredibly simple: <strong>just divide the top number (numerator) by the bottom number (denominator)</strong>.
          </p>
          <p className="text-sm bg-gray-50 p-3 rounded border-l-4 border-calc-green">
            <em>Example: Convert 3/4 to a decimal.</em><br/>
            Calculation: 3 ÷ 4 = <strong>0.75</strong>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Convert a Decimal to a Fraction</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            To turn a decimal into a fraction, follow these three steps:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600 mb-3">
            <li>Write down the decimal divided by 1 (e.g., 0.625 / 1).</li>
            <li>Multiply both top and bottom by 10 for every number after the decimal point. (For 0.625, multiply by 1000 to get 625 / 1000).</li>
            <li>Simplify (reduce) the fraction by finding the Greatest Common Divisor.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Simplify Fractions</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            Simplifying (or reducing) a fraction means making it as simple as possible without changing its actual value. You do this by finding the <strong>Greatest Common Divisor (GCD)</strong>—the largest number that divides evenly into both the top and bottom numbers.
          </p>
          <p className="text-sm bg-gray-50 p-3 rounded border-l-4 border-calc-green">
            <em>Example: Simplify 12/16.</em><br/>
            The largest number that goes into both 12 and 16 is 4.<br/>
            Divide 12 by 4 = 3.<br/>
            Divide 16 by 4 = 4.<br/>
            <strong>Answer: 3/4</strong>
          </p>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900 rounded-r-lg mt-6">
          <strong>What are Mixed Numbers?</strong> A mixed number is a whole number combined with a fraction (like 2 ½). To add or subtract mixed numbers manually, it is usually easiest to convert them into <strong>improper fractions</strong> first (where the top number is larger than the bottom number, like 5/2), do the math, and then convert the answer back into a mixed number. Our <em>Mixed Numbers Mode</em> handles all of this automatically!
        </div>
      </section>
    </div>
  );
}