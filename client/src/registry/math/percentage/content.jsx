import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Percentage Calculator | Free Online % Calculator</title>
        <meta 
          name="description" 
          content="Use our free online percentage calculator to quickly calculate percent increase or decrease, find what percentage one number is of another, and more." 
        />
        <meta name="keywords" content="percentage calculator, percent increase calculator, percent decrease, what percent is, calculate percentages, math calculator" />
      </Helmet>

      {/* --- ON-PAGE CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">How to Calculate Percentages</h2>
        <p className="mb-4">
          The word <strong>percentage</strong> comes from the Latin phrase <em>per centum</em>, which means "by the hundred." It is a way of expressing a number as a fraction of 100. Whether you are calculating a tip at a restaurant, figuring out a discount while shopping, or determining profit margins, understanding how to calculate percentages is a vital everyday skill.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Common Percentage Formulas</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">1. Finding a Percentage of a Number</h3>
            <p className="mb-2"><strong>Formula:</strong> (Percentage / 100) × Base Number</p>
            <p className="text-sm">
              <em>Example: What is 20% of 150?</em><br/>
              Convert 20% to a decimal (0.20) and multiply by 150. The answer is 30.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">2. Finding What Percentage One Number is of Another</h3>
            <p className="mb-2"><strong>Formula:</strong> (Part / Whole) × 100</p>
            <p className="text-sm">
              <em>Example: 45 is what percentage of 60?</em><br/>
              Divide 45 by 60 to get 0.75. Multiply by 100. The answer is 75%.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">3. Calculating Percentage Change</h3>
            <p className="mb-2"><strong>Formula:</strong> ((New Value - Old Value) / |Old Value|) × 100</p>
            <p className="text-sm">
              <em>Example: A pair of shoes went from $80 to $100. What is the percentage increase?</em><br/>
              Subtract 80 from 100 to get a change of 20. Divide 20 by the old value (80) to get 0.25. Multiply by 100. The increase is 25%.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}