import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free GST Calculator | Add or Remove GST Instantly | CalcPilot</title>
        <meta name="description" content="Calculate Goods and Services Tax (GST) easily. Add GST to a base price or extract the exclusive price from a GST-inclusive amount with our free tool." />
        <meta name="keywords" content="GST calculator, goods and services tax, calculate tax, GST exclusive inclusive, tax calculator India" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding GST</h2>
        <p>Goods and Services Tax (GST) is an indirect, comprehensive, multi-stage, destination-based tax levied on every value addition. Whether you are a business owner generating invoices or a consumer checking a retail price, calculating the exact tax portion is critical for accounting.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">GST Calculation Formulas</h2>
        <p className="mb-4">Depending on whether you need to add GST to a base price, or extract the base price from a total that already includes GST, two different mathematical approaches are used:</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center">Adding GST (Exclusive to Inclusive)</h3>
            <div className="text-center text-lg font-semibold text-calc-black">
              GST Amount = (Base Price &times; GST%) / 100
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-calc-black mb-2 text-center">Removing GST (Inclusive to Exclusive)</h3>
            <div className="text-center text-lg font-semibold text-calc-black">
              Base Price = Total Price / [ 1 + (GST% / 100) ]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}