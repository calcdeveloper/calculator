import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Daily Water Intake Calculator | How Much Water Should I Drink?</title>
        <meta 
          name="description" 
          content="Calculate exactly how much water you need to drink every day based on your body weight, exercise routine, and local climate." 
        />
        <meta name="keywords" content="water intake calculator, how much water should I drink, hydration calculator, daily water needs, liters of water per day, cups of water per day" />
        
        <meta property="og:title" content="Advanced Water Intake Calculator | CalcPilot" />
        <meta property="og:description" content="Find your personalized daily hydration target in liters, ounces, and cups." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- ON-PAGE CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Why the "8 Glasses a Day" Rule is Outdated</h2>
        <p className="mb-4">
          For decades, the standard advice was to drink eight 8-ounce glasses of water a day (about 2 liters). While this is a reasonable starting point, it treats a 110 lb sedentary person exactly the same as a 200 lb athlete living in a hot climate. 
        </p>
        <p className="mb-4">
          Your actual hydration needs are highly personalized. Your body loses water continuously through breathing, sweating, and digestion, and that rate of loss changes based on your physical metrics and environment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">How We Calculate Your Water Needs</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">1. The Baseline Formula</h3>
            <p className="mb-3">
              The foundational formula recommended by health professionals is to drink between half an ounce and an ounce of water for each pound you weigh. We use the universally accepted baseline of <strong>0.5 ounces per pound of body weight</strong>.
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 border-l-4 border-calc-green">
              Base Hydration = Body Weight (lbs) × 0.5 oz
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">2. Adjusting for Exercise</h3>
            <p className="mb-2">
              When you exercise, your core temperature rises and you lose water through sweat and heavy respiration. The American College of Sports Medicine recommends adding roughly <strong>12 ounces of water for every 30 minutes of exercise</strong>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">3. Environmental & Health Factors</h3>
            <p className="mb-2">We add additional hydration buffers based on specific physiological stressors:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-sm">
              <li><strong>Hot or Humid Climates:</strong> Increases sweat rate even while resting.</li>
              <li><strong>High Altitude:</strong> The air is thinner and drier, meaning you lose more moisture every time you exhale.</li>
              <li><strong>Pregnancy & Breastfeeding:</strong> The Institute of Medicine (IOM) recommends significantly higher fluid intake to support amniotic fluid and milk production.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900 rounded-r-lg">
          <strong>Hydration Tip:</strong> You don't have to get all your fluid from plain water! About 20% of your daily water intake naturally comes from the food you eat, especially water-rich foods like watermelon, cucumber, strawberries, and soups.
        </div>
      </section>
    </div>
  );
}