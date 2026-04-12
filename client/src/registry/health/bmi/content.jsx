import { Helmet } from "react-helmet-async";

export default function Content() {
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
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 pb-10">
      {/* --- ENHANCED SEO TAGS & SCHEMA --- */}
      <Helmet>
        <title>Free BMI Calculator India | Check Your Body Mass Index</title>
        <meta 
          name="description" 
          content="Calculate your Body Mass Index (BMI) instantly with our free online tool. Discover your ideal weight range and check if you are maintaining a healthy weight." 
        />
        <meta name="keywords" content="BMI calculator, body mass index calculator, calculate BMI online, healthy weight calculator, Indian BMI calculator, check body mass index" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free BMI Calculator | Check Your Body Mass Index" />
        <meta property="og:description" content="Check your Body Mass Index quickly and accurately. Find out your ideal weight range today." />
        <meta property="og:type" content="website" />

        {/* JSON-LD Structured Data for FAQs */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- SEO RICH CONTENT --- */}
      <section>
        <h2 className="text-3xl font-bold text-calc-black mb-4">What is Body Mass Index (BMI)?</h2>
        <p className="mb-4">
          Body Mass Index (BMI) is a widely recognized mathematical tool used to estimate an individual's total body fat based on their height and weight. In a fast-paced world where lifestyle diseases are on the rise, keeping track of your physical health is more crucial than ever. Our Advanced BMI Calculator provides a quick, non-invasive way to check if your weight falls within a healthy range.
        </p>
        <p>
          While BMI does not measure your body fat directly, it serves as an excellent initial screening tool. Healthcare professionals globally use it to categorize individuals into distinct weight statuses: underweight, healthy weight, overweight, and obese. Understanding your BMI is the first step toward making informed decisions about your diet, fitness, and overall well-being.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-calc-black mb-4">How to Use Our Advanced BMI Calculator</h2>
        <p className="mb-4">
          Our Advanced BMI Calculator is designed to be highly intuitive, allowing you to get your health metrics in seconds. Follow these simple steps to calculate your Body Mass Index, ideal weight range, and basal metabolic rate (BMR):
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li><strong>Step 1: Choose Your Measurement System.</strong> Toggle between 'Metric (cm / kg)' or 'US Standard (ft + in / lbs)' depending on your preference.</li>
          <li><strong>Step 2: Select Your Gender.</strong> Choose Male or Female. This input is specifically used to provide a more accurate Basal Metabolic Rate (BMR) estimation.</li>
          <li><strong>Step 3: Enter Your Age.</strong> Use the slider or type your age (e.g., 25 Yr). While the adult BMI formula doesn't change with age, this helps calculate your BMR.</li>
          <li><strong>Step 4: Input Your Height.</strong> Adjust the slider to your exact height (e.g., 170 cm).</li>
          <li><strong>Step 5: Input Your Weight.</strong> Move the slider to your current weight (e.g., 70 kg).</li>
        </ul>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <h3 className="font-bold text-green-800 mb-2">Understanding Your Results</h3>
          <p className="text-sm text-green-900">
            Once you input your data, the calculator instantly displays your <strong>BMI Score</strong>. It will also reveal your <strong>Health Status</strong> (e.g., Normal Weight), your personalized <strong>Ideal Weight Range</strong>, and your estimated <strong>BMR</strong> (the number of calories your body burns at rest per day).
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-calc-black mb-4">The BMI Calculation Formula</h2>
        <p className="mb-4">
          The math behind the Body Mass Index is universally standardized by the World Health Organization (WHO). It is a simple ratio of your weight divided by the square of your height. Depending on your preferred measurement system, here is how the formula works:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-bold text-calc-black mb-2">Metric Formula</h3>
            <div className="text-lg font-semibold text-calc-black overflow-x-auto bg-gray-50 p-3 rounded">
              BMI = Weight (kg) &divide; [Height (m)]<sup>2</sup>
            </div>
            <p className="text-sm mt-3 text-gray-500">Divide weight in kilograms by height in meters squared.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="font-bold text-calc-black mb-2">US Standard Formula</h3>
            <div className="text-lg font-semibold text-calc-black overflow-x-auto bg-gray-50 p-3 rounded">
              BMI = 703 &times; Weight (lbs) &divide; [Height (in)]<sup>2</sup>
            </div>
            <p className="text-sm mt-3 text-gray-500">Multiply weight in pounds by 703, then divide by height in inches squared.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-calc-black mb-4">Worked Examples: Calculating BMI in Real Life</h2>
        <p className="mb-4">To better understand how the numbers come together, let's look at two practical, real-life examples using both the metric and imperial systems.</p>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg text-calc-black mb-2">Example 1: Metric System Calculation</h3>
            <p className="mb-2"><strong>Scenario:</strong> Rahul is a 28-year-old male. He weighs 75 kg and is 175 cm tall.</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>First, convert height to meters: 175 cm = 1.75 m.</li>
              <li>Square the height: 1.75 &times; 1.75 = 3.0625.</li>
              <li>Divide weight by the squared height: 75 &divide; 3.0625 = 24.49.</li>
            </ul>
            <p><strong>Result:</strong> Rahul's BMI is roughly <strong>24.5</strong>, which places him in the <strong>Healthy Weight</strong> category.</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="font-bold text-lg text-calc-black mb-2">Example 2: US Standard Calculation</h3>
            <p className="mb-2"><strong>Scenario:</strong> Priya weighs 150 lbs and is 5 feet 4 inches tall.</p>
            <ul className="list-disc pl-6 space-y-1 mb-2">
              <li>First, convert total height to inches: (5 &times; 12) + 4 = 64 inches.</li>
              <li>Square the height: 64 &times; 64 = 4096.</li>
              <li>Multiply weight by 703: 150 &times; 703 = 105,450.</li>
              <li>Divide the results: 105,450 &divide; 4096 = 25.74.</li>
            </ul>
            <p><strong>Result:</strong> Priya's BMI is roughly <strong>25.7</strong>, which places her in the <strong>Overweight</strong> category.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-calc-black mb-4">Standard BMI Categories Chart</h2>
        <p className="mb-4">Once you have your number, you can see where you stand based on the World Health Organization guidelines for adult men and women.</p>
        
                
        <div className="bg-white rounded-lg shadow-sm overflow-x-auto border border-gray-200">
          <table className="min-w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-bold text-calc-black border-b">BMI Category</th>
                <th className="px-6 py-3 font-bold text-calc-black border-b">Standard Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium">Underweight</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">Less than 18.5</td>
              </tr>
              <tr className="border-b border-gray-100 bg-green-50/30">
                <td className="px-6 py-4 font-medium">Normal Weight</td>
                <td className="px-6 py-4 text-green-600 font-semibold">18.5 &ndash; 24.9</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 font-medium">Overweight</td>
                <td className="px-6 py-4 text-yellow-600 font-semibold">25.0 &ndash; 29.9</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Obese</td>
                <td className="px-6 py-4 text-red-600 font-semibold">30.0 or greater</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 text-sm text-blue-900 rounded-r-lg">
          <h3 className="font-bold text-blue-800 mb-2">Important Limitations</h3>
          <p>
            While highly useful, BMI is not a perfect measure of health. It cannot distinguish between fat and muscle. Therefore, athletes, bodybuilders, or people with high muscle mass might be classified as "overweight" even if their body fat percentage is very low. Similarly, older adults who have lost muscle mass may fall into a "healthy" BMI range despite having excess body fat. Always use BMI in conjunction with other health assessments and consult a doctor for a comprehensive evaluation.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-calc-black mb-2">1. Is the BMI scale accurate for Indians?</h3>
            <p>While standard WHO BMI guidelines apply globally, many health organizations recommend slightly lower cutoff points for Asians, including Indians. Due to genetics, South Asians tend to have higher risks of diabetes and heart disease at lower body weights. For Indians, a BMI of 23 or higher is often considered a warning sign to monitor weight.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-calc-black mb-2">2. What is a healthy BMI range?</h3>
            <p>According to the standard global guidelines, a healthy BMI range for adults is between 18.5 and 24.9. Maintaining your weight within this range reduces the risk of serious health conditions.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-calc-black mb-2">3. Does the BMI calculator work for pregnant women?</h3>
            <p>No, standard BMI formulas should not be used to evaluate the health of pregnant women. Weight gain during pregnancy is entirely normal and necessary for the baby's development. Please consult your obstetrician to discuss healthy pregnancy weight gain.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-calc-black mb-2">4. What is the difference between BMI and Body Fat Percentage?</h3>
            <p>BMI is merely a mathematical ratio of height to weight. It does not measure actual body composition. Body Fat Percentage, on the other hand, determines the exact proportion of fat versus muscle and bone in your body. Tools like DEXA scans or skinfold calipers are required to measure body fat percentage accurately.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-calc-black mb-2">5. Does age affect my BMI calculation?</h3>
            <p>For adults aged 18 and older, the BMI formula is static—it does not change with age. However, for children and adolescents, calculating BMI requires comparing their numbers against age- and sex-specific growth charts, often referred to as BMI percentiles.</p>
          </div>
        </div>
      </section>

      {/* --- INTERNAL LINKING SECTION --- */}
      <section className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-calc-black mb-4">Explore More Health & Fitness Calculators</h2>
        <p className="mb-4">Taking control of your health goes beyond just checking your BMI. Use our suite of free tools to plan a comprehensive health journey:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <li><a href="/bmr-calculator" className="text-blue-600 hover:underline font-medium">BMR Calculator</a></li>
          <li><a href="/tdee-calculator" className="text-blue-600 hover:underline font-medium">TDEE Calculator</a></li>
          <li><a href="/body-fat-calculator" className="text-blue-600 hover:underline font-medium">Body Fat Calculator</a></li>
          <li><a href="/ideal-weight-calculator" className="text-blue-600 hover:underline font-medium">Ideal Weight Calculator</a></li>
          <li><a href="/calorie-calculator" className="text-blue-600 hover:underline font-medium">Daily Calorie Calculator</a></li>
          <li><a href="/macros-calculator" className="text-blue-600 hover:underline font-medium">Macros Calculator</a></li>
          <li><a href="/calories-burned-calculator" className="text-blue-600 hover:underline font-medium">Calories Burned Calculator</a></li>
          <li><a href="/water-intake-calculator" className="text-blue-600 hover:underline font-medium">Water Intake Calculator</a></li>
          <li><a href="/pregnancy-calculator" className="text-blue-600 hover:underline font-medium">Pregnancy Calculator</a></li>
          <li><a href="/period-cycle-calculator" className="text-blue-600 hover:underline font-medium">Period Cycle Calculator</a></li>
        </ul>
      </section>

    </div>
  );
}