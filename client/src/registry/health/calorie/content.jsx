import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- ENHANCED SEO TAGS --- */}
      <Helmet>
        <title>Free Calorie Calculator (TDEE) | Calculate Daily Calorie Needs | CalcPilot</title>
        <meta 
          name="description" 
          content="Calculate your Total Daily Energy Expenditure (TDEE) and exact daily calorie needs for weight loss, maintenance, or muscle gain using our free calculator." 
        />
        <meta name="keywords" content="calorie calculator, TDEE calculator, daily calorie needs, weight loss calories, maintenance calories, basal metabolic rate, BMR" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free Calorie (TDEE) Calculator | CalcPilot" />
        <meta property="og:description" content="Find out exactly how many calories you need to eat every day to lose, maintain, or gain weight." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- SEO RICH CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is TDEE?</h2>
        <p>
          Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a given day. It is calculated by first finding your Basal Metabolic Rate (BMR)—the energy your body needs just to stay alive at rest—and then multiplying it by an activity factor that represents your daily movement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">How We Calculate Your Calories</h2>
        <p className="mb-4">
          Our calculator uses the highly accurate <strong>Mifflin-St Jeor equation</strong> to determine your BMR. Most nutritionists and health professionals consider this the gold standard formula for estimating daily calorie needs.
        </p>
        
        {/* Math Formula Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          BMR (Men) = (10 &times; weight in kg) + (6.25 &times; height in cm) - (5 &times; age) + 5
          <br /><br />
          BMR (Women) = (10 &times; weight in kg) + (6.25 &times; height in cm) - (5 &times; age) - 161
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding Your Calorie Goals</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Maintenance (TDEE):</strong> The exact number of calories you need to eat daily to keep your weight exactly the same.</li>
          <li><strong>Weight Loss:</strong> Eating roughly 500 calories less than your TDEE per day generally results in a healthy, sustainable weight loss of about 0.5 kg (1 lb) per week.</li>
          <li><strong>Weight Gain:</strong> Eating roughly 500 calories more than your TDEE per day will help you gain weight or build muscle (often called a "caloric surplus").</li>
        </ul>
      </section>

      <section>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900 rounded-r-lg">
          <strong>Note:</strong> Calorie needs are estimates. Your individual metabolism, muscle mass, and specific medical conditions can affect how your body burns energy. Listen to your body and consult a registered dietitian or doctor for personalized nutrition advice.
        </div>
      </section>
    </div>
  );
}