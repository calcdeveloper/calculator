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
        "name": "What is the most accurate formula for ideal weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no single 'perfect' formula, as every body is different. However, the Devine Formula (1974) is the most widely used in medical settings globally, including hospitals in India, for calculating medication dosages. Our calculator averages all four major formulas (Devine, Robinson, Miller, and Hamwi) to give you the most balanced and realistic target."
        }
      },
      {
        "@type": "Question",
        "name": "Does my ideal weight depend on my age?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard Ideal Body Weight (IBW) clinical formulas do not factor in age; they strictly use height and gender. While your metabolism naturally slows down and body composition changes as you age, the medical baseline for a 'healthy weight relative to height' remains fairly constant for adults."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my calculated ideal weight seem so low?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These formulas were developed decades ago (between 1964 and 1983) primarily for medical and pharmacological use. They do not account for muscle mass, bone density, or modern body composition changes. If you lift weights or have a larger frame, your healthy weight will likely be higher than the IBW estimate. Always use the provided 'Healthy BMI Range' as a more flexible guideline."
        }
      },
      {
        "@type": "Question",
        "name": "Is Ideal Body Weight (IBW) the same as BMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Body Mass Index (BMI) is a broad ratio of weight to height used to categorize health risks (e.g., underweight, normal, overweight). Ideal Body Weight (IBW) gives you a specific target number (in kg or lbs) based on clinical equations. Our calculator shows both: your specific IBW and the broader Healthy BMI weight range."
        }
      },
      {
        "@type": "Question",
        "name": "Does this calculator work for heavily muscled athletes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. IBW formulas fail to distinguish between fat mass and muscle mass. A bodybuilder might be classified as 'overweight' according to these traditional formulas, despite having an extremely low body fat percentage and excellent cardiovascular health. Athletes should rely on body fat percentage calculators instead."
        }
      },
      {
        "@type": "Question",
        "name": "How can I safely reach my ideal body weight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reaching your ideal weight requires a combination of a balanced diet, a sustained caloric deficit (for weight loss) or surplus (for weight gain), and regular physical activity. Calculating your Total Daily Energy Expenditure (TDEE) is the best next step to plan your daily nutrition accurately."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Ideal Weight Calculator India | Find Your Healthy Target Weight</title>
        <meta 
          name="description" 
          content="Calculate your ideal body weight (IBW) based on height and gender using 4 clinical formulas (Devine, Robinson, etc.). Free ideal weight calculator for India." 
        />
        <meta name="keywords" content="ideal weight calculator, ideal body weight calculator, IBW calculator, healthy weight calculator, target weight calculator, ideal weight for my height, devine formula calculator, robinson formula weight, ideal weight for men and women, what is my ideal weight for my height in kg" />
        
        {/* Suggested URL Slug: /calculator/health/ideal-weight */}
        
        <meta property="og:title" content="Ideal Weight Calculator India | Find Your Healthy Target Weight" />
        <meta property="og:description" content="Calculate your medically recommended target weight using four highly accurate Ideal Body Weight formulas." />
        <meta property="og:type" content="website" />

        {/* Structured Data for FAQs */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free Ideal Weight Calculator: Find Your Target Body Weight</h1>
        <p className="mb-4">
          Are you starting a new fitness journey, trying to manage a health condition, or simply curious about where your weight should ideally be? Setting a realistic, medically sound target is the very first step toward lasting health.
        </p>
        <p>
          Our <strong>Ideal Weight Calculator</strong> is designed to help you discover your medically recommended body weight based strictly on your height and gender. Originally developed by clinicians to calculate precise medication dosages, these formulas are now used worldwide as a reliable benchmark for general wellness. Whether you measure in kilograms or pounds, centimeters or inches, this tool provides a clear, clinical baseline to guide your diet and exercise goals.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the Ideal Weight Calculator</h2>
        <p className="mb-4">Using our tool is incredibly simple. Just input your basic physical details, and our system will instantly crunch the numbers using four separate clinical models.</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Details</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Gender:</strong> Select either Male or Female. This is crucial, as the baseline biological muscle and fat distributions differ between genders, which alters the formula constraints.</li>
          <li><strong>Height Unit:</strong> Choose your preferred measurement system—either Centimeters (cm) or Inches (in).</li>
          <li><strong>Height:</strong> Use the slider or enter your exact height. For example, enter 170 cm if you are roughly 5 feet 7 inches tall.</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Review Your Comprehensive Results</h3>
        <p className="mb-3">Unlike basic calculators that give you one random number, our tool provides a comprehensive breakdown:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Average Ideal Weight: <span className="font-normal text-gray-700">The primary result at the top. This takes the output of all four clinical formulas and averages them to give you a highly balanced, realistic target in both kg and lbs.</span></li>
          <li>Healthy BMI Range: <span className="font-normal text-gray-700">This shows the broad weight bracket where your Body Mass Index (BMI) would fall between 18.5 and 24.9, which is considered the "Normal" or healthy range by the World Health Organization (WHO).</span></li>
          <li>Formula Breakdown Table: <span className="font-normal text-gray-700">A detailed table showing exactly what the Robinson, Devine, Miller, and Hamwi formulas individually calculated for your height.</span></li>
          <li>Visual Pie Chart: <span className="font-normal text-gray-700">A quick visual representation showing how closely the four formulas align for your specific body measurements.</span></li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">The Science: The Four Clinical Formulas Explained</h2>
        <p className="mb-5">
          Because human genetics are so diverse, no single mathematical equation is perfectly tailored to every single body type. To give you the most accurate baseline, our calculator relies on the <strong>four most scientifically recognized formulas</strong> in the medical field. All formulas establish a base weight for a height of 5 feet (60 inches) and add a specific amount of weight for every inch above that.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-calc-black mb-2 border-b pb-2">1. The Devine Formula (1974)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Dr. B.J. Devine originally designed this formula to calculate dosages for potentially toxic medications like gentamicin. It is currently the most widely used baseline formula in hospitals worldwide.
            </p>
            <ul className="list-none space-y-1 text-sm font-medium text-calc-blue bg-blue-50 p-3 rounded">
              <li>Male: 50.0 kg + 2.3 kg per inch over 5 feet</li>
              <li>Female: 45.5 kg + 2.3 kg per inch over 5 feet</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-calc-black mb-2 border-b pb-2">2. The Robinson Formula (1983)</h3>
            <p className="mb-3 text-sm text-gray-600">
              J.D. Robinson published this adjustment to the Devine formula. He designed it to give slightly more accurate, realistic readings, particularly for women and taller individuals.
            </p>
            <ul className="list-none space-y-1 text-sm font-medium text-calc-blue bg-blue-50 p-3 rounded">
              <li>Male: 52.0 kg + 1.9 kg per inch over 5 feet</li>
              <li>Female: 49.0 kg + 1.7 kg per inch over 5 feet</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-calc-black mb-2 border-b pb-2">3. The Miller Formula (1983)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Created by Dr. D.R. Miller, this variation tends to yield slightly lower weight estimates for taller individuals when compared directly to the Devine formula.
            </p>
            <ul className="list-none space-y-1 text-sm font-medium text-calc-blue bg-blue-50 p-3 rounded">
              <li>Male: 56.2 kg + 1.41 kg per inch over 5 feet</li>
              <li>Female: 53.1 kg + 1.36 kg per inch over 5 feet</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-calc-black mb-2 border-b pb-2">4. The Hamwi Formula (1964)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Dr. G.J. Hamwi created this for quick medical estimations. It is known to give a broader range and is very commonly used to establish a baseline in basic nutritional counseling.
            </p>
            <ul className="list-none space-y-1 text-sm font-medium text-calc-blue bg-blue-50 p-3 rounded">
              <li>Male: 48.0 kg + 2.7 kg per inch over 5 feet</li>
              <li>Female: 45.5 kg + 2.2 kg per inch over 5 feet</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Practical Examples: Calculating Ideal Weight</h2>
        <p className="mb-6">To understand how these clinical formulas work in the real world, let us look at two step-by-step calculations for different scenarios.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-calc-blue pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario A: Rohan (Male, 170 cm)</h3>
            <p className="mb-3 text-sm text-gray-600">Rohan is an Indian male with a height of 170 cm. First, we convert his height to inches: 170 cm is approximately 67 inches, which is 5 feet and 7 inches. This means he is 7 inches over the 5-foot baseline.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Devine Formula:</strong> 50.0 kg + (2.3 kg &times; 7) = 66.1 kg</li>
              <li>• <strong>Robinson Formula:</strong> 52.0 kg + (1.9 kg &times; 7) = 65.3 kg</li>
              <li>• <strong>Miller Formula:</strong> 56.2 kg + (1.41 kg &times; 7) = 66.07 kg</li>
              <li>• <strong>Hamwi Formula:</strong> 48.0 kg + (2.7 kg &times; 7) = 66.9 kg</li>
              <li>• <strong>Average Ideal Weight:</strong> Our calculator averages these out to approximately <strong>65.9 kg (145.4 lbs)</strong>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario B: Anjali (Female, 160 cm)</h3>
            <p className="mb-3 text-sm text-gray-600">Anjali is a female standing at 160 cm. Converted, this is roughly 63 inches, which is 5 feet and 3 inches. She is 3 inches over the 5-foot baseline.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Devine Formula:</strong> 45.5 kg + (2.3 kg &times; 3) = 52.4 kg</li>
              <li>• <strong>Hamwi Formula:</strong> 45.5 kg + (2.2 kg &times; 3) = 52.1 kg</li>
              <li>• <strong>Insight:</strong> Because she is female, the baseline starts lower (45.5 kg instead of 50.0 kg), and the multiplier per inch is also slightly adjusted. Her average ideal weight will hover around <strong>53 kg</strong>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the most accurate formula for ideal weight?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There is no single "perfect" formula, as every body is different. However, the Devine Formula (1974) is the most widely used in medical settings globally, including hospitals in India, for calculating medication dosages. Our calculator averages all four major formulas (Devine, Robinson, Miller, and Hamwi) to give you the most balanced and realistic target.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does my ideal weight depend on my age?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The standard Ideal Body Weight (IBW) clinical formulas do not factor in age; they strictly use height and gender. While your metabolism naturally slows down and body composition changes as you age, the medical baseline for a "healthy weight relative to height" remains fairly constant for adults.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Why does my calculated ideal weight seem so low?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              These formulas were developed decades ago (between 1964 and 1983) primarily for medical and pharmacological use. They do not account for muscle mass, bone density, or modern body composition changes. If you lift weights or have a larger frame, your healthy weight will likely be higher than the IBW estimate. Always use the provided "Healthy BMI Range" as a more flexible guideline.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Is Ideal Body Weight (IBW) the same as BMI?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. Body Mass Index (BMI) is a broad ratio of weight to height used to categorize health risks (e.g., underweight, normal, overweight). Ideal Body Weight (IBW) gives you a specific target number (in kg or lbs) based on clinical equations. Our calculator shows both: your specific IBW and the broader Healthy BMI weight range.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does this calculator work for heavily muscled athletes?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. IBW formulas fail to distinguish between fat mass and muscle mass. A bodybuilder might be classified as "overweight" according to these traditional formulas, despite having an extremely low body fat percentage and excellent cardiovascular health. Athletes should rely on body fat percentage calculators instead.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How can I safely reach my ideal body weight?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Reaching your ideal weight requires a combination of a balanced diet, a sustained caloric deficit (for weight loss) or surplus (for weight gain), and regular physical activity. Calculating your Total Daily Energy Expenditure (TDEE) is the best next step to plan your daily nutrition accurately.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore More Health & Fitness Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Knowing your ideal weight is just the beginning. Plan your diet, track your metabolism, and reach your fitness goals faster with our comprehensive suite of health tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">BMI Calculator</a>
          <a href="/calculator/health/body-fat" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Body Fat Calculator</a>
          <a href="/calculator/health/bmr" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">BMR Calculator</a>
          <a href="/calculator/health/tdee" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">TDEE Calculator</a>
          <a href="/calculator/health/macros" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Macros Calculator</a>
          <a href="/calculator/health/calorie" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Daily Calorie Calculator</a>
          <a href="/calculator/health/calories-burned" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Calories Burned Calculator</a>
          <a href="/calculator/health/water-intake" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Water Intake Calculator</a>
          <a href="/calculator/health/pregnancy" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Pregnancy Calculator</a>
          <a href="/calculator/health/period-cycle" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Period Cycle Tracker</a>
        </div>
      </section>

      {/* --- DISCLAIMER --- */}
      <section className="mt-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-5 text-sm text-red-900 rounded-r-lg">
          <strong>Important Medical Disclaimer:</strong> The Ideal Body Weight equations provided by this tool are historical clinical averages intended for informational purposes only. They do not account for individual variations in muscle mass, bone density, age, or overall health. Always consult with a qualified healthcare professional, doctor, or registered dietitian before making significant changes to your diet or weight management plan.
        </div>
      </section>
      
    </div>
  );
}