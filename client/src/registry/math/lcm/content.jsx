import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>LCM & GCF Calculator | Least Common Multiple & Factor</title>
        <meta 
          name="description" 
          content="Calculate the Least Common Multiple (LCM) and Greatest Common Factor (GCF) for any set of numbers instantly with our free online math calculator." 
        />
        <meta name="keywords" content="lcm calculator, gcf calculator, least common multiple, greatest common factor, gcd calculator, greatest common divisor, math calculator" />
      </Helmet>

      {/* --- ON-PAGE CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding LCM and GCF</h2>
        <p className="mb-4">
          Whether you are simplifying fractions, solving algebra equations, or figuring out repeating schedules, finding the <strong>Least Common Multiple (LCM)</strong> and the <strong>Greatest Common Factor (GCF)</strong> are foundational mathematical skills.
        </p>
        <p className="mb-4">
          Our calculator allows you to enter an unlimited string of numbers separated by commas (e.g., <code className="bg-gray-100 px-1 py-0.5 rounded">12, 18, 24, 36</code>) to instantly find both the LCM and GCF for the entire set.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">What is the Least Common Multiple (LCM)?</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            A <strong>multiple</strong> is a number you get when you multiply a starting number by an integer. The <strong>Least Common Multiple</strong> is the smallest positive number that is a multiple of two or more numbers. 
          </p>
          <p className="mb-3">
            This is most commonly used when adding or subtracting fractions with different denominators—the LCM becomes your <em>Lowest Common Denominator</em>.
          </p>
          <p className="text-sm bg-gray-50 p-3 rounded border-l-4 border-calc-green">
            <em>Example: Find the LCM of 4 and 6.</em><br/>
            Multiples of 4: 4, 8, <strong>12</strong>, 16, 20, 24...<br/>
            Multiples of 6: 6, <strong>12</strong>, 18, 24, 30...<br/>
            The smallest number that appears in both lists is <strong>12</strong>. Therefore, the LCM is 12.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">What is the Greatest Common Factor (GCF)?</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            A <strong>factor</strong> is a number that divides evenly into another number with no remainder. The <strong>Greatest Common Factor</strong> (also known as the Greatest Common Divisor or GCD) is the largest number that divides exactly into two or more numbers.
          </p>
          <p className="mb-3">
            This is heavily used when you need to simplify or "reduce" fractions to their lowest terms.
          </p>
          <p className="text-sm bg-gray-50 p-3 rounded border-l-4 border-blue-500">
            <em>Example: Find the GCF of 12 and 18.</em><br/>
            Factors of 12: 1, 2, 3, 4, <strong>6</strong>, 12<br/>
            Factors of 18: 1, 2, 3, <strong>6</strong>, 9, 18<br/>
            The largest factor that appears in both lists is <strong>6</strong>. Therefore, the GCF is 6.
          </p>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900 rounded-r-lg mt-6">
          <strong>How are they related mathematically?</strong> If you already know the GCF of two numbers, you can easily find the LCM using this standard formula: <br/>
          <code className="font-mono bg-white px-2 py-1 rounded mt-2 inline-block">LCM(a, b) = (a × b) / GCF(a, b)</code>
        </div>
      </section>
    </div>
  );
}