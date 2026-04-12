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
        "name": "How many calories should I eat a day to lose weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To lose weight safely, you need to be in a calorie deficit. A general medical rule is to subtract 500 calories from your TDEE (Maintenance calories) to lose about 0.5 kg (1 pound) per week. However, women should generally not consume less than 1,200 calories, and men not less than 1,500 calories daily without direct medical supervision."
        }
      },
      {
        "@type": "Question",
        "name": "What is the exact difference between BMR and TDEE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMR (Basal Metabolic Rate) is the energy your body burns at absolute rest—just to keep your internal organs functioning (like breathing and pumping blood). TDEE (Total Daily Energy Expenditure) is your BMR plus the extra calories you burn through daily physical movement, walking, exercise, and digesting food."
        }
      },
      {
        "@type": "Question",
        "name": "Are traditional Indian diets naturally high in calories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional Indian meals can be calorie-dense, often utilizing ghee, oils, and heavy carbohydrates like rice, roti, and potatoes. While they are highly nutritious, portion control is essential. Using a calorie calculator helps you balance your favorite traditional meals while strictly staying within your daily energy limits."
        }
      },
      {
        "@type": "Question",
        "name": "Does counting macros matter, or just total calories?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For basic weight loss or weight gain, your total daily calorie intake is the primary driving factor. However, for improving body composition (losing fat while retaining lean muscle), tracking your macros (Protein, Fats, and Carbohydrates) is highly beneficial. High protein intake is particularly vital when you are eating in a calorie deficit."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this calorie calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator utilizes the Mifflin-St Jeor equation, widely considered the most accurate formula available to the public. However, remember that all calculators provide a scientific estimate. Your individual metabolism, genetics, and precise muscle mass play a role. Treat the result as a baseline and adjust based on your real-world progress over 2-3 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Should I eat back the calories I burn during exercise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you already accurately selected your 'Activity Level' (e.g., Moderately Active) when using the calculator, your exercise calories are already factored into your TDEE. You do not need to eat extra calories on workout days, as the calculator averages your total burn across the entire week."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Free Calorie Calculator India | Find Your Daily TDEE Needs</title>
        <meta 
          name="description" 
          content="Calculate your exact daily calorie needs for weight loss, maintenance, or muscle gain. Use our free Indian Calorie & TDEE Calculator for accurate results instantly." 
        />
        <meta name="keywords" content="calorie calculator India, TDEE calculator, daily calorie needs, maintenance calories, weight loss calorie calculator, basal metabolic rate, BMR calculator, daily energy expenditure, calorie deficit calculator" />
        
        {/* Suggested URL Slug: /calculator/health/calorie */}
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free Calorie & TDEE Calculator | Fast & Accurate" />
        <meta property="og:description" content="Find out exactly how many calories your body needs every day to lose, maintain, or gain weight." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for FAQs */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free Calorie Calculator: Determine Your Daily Energy Needs</h1>
        <p className="mb-4">
          Understanding your daily calorie requirement is the absolute foundation of any successful fitness, health, or physique transformation journey. Whether your primary goal is to shed stubborn belly fat, build dense muscle mass, or simply maintain a healthy weight to avoid lifestyle diseases, you need to know your exact <strong>Total Daily Energy Expenditure (TDEE)</strong>.
        </p>
        <p>
          Our advanced <strong>Calorie Calculator</strong> takes the frustrating guesswork out of your daily diet. Tailored for clinical accuracy, this tool evaluates your basal metabolic rate (BMR) alongside your typical daily activity levels to tell you exactly how many calories your body burns in a 24-hour period. It is highly practical for the Indian lifestyle, where our staple diets often consist of calorie-dense meals. By calculating your exact energy needs, you can effortlessly plan your meals, manage portion sizes, and reach your fitness goals sustainably—without resorting to extreme diets or starving yourself.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Interpret Your Calorie Calculation Results</h2>
        <p className="mb-4">Using the calculator is completely straightforward, but understanding the specific data it provides is key to optimizing your diet. Here is a step-by-step breakdown of your inputs and outputs:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Input Your Biometrics & Activity</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Measurement System & Gender:</strong> Choose Metric (cm/kg) or US Standard (ft/lbs) and select Male or Female. Biological sex naturally affects muscle mass and metabolic speed.</li>
          <li><strong>Age, Height & Weight:</strong> Use the sliders or input boxes to provide your exact statistics. Your calorie burn shifts dynamically based on these three pillars.</li>
          <li><strong>Activity Level:</strong> Be brutally honest here. Select <em>Sedentary</em> if you work a desk job, <em>Lightly Active</em> for occasional walking, <em>Moderately Active</em> for gym 3-5 days a week, or <em>Very Active</em> for intense daily training.</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Understand the Three Core Targets</h3>
        <p className="mb-3">Our tool generates specific daily calorie targets tailored precisely to your ultimate goal:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Maintenance Calories (TDEE): <span className="font-normal text-gray-700">The exact number of calories to eat to keep your weight exactly where it is (e.g., <strong>2,150 kcal</strong>). This is your baseline.</span></li>
          <li>For Safe Weight Loss: <span className="font-normal text-gray-700">A structured 500-calorie deficit (e.g., <strong>1,650 kcal</strong>) designed to help you lose about 0.5 kg (1 lb) per week safely without losing muscle.</span></li>
          <li>For Healthy Weight Gain: <span className="font-normal text-gray-700">A slight caloric surplus (e.g., <strong>2,650 kcal</strong>) ideal for individuals ("hardgainers") looking to build muscle size and bulk up safely.</span></li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Science and Formulas Behind the Numbers</h2>
        <p className="mb-4">
          To ensure maximum accuracy, our calculator utilizes the highly respected <strong>Mifflin-St Jeor Equation</strong> to determine your resting burn, before applying standard physiological activity multipliers.
        </p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center text-lg">BMR Formula For Men</h3>
            <div className="text-center text-xl font-semibold text-calc-blue font-mono overflow-x-auto">
              BMR = (10 &times; Weight) + (6.25 &times; Height) - (5 &times; Age) + 5
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center text-lg">BMR Formula For Women</h3>
            <div className="text-center text-xl font-semibold text-calc-blue font-mono overflow-x-auto">
              BMR = (10 &times; Weight) + (6.25 &times; Height) - (5 &times; Age) - 161
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6 text-center italic">*Weight is measured in kilograms (kg), Height in centimeters (cm), and Age in years.</p>

        <h3 className="font-bold text-lg text-calc-black mb-2 mt-6">Calculating Your TDEE (Activity Multipliers)</h3>
        <p className="mb-4">
          Once your Baseline BMR is established, the calculator multiplies it by a specific activity factor based on your lifestyle to reveal your final daily calorie needs:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
          <div className="flex items-start"><span className="font-bold text-calc-black mr-2 w-36 shrink-0">Sedentary:</span> BMR &times; 1.2 (Office job, little to no exercise)</div>
          <div className="flex items-start"><span className="font-bold text-calc-black mr-2 w-36 shrink-0">Lightly Active:</span> BMR &times; 1.375 (Light exercise 1-3 days/week)</div>
          <div className="flex items-start"><span className="font-bold text-calc-black mr-2 w-36 shrink-0">Moderately Active:</span> BMR &times; 1.55 (Moderate exercise 3-5 days/week)</div>
          <div className="flex items-start"><span className="font-bold text-calc-black mr-2 w-36 shrink-0">Very Active:</span> BMR &times; 1.725 (Heavy exercise 6-7 days/week)</div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Practical Real-Life Scenarios</h2>
        <p className="mb-6">To demonstrate how vital these calculations are for different lifestyle goals, let us look at two distinct profiles:</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-calc-blue pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario A: The Sedentary IT Professional (Weight Loss Goal)</h3>
            <p className="mb-3 text-sm text-gray-600">Rahul is a 30-year-old male software engineer. He is 175 cm tall, weighs 85 kg, and leads a highly sedentary lifestyle working at a desk all day. He wants to lose belly fat safely.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• Base Calculation: Using his stats, Rahul's baseline BMR is calculated at <strong>1,798 kcal/day</strong>.</li>
              <li>• Maintenance (TDEE): Because he is sedentary, his BMR is multiplied by 1.2, giving a maintenance level of <strong>2,158 kcal/day</strong>.</li>
              <li>• <strong>Action Plan:</strong> To achieve a healthy weight loss of 0.5 kg per week, Rahul needs a 500-calorie deficit. His strict daily target becomes <strong>1,658 kcal/day</strong>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario B: The Active Gym-Goer (Maintenance Goal)</h3>
            <p className="mb-3 text-sm text-gray-600">Anjali is a 26-year-old female who is 162 cm tall and weighs 60 kg. She does weight training 4 days a week (Moderately Active) and wants to maintain her current athletic physique.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• Base Calculation: Anjali's baseline BMR is calculated at <strong>1,321 kcal/day</strong>.</li>
              <li>• Maintenance (TDEE): Because she is moderately active, her BMR is multiplied by 1.55, resulting in a maintenance level of <strong>2,048 kcal/day</strong>.</li>
              <li>• <strong>Action Plan:</strong> To maintain her weight perfectly without losing muscle or gaining fat, Anjali simply needs to consume <strong>~2,050 kcal/day</strong> consistently.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How many calories should I eat a day to lose weight?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To lose weight safely, you need to be in a consistent calorie deficit. A general medical rule is to subtract 500 calories from your TDEE (Maintenance calories) to lose about 0.5 kg (1 pound) per week. However, women should generally not consume less than 1,200 calories, and men not less than 1,500 calories daily without direct medical supervision.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the exact difference between BMR and TDEE?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              BMR (Basal Metabolic Rate) is the raw energy your body burns at absolute rest—just to keep your internal organs functioning (like breathing and pumping blood). TDEE (Total Daily Energy Expenditure) is your BMR plus the extra calories you burn through daily physical movement, walking, exercise, and digesting food.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Are traditional Indian diets naturally high in calories?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Traditional Indian meals can be calorie-dense, often utilizing ghee, oils, and heavy carbohydrates like rice, roti, and potatoes. While they are highly nutritious, portion control is essential. Using a calorie calculator helps you balance your favorite traditional meals while strictly staying within your daily energy limits.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does counting macros matter, or just total calories?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For basic weight loss or weight gain, your total daily calorie intake is the primary driving factor. However, for improving body composition (losing fat while retaining lean muscle), tracking your macros (Protein, Fats, and Carbohydrates) is highly beneficial. High protein intake is particularly vital when you are eating in a calorie deficit.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How accurate is this calorie calculator?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Our calculator utilizes the Mifflin-St Jeor equation, widely considered the most accurate formula available to the public. However, remember that all online calculators provide a scientific estimate. Your individual metabolism, genetics, and precise muscle mass play a role. Treat the result as a solid baseline and adjust based on your real-world progress over 2-3 weeks.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Should I eat back the calories I burn during exercise?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If you already accurately selected your 'Activity Level' (e.g., Moderately Active) when using the calculator, your exercise calories are already factored into your TDEE. You do not need to eat extra calories on workout days, as the calculator averages your total burn across the entire week. Eating them back will erase your calorie deficit.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore More Health & Fitness Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Achieving your ultimate fitness goals requires understanding multiple facets of your body. Dive deeper into your biometrics, track your energy expenditure, and optimize your nutrition with our comprehensive suite of free health tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">BMI Calculator</a>
          <a href="/calculator/health/bmr" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">BMR Calculator</a>
          <a href="/calculator/health/body-fat" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Body Fat %</a>
          <a href="/calculator/health/tdee" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">TDEE Calculator</a>
          <a href="/calculator/health/macros" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Macros Calculator</a>
          <a href="/calculator/health/ideal-weight" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Ideal Weight</a>
          <a href="/calculator/health/calories-burned" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Calories Burned</a>
          <a href="/calculator/health/water-intake" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Water Intake</a>
          <a href="/calculator/health/pregnancy" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Pregnancy Tracker</a>
          <a href="/calculator/health/period-cycle" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Period Cycle Calculator</a>
        </div>
      </section>

      {/* --- DISCLAIMER --- */}
      <section className="mt-8">
        <div className="bg-blue-50 border-l-4 border-calc-blue p-5 text-sm text-blue-900 rounded-r-lg">
          <strong>Medical Disclaimer:</strong> Calorie needs provided by this tool are scientific estimates. Your individual metabolism, health status, and specific medical conditions can affect how your body burns energy. Listen to your body and always consult a registered dietitian or medical doctor for personalized nutrition and health advice.
        </div>
      </section>
      
    </div>
  );
}