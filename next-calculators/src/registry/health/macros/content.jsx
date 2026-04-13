import React from "react";


export default function Content() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Free Macro Calculator India | Calculate Protein, Carbs & Fat
  // META DESCRIPTION: Calculate your perfect daily macros for weight loss or muscle gain. Use our free Indian Macronutrient Calculator to find your ideal protein, carbs & fat split.
  // URL SLUG: /macro-calculator-india
  // PRIMARY KEYWORD: macro calculator india
  // SECONDARY KEYWORDS: calculate macros, protein carbs fat calculator, daily macros calculator, keto macro calculator, weight loss macros, bodybuilding macros, IIFYM calculator, ideal macro split, how to calculate macros, macros for indian diet
  // LONG-TAIL KEYWORDS: how to calculate macros for weight loss in india, macro split for vegetarian indian diet, best macros for fat loss female, daily protein requirement for indian male, how to track macros with indian food

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I eat roti and rice while tracking macros?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. The beauty of macro tracking (IIFYM) is that no food is off-limits. As long as your portion of rice or roti fits within your daily carbohydrate budget, you will continue to see weight loss or muscle-building results."
        }
      },
      {
        "@type": "Question",
        "name": "How can vegetarians hit high protein targets in an Indian diet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can be challenging but is entirely possible. Focus on protein-dense foods like low-fat paneer, tofu, soya chunks, Greek yogurt, lentils (dal), and consider supplementing with whey or plant-based protein powders."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best macro split for weight loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While there is no single magic number, a higher-protein approach is generally best for fat loss. A standard split of 35-40% protein, 30-40% carbs, and 25-30% fats helps preserve muscle mass and keeps you feeling full in a calorie deficit."
        }
      },
      {
        "@type": "Question",
        "name": "Should I track raw or cooked food?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always weigh and track your food in its raw or uncooked state when possible (e.g., raw rice, raw dal, raw chicken). Cooking methods and water absorption significantly change the weight of the food, making cooked measurements highly inaccurate."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I go over my daily fat limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dietary fats are highly calorie-dense, containing 9 calories per gram. If you exceed your fat macros, you will likely exceed your total daily calorie target, which can hinder fat loss. Try to balance it out by eating slightly less fat the following day."
        }
      },
      {
        "@type": "Question",
        "name": "Is macro tracking better than simple calorie counting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Calorie counting dictates whether you lose or gain weight, but macro tracking dictates body composition. Hitting your macro targets ensures you lose stubborn fat instead of valuable muscle, leading to a toned physique."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      

      {/* --- ON-PAGE CONTENT --- */}

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Free Macro Calculator India: Find Your Ideal Protein, Carbs & Fat</h1>
        <p className="mb-4">
          Are you struggling to lose belly fat or build muscle despite eating "healthy"? The missing puzzle piece might be your macros. A <strong>Macronutrient (Macros) Calculator</strong> helps you determine the exact amount of protein, carbohydrates, and fats you need to consume daily to achieve your fitness goals.
        </p>
        <p className="mb-4">
          In India, our traditional diets are naturally carbohydrate-heavy and often protein-deficient. This imbalance frequently leads to frustrating weight plateaus, fatigue, and the loss of lean muscle mass. Whether your goal is to lose stubborn fat, bulk up in the gym, or simply maintain a healthy lifestyle, this calculator provides a personalized nutritional roadmap.
        </p>
        <p>
          Designed for everyone from absolute beginners to advanced fitness enthusiasts, this tool takes the guesswork out of your diet. By finding your perfect macro split, you can continue to enjoy your favorite Indian meals while making consistent, visible progress.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Macronutrient Calculator</h2>
        <p className="mb-4">Getting your precise daily macro targets takes less than two minutes. Follow these simple steps based on the calculator inputs above:</p>
        
        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Enter Your Details:</strong> Start by selecting your Gender and entering your current Age.</li>
          <li><strong>Input Body Metrics:</strong> Choose your preferred measurement units (Kilograms or Pounds, Centimeters or Inches) and enter your exact Weight and Height.</li>
          <li><strong>Select Activity Level:</strong> Be brutally honest about your daily movement. Choose from Sedentary (office job, little exercise), Lightly Active (1-3 days/week), Moderately Active, or Very Active.</li>
          <li><strong>Define Your Primary Goal:</strong> Select whether you want to Lose Weight, Maintain Weight, or Build Muscle. The calculator automatically adjusts your total calories based on this choice.</li>
          <li><strong>Choose Preferred Diet Type:</strong> Select the dietary style you prefer to follow. Options range from a Standard Balanced diet (30% Protein, 35% Carbs, 35% Fat) to Low-Carb and Keto setups.</li>
        </ol>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <h3 className="font-bold text-green-800 mb-1">Understanding Your Results</h3>
          <p className="text-sm text-green-900">
            Once calculated, the tool instantly outputs your <strong>Daily Calorie Target</strong>. Below that, it provides a precise breakdown of the exact grams of <strong>Protein</strong>, <strong>Carbohydrates</strong>, and <strong>Fats</strong> you should aim to eat every day, alongside a visual pie chart mapping out your daily intake distribution.
          </p>
        </div>
      </section>

      {/* FORMULA SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science & Formulas Behind the Calculations</h2>
        <p className="mb-5">Our calculator uses a highly accurate, three-step scientific process to translate your body statistics into an actionable daily nutrition plan.</p>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Calculate Basal Metabolic Rate (BMR)</h3>
            <p className="mb-3 text-sm text-gray-600">
              We use the globally recognized <strong>Mifflin-St Jeor Equation</strong> to determine how many calories your body burns at complete rest just to keep you alive.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-blue-500 overflow-x-auto">
              <strong>Men:</strong> (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5<br/>
              <strong>Women:</strong> (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Determine Total Daily Energy Expenditure (TDEE)</h3>
            <p className="mb-2 text-sm text-gray-600">Your BMR is multiplied by an activity factor (ranging from 1.2 for sedentary to 1.9 for extra active) to find your TDEE—the total calories you burn in a 24-hour period. We then adjust this number based on your goal:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              <li><strong>Weight Loss:</strong> Subtracts 20% for a sustainable caloric deficit.</li>
              <li><strong>Maintenance:</strong> Keeps calories equal to your TDEE.</li>
              <li><strong>Muscle Gain:</strong> Adds a 20% caloric surplus.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Translating Calories to Grams</h3>
            <p className="mb-4 text-sm text-gray-600">
              Finally, we take your target calories and divide them into percentages based on your chosen diet type. To convert those specific calorie chunks into edible grams, we use the universal nutritional values:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                <span className="block font-bold text-blue-800 text-lg mb-1">Protein</span>
                <span className="text-sm font-medium text-gray-700">1g = 4 Calories</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center border border-orange-100">
                <span className="block font-bold text-orange-800 text-lg mb-1">Carbohydrates</span>
                <span className="text-sm font-medium text-gray-700">1g = 4 Calories</span>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center border border-yellow-100">
                <span className="block font-bold text-yellow-800 text-lg mb-1">Dietary Fat</span>
                <span className="text-sm font-medium text-gray-700">1g = 9 Calories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Real-World Examples</h2>
        <p className="mb-6">To understand how this translates to a daily eating routine, let us review two individuals with different biometrics and goals.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 1: Maintaining Weight on a Balanced Diet</h3>
            <p className="mb-4 text-sm text-gray-600">Rohan is a 30-year-old male from Delhi. He weighs 70 kg and is 170 cm tall. He exercises lightly and wants to maintain his weight using a Standard Balanced Diet (30% Protein, 35% Carbs, 35% Fat).</p>
            <ul className="list-none space-y-2 text-sm text-gray-800 font-medium">
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Calorie Target:</strong> After calculating his BMR and activity multiplier, Rohan's daily maintenance target is <strong>2,224 calories</strong>.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Protein (30%):</strong> 667 calories ÷ 4 = <strong>167 grams</strong></li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Carbs (35%):</strong> 778 calories ÷ 4 = <strong>195 grams</strong></li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Fats (35%):</strong> 778 calories ÷ 9 = <strong>86 grams</strong></li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 2: Fat Loss for a Sedentary Office Worker</h3>
            <p className="mb-4 text-sm text-gray-600">Sneha is a 28-year-old female weighing 65 kg and 160 cm tall. She works a sedentary desk job and wants to lose weight. She chooses a High Protein diet to preserve muscle tone (40% Protein, 30% Carbs, 30% Fat).</p>
            <ul className="list-none space-y-2 text-sm text-gray-800 font-medium">
              <li className="flex items-center"><span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> <strong>Calorie Target:</strong> Her TDEE is roughly 1,600 calories. With a 20% fat loss deficit applied, her target is <strong>1,280 calories</strong>.</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> <strong>Protein (40%):</strong> 512 calories ÷ 4 = <strong>128 grams</strong></li>
              <li className="flex items-center"><span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> <strong>Carbs (30%):</strong> 384 calories ÷ 4 = <strong>96 grams</strong></li>
              <li className="flex items-center"><span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> <strong>Fats (30%):</strong> 384 calories ÷ 9 = <strong>42 grams</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I eat roti and rice while tracking macros?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, absolutely. The beauty of macro tracking (also known as IIFYM - If It Fits Your Macros) is that no food is totally off-limits. As long as your portion of rice or roti fits within your daily carbohydrate budget, you will continue to see weight loss or muscle-building results.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How can vegetarians hit high protein targets in an Indian diet?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              It can be challenging but is entirely possible. Focus on protein-dense foods like low-fat paneer, tofu, soya chunks, Greek yogurt, lentils (dal), and consider supplementing with a high-quality whey or plant-based protein powder to reach your daily goal without overloading on carbs.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the best macro split for weight loss?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              While there is no single magic number, a higher-protein approach is generally best for fat loss. A standard split of 35-40% protein, 30-40% carbs, and 25-30% fats helps preserve your muscle mass and keeps you feeling full while eating in a calorie deficit.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Should I track raw or cooked food?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Always weigh and track your food in its raw or uncooked state when possible (e.g., raw rice, raw dal, raw chicken). Cooking methods and water absorption significantly change the final weight of the food, making cooked measurements highly inaccurate.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What happens if I go over my daily fat limit?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Dietary fats are highly calorie-dense, containing 9 calories per gram. If you exceed your fat macros, you will likely exceed your total daily calorie target, which can pause or hinder fat loss. Try to balance it out by eating slightly less fat the following day.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is macro tracking better than simple calorie counting?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. Calorie counting dictates whether you lose or gain weight, but macro tracking dictates your body composition. Hitting your specific macro targets ensures you lose stubborn fat instead of valuable muscle, leading to a lean, toned physique rather than just becoming a smaller version of yourself.
            </div>
          </details>
        </div>
      </section>

      {/* INTERNAL LINKING / RELATED CALCULATORS */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Health & Fitness Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Your macro split is just one part of your fitness journey. Take full control of your health with our complete suite of free calculators:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmi" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">BMI Calculator</a>
          <a href="/calculator/health/bmr" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">BMR Calculator</a>
          <a href="/calculator/health/body-fat" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Body Fat Calculator</a>
          <a href="/calculator/health/calorie" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Daily Calorie Calculator</a>
          <a href="/calculator/health/calories-burned" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Calories Burned Calculator</a>
          <a href="/calculator/health/ideal-weight" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Ideal Weight Calculator</a>
          <a href="/calculator/health/tdee" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">TDEE Calculator</a>
          <a href="/calculator/health/water-intake" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Water Intake Calculator</a>
          <a href="/calculator/health/period-cycle" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Period Cycle Tracker</a>
          <a href="/calculator/health/pregnancy" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Pregnancy Calculator</a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mt-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 text-sm text-yellow-900 rounded-r-lg">
          <strong>Medical Disclaimer:</strong> The macronutrient figures provided by this calculator are general scientific estimates intended for tracking and educational purposes only. Individual biological responses to diet can vary. Always consult with a registered healthcare professional, certified nutritionist, or dietitian before starting a new diet, especially if you have underlying medical conditions.
        </div>
      </section>
      
    </div>
  );
}