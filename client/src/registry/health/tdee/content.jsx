import React from "react";
import { Helmet } from "react-helmet-async";

export default function TDEEContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Accurate TDEE Calculator India | Find Your Maintenance Calories
  // META DESCRIPTION: Calculate your Total Daily Energy Expenditure (TDEE) & maintenance calories accurately. Find exact daily calorie needs for weight loss or muscle gain in India.
  // URL SLUG: /tdee-calculator-india
  // PRIMARY KEYWORD: TDEE calculator India
  // SECONDARY KEYWORDS: maintenance calories calculator, daily calorie burn calculator, calculate TDEE online, TDEE formula, calorie deficit calculator, BMR and TDEE calculator, weight loss calories, muscle gain calories, total daily energy expenditure, macro calculator India
  // LONG-TAIL KEYWORDS: how to calculate maintenance calories for weight loss, daily calorie requirement for Indian male/female, TDEE calculator with body fat percentage, best accurate TDEE calculator, how many calories do I burn a day without exercising

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between BMR and TDEE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BMR (Basal Metabolic Rate) is the number of calories your body needs to survive if you were to stay in bed all day without moving. TDEE (Total Daily Energy Expenditure) is your BMR plus all the calories you burn from daily activities, work, and exercise. TDEE is the total amount you need to eat to maintain your current weight.",
        },
      },
      {
        "@type": "Question",
        name: "Should I eat my TDEE to lose weight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. If you eat your exact TDEE, you will maintain your current weight. To lose weight, you must create a calorie deficit by eating fewer calories than your TDEE. A standard and safe deficit is subtracting 300 to 500 calories from your TDEE.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I recalculate my TDEE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You should recalculate your TDEE every time you lose or gain 2 to 3 kilograms, or if your daily activity level changes significantly. As you lose weight, your body requires less energy to function, meaning your TDEE will drop over time.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Indian diet affect my TDEE?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your TDEE is primarily based on your biological metrics (age, height, weight) and activity levels, not specific cuisines. However, traditional Indian diets can be high in carbohydrates and fats. Knowing your TDEE helps you practice portion control and balance your macronutrients, regardless of the cuisine you eat.",
        },
      },
      {
        "@type": "Question",
        name: "Is this TDEE calculator accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our calculator uses the medically recognized Mifflin-St Jeor equation, which is highly accurate for most populations. However, individual variations like genetics, muscle density, and hormonal conditions (like PCOS or hypothyroidism) can slightly alter actual calorie burn. Treat your TDEE result as a starting baseline.",
        },
      },
    ],
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Accurate TDEE Calculator India | Find Your Maintenance Calories</title>
        <meta
          name="description"
          content="Calculate your Total Daily Energy Expenditure (TDEE) & maintenance calories accurately. Find exact daily calorie needs for weight loss or muscle gain in India."
        />
        <meta
          name="keywords"
          content="TDEE calculator India, maintenance calories calculator, daily calorie burn calculator, calorie deficit calculator, weight loss calories, muscle gain calories"
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          TDEE (Total Daily Energy Expenditure) Calculator
        </h1>
        <p className="mb-4">
          Whether your goal is to lose stubborn belly fat, pack on lean muscle mass, or simply maintain a healthy physique, understanding your body's specific energy requirements is the undeniable first step. Generic "2000-calorie diet" advice fails because every human body is a unique engine.
        </p>
        <p className="mb-4">
          An accurate <strong>TDEE Calculator</strong> (Total Daily Energy Expenditure) removes the guesswork from your nutrition. It calculates exactly how many calories your specific body burns in a full 24-hour period, factoring in your basal metabolism, daily lifestyle movements, and structured exercise. 
        </p>
        <p>
          This calculator is designed for everyone—from office workers looking to shed a few kilos to serious athletes optimizing their fuel. By finding your precise maintenance calories, you unlock the exact blueprint needed to transform your body safely and efficiently.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the TDEE Calculator</h2>
        <p className="mb-4">
          Getting your personalized calorie blueprint takes less than a minute. Our calculator uses precise biological inputs to generate highly accurate data. Follow these simple steps:
        </p>
        <ol className="list-decimal pl-6 space-y-4 mb-6">
          <li>
            <strong>Select Biological Gender:</strong> Choose Male or Female. Men and women naturally carry different muscle-to-fat ratios, which affects resting metabolic rate.
          </li>
          <li>
            <strong>Input Your Age and Weight:</strong> Enter your exact Age in years and Weight in kilograms (kg) using the sliders or input boxes.
          </li>
          <li>
            <strong>Enter Your Height:</strong> Use the convenient Feet and Inches inputs to state your exact height.
          </li>
          <li>
            <strong>Select Activity Level:</strong> Choose the option that best describes your daily routine. For example, if you work at a computer all day, select "Sedentary (Desk job, little to no exercise)". Be honest here—overestimating activity is the #1 reason people fail to lose weight!
          </li>
        </ol>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <h3 className="font-bold text-green-800 mb-2">Understanding Your Results</h3>
          <p className="text-sm text-green-900">
            Instantly, the calculator provides a robust dashboard detailing your metabolism. It reveals your <strong>Maintenance Calories (TDEE)</strong>, your baseline <strong>Basal Metabolic Rate (BMR)</strong>, and gives you exact daily calorie targets whether you want to achieve Fat Loss or Muscle Gain.
          </p>
        </div>
      </section>

      {/* UNDERSTANDING TDEE & ABBREVIATIONS */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Daily Calorie Burn</h2>
        <p className="mb-4">
          To truly master your diet, it helps to understand the four primary components that make up your Total Daily Energy Expenditure (TDEE). Think of your metabolism as a pie chart divided into these distinct segments:
        </p>
                <ul className="space-y-3 mb-6 list-disc pl-6">
          <li>
            <strong>BMR (Basal Metabolic Rate) - ~70% of TDEE:</strong> The vast majority of the calories you burn are used just to keep you alive. This is the energy required for breathing, blood circulation, cellular repair, and brain function if you were to lay in bed all day in a coma-like state.
          </li>
          <li>
            <strong>NEAT (Non-Exercise Activity Thermogenesis) - ~15% of TDEE:</strong> These are the calories burned through subconscious daily movements that aren't structured workouts. This includes pacing while on a phone call, fidgeting, doing household chores, or walking to the metro station.
          </li>
          <li>
            <strong>TEF (Thermic Effect of Food) - ~10% of TDEE:</strong> Digestion requires energy! Your body burns calories chewing, digesting, and absorbing the nutrients you eat. (Note: Protein requires significantly more energy to digest than fats or carbohydrates).
          </li>
          <li>
            <strong>EAT (Exercise Activity Thermogenesis) - ~5% of TDEE:</strong> Surprisingly, this is the smallest slice of the pie for most people. This represents the calories you actively burn during a structured gym session, run, or sport.
          </li>
        </ul>
      </section>

      {/* THE SCIENCE & FORMULA */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind the Calculation</h2>
        <p className="mb-4">
          Our calculator uses the <strong>Mifflin-St Jeor Equation</strong>. Developed in 1990, it is widely endorsed by the Academy of Nutrition and Dietetics and clinical dietitians globally. It is proven to be up to 5% more accurate than older models (like the Harris-Benedict formula) for estimating resting metabolic rates in modern lifestyles.
        </p>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm mb-6">
          <h3 className="font-bold text-gray-900 mb-2">Step 1: Calculate BMR</h3>
          <p className="text-sm text-gray-600 mb-4">The core formula requires weight in kilograms (kg), height in centimeters (cm), and age in years.</p>
          <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500 overflow-x-auto text-sm font-mono text-gray-800">
            BMR = (10 × weight) + (6.25 × height) - (5 × age) + s
            <br /><br />
            <span className="italic text-gray-500 font-sans">Where "s" is +5 for males and -161 for females.</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-2">Step 2: Apply the Activity Multiplier</h3>
          <p className="text-sm text-gray-600 mb-3">Your BMR is multiplied by a standardized "Activity Factor" to yield your final TDEE:</p>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            <li><strong>1.2 (Sedentary):</strong> Desk job, remote worker, minimal daily walking.</li>
            <li><strong>1.375 (Lightly Active):</strong> 10k daily steps or light workouts 1-3 days/week.</li>
            <li><strong>1.55 (Moderately Active):</strong> Consistent, moderate workouts 3-5 days/week.</li>
            <li><strong>1.725 (Very Active):</strong> Hard daily training, physical labor jobs.</li>
          </ul>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Calculation Examples</h2>
        <p className="mb-6">Let us look at exactly how the math works in real-world scenarios to help you understand your own numbers.</p>

        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 1: The Sedentary Office Worker</h3>
            <p className="mb-4 text-sm text-gray-600">Consider an Indian male who works a desk job. He is 28 years old, weighs 75 kg, and is 5 feet 9 inches tall. His activity level is "Sedentary".</p>
            <ul className="list-none space-y-2 text-sm text-gray-800">
              <li><strong>1. Convert Height:</strong> 5'9" is approximately 175 cm.</li>
              <li><strong>2. Find BMR:</strong> Using the formula: (10 × 75) + (6.25 × 175) - (5 × 28) + 5 = <strong>1,710 kcal / day</strong>.</li>
              <li><strong>3. Find TDEE:</strong> Multiply BMR (1,710) by the Sedentary multiplier (1.2) = <strong>2,052 kcal / day</strong>.</li>
              <li><strong>4. His Goal Targets:</strong> To lose fat, he must eat in a 500-calorie deficit, yielding a target of <strong>1,552 kcal / day</strong>. To build muscle in a 300-calorie surplus, his target is <strong>2,352 kcal / day</strong>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-pink-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 2: The Active Female</h3>
            <p className="mb-4 text-sm text-gray-600">Consider a 32-year-old female who weighs 65 kg, is 160 cm tall, and works out moderately 4 days a week (Multiplier: 1.55).</p>
            <ul className="list-none space-y-2 text-sm text-gray-800">
              <li><strong>1. Find BMR:</strong> (10 × 65) + (6.25 × 160) - (5 × 32) - 161 = 1,329 calories.</li>
              <li><strong>2. Find TDEE:</strong> Multiply BMR (1,329) by her Active multiplier (1.55) = 2,060 calories (Maintenance).</li>
              <li><strong>3. Her Goal Target:</strong> If she wishes to drop body fat safely, she subtracts roughly 400 calories from her maintenance, creating a daily goal of 1,660 calories.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW TO USE TDEE FOR GOALS */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Your TDEE to Reach Your Fitness Goals</h2>
        <p className="mb-4">
          Once you know your exact maintenance number, achieving your dream physique becomes a simple mathematical equation. Here is how you adapt your TDEE to your specific goals:
        </p>
        <ul className="list-disc pl-6 space-y-4 mb-6">
          <li>
            <strong>For Fat Loss (Calorie Deficit):</strong> You must consume fewer calories than your body burns. We recommend a safe, sustainable deficit of 300 to 500 calories below your TDEE. A 500-calorie daily deficit translates to roughly 0.5 kg of pure fat loss per week.
          </li>
          <li>
            <strong>For Muscle Gain (Calorie Surplus):</strong> To build new muscle tissue, your body requires extra energy. Add a moderate surplus of 200 to 300 calories above your TDEE. This "lean bulk" approach ensures you build strength without gaining unnecessary excessive body fat.
          </li>
          <li>
            <strong>For Maintenance (Body Recomposition):</strong> If you are happy with your weight but want to improve your body composition (lose fat and gain muscle simultaneously as a beginner), simply eat exactly at your TDEE while prioritizing high protein intake and lifting weights.
          </li>
        </ul>
        <p className="text-sm text-gray-500 italic bg-gray-50 p-4 rounded">
          *Medical Disclaimer: Calculators provide estimates based on global averages. Your actual metabolism may vary slightly based on genetics, gut health, muscle mass, and medical conditions. Monitor your morning weight for 2-3 weeks, look at the trend, and adjust your daily calories up or down as needed!
        </p>
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
          Your TDEE is just the beginning. To optimize your health, diet, and lifestyle, utilize our complete suite of free, highly accurate medical calculators:
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
          <a href="/calculator/health/water-intake" className="text-sm text-blue-600 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Water Intake Calculator</a>
        </div>
      </section>

    </div>
  );
}