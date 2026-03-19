import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free BMR Calculator | Calculate Basal Metabolic Rate | CalcPilot</title>
        <meta name="description" content="Calculate your Basal Metabolic Rate (BMR) to discover the exact number of calories your body needs to function at rest." />
        <meta name="keywords" content="BMR calculator, basal metabolic rate, daily calories, metabolism calculator, resting metabolic rate" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is BMR?</h2>
        <p>Basal Metabolic Rate (BMR) represents the absolute minimum number of calories your body requires to perform basic life-sustaining functions (like breathing, blood circulation, and cell production) while completely at rest. Knowing your BMR is the very first step in designing an effective diet plan for weight loss or muscle gain.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Mifflin-St Jeor Equation</h2>
        <p className="mb-4">Our calculator uses the highly accurate Mifflin-St Jeor equation, which the American Dietetic Association considers the most reliable formula for predicting resting energy expenditure:</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center">For Men</h3>
            <div className="text-center text-lg font-semibold text-calc-black">
              BMR = (10 &times; Weight) + (6.25 &times; Height) - (5 &times; Age) + 5
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center">For Women</h3>
            <div className="text-center text-lg font-semibold text-calc-black">
              BMR = (10 &times; Weight) + (6.25 &times; Height) - (5 &times; Age) - 161
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">*Weight is in kg, Height is in cm, Age is in years.</p>
      </section>
    </div>
  );
}