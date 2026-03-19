import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Gratuity Calculator | Check Your Employment Payout | CalcPilot</title>
        <meta name="description" content="Calculate your employer gratuity payout accurately based on the Payment of Gratuity Act. Know what you are owed after 5+ years of service." />
        <meta name="keywords" content="gratuity calculator, payment of gratuity act, calculate gratuity India, employee benefits, final settlement" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is Gratuity?</h2>
        <p>Gratuity is a lump sum amount paid by an employer to an employee as a token of appreciation for services rendered towards the company. In India, under the Payment of Gratuity Act, an employee is legally entitled to receive gratuity if they have completed 5 or more years of continuous service with the same employer.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Gratuity Calculation Formula</h2>
        <p className="mb-4">For employees covered under the Payment of Gratuity Act, the payout is calculated based on 15 days of last drawn salary for each completed year of service (assuming 26 working days in a month):</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          G = (15 &times; Last Drawn Salary &times; Years of Service) / 26
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>G</strong> = Gratuity Amount</div>
          <div><strong>Last Drawn Salary</strong> = Basic Salary + Dearness Allowance (DA)</div>
          <div><strong>Years of Service</strong> = Rounded off (e.g., 5 years 7 months = 6 years)</div>
          <div><strong>26</strong> = Number of working days in a month</div>
        </div>
      </section>
    </div>
  );
}