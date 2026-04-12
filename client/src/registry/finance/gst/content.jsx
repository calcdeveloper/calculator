import React from 'react';
import { Helmet } from "react-helmet-async";

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the standard GST tax slabs in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, the GST structure is categorized into four primary tax slabs: 5%, 12%, 18%, and 28%. Essential items usually fall under lower brackets or are exempt (0%), while luxury goods and services are taxed at 18% or 28%. Gold and precious stones have a special rate of 3%."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between CGST, SGST, and IGST?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CGST (Central GST) and SGST (State GST) are levied together on intra-state transactions (sales within the same state). The total GST is split equally between the Central and State governments. IGST (Integrated GST) is levied on inter-state transactions (sales between different states) and is collected entirely by the Central Government."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate reverse GST or remove GST from a total?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To remove GST from a billed amount (inclusive of tax), divide the total amount by [1 + (GST Percentage / 100)]. For example, to find the base price of a ₹11,800 item with 18% GST, calculate ₹11,800 / 1.18, which gives a base price of ₹10,000."
        }
      },
      {
        "@type": "Question",
        "name": "Is GST calculated on the MRP of a product?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you do not add GST on top of the Maximum Retail Price (MRP). By law in India, MRP is already inclusive of all taxes, including GST. If a product's MRP is ₹1,000, the seller cannot charge extra GST on top of it. You must use the 'inclusive' calculation method to extract the tax portion."
        }
      },
      {
        "@type": "Question",
        "name": "Do freelancers and small businesses need to charge GST?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Freelancers and service providers in India are required to register for GST and charge it on their invoices only if their aggregate annual turnover exceeds ₹20 Lakhs (₹10 Lakhs in Special Category States). Below this threshold, GST registration is generally optional."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Free GST Calculator India | Add or Remove GST Instantly</title>
        <meta 
          name="description" 
          content="Use our free GST Calculator to add or reverse-calculate Goods and Services Tax (GST) easily. Get instant CGST/SGST breakdowns for your invoices in India." 
        />
        <meta name="keywords" content="GST calculator India, Goods and Services Tax, add GST to price, reverse GST calculator, CGST SGST calculator, tax calculator, calculate GST 18 percent, exclusive inclusive GST" />
        
        {/* Suggested URL Slug: /calculator/finance/gst */}
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free GST Calculator India | Add or Remove GST Instantly" />
        <meta property="og:description" content="Calculate GST easily. Add GST to your base price or extract the exclusive price from a GST-inclusive billed amount." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free GST Calculator: Add or Remove Tax Instantly</h1>
        <p className="mb-4">
          The Goods and Services Tax (GST) is India's comprehensive, destination-based indirect tax system that replaced a complex web of multiple indirect taxes. Whether you are a business owner creating an invoice, a freelancer determining your consulting fees, or a smart consumer verifying the tax on a retail purchase, getting the math right is crucial for accurate accounting and compliance.
        </p>
        <p>
          Our highly intuitive, two-in-one <strong>GST Calculator</strong> is designed specifically for the Indian tax structure. It allows you to effortlessly toggle between adding tax to a net base price (Exclusive) or extracting the original value from a final billed total (Inclusive). Along with the final numbers, the tool automatically breaks down your total tax into specific <strong>CGST and SGST components</strong>, making invoice generation an absolute breeze.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the GST Calculator</h2>
        <p className="mb-4">Calculating your exact tax liabilities takes less than a second. Follow these simple steps using the intuitive dashboard:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Inputs</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Calculation Type:</strong> Use the dropdown to choose your objective. Select <em>"Add GST (Exclusive)"</em> if you have a base price and need to add tax on top of it. Select <em>"Remove GST (Inclusive)"</em> if you have the final billed total and want to find the original base price.</li>
          <li><strong>Amount:</strong> Enter the monetary value (either your net price or your total billed amount, depending on the step above).</li>
          <li><strong>GST Slab:</strong> Select the applicable Indian tax bracket for your goods or services (e.g., 5%, 12%, 18% Standard II, or 28%).</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Review Your Tax Breakdown</h3>
        <p className="mb-3">The right-hand panel instantly displays your clean, perfectly calculated invoice metrics:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium">
          <li>Total Billed Amount: <span className="font-normal text-gray-700">The final, grand total payable by the customer, featured prominently in the green box.</span></li>
          <li>Net Base Amount: <span className="font-normal text-gray-700">The raw value of the product or service before any taxes are applied.</span></li>
          <li>Total GST: <span className="font-normal text-gray-700">The total amount of tax collected on the transaction.</span></li>
          <li>CGST + SGST Split: <span className="font-normal text-gray-700">An automatic 50/50 division of the Total GST, required for intra-state billing.</span></li>
          <li>Visual Breakdown: <span className="font-normal text-gray-700">A doughnut chart showing the proportion of your Base Amount versus Central and State taxes.</span></li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding the GST Calculation Formulas</h2>
        <p className="mb-4">Behind the scenes, calculating tax relies on basic percentage mathematics. Depending on the scenario, our tool applies one of two distinct mathematical formulas to ensure penny-perfect accuracy.</p>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-xl text-calc-black mb-2 text-center">1. Adding GST (Exclusive to Inclusive)</h3>
            <p className="text-center text-sm mb-4 text-gray-600">Use this when you know the base price and need to charge tax to the customer.</p>
            <div className="text-center text-lg md:text-xl font-bold text-calc-black bg-gray-50 py-3 rounded border border-gray-100">
              Total Price = Base Price + [ (Base Price &times; GST%) / 100 ]
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-xl text-calc-black mb-2 text-center">2. Removing GST (Inclusive to Exclusive)</h3>
            <p className="text-center text-sm mb-4 text-gray-600">Use this when you have the final MRP or billed amount and need to extract the base value.</p>
            <div className="text-center text-lg md:text-xl font-bold text-calc-black bg-gray-50 py-3 rounded border border-gray-100">
              Base Price = Total Price / [ 1 + (GST% / 100) ]
            </div>
          </div>
        </div>

        <p className="mt-6">
          <strong>The CGST & SGST Split:</strong> For sales happening within the same state (intra-state), the government requires the total tax to be split equally. Therefore, <strong>CGST = Total GST &div; 2</strong> and <strong>SGST = Total GST &div; 2</strong>. If you are selling to a customer in a different state, the entire tax amount is booked under IGST.
        </p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Real-Life GST Worked Examples</h2>
        <p className="mb-6">Let us look at a few practical, real-world business scenarios to understand how these calculations play out in your daily bookkeeping.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 1: Generating an Invoice (Adding 18% GST)</h3>
            <p className="mb-2 text-sm text-gray-600">A freelance web developer in Bengaluru is billing a local client for IT services. The agreed <strong>Net Base Amount is ₹10,000</strong>. IT services fall under the standard <strong>18% GST</strong> slab.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 font-medium">
              <li><strong>Calculation:</strong> (10,000 &times; 18) / 100</li>
              <li><strong>Total GST:</strong> ₹1,800</li>
              <li><strong>Tax Breakdown:</strong> CGST (9%) = ₹900 | SGST (9%) = ₹900</li>
              <li><strong>Total Billed Amount:</strong> <span className="font-bold text-green-700">₹11,800</span></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 2: Reverse Calculating from MRP (Removing 5% GST)</h3>
            <p className="mb-2 text-sm text-gray-600">A consumer buys a piece of packaged food from a supermarket. The final receipt shows a <strong>Total Billed Amount of ₹525</strong>, inclusive of <strong>5% GST</strong>. What was the actual cost of the food?</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 font-medium">
              <li><strong>Calculation Formula:</strong> 525 / (1 + 0.05)</li>
              <li><strong>Net Base Amount:</strong> ₹500</li>
              <li><strong>Total GST Extracted:</strong> ₹25 (₹525 - ₹500)</li>
              <li><strong>Tax Breakdown:</strong> CGST (2.5%) = ₹12.5 | SGST (2.5%) = ₹12.5</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What are the standard GST tax slabs in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In India, the GST structure is categorized into four primary tax slabs: 5%, 12%, 18%, and 28%. Essential items usually fall under lower brackets or are exempt (0%), while luxury goods and services are taxed at 18% or 28%. Gold and precious stones have a special rate of 3%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the difference between CGST, SGST, and IGST?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              CGST (Central GST) and SGST (State GST) are levied together on intra-state transactions (sales within the same state). The total GST is split equally between the Central and State governments. IGST (Integrated GST) is levied on inter-state transactions (sales between different states) and is collected entirely by the Central Government.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How do I calculate reverse GST or remove GST from a total?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To remove GST from a billed amount (inclusive of tax), divide the total amount by [1 + (GST Percentage / 100)]. For example, to find the base price of a ₹11,800 item with 18% GST, calculate ₹11,800 / 1.18, which gives a base price of ₹10,000.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Is GST calculated on the MRP of a product?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No, you do not add GST on top of the Maximum Retail Price (MRP). By law in India, MRP is already inclusive of all taxes, including GST. If a product's MRP is ₹1,000, the seller cannot charge extra GST on top of it. You must use the 'inclusive' calculation method to extract the tax portion.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Do freelancers and small businesses need to charge GST?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Freelancers and service providers in India are required to register for GST and charge it on their invoices only if their aggregate annual turnover exceeds ₹20 Lakhs (₹10 Lakhs in Special Category States). Below this threshold, GST registration is generally optional.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore Related Financial Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Manage your money smarter. Check out our suite of free calculation tools designed to help you plan your loans, investments, and taxes in India:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/finance/car-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Car Loan</a>
          <a href="/calculator/finance/compound-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Compound Interest</a>
          <a href="/calculator/finance/emi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">EMI</a>
          <a href="/calculator/finance/fd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Fixed Deposit (FD)</a>
          <a href="/calculator/finance/gratuity" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Gratuity</a>
          <a href="/calculator/finance/home-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Home Loan</a>
          <a href="/calculator/finance/lumpsum" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Mutual Fund Lumpsum</a>
          <a href="/calculator/finance/personal-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Personal Loan</a>
          <a href="/calculator/finance/ppf" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">PPF</a>
          <a href="/calculator/finance/rd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Recurring Deposit (RD)</a>
          <a href="/calculator/finance/retirement" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Retirement Planning</a>
          <a href="/calculator/finance/simple-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Simple Interest</a>
          <a href="/calculator/finance/sip" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">SIP Returns</a>
        </div>
      </section>
      
    </div>
  );
}