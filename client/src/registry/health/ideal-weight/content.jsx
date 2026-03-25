import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Ideal Weight Calculator | Find Your Healthy Target Weight</title>
        <meta 
          name="description" 
          content="Calculate your ideal body weight (IBW) based on your height and gender using four medically recognized formulas: Devine, Robinson, Miller, and Hamwi." 
        />
        <meta name="keywords" content="ideal weight calculator, IBW calculator, target weight, healthy weight for my height, devine formula, robinson formula weight" />
        
        <meta property="og:title" content="Advanced Ideal Weight Calculator | CalcPilot" />
        <meta property="og:description" content="Find your medically recommended target weight using our highly accurate Ideal Body Weight calculator." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- ON-PAGE CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is Ideal Body Weight (IBW)?</h2>
        <p className="mb-4">
          Ideal Body Weight (IBW) is an estimate of a healthy weight for a person based on their height and gender. Originally developed for medical use—such as calculating correct medication dosages—these formulas are now widely used as a benchmark for general health, fitness, and weight management goals.
        </p>
        <p className="mb-4">
          Because no single equation is perfectly tailored to every body type, our calculator provides the results of the <strong>four most scientifically recognized formulas</strong> and averages them for a more realistic baseline.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">The Four Clinical Formulas Used</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">1. The Devine Formula (1974)</h3>
            <p className="mb-3 text-sm">
              Originally designed to calculate dosages for medications like gentamicin. It is currently the most widely used formula in hospitals and clinics worldwide.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li><strong>Men:</strong> 50.0 kg + 2.3 kg per inch over 5 feet</li>
              <li><strong>Women:</strong> 45.5 kg + 2.3 kg per inch over 5 feet</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">2. The Robinson Formula (1983)</h3>
            <p className="mb-3 text-sm">
              An adjustment to the Devine formula designed to give more accurate readings for women and taller individuals.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li><strong>Men:</strong> 52.0 kg + 1.9 kg per inch over 5 feet</li>
              <li><strong>Women:</strong> 49.0 kg + 1.7 kg per inch over 5 feet</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">3. The Miller Formula (1983)</h3>
            <p className="mb-3 text-sm">
              Another widely accepted variation that tends to yield slightly lower estimates for taller individuals compared to the Devine formula.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li><strong>Men:</strong> 56.2 kg + 1.41 kg per inch over 5 feet</li>
              <li><strong>Women:</strong> 53.1 kg + 1.36 kg per inch over 5 feet</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">4. The Hamwi Formula (1964)</h3>
            <p className="mb-3 text-sm">
              Created for quick medical estimations, this formula is known to give a broader range and is commonly used to establish a baseline in nutritional counseling.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li><strong>Men:</strong> 48.0 kg + 2.7 kg per inch over 5 feet</li>
              <li><strong>Women:</strong> 45.5 kg + 2.2 kg per inch over 5 feet</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900 rounded-r-lg mt-6">
          <strong>Limitations of IBW:</strong> None of these formulas account for muscle mass, bone density, or body composition. A heavily muscled athlete may weigh significantly more than their "Ideal Body Weight" but still maintain exceptional health and a low body fat percentage. Always consult with a healthcare professional before pursuing aggressive weight changes.
        </div>
      </section>
    </div>
  );
}