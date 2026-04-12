import React from "react";
import { Helmet } from "react-helmet-async";

export default function WaterIntakeContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Daily Water Intake Calculator India | Find Your Hydration Needs
  // META DESCRIPTION: Calculate exactly how much water you need to drink every day based on your body weight, exercise routine, and the Indian climate. Find your target in liters.
  // URL SLUG: /water-intake-calculator-india
  // PRIMARY KEYWORD: Water intake calculator India
  // SECONDARY KEYWORDS: how much water should I drink, daily water requirement calculator, hydration calculator, liters of water per day, calculate water intake for weight loss, water requirement per kg body weight, cups of water per day, optimal hydration levels, daily fluid intake
  // LONG-TAIL KEYWORDS: how many liters of water to drink in Indian summer, water intake calculator based on weight and exercise, daily water requirement for adult male/female, how to calculate daily water needs accurately, symptoms of mild to severe dehydration

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the '8 glasses a day' rule accurate for everyone?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, the traditional rule of eight 8-ounce glasses (about 2 liters) is an outdated, generalized estimate. It does not account for a person's body weight, muscle mass, daily physical activity, or environmental factors like extreme heat. A personalized calculation is much more accurate and beneficial for long-term health.",
        },
      },
      {
        "@type": "Question",
        name: "Does tea, coffee, or juice count towards my daily water intake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all fluids contribute to your total daily hydration. Furthermore, about 20% of your daily water naturally comes from the food you eat, especially water-rich fruits and vegetables like watermelon, cucumber, and oranges. However, plain water remains the healthiest and most efficient way to stay hydrated without adding excess sugar or calories.",
        },
      },
      {
        "@type": "Question",
        name: "Can I drink too much water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Drinking excessive amounts of water in a short period can lead to a dangerous condition called hyponatremia (water intoxication), where the sodium levels in your blood become critically diluted. It is best to spread your calculated water intake evenly throughout the day rather than chugging large amounts at once.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if I am adequately hydrated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The easiest and most reliable way to check your hydration level is by looking at your urine color. Pale yellow or clear urine indicates good hydration. Dark yellow or amber-colored urine is a clear sign that your body needs more water immediately.",
        },
      },
      {
        "@type": "Question",
        name: "Why does the Indian climate require higher water intake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many regions in India experience prolonged periods of extreme heat and high humidity. In these conditions, your body attempts to cool itself by sweating profusely, which accelerates the loss of fluid and essential electrolytes. You must actively replace these lost fluids to maintain normal body temperature and organ function.",
        },
      },
    ],
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Daily Water Intake Calculator India | Find Your Hydration Needs</title>
        <meta
          name="description"
          content="Calculate exactly how much water you need to drink every day based on your body weight, exercise routine, and the Indian climate. Find your target in liters."
        />
        <meta
          name="keywords"
          content="water intake calculator India, how much water should I drink, daily water requirement calculator, hydration calculator, liters of water per day"
        />
        <meta property="og:title" content="Advanced Water Intake Calculator | CalcPilot" />
        <meta property="og:description" content="Find your personalized daily hydration target in liters, ounces, and cups." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Daily Water Intake Calculator: How Much Water Should You Drink?
        </h1>
        <p className="mb-4">
          For decades, the standard medical advice was to simply drink eight glasses of water a day. While this is a reasonable starting point for beginners, it treats a 50 kg sedentary office worker exactly the same as a 90 kg athlete performing intense physical labor in the scorching summer heat. 
        </p>
        <p className="mb-4">
          Your body loses water continuously throughout the day through breathing, sweating, and digestion. The rate of this fluid loss changes drastically based on your unique physical metrics and your surrounding environment. To maintain peak energy, support healthy digestion, and keep your skin clear, you need a precise hydration target.
        </p>
        <p>
          Our <strong>Water Intake Calculator</strong> provides exactly that. By analyzing your body weight, daily exercise habits, local climate conditions, and specific physiological states, it generates a highly accurate daily hydration goal tailored specifically to your body's demands.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Hydration Calculator</h2>
        <p className="mb-4">
          Finding your exact daily fluid requirement takes only a few seconds. Follow these simple steps to use the tool accurately:
        </p>
        <ol className="list-decimal pl-6 space-y-4 mb-6">
          <li>
            <strong>Select Weight Unit & Body Weight:</strong> First, choose your preferred measurement system by toggling between Kilograms (kg) and Pounds (lbs). Then, input your exact body weight using the slider or text box.
          </li>
          <li>
            <strong>Enter Daily Exercise Duration:</strong> Input the average number of minutes you spend exercising each day. Physical activity increases your core temperature, forcing your body to sweat and lose water faster.
          </li>
          <li>
            <strong>Choose Your Local Climate:</strong> Select your typical environment from the dropdown menu, such as "Temperate / Normal". If you live in a hot or humid Indian city, your baseline water needs will increase automatically.
          </li>
          <li>
            <strong>Specify Special Conditions:</strong> If you are pregnant, breastfeeding, or experiencing illness (like a fever), select it from the dropdown. Otherwise, leave it as "None".
          </li>
        </ol>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <h3 className="font-bold text-green-800 mb-2">Understanding Your Hydration Target</h3>
          <p className="text-sm text-green-900 mb-2">
            Instantly, the dashboard will display your total Daily Target. For your convenience, the result is broken down into three universally understood metrics:
          </p>
          <ul className="list-disc pl-5 text-sm text-green-900 space-y-1">
            <li><strong>Liters (L):</strong> The standard global metric for fluid volume.</li>
            <li><strong>Ounces (oz):</strong> Useful if you track fluids using a branded water bottle.</li>
            <li><strong>Cups:</strong> A simple, visual way to plan your meals and breaks.</li>
          </ul>
        </div>
      </section>

      {/* THE SCIENCE & FORMULA */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science of Hydration: How We Calculate</h2>
        <p className="mb-4">
          Our calculator moves beyond generic advice by combining multiple medically recognized formulas. It uses a dynamic equation that adds layers of required hydration based on the physical stressors your body experiences daily.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">1. The Biological Baseline Formula</h3>
            <p className="text-sm text-gray-600 mb-4">
              The foundational formula recommended by global health professionals requires you to drink half an ounce of water for every pound of your body weight. This covers the bare minimum needed for basic metabolic function, organ lubrication, and cellular repair.
            </p>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500 text-sm font-mono text-gray-800">
              Base Hydration (Ounces) = Body Weight (in lbs) × 0.5
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">2. The Exercise Modifier</h3>
            <p className="text-sm text-gray-600 mb-3">
              When you work out, you lose significant water through respiration and sweat. According to the American College of Sports Medicine, active individuals must replenish this lost fluid immediately. The standard protocol adds 12 fluid ounces for every 30 minutes of physical exertion.
            </p>
             <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500 text-sm font-mono text-gray-800">
              Exercise Need (Ounces) = (Exercise Minutes ÷ 30) × 12
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">3. Climate & Environmental Adjustments</h3>
            <p className="text-sm text-gray-600 mb-2">Finally, the algorithm applies percentage modifiers based on external conditions:</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li><strong>Hot or Humid Weather:</strong> Increases sweat rate even while resting, requiring a 10% to 15% increase in baseline fluid.</li>
              <li><strong>High Altitudes:</strong> The air is thinner and significantly drier, meaning you lose microscopic moisture every time you exhale.</li>
              <li><strong>Pregnancy & Nursing:</strong> The Institute of Medicine (IOM) mandates higher fluid intake to safely support amniotic fluid levels and human milk production.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Calculation Examples</h2>
        <p className="mb-6">To demonstrate how highly personalized this math is, let's look at two distinct scenarios.</p>

        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 1: The Active Individual</h3>
            <p className="mb-4 text-sm text-gray-600">
              Consider a person weighing 70 kilograms (kg) who exercises for 30 minutes daily in a temperate/normal climate with no special medical conditions.
            </p>
            <ul className="list-none space-y-2 text-sm text-gray-800">
              <li><strong>1. Convert to Pounds:</strong> 70 kg is approximately 154 lbs.</li>
              <li><strong>2. Find Baseline:</strong> 154 lbs × 0.5 = 77 ounces of base water.</li>
              <li><strong>3. Add Exercise Needs:</strong> 30 minutes of exercise equals an additional 12 ounces.</li>
              <li><strong>4. Calculate Total:</strong> 77 + 12 = 89 ounces.</li>
              <li><strong>5. Final Conversion:</strong> 89 ounces converts to roughly <strong>2.6 Liters</strong> or <strong>11.1 cups</strong> per day.</li>
            </ul>
          </div>

          <div className="border-l-4 border-pink-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 2: The Sedentary Office Worker</h3>
            <p className="mb-4 text-sm text-gray-600">
              Now consider a person weighing 55 kg (roughly 121 lbs) who works from home, does zero formal exercise (0 minutes), and lives in an air-conditioned, temperate environment.
            </p>
            <ul className="list-none space-y-2 text-sm text-gray-800">
              <li><strong>1. Find Baseline:</strong> 121 lbs × 0.5 = 60.5 ounces of base water.</li>
              <li><strong>2. Add Exercise Needs:</strong> 0 minutes = 0 additional ounces.</li>
              <li><strong>3. Calculate Total:</strong> 60.5 ounces.</li>
              <li><strong>4. Final Conversion:</strong> 60.5 ounces converts to just under <strong>1.8 Liters</strong> per day. Notice how this is much lower than the active individual, proving the "one size fits all" rule is flawed!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEHYDRATION SYMPTOMS TABLE */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Recognizing the Stages of Dehydration</h2>
        <p className="mb-4">
          Failing to meet your daily hydration target can lead to immediate drops in physical and mental performance. It is crucial to recognize the warning signs early.
        </p>
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="min-w-full bg-white text-left text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-bold text-gray-900 uppercase">Dehydration Stage</th>
                <th className="px-6 py-3 font-bold text-gray-900 uppercase">Common Symptoms</th>
                <th className="px-6 py-3 font-bold text-gray-900 uppercase">Action Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="px-6 py-4 font-semibold">Mild (1-2% fluid loss)</td>
                <td className="px-6 py-4 text-green-700 font-medium">Thirst, dry mouth, dark yellow urine</td>
                <td className="px-6 py-4">Drink a glass of water immediately.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 font-semibold">Moderate (3-5% fluid loss)</td>
                <td className="px-6 py-4 text-green-700 font-medium">Headache, dizziness, muscle cramps, fatigue</td>
                <td className="px-6 py-4">Drink water with electrolytes. Rest in a cool place.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold">Severe (&gt; 6% fluid loss)</td>
                <td className="px-6 py-4 text-green-700 font-medium">Confusion, rapid heartbeat, extreme thirst, fainting</td>
                <td className="px-6 py-4">Seek medical attention immediately.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, index) => (
            <details key={index} className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
                {faq.name}
              </summary>
              <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Health & Fitness Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Hydration is just one aspect of a healthy lifestyle. Once you have your water intake optimized, use our other free tools to master your nutrition and fitness goals:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmi" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">BMI Calculator</a>
          <a href="/calculator/health/bmr" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">BMR Calculator</a>
          <a href="/calculator/health/body-fat" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Body Fat Calculator</a>
          <a href="/calculator/health/calorie" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Daily Calorie Calculator</a>
          <a href="/calculator/health/calories-burned" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Calories Burned Calculator</a>
          <a href="/calculator/health/ideal-weight" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Ideal Weight Calculator</a>
          <a href="/calculator/health/macros" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Macros Calculator</a>
          <a href="/calculator/health/period-cycle" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Period Cycle Tracker</a>
          <a href="/calculator/health/pregnancy" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Pregnancy Due Date</a>
          <a href="/calculator/health/tdee" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">TDEE Calculator</a>
        </div>
      </section>

    </div>
  );
}