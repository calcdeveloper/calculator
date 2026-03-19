import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Body Fat Percentage Calculator | CalcPilot</title>
        <meta name="description" content="Estimate your body fat percentage. Track your fitness journey accurately using standard body fat calculation metrics." />
        <meta name="keywords" content="body fat calculator, body fat percentage, US Navy method, fitness calculator, lean body mass" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding Body Fat Percentage</h2>
        <p>Your body fat percentage is the total mass of fat divided by your total body mass. It is a much more accurate indicator of fitness and health than body weight or BMI alone, because it distinguishes between actual fat and lean muscle mass.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">How is it Calculated?</h2>
        <p className="mb-4">While calipers or DEXA scans provide the most accurate measurements, mathematical formulas using standard body measurements (like the U.S. Navy Method) or BMI derivations provide highly useful estimates for tracking relative progress over time.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto mt-4">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="pb-2 font-bold text-calc-black">Description</th>
                <th className="pb-2 font-bold text-calc-black">Women</th>
                <th className="pb-2 font-bold text-calc-black">Men</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-2">Essential Fat</td>
                <td className="py-2">10-13%</td>
                <td className="py-2">2-5%</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">Athletes</td>
                <td className="py-2">14-20%</td>
                <td className="py-2">6-13%</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-2">Fitness</td>
                <td className="py-2">21-24%</td>
                <td className="py-2">14-17%</td>
              </tr>
              <tr>
                <td className="py-2">Average</td>
                <td className="py-2">25-31%</td>
                <td className="py-2">18-24%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-2">*Based on standard guidelines from the American Council on Exercise (ACE).</p>
      </section>
    </div>
  );
}