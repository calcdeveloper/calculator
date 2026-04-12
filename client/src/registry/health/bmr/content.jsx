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
        "name": "What is the exact difference between BMR and TDEE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest just to keep you alive (breathing, pumping blood). TDEE (Total Daily Energy Expenditure) is your BMR multiplied by your daily activity level, representing the total calories you burn in a full 24-hour day, including walking, working, and exercising."
        }
      },
      {
        "@type": "Question",
        "name": "Is the BMR formula accurate for the Indian population?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the Mifflin-St Jeor equation used in this calculator is widely regarded globally, including in India, as the most accurate standard formula for calculating resting metabolic rate. However, genetics, muscle mass, and underlying health conditions (like thyroid issues) can cause slight individual variations."
        }
      },
      {
        "@type": "Question",
        "name": "How can I naturally increase my BMR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective way to increase your BMR is by building muscle mass through strength training, as muscle tissue burns more calories at rest than fat tissue. Additionally, eating adequate protein, staying hydrated, and avoiding extreme low-calorie crash diets helps keep your metabolism running efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Does my BMR decrease as I get older?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BMR generally decreases as you age. This is primarily due to a natural loss of muscle mass over time (sarcopenia) and a slowing down of internal cellular processes. Staying physically active and lifting weights can significantly slow down this age-related metabolic drop."
        }
      },
      {
        "@type": "Question",
        "name": "How many calories should I cut to lose weight safely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For safe, sustainable weight loss, health professionals generally recommend a daily caloric deficit of 300 to 500 calories below your TDEE (Maintenance Calories). This typically results in a healthy weight loss of about 0.25 to 0.5 kg per week. Going below your BMR is strongly discouraged as it can damage your metabolism."
        }
      },
      {
        "@type": "Question",
        "name": "Why do men generally have a higher BMR than women?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Men typically have a higher BMR because they generally possess more lean muscle mass and less body fat compared to women of the exact same weight and height. Muscle is metabolically active tissue, meaning it requires more energy (calories) to maintain than fat."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Free BMR Calculator India | Check Basal Metabolic Rate & TDEE</title>
        <meta 
          name="description" 
          content="Calculate your Basal Metabolic Rate (BMR) and daily calorie needs (TDEE) with our free online calculator. Accurately plan your weight loss or muscle gain journey." 
        />
        <meta name="keywords" content="BMR calculator India, basal metabolic rate calculator, calculate daily calorie needs, TDEE calculator online, maintenance calories, calorie deficit calculator, metabolism check" />
        
        {/* Suggested URL Slug: /calculator/health/bmr */}
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free BMR & Daily Calorie Calculator | Fast & Accurate" />
        <meta property="og:description" content="Find out exactly how many calories your body burns every day. Calculate your BMR and TDEE instantly." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for FAQs */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free BMR & Daily Calorie Calculator: Master Your Metabolism</h1>
        <p className="mb-4">
          Whether you are trying to shed stubborn fat, build lean muscle, or simply maintain a healthy lifestyle, understanding your body's energy requirements is the ultimate foundation. Your <strong>Basal Metabolic Rate (BMR)</strong> represents the absolute minimum number of calories your body requires to perform basic, life-sustaining functions—such as breathing, blood circulation, and cell production—while completely at rest.
        </p>
        <p>
          Our advanced <strong>BMR & Daily Calorie Calculator</strong> takes the guesswork out of your diet planning. Specifically optimized for accuracy, this tool not only calculates your resting metabolism but also factors in your daily movement to determine your <strong>Total Daily Energy Expenditure (TDEE)</strong>. From corporate workers sitting at desks all day to active athletes, knowing these numbers empowers you to precisely tailor your daily food intake, ensuring you eat exactly what your body needs to reach its goals safely and effectively.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Interpret Your Calorie Calculation Results</h2>
        <p className="mb-4">Using the calculator is simple, but understanding the wealth of data it provides is key to transforming your physique. Here is a step-by-step breakdown of your inputs and outputs:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Input Your Biometrics</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Measurement System & Gender:</strong> Choose Metric (cm/kg) or US Standard (ft/lbs) and select Male or Female. Biological sex plays a significant role in baseline muscle mass estimations.</li>
          <li><strong>Age, Height & Weight:</strong> Use the precise sliders to input your current statistics. BMR shifts dynamically based on these three core pillars.</li>
          <li><strong>Activity Level:</strong> This is crucial. Select how active you are on an average week. Be honest here—choosing "Sedentary" if you work an office job yields the most accurate baseline, whereas "Very Active" is strictly for daily heavy exercise or physical labor.</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Understand the Four Output Zones</h3>
        <p className="mb-3">Our tool generates specific calorie targets based on your unique profile:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Resting Calories (BMR): <span className="font-normal text-gray-700">The energy you would burn if you stayed in bed all day doing absolutely nothing (e.g., <strong>1618 kcal</strong>). Never eat below this number.</span></li>
          <li>Daily Maintenance (TDEE): <span className="font-normal text-gray-700">The total calories you burn including your activity level. Eating this exact amount (e.g., <strong>1942 kcal</strong>) means your weight will stay exactly the same.</span></li>
          <li>For Mild Weight Loss: <span className="font-normal text-gray-700">A healthy, sustainable caloric deficit (e.g., <strong>1692 kcal</strong>) designed to help you lose fat steadily without starving.</span></li>
          <li>For Mild Weight Gain: <span className="font-normal text-gray-700">A slight caloric surplus (e.g., <strong>2192 kcal</strong>) ideal for individuals looking to build muscle or bulk up safely.</span></li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 3: Analyze Macros and Activity Variations</h3>
        <p>
          Beyond just total calories, the interface provides a beautifully segmented doughnut chart giving you a rough starting point for your <strong>Macronutrients (Carbs, Fat, Protein)</strong>. Furthermore, the <em>Activity Level Table</em> displays how your calorie burn scales up if you decide to start moving more—from a Sedentary lifestyle up to an Extra Active one.
        </p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Science and Formulas Behind the Numbers</h2>
        <p className="mb-4">
          To ensure maximum clinical accuracy, our calculator utilizes the highly respected <strong>Mifflin-St Jeor Equation</strong>. The American Dietetic Association considers this the most reliable predictive equation for resting energy expenditure in modern adults.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center text-lg">For Men</h3>
            <div className="text-center text-xl font-semibold text-calc-blue font-mono overflow-x-auto">
              BMR = (10 &times; Weight) + (6.25 &times; Height) - (5 &times; Age) + 5
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center text-lg">For Women</h3>
            <div className="text-center text-xl font-semibold text-calc-blue font-mono overflow-x-auto">
              BMR = (10 &times; Weight) + (6.25 &times; Height) - (5 &times; Age) - 161
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6 text-center italic">*In these formulas, Weight is measured in kilograms (kg), Height in centimeters (cm), and Age in years.</p>

        <h3 className="font-bold text-lg text-calc-black mb-2 mt-6">Calculating TDEE (Activity Multipliers)</h3>
        <p className="mb-4">
          Once your BMR is established, we calculate your Total Daily Energy Expenditure (TDEE) by multiplying your BMR by a specific activity factor. This accounts for the energy burned through daily life and exercise:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
          <div className="flex items-start"><span className="font-bold text-calc-black mr-2 w-32 shrink-0">Sedentary:</span> BMR &times; 1.2 (Office job, little to no exercise)</div>
          <div className="flex items-start"><span className="font-bold text-calc-black mr-2 w-32 shrink-0">Lightly Active:</span> BMR &times; 1.375 (Light exercise 1-3 days/week)</div>
          <div className="flex items-start"><span className="font-bold text-calc-black mr-2 w-32 shrink-0">Moderately Active:</span> BMR &times; 1.55 (Moderate exercise 3-5 days/week)</div>
          <div className="flex items-start"><span className="font-bold text-calc-black mr-2 w-32 shrink-0">Very Active:</span> BMR &times; 1.725 (Heavy exercise 6-7 days/week)</div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Practical Real-Life Scenarios</h2>
        <p className="mb-6">To demonstrate how vital these calculations are for different lifestyle goals, let us look at two distinct profiles commonly seen in India:</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-calc-blue pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario A: The Sedentary Office Worker (Weight Loss Goal)</h3>
            <p className="mb-3 text-sm text-gray-600">Rahul is a 30-year-old male software engineer. He is 170 cm tall, weighs 70 kg, and leads a highly sedentary lifestyle working from home. He wants to lose his belly fat.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• Base Calculation: Using his stats, Rahul's baseline BMR is calculated at <strong>1,618 kcal/day</strong>.</li>
              <li>• Maintenance (TDEE): Because he is sedentary, his BMR is multiplied by 1.2, giving a maintenance level of <strong>1,942 kcal/day</strong>.</li>
              <li>• <strong>Action Plan:</strong> To achieve mild weight loss, Rahul needs to eat in a 250-calorie deficit. His daily target becomes <strong>1,692 kcal/day</strong>. As long as he accurately tracks his meals (roti, rice, dal) to stay under this limit, he will lose fat reliably.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario B: The Active College Student (Muscle Gain Goal)</h3>
            <p className="mb-3 text-sm text-gray-600">Priya is a 22-year-old female who is 160 cm tall and weighs 50 kg. She plays badminton intensely 4 days a week (Moderately Active) and wants to build athletic strength and gain healthy weight.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• Base Calculation: Priya's baseline BMR is calculated at <strong>1,229 kcal/day</strong>.</li>
              <li>• Maintenance (TDEE): Because she is moderately active, her BMR is multiplied by 1.55, resulting in a much higher maintenance level of <strong>1,905 kcal/day</strong>.</li>
              <li>• <strong>Action Plan:</strong> Since she wants to gain weight and build muscle, she needs a caloric surplus. By adding roughly 250-300 calories, her daily target becomes <strong>~2,200 kcal/day</strong>. She should focus on high-protein foods to fuel her muscle recovery.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the exact difference between BMR and TDEE?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              BMR (Basal Metabolic Rate) is the raw number of calories your body burns at complete rest just to keep you alive (breathing, pumping blood, maintaining body temperature). TDEE (Total Daily Energy Expenditure) is your BMR multiplied by your daily activity level, representing the total calories you burn in a full 24-hour day, including walking, working, digesting food, and exercising.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Is the BMR formula accurate for the Indian population?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, the Mifflin-St Jeor equation used in this calculator is widely regarded globally, including by dietitians in India, as the most accurate standard mathematical formula for calculating resting metabolic rate. However, remember it is an estimation. Genetics, body composition (fat vs. muscle ratio), and underlying health conditions (like thyroid issues) can cause slight individual variations.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How can I naturally increase my BMR?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The most effective and scientifically proven way to increase your BMR is by building muscle mass through resistance and strength training. Muscle tissue is highly active and burns significantly more calories at rest than fat tissue. Additionally, eating adequate protein, staying well-hydrated, and avoiding extreme low-calorie crash diets helps keep your metabolism running efficiently.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does my BMR decrease as I get older?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Unfortunately, yes. BMR generally decreases as you age. This is primarily due to a natural, gradual loss of muscle mass over time (known as sarcopenia) and a slowing down of internal cellular processes. However, staying physically active and continuing to lift weights can significantly slow down and even offset this age-related metabolic drop.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How many calories should I cut to lose weight safely?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For safe, sustainable fat loss, health professionals generally recommend a daily caloric deficit of 300 to 500 calories below your TDEE (Maintenance Calories). This typically results in a healthy weight loss rate of about 0.25 to 0.5 kg per week. Going below your BMR is strongly discouraged as it forces your body into "starvation mode," which can damage your metabolism and result in muscle loss.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Why do men generally have a higher BMR than women?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Men typically have a higher BMR primarily because they naturally possess more lean muscle mass and less essential body fat compared to women of the exact same weight and height. Because muscle is a metabolically demanding tissue, it requires more energy (calories) round-the-clock to maintain compared to fat.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore More Health & Fitness Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Fitness is a comprehensive journey. Dive deeper into your body metrics, track your macro-nutrients, and optimize your overall well-being with our full suite of free online health tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">BMI Calculator</a>
          <a href="/calculator/health/tdee" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">TDEE Calculator</a>
          <a href="/calculator/health/macros" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Macros Calculator</a>
          <a href="/calculator/health/calorie" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Daily Calories</a>
          <a href="/calculator/health/body-fat" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Body Fat %</a>
          <a href="/calculator/health/ideal-weight" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Ideal Weight</a>
          <a href="/calculator/health/calories-burned" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Calories Burned</a>
          <a href="/calculator/health/water-intake" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Water Intake</a>
          <a href="/calculator/health/pregnancy" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Pregnancy Calculator</a>
          <a href="/calculator/health/period-cycle" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Period Cycle Tracker</a>
        </div>
      </section>
      
    </div>
  );
}