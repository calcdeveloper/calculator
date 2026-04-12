import React from 'react';
import { Helmet } from "react-helmet-async";

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a MET value in exercise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MET stands for Metabolic Equivalent of Task. It is a standard physiological measurement used to estimate how much energy an activity burns compared to resting. One MET (1.0) is the energy you burn while sitting still. An activity with a MET of 5 means you are burning five times as much energy as you would sitting on the couch."
        }
      },
      {
        "@type": "Question",
        "name": "Why do heavier people burn more calories doing the exact same exercise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It comes down to simple physics. It takes more energy (calories) to move a heavier object. Therefore, a person weighing 90 kg will burn significantly more calories walking for 30 minutes than a person weighing 60 kg walking at the exact same pace. This is why our calculator requires your current body weight for accurate results."
        }
      },
      {
        "@type": "Question",
        "name": "Is this calculator more accurate than my smartwatch or fitness tracker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fitness trackers use heart rate sensors combined with algorithmic estimates, which can sometimes overestimate calories burned due to poor sensor contact or software errors. Our calculator uses the clinical ACSM (American College of Sports Medicine) MET formula, which is the gold standard used by dietitians and sports scientists for estimating caloric expenditure."
        }
      },
      {
        "@type": "Question",
        "name": "Does sweating more mean I am burning more calories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not necessarily. Sweating is your body's mechanism to cool down, which is influenced by temperature, humidity, and your personal genetics, not just exertion. Doing yoga in a hot room might make you sweat heavily, but a brisk jog in an air-conditioned room will likely burn far more actual calories."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between active and resting calories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Resting calories are what your body burns just keeping your organs functioning (like breathing and circulating blood) during a specific timeframe, even if you were completely still. Active calories are the additional calories your body burned strictly because you were performing the physical exercise."
        }
      },
      {
        "@type": "Question",
        "name": "How many calories do I need to burn to lose 1 kg of fat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally, it takes an accumulated calorie deficit of about 7,700 calories to lose 1 kilogram of body fat. By tracking your daily food intake (calories in) and your physical activities using this calculator (calories out), you can strategically plan a healthy deficit to reach your weight loss goals."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Free Calories Burned Calculator | Track Exercise Output</title>
        <meta 
          name="description" 
          content="Accurately calculate calories burned during walking, running, cycling, yoga, and more. Free calories burned calculator based on your exact body weight and METs." 
        />
        <meta name="keywords" content="calories burned calculator, how many calories do I burn walking, exercise calorie calculator, walking calories, running calories, MET value calculator, yoga calories burned, calories burned per day" />
        
        {/* Suggested URL Slug: /calculator/health/calories-burned */}
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free Calories Burned Calculator | CalcPilot" />
        <meta property="og:description" content="Find out exactly how many calories your workout burns using clinical MET formulas and your body weight." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for FAQs */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free Calories Burned Calculator: Track Your Workout Results</h1>
        <p className="mb-4">
          Whether you are brisk walking in the park, practicing daily Yoga, hitting the gym for intense weightlifting, or playing a weekend game of cricket, every physical movement you make requires energy. But exactly how much energy are you expending? Understanding your caloric burn is a critical piece of the weight management puzzle.
        </p>
        <p>
          Our <strong>Calories Burned Calculator</strong> takes the guesswork out of your fitness routine. Tailored for accuracy and ease of use, this tool uses your exact body weight alongside clinical MET (Metabolic Equivalent of Task) values to determine exactly how many calories you burn doing various activities. Particularly in India, where activities like walking after meals, household chores, and Yoga are deeply integrated into daily life, knowing the caloric value of these tasks helps you build a highly effective, sustainable fitness and weight-loss plan.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the Calories Burned Calculator</h2>
        <p className="mb-4">Using the calculator is completely straightforward, yet it provides clinical-grade data. Follow these simple steps to calculate your exercise output:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Input Your Specifics</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Body Weight:</strong> Enter your exact current body weight in kilograms (kg) or pounds (lbs). *Note: Weight drastically impacts calorie burn; heavier individuals burn more calories doing the exact same task as lighter individuals.*</li>
          <li><strong>Select Activity:</strong> Choose your exercise or activity from our comprehensive dropdown list. We cover everything from running and cycling to household chores and yoga.</li>
          <li><strong>Duration:</strong> Enter the total time you spent doing the activity in minutes (e.g., 45 minutes).</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Understand Your Caloric Breakdown</h3>
        <p className="mb-3">Our tool doesn't just give you one number; it breaks your burn down to help you understand your metabolism:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Total Calories Burned: <span className="font-normal text-gray-700">The grand total of energy you expended during the selected duration.</span></li>
          <li>Active Burn: <span className="font-normal text-gray-700">The <em>additional</em> calories your body burned strictly because you were performing the exercise.</span></li>
          <li>Resting Burn (BMR equivalent): <span className="font-normal text-gray-700">The calories your body would have burned anyway just keeping you alive (breathing, circulating blood) during that same time period.</span></li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Science: The Clinical MET Formula Explained</h2>
        <p className="mb-4">
          To ensure maximum accuracy, our calculator avoids rough estimates and instead relies on the standard physiological measurement known as the <strong>Metabolic Equivalent of Task (MET)</strong>, compiled by the American College of Sports Medicine (ACSM).
        </p>
        <p className="mb-4">
          A single MET is defined as the amount of oxygen consumed while sitting at rest. By assigning a MET value to thousands of different activities (for example, brisk walking is roughly 4.3 METs, while running at 10km/h is 9.8 METs), health professionals can mathematically estimate caloric burn for anyone.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center text-lg">The Official ACSM Calorie Formula</h3>
            <div className="text-center text-xl font-semibold text-calc-blue font-mono overflow-x-auto py-2">
              Calories = (MET &times; 3.5 &times; Weight in kg &divide; 200) &times; Minutes
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6 text-center italic">*This formula accurately scales the baseline intensity of the exercise (MET) against the mass of the person moving (Weight) over time (Minutes).</p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Practical Real-Life Scenarios</h2>
        <p className="mb-6">To understand how different exercises and body weights impact the final calorie count, let us review two distinct tracking scenarios:</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-calc-blue pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario A: Daily Morning Brisk Walk</h3>
            <p className="mb-3 text-sm text-gray-600">Amit weighs 80 kg and goes for a daily brisk walk (approx. 5.6 km/h) for 45 minutes every morning. The MET value for this walking speed is 4.3.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• Base Calculation: (4.3 MET &times; 3.5 &times; 80 kg &divide; 200) = 6.02 calories burned per minute.</li>
              <li>• Total Duration: 6.02 &times; 45 minutes = <strong>271 Total Calories Burned</strong>.</li>
              <li>• <strong>Insight:</strong> By walking consistently every day, Amit burns almost 1,900 calories a week purely from this activity, greatly assisting his heart health and weight management goals.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario B: Intense Gym Running vs. Yoga</h3>
            <p className="mb-3 text-sm text-gray-600">Priya weighs 60 kg and only has 30 minutes to exercise. She wants to know the difference between doing Hatha Yoga (MET 2.5) versus Running at a moderate 8 km/h pace (MET 8.3).</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Yoga Burn:</strong> (2.5 &times; 3.5 &times; 60 &divide; 200) &times; 30 mins = <strong>79 Calories</strong>.</li>
              <li>• <strong>Running Burn:</strong> (8.3 &times; 3.5 &times; 60 &divide; 200) &times; 30 mins = <strong>261 Calories</strong>.</li>
              <li>• <strong>Insight:</strong> Because running requires moving her entire body weight forcefully against gravity, it burns more than three times the calories of stretching-based yoga in the exact same timeframe.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is a MET value in exercise?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              MET stands for Metabolic Equivalent of Task. It is a standard physiological measurement used to estimate how much energy an activity burns compared to resting. One MET (1.0) is the energy you burn while sitting still. An activity with a MET of 5 means you are burning five times as much energy as you would sitting on the couch.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Why do heavier people burn more calories doing the exact same exercise?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              It comes down to simple physics. It takes more energy (calories) to move a heavier object. Therefore, a person weighing 90 kg will burn significantly more calories walking for 30 minutes than a person weighing 60 kg walking at the exact same pace. This is why our calculator requires your current body weight for accurate results.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Is this calculator more accurate than my smartwatch or fitness tracker?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Fitness trackers use optical heart rate sensors combined with algorithmic estimates, which can sometimes overestimate calories burned due to poor sensor contact, sweat, or software errors. Our calculator uses the clinical ACSM (American College of Sports Medicine) MET formula, which is the mathematical gold standard used by dietitians and sports scientists.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does sweating more mean I am burning more calories?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Not necessarily. Sweating is your body's cooling mechanism, which is heavily influenced by external temperature, humidity, clothing, and your personal genetics, not just physical exertion. Doing light stretching in a hot room might make you sweat heavily, but a brisk jog in an air-conditioned room will likely burn far more actual calories.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the difference between active and resting calories?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Resting calories are what your body burns naturally just keeping your internal organs functioning (like breathing and circulating blood) during a specific timeframe, even if you were completely still. Active calories are the *additional* calories your body burned strictly because you were performing the physical exercise.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How many calories do I need to burn to lose 1 kg of fat?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Generally, it takes an accumulated calorie deficit of about 7,700 calories to lose 1 kilogram of body fat. By meticulously tracking your daily food intake (calories in) and your physical activities using this calculator (calories out), you can strategically plan a healthy, sustainable deficit to reach your weight loss goals.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore More Health & Fitness Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Achieving your ultimate fitness goals requires understanding multiple facets of your body. Dive deeper into your biometrics, track your energy expenditure, and optimize your overall wellness with our comprehensive suite of free tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">BMI Calculator</a>
          <a href="/calculator/health/bmr" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">BMR Calculator</a>
          <a href="/calculator/health/body-fat" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Body Fat %</a>
          <a href="/calculator/health/calorie" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Calorie Calculator</a>
          <a href="/calculator/health/tdee" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">TDEE Calculator</a>
          <a href="/calculator/health/macros" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Macros Calculator</a>
          <a href="/calculator/health/ideal-weight" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Ideal Weight</a>
          <a href="/calculator/health/water-intake" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Water Intake</a>
          <a href="/calculator/health/pregnancy" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Pregnancy Tracker</a>
          <a href="/calculator/health/period-cycle" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Period Cycle Calculator</a>
        </div>
      </section>

      {/* --- DISCLAIMER --- */}
      <section className="mt-8">
        <div className="bg-blue-50 border-l-4 border-calc-blue p-5 text-sm text-blue-900 rounded-r-lg">
          <strong>Health Disclaimer:</strong> Calorie estimates provided by this tool are based on clinical averages. Individual caloric burn can vary based on genetics, muscle mass, age, and environmental factors. For precise medical or nutritional planning, always consult a registered dietitian or certified fitness professional.
        </div>
      </section>
      
    </div>
  );
}