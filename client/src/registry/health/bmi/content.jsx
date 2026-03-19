import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- ENHANCED SEO TAGS --- */}
      <Helmet>
        <title>Free BMI Calculator | Check Your Body Mass Index | CalcPilot</title>
        <meta 
          name="description" 
          content="Calculate your Body Mass Index (BMI) easily with our free online tool. Check if you are at a healthy weight based on your height and age." 
        />
        <meta name="keywords" content="BMI calculator, body mass index, healthy weight calculator, calculate BMI, health tools, ideal weight" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free BMI Calculator | CalcPilot" />
        <meta property="og:description" content="Check your Body Mass Index quickly and accurately to track your health goals." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- SEO RICH CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is Body Mass Index (BMI)?</h2>
        <p>
          Body Mass Index (BMI) is a simple, widely-used mathematical formula that estimates your body fat based on your height and weight. While it does not measure body fat directly, it is an inexpensive and quick way to categorize whether a person is underweight, at a healthy weight, overweight, or obese.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The BMI Calculation Formula</h2>
        <p className="mb-4">
          Our calculator uses the standard metric formula defined by the World Health Organization (WHO). It divides a person's weight in kilograms by the square of their height in meters:
        </p>
        
        {/* Math Formula Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          BMI = Weight (kg) &divide; [ Height (m) ]<sup>2</sup>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Standard BMI Categories</h2>
        <p className="mb-3">According to the WHO, the standard weight status categories associated with BMI ranges for adults are:</p>
        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="pb-2 font-bold text-calc-black">BMI Range</th>
                <th className="pb-2 font-bold text-calc-black">Weight Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2">Below 18.5</td>
                <td className="py-2 text-blue-600 font-medium">Underweight</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">18.5 &ndash; 24.9</td>
                <td className="py-2 text-green-600 font-medium">Healthy Weight</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">25.0 &ndash; 29.9</td>
                <td className="py-2 text-yellow-600 font-medium">Overweight</td>
              </tr>
              <tr>
                <td className="py-2">30.0 and Above</td>
                <td className="py-2 text-red-600 font-medium">Obese</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900 rounded-r-lg">
          <strong>Note:</strong> BMI is a helpful screening tool, but it has limitations. It does not distinguish between muscle mass and fat mass. Athletes with high muscle mass may have a high BMI without having high body fat. Always consult a healthcare provider for a complete health assessment.
        </div>
      </section>
    </div>
  );
}