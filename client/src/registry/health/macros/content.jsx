import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Macronutrient Calculator | Find Your Ideal Protein, Carbs & Fat</title>
        <meta 
          name="description" 
          content="Calculate your perfect macro split for weight loss, muscle gain, or maintenance. Our advanced macro calculator supports Keto, Low Carb, and Standard diets." 
        />
        <meta name="keywords" content="macro calculator, calculate macros, protein carbs fat calculator, keto macro calculator, weight loss macros, bodybuilding macros, IIFYM calculator" />
        
        <meta property="og:title" content="Advanced Macronutrient Calculator | CalcPilot" />
        <meta property="og:description" content="Discover exactly how many grams of protein, carbs, and fat you need to eat every day to reach your fitness goals." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- ON-PAGE CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What Are Macronutrients?</h2>
        <p className="mb-4">
          Macronutrients (often referred to as "macros") are the three primary building blocks of the food you eat: <strong>Protein, Carbohydrates, and Fat</strong>. While calories determine <em>how much</em> weight you lose or gain, your macro split determines your body composition—how much of that weight is fat versus muscle.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">How This Calculator Works</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">Step 1: Calculating Your BMR & TDEE</h3>
            <p className="mb-3">
              First, we use the highly accurate <strong>Mifflin-St Jeor Equation</strong> to find your Basal Metabolic Rate (BMR). We then multiply this by your chosen activity level to find your Total Daily Energy Expenditure (TDEE).
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 border-l-4 border-calc-green overflow-x-auto">
              Men: (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5<br/>
              Women: (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">Step 2: Adjusting for Your Goal</h3>
            <p className="mb-2">Once we know how many calories you burn naturally, we adjust the target based on your goal:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-sm">
              <li><strong>Lose Weight:</strong> We apply a 20% caloric deficit to encourage sustainable fat loss.</li>
              <li><strong>Maintain:</strong> We keep your calories equal to your TDEE.</li>
              <li><strong>Build Muscle:</strong> We apply a 20% caloric surplus to fuel muscle protein synthesis.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-xl font-semibold text-calc-black mb-2">Step 3: Translating Calories to Grams</h3>
            <p className="mb-3">
              Finally, we take your target calories and split them into grams based on your preferred diet type. To do this, we use the universal calorie-to-gram conversions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                <span className="block font-bold text-calc-black">Protein</span>
                <span className="text-sm">4 Calories per Gram</span>
              </div>
              <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                <span className="block font-bold text-calc-black">Carbs</span>
                <span className="text-sm">4 Calories per Gram</span>
              </div>
              <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                <span className="block font-bold text-calc-black">Fat</span>
                <span className="text-sm">9 Calories per Gram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900 rounded-r-lg">
          <strong>Tip for Beginners:</strong> If you are new to tracking macros, don't worry about hitting the numbers down to the exact gram. Aiming to stay within 5-10 grams of your target for each macronutrient is considered a massive success and will yield excellent results!
        </div>
      </section>
    </div>
  );
}