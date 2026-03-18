export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">What is Gratuity?</h2>
        <p>Gratuity is a monetary benefit given by an employer to an employee for rendering continuous service to the company. In India, it is governed by the <strong>Payment of Gratuity Act, 1972</strong>. It serves as a financial reward for long-term loyalty and is paid out as a lump sum when an employee resigns, retires, or is laid off.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">Eligibility for Gratuity</h3>
        <p>To be eligible to receive gratuity, an employee must satisfy the following condition:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2 text-calc-darkGray">
          <li>The employee must have completed at least <strong>5 years of continuous service</strong> with the same organization.</li>
          <li><em>Exception:</em> The 5-year rule does not apply in cases of death or disablement.</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">The Gratuity Calculation Formulas</h3>
        <p>The calculation depends heavily on whether your organization is covered under the Payment of Gratuity Act.</p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2 text-lg">1. Covered under the Act</h4>
            <p className="text-sm text-calc-darkGray mb-4">Uses 26 working days in a month. Any service over 6 months is rounded up to the next full year (e.g., 5 years 7 months = 6 years).</p>
            <div className="font-mono text-sm bg-calc-white p-3 rounded border border-calc-lightGray overflow-x-auto">
              <p>G = (15 / 26) × W × Y</p>
            </div>
          </div>
  
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2 text-lg">2. Not Covered under the Act</h4>
            <p className="text-sm text-calc-darkGray mb-4">Uses 30 working days in a month. Only fully completed years are counted. Extra months are completely ignored.</p>
            <div className="font-mono text-sm bg-calc-white p-3 rounded border border-calc-lightGray overflow-x-auto">
              <p>G = (15 / 30) × W × Y</p>
            </div>
          </div>
        </div>
  
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>G</strong> = Gratuity Amount Payable</li>
          <li><strong>W</strong> = Last Drawn Wage (Basic Salary + Dearness Allowance)</li>
          <li><strong>Y</strong> = Tenure / Years of Service</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Tax Implications</h3>
        <p>As per the latest Income Tax rules in India, gratuity received up to <strong>₹20 Lakhs</strong> is completely tax-exempt for both covered and non-covered private-sector employees. Any amount exceeding this limit becomes part of your taxable income for that financial year.</p>
      </div>
    );
  }