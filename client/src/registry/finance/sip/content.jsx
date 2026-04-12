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
        "name": "Is the BMI scale accurate for Indians?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While standard WHO BMI guidelines apply globally, the Ministry of Health and Family Welfare in India recommends slightly lower cutoff points for Indians. For Indians, a BMI of 23 or higher is often considered overweight, as South Asians tend to have a higher body fat percentage at lower BMI levels."
        }
      },
      {
        "@type": "Question",
        "name": "What is a healthy BMI range?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to the World Health Organization (WHO), a standard healthy BMI range for adults is between 18.5 and 24.9. Falling within this range generally indicates a healthy body weight for your height."
        }
      },
      {
        "@type": "Question",
        "name": "Does the BMI calculator work for pregnant women?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, standard BMI calculations are not accurate for pregnant women, as the weight gained during pregnancy is necessary for fetal development. You should consult your healthcare provider to track healthy weight gain during pregnancy."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between BMI and Body Fat Percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BMI is a simple height-to-weight ratio and does not distinguish between muscle, bone, and fat. Body Fat Percentage specifically measures the proportion of fat in your body. Athletes often have a high BMI due to muscle mass but a low body fat percentage."
        }
      },
      {
        "@type": "Question",
        "name": "Does age affect my BMI calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For adults (18 years and older), the BMI formula remains the same regardless of age. However, for children and teens, BMI is plotted on growth charts based on age and sex, known as BMI percentiles."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Free BMI Calculator India | Check Your Body Mass Index</title>
        <meta 
          name="description" 
          content="Calculate your Body Mass Index (BMI) instantly with our free online tool. Discover your ideal weight range and check if you are maintaining a healthy weight." 
        />
        <meta name="keywords" content="BMI calculator, body mass index calculator, calculate BMI online, healthy weight calculator, Indian BMI calculator, check body mass index" />
        
        {/* Suggested URL Slug: /calculator/health/bmi */}
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free BMI Calculator India | Fast & Accurate" />
        <meta property="og:description" content="Check your Body Mass Index quickly and accurately. Find out your ideal weight range today." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for FAQs */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free BMI Calculator: Check Your Body Mass Index</h1>
        <p className="mb-4">
          Understanding your body is the first step toward a healthier lifestyle. <strong>Body Mass Index (BMI)</strong> is a widely recognized mathematical tool used to estimate an individual's total body fat based on their height and weight. In a fast-paced world where lifestyle diseases are on the rise, keeping track of your physical health is more crucial than ever. 
        </p>
        <p>
          Our sophisticated <strong>BMI Calculator</strong> provides a quick, non-invasive way to check if your weight falls within a healthy range. While BMI does not measure your body fat directly, it serves as an excellent initial screening tool used by healthcare professionals globally. Whether you are aiming to lose weight, gain muscle, or simply maintain your current physique, our tool gives you instant clarity on your health status and ideal weight goals.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the BMI Calculator</h2>
        <p className="mb-4">Our calculator is highly intuitive, allowing you to get your health metrics in seconds. Let us walk through exactly how to use the tool:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Input Your Physical Metrics</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Gender:</strong> Select Male or Female. While the adult BMI formula is the same for both, this helps calculate secondary metrics like Basal Metabolic Rate (BMR) accurately.</li>
          <li><strong>Age:</strong> Enter your current age. The standard BMI categories apply to adults aged 18 and older.</li>
          <li><strong>Height:</strong> Input your height. You can toggle between Metric (Centimeters) or Imperial (Feet & Inches) based on your preference.</li>
          <li><strong>Weight:</strong> Enter your current weight in Kilograms (kg) or Pounds (lbs).</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Understand the Output Results</h3>
        <p className="mb-3">Once you provide your details, the system instantly calculates critical health metrics:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>BMI Score: <span className="font-normal text-gray-700">Your specific numerical index (e.g., 22.5).</span></li>
          <li>Weight Status: <span className="font-normal text-gray-700">The category you fall into, such as Normal Weight, Overweight, or Underweight.</span></li>
          <li>Ideal Weight Range: <span className="font-normal text-gray-700">The medically recommended healthy weight bracket tailored precisely to your height.</span></li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-lg text-sm text-blue-900">
          <strong>Important Note:</strong> The visual dial chart will instantly show where your BMI sits on the spectrum, making it easy to see how close you are to your next health milestone.
        </div>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Mathematical Formula Behind BMI</h2>
        <p className="mb-4">
          The math behind the Body Mass Index is universally standardized by the World Health Organization (WHO). It is a simple ratio of your weight divided by the square of your height. 
        </p>
        <p className="mb-4">
          Depending on your preferred measurement system, here are the mathematical equations powering the calculation:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-xl font-semibold text-calc-black overflow-x-auto mb-6">
          BMI = Weight (kg) &divide; [ Height (m) ]<sup>2</sup>
        </div>

        <p className="mb-4 text-sm text-gray-600 italic">For the US Standard (Imperial) system, the formula includes a conversion factor:</p>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-xl font-semibold text-calc-black overflow-x-auto mb-6">
          BMI = 703 &times; Weight (lbs) &divide; [ Height (in) ]<sup>2</sup>
        </div>

        <h3 className="font-bold text-lg text-calc-black mb-2 mt-6">Standard BMI Categories</h3>
        <p className="mb-4">According to the WHO, the standard weight status categories associated with BMI ranges for adults are:</p>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 mb-6">
          <table className="min-w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-bold text-calc-black">BMI Category</th>
                <th className="px-6 py-3 font-bold text-calc-black">Standard Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-700">Underweight</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">Below 18.5</td>
              </tr>
              <tr className="border-b border-gray-100 bg-green-50/30">
                <td className="px-6 py-4 font-medium text-gray-700">Healthy Weight</td>
                <td className="px-6 py-4 text-green-600 font-semibold">18.5 &ndash; 24.9</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium text-gray-700">Overweight</td>
                <td className="px-6 py-4 text-yellow-600 font-semibold">25.0 &ndash; 29.9</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-gray-700">Obese</td>
                <td className="px-6 py-4 text-red-600 font-semibold">30.0 and Above</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Practical Real-Life Scenarios</h2>
        <p className="mb-6">To showcase how the calculations yield different outcomes based on physical metrics, review these two common scenarios:</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-calc-blue pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario A: Metric System Calculation</h3>
            <p className="mb-3 text-sm text-gray-600">Rahul is a 28-year-old male. He currently weighs 75 kg and stands 175 cm (1.75 meters) tall.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• Step 1: Square the height (1.75 &times; 1.75) = 3.0625</li>
              <li>• Step 2: Divide weight by squared height (75 &divide; 3.0625) = 24.49</li>
              <li>• <strong>Final BMI Score: 24.5 (Healthy Weight)</strong></li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Insight: Rahul falls right at the upper edge of the Healthy Weight category. Maintaining his current weight or a slight reduction would be ideal.</p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario B: Imperial System Calculation</h3>
            <p className="mb-3 text-sm text-gray-600">Priya weighs 150 lbs and is 5 feet 4 inches (64 inches total) tall.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• Step 1: Square the height (64 &times; 64) = 4096</li>
              <li>• Step 2: Multiply weight by 703 (150 &times; 703) = 105,450</li>
              <li>• Step 3: Divide results (105,450 &divide; 4096) = 25.74</li>
              <li>• <strong>Final BMI Score: 25.7 (Overweight)</strong></li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Insight: Priya's BMI places her slightly in the Overweight category. A minor lifestyle adjustment could help her reach the healthy range.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Is the BMI scale accurate for Indians?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              While standard WHO BMI guidelines apply globally, many health organizations in India recommend slightly lower cutoff points. Due to genetics, South Asians tend to have a higher body fat percentage and risk of lifestyle diseases at lower body weights. For Indians, a BMI of 23 or higher is often considered a warning sign to monitor weight.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is a healthy BMI range?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              According to the standard global guidelines defined by the WHO, a healthy BMI range for adults is between 18.5 and 24.9. Maintaining your weight within this specific range generally reduces the risk of serious health conditions.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does the BMI calculator work for pregnant women?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No, standard BMI formulas should not be used to evaluate the health of pregnant women. Weight gain during pregnancy is entirely normal and necessary for fetal development. You should always consult your healthcare provider to track healthy pregnancy weight gain.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the difference between BMI and Body Fat Percentage?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              BMI is a simple mathematical ratio of your height to weight and does not distinguish between muscle, bone, and fat. Body Fat Percentage specifically determines the exact proportion of fat in your body. Athletes often have a high BMI due to dense muscle mass, but a very low body fat percentage.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does age affect my BMI calculation?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For adults aged 18 and older, the BMI formula is static—it does not change with age. However, for children and adolescents, calculating BMI is different; it requires comparing their height and weight numbers against age- and sex-specific growth charts, known as BMI percentiles.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore More Health Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Take complete control of your fitness journey. Track your calories, find your ideal weight, and monitor your overall wellness with our suite of free online health tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmr" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">BMR Calculator</a>
          <a href="/calculator/health/body-fat" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Body Fat Calculator</a>
          <a href="/calculator/health/ideal-weight" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Ideal Weight</a>
          <a href="/calculator/health/calorie" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Daily Calories</a>
          <a href="/calculator/health/macros" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Macros Calculator</a>
          <a href="/calculator/health/calories-burned" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Calories Burned</a>
          <a href="/calculator/health/tdee" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">TDEE Calculator</a>
          <a href="/calculator/health/water-intake" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Water Intake</a>
          <a href="/calculator/health/pregnancy" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Pregnancy Calculator</a>
          <a href="/calculator/health/period-cycle" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Period Cycle</a>
        </div>
      </section>
      
    </div>
  );
}