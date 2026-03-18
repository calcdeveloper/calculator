export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">What is GST?</h2>
        <p>Goods and Services Tax (GST) is an indirect, comprehensive, multi-stage, destination-based tax that is levied on every value addition in India. It has replaced many indirect tax laws that previously existed in India, bringing the country under a single, unified tax regime.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">The GST Calculation Formulas</h3>
        <p>Depending on whether you are invoicing a client (Adding GST) or figuring out the true cost of an item you bought (Removing GST), the mathematical formulas differ slightly.</p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2 text-lg">1. Adding GST (Exclusive)</h4>
            <p className="text-sm text-calc-darkGray mb-4">Used when you have the base price and need to apply tax on top of it.</p>
            <div className="font-mono text-sm bg-calc-white p-3 rounded border border-calc-lightGray">
              <p className="mb-2">GST = P × (R / 100)</p>
              <p>Net Price = P + GST</p>
            </div>
          </div>
  
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2 text-lg">2. Removing GST (Inclusive)</h4>
            <p className="text-sm text-calc-darkGray mb-4">Used when a product's MRP already includes GST, and you need to find the base cost.</p>
            <div className="font-mono text-sm bg-calc-white p-3 rounded border border-calc-lightGray">
              <p className="mb-2">Base Price = Net × [ 100 / (100 + R) ]</p>
              <p>GST = Net - Base Price</p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-calc-gray italic mt-2">Where <strong>P</strong> is the Principal/Base Amount, <strong>Net</strong> is the final billed amount, and <strong>R</strong> is the GST Rate percentage.</p>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Understanding CGST, SGST, and IGST</h3>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>CGST (Central GST):</strong> Tax collected by the Central Government on an intra-state sale (e.g., selling within Maharashtra).</li>
          <li><strong>SGST (State GST):</strong> Tax collected by the State Government on an intra-state sale. If the GST rate is 18%, it is split evenly into 9% CGST and 9% SGST.</li>
          <li><strong>IGST (Integrated GST):</strong> Tax collected by the Central Government for inter-state sales (e.g., selling from Maharashtra to Gujarat). The full 18% goes to IGST.</li>
        </ul>
      </div>
    );
  }