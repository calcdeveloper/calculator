import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between Margin and Markup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Margin is the profit percentage calculated based on the Selling Price (Revenue). Markup is the profit percentage calculated based on the Cost. For example, if a product costs ₹100 and you sell it for ₹150, the profit is ₹50. The Markup is 50% (50/100), but the Margin is 33.3% (50/150). Business analysts always use Margin, while sourcing teams often use Markup."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my Margin always lower than my Markup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mathematically, Margin uses the Selling Price as the denominator, while Markup uses the Cost. Since Selling Price is almost always higher than Cost, the Margin percentage will always be a smaller number than the Markup percentage for any profitable item."
        }
      },
      {
        "@type": "Question",
        "name": "Can my Gross Margin ever be 100%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 100% Gross Margin is mathematically impossible unless your Cost to produce the item is exactly zero (₹0). Software and digital products often approach 99% margins because the variable cost of duplicating the software is practically zero, but in physical retail, 100% margin does not exist."
        }
      },
      {
        "@type": "Question",
        "name": "What is a 'Good' Profit Margin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends entirely on the industry. A grocery store might operate on razor-thin 2-3% margins due to massive volume. A luxury jewelry brand might operate on 60-80% margins to cover massive marketing and storefront costs. Software-as-a-Service (SaaS) companies often target 80-90% gross margins."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate the Selling Price if I want a 40% margin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You cannot simply add 40% to your cost. If your cost is ₹100 and you add 40%, the price is ₹140. But ₹40 profit / ₹140 price is only a 28.5% margin! The correct formula is: Price = Cost / (1 - Target Margin). So, ₹100 / (1 - 0.40) = ₹100 / 0.60 = ₹166.67 Selling Price."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Margin Calculator: Master Retail Pricing and Profitability</h1>
        <p className="mb-4 text-lg text-gray-600">
          In the world of commerce, whether you are running a sprawling e-commerce empire, a local retail storefront, or a high-tech SaaS startup, pricing is the ultimate lever of profitability. Yet, an alarming number of entrepreneurs systematically misprice their products due to a fundamental misunderstanding of one specific financial concept: the difference between <strong>Margin</strong> and <strong>Markup</strong>.
        </p>
        <p className="mb-4">
          Margin and Markup are two sides of the same coin, but using them interchangeably is a fatal accounting error that can quietly destroy a business's cash flow. When an investor or a bank asks for your "Gross Margin," they are asking for a very specific mathematical equation based on your revenue, not your supply costs. 
        </p>
        <p className="mb-4">
          Our dual-mode <strong>Margin Calculator</strong> is designed to eliminate pricing errors. In "Calculate Margin" mode, you can audit your existing pricing strategy by inputting your cost and selling price to reveal your true gross profit percentage. In "Calculate Selling Price" mode, you can input your supply costs and a target margin, and the tool will instantly reverse-engineer the exact retail price you must charge to hit your financial goals.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Margin Calculator</h2>
        <p className="mb-4">
          The calculator features a dynamic toggle depending on the financial question you are trying to answer.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Mode 1: Auditing Existing Prices (Calculate Margin)</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Cost to Produce / Buy:</strong> Enter the absolute total cost incurred to bring one unit of your product to the point of sale. This includes the raw material cost, manufacturing, packaging, and freight-in shipping.</li>
          <li><strong>Selling Price:</strong> Enter the final retail price paid by your customer.</li>
        </ul>
        <p className="mb-4">
          <em>Result:</em> The calculator will instantly reveal your exact Gross Profit (in Rupees), your Gross Margin (%), and your Markup (%). Use this to verify if your current pricing strategy is actually sustainable.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Mode 2: Setting New Prices (Calculate Selling Price)</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Cost to Produce / Buy:</strong> Enter your unit cost as defined above.</li>
          <li><strong>Target Gross Margin (%):</strong> Enter the percentage of revenue you need to keep as gross profit. If your industry standard is 40%, enter 40.</li>
        </ul>
        <p className="mb-4">
          <em>Result:</em> The calculator runs the reverse margin formula to output the exact <strong>Required Selling Price</strong> you must display on your storefront to hit that target.
        </p>
      </section>

      {/* MARGIN VS MARKUP */}
      <section className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Fatal Confusion: Margin vs. Markup</h2>
        <p className="mb-4">
          The most common reason new retail businesses fail is confusing markup with margin. Let us break down the mathematics so you never make this mistake.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Understanding Markup (The Supplier's View)</h3>
        <p className="mb-4">
          Markup is an inside-out view of profitability. It looks at how much money you added on top of your base cost. 
          <br/><strong>Formula:</strong> <code>(Gross Profit / Cost) * 100</code>
        </p>
        <p className="mb-4">
          If you buy a shirt from a wholesaler for ₹1,000 and sell it for ₹1,500, your gross profit is ₹500.
          Your Markup is (₹500 / ₹1,000) = 0.50 or <strong>50%</strong>.
          You marked up the cost by 50%.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Understanding Margin (The Investor's View)</h3>
        <p className="mb-4">
          Margin is an outside-in view of profitability. It looks at how much of the final sales revenue you actually get to keep. 
          <br/><strong>Formula:</strong> <code>(Gross Profit / Selling Price) * 100</code>
        </p>
        <p className="mb-4">
          Using the exact same shirt: you sell it for ₹1,500 and keep ₹500 in profit.
          Your Margin is (₹500 / ₹1,500) = 0.333 or <strong>33.3%</strong>.
        </p>

        <h3 className="text-xl font-semibold text-red-700 mb-2 mt-4">The Disaster Scenario</h3>
        <p className="mb-4">
          Why does this matter? Imagine you need a 50% Profit Margin to cover your expensive store rent and employee salaries. You buy an item for ₹1,000. You think, "I need a 50% margin, so I'll just add 50% to the cost." 
        </p>
        <p className="mb-4">
          You price it at ₹1,500. 
        </p>
        <p className="mb-4 font-bold text-red-900">
          You have just committed financial suicide.
        </p>
        <p className="mb-4">
          You added a 50% <em>Markup</em>, but as we calculated above, your actual <em>Margin</em> is only 33.3%. At the end of the month, your accountant will inform you that your revenue is missing 16.7% of the gross profit you thought you had, and you cannot make payroll. 
        </p>
        <p className="mb-4 font-semibold text-gray-800">
          If you want a 50% Margin on a ₹1,000 cost, the math is: `1000 / (1 - 0.5) = 2000`. You must sell the item for ₹2,000. This is why our "Calculate Selling Price" mode is so critical for retail owners.
        </p>
      </section>

      {/* WHY MARGIN MATTERS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Gross Margin Dictates Business Survival</h2>
        <p className="mb-4">
          Gross margin is not the money you put in your pocket at the end of the day. It is merely the first layer of profitability. After you subtract the direct cost of goods, the remaining gross margin must be large enough to pay for:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li><strong>Operating Expenses (OPEX):</strong> Rent, utilities, software subscriptions, insurance.</li>
          <li><strong>Payroll:</strong> Salaries for management, marketing, sales, and support staff.</li>
          <li><strong>Marketing & Customer Acquisition Cost (CAC):</strong> Google Ads, Facebook Ads, influencer campaigns.</li>
          <li><strong>Taxes & Interest:</strong> Corporate taxes and interest on business loans.</li>
        </ul>
        <p className="mb-4">
          If a direct-to-consumer (D2C) brand operates on a 30% gross margin, but it costs them 20% of their revenue just to acquire a customer via Facebook Ads, they only have 10% left to pay for their entire staff, warehouse rent, and shipping. This business will likely burn through its cash reserves and fail. 
        </p>
        <p className="mb-4">
          This is why venture capitalists love software businesses. A SaaS company has almost zero variable costs (server costs are minimal), resulting in 80% to 90% gross margins. This massive margin leaves a massive pool of capital to hire elite engineers and run aggressive global marketing campaigns.
        </p>
      </section>

      {/* INDUSTRY BENCHMARKS */}
      <section className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gross Margin Benchmarks: Where Do You Stand?</h2>
        <p className="mb-4">
          A "good" margin is highly relative. It depends entirely on your industry's volume and operational complexity. Here are standard benchmarks across various sectors:
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Retail & Grocery (10% - 25%)</h3>
        <p className="mb-4">
          Supermarkets operate on notoriously thin margins (often single digits). They survive purely on massive, predictable daily volume and rapid inventory turnover.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">E-commerce Apparel (40% - 60%)</h3>
        <p className="mb-4">
          Clothing brands require much higher margins because they face high return rates, dead stock (unsold inventory due to changing fashion trends), and heavy marketing costs. 
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Restaurants & Food Service (60% - 70%)</h3>
        <p className="mb-4">
          While a 70% gross margin on a plate of pasta sounds incredible, restaurants have astronomical fixed overheads (prime real estate rent, intense labor costs, equipment maintenance).
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Software & Digital Products (70% - 95%)</h3>
        <p className="mb-4">
          The holy grail of margins. Once the code is written, selling the software to 1 user or 10,000 users costs almost the exact same amount in variable expenses.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between Margin and Markup?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Margin is the profit percentage calculated based on the Selling Price (Revenue). Markup is the profit percentage calculated based on the Cost. For example, if a product costs ₹100 and you sell it for ₹150, the profit is ₹50. The Markup is 50% (50/100), but the Margin is 33.3% (50/150). Business analysts always use Margin, while sourcing teams often use Markup.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is my Margin always lower than my Markup?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Mathematically, Margin uses the Selling Price as the denominator, while Markup uses the Cost. Since Selling Price is almost always higher than Cost, the Margin percentage will always be a smaller number than the Markup percentage for any profitable item.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can my Gross Margin ever be 100%?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A 100% Gross Margin is mathematically impossible unless your Cost to produce the item is exactly zero (₹0). Software and digital products often approach 99% margins because the variable cost of duplicating the software is practically zero, but in physical retail, 100% margin does not exist.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is a 'Good' Profit Margin?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              It depends entirely on the industry. A grocery store might operate on razor-thin 2-3% margins due to massive volume. A luxury jewelry brand might operate on 60-80% margins to cover massive marketing and storefront costs. Software-as-a-Service (SaaS) companies often target 80-90% gross margins.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I calculate the Selling Price if I want a 40% margin?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              You cannot simply add 40% to your cost. If your cost is ₹100 and you add 40%, the price is ₹140. But ₹40 profit / ₹140 price is only a 28.5% margin! The correct formula is: Price = Cost / (1 - Target Margin). So, ₹100 / (1 - 0.40) = ₹100 / 0.60 = ₹166.67 Selling Price.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
