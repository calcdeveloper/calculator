import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Retirement Calculator | Plan Your Future Corpus | CalcPilot</title>
        <meta name="description" content="Estimate the total retirement corpus you need to maintain your lifestyle. Factor in inflation, life expectancy, and current savings." />
        <meta name="keywords" content="retirement calculator, retirement corpus, FIRE calculator, pension planning, inflation calculator" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Planning for Retirement</h2>
        <p>A retirement calculator helps you estimate how much money you will need to comfortably stop working. It considers critical real-world factors like your current age, expected retirement age, life expectancy, and—most importantly—the silent wealth-killer: inflation.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Retirement Math</h2>
        <p className="mb-4">Retirement planning requires calculating the Future Value (FV) of your current expenses adjusted for inflation, and then calculating the corpus needed to sustain those expenses:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          Future Expenses = Current Expenses &times; (1 + Inflation Rate)<sup>Years to Retire</sup>
        </div>

        <p className="mt-4">Once your future monthly expenses are calculated, the app uses a safe withdrawal rate (or an annuity formula) to estimate the massive total corpus required to generate that income without running out of money before your life expectancy age.</p>
      </section>
    </div>
  );
}