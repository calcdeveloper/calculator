import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Calories Burned Calculator | Measure Your Exercise Output</title>
        <meta 
          name="description" 
          content="Calculate exactly how many calories you burn walking, running, cycling, and more. Uses precise MET formulas based on your body weight and exercise duration." 
        />
        <meta name="keywords" content="calories burned calculator, how many calories do I burn, exercise calorie calculator, walking calories, running calories, MET value calculator" />
        
        <meta property="og:title" content="Calories Burned Calculator | CalcPilot" />
        <meta property="og:description" content="Find out exactly how many calories your workout burns using clinical MET formulas." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- ON-PAGE CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">How We Calculate Calories Burned</h2>
        <p className="mb-4">
          Our calculator uses the standard physiological measurement known as the <strong>Metabolic Equivalent of Task (MET)</strong>. A MET is a ratio of your working metabolic rate relative to your resting metabolic rate. 
        </p>
        <p className="mb-4">
          For example, an activity with a MET value of 4 means you are exerting four times as much energy as you would if you were sitting still. By combining the MET value of an activity with your body weight and exercise duration, we can estimate your caloric expenditure with high accuracy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">The Clinical MET Formula</h2>
        
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">The formula used by health professionals, dietitians, and fitness trackers to estimate calories burned is:</p>
          <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-calc-green overflow-x-auto">
            Calories = (MET × 3.5 × Body Weight in kg ÷ 200) × Duration in Minutes
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Why Body Weight Matters</h2>
        <p className="mb-3">
          Have you ever wondered why heavier people burn more calories doing the exact same exercise? It comes down to energy and physics.
        </p>
        <p className="mb-4">
          It takes more energy (calories) to move a heavier object. Therefore, a person weighing 200 lbs will burn significantly more calories running for 30 minutes than a person weighing 140 lbs running at the exact same speed. This is why calorie tracking machines at the gym ask for your weight before you begin your workout!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Active vs. Resting Calories</h2>
        <p className="mb-3">
          Our calculator splits your results into two categories in the summary chart:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Resting Burn:</strong> The calories your body burns just keeping your organs functioning (breathing, circulating blood) during the timeframe you selected. This happens even if you are completely still.</li>
          <li><strong>Active Burn:</strong> The *additional* calories your body burned strictly because you were performing the exercise.</li>
        </ul>
      </section>
    </div>
  );
}