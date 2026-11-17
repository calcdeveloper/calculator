import React from 'react';
import Link from 'next/link';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Loan-to-Value (LTV) ratio and how is it calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Loan-to-Value (LTV) ratio is an institutional credit risk metric that measures the proportion of a property's purchase price or appraised market value that a lending institution will finance. It is calculated by dividing the sanctioned loan principal by the lower of the property's verified purchase price or independent appraised market valuation, multiplied by 100. For example, if you purchase an apartment valued at ₹1 Crore and the bank sanctions ₹80 Lakhs, your LTV ratio is exactly 80%, requiring a 20% (₹20 Lakh) personal down payment."
        }
      },
      {
        "@type": "Question",
        "name": "What are the maximum LTV limits permitted by the Reserve Bank of India (RBI)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under statutory RBI prudential guidelines, residential housing loans are categorized into three value tiers: 1) Loans up to ₹30 Lakhs permit a maximum LTV of up to 90% (minimum 10% borrower equity); 2) Loans between ₹30 Lakhs and ₹75 Lakhs are capped at an 80% LTV (minimum 20% borrower equity); and 3) High-value luxury loans exceeding ₹75 Lakhs are capped at a maximum 75% LTV (minimum 25% borrower equity). Commercial real estate loans typically face tighter internal caps between 55% and 65%."
        }
      },
      {
        "@type": "Question",
        "name": "Can stamp duty, registration charges, and brokerage be included in the loan amount?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The Reserve Bank of India strictly prohibits commercial banks and housing finance companies (HFCs) from capitalizing stamp duty, registration fees, GST, or brokerage into the base property cost when calculating LTV (with a minor regulatory exception for affordable housing units under ₹10 Lakhs). All statutory taxes and administrative closing costs—typically amounting to 5% to 8% of the property value—must be paid entirely out-of-pocket by the borrower in addition to the mandatory equity down payment."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if the bank's independent valuation is lower than the builder's agreement price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Institutional lenders calculate LTV strictly on the lower figure between the registered agreement value and the independent technical valuation report provided by empaneled chartered engineers. If you agree to buy an apartment for ₹80 Lakhs but the bank's valuer appraises it at ₹72 Lakhs, an 80% LTV cap will be applied to the ₹72 Lakh figure (yielding a ₹57.6 Lakh loan rather than ₹64 Lakhs). The buyer must absorb the resulting ₹6.4 Lakh appraisal shortfall in unencumbered cash before loan disbursement."
        }
      },
      {
        "@type": "Question",
        "name": "How does your LTV ratio affect your home loan interest rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lenders utilize risk-based pricing matrices where lower LTV brackets receive preferential discounted interest rates. Borrowers who contribute a large personal down payment and request a conservative LTV (such as 60% to 70%) present lower default risk, often qualifying for prime interest rates 25 to 50 basis points lower than borrowers demanding the maximum 80% or 90% LTV ceiling. Over a 20-year tenure, this interest rate concession saves hundreds of thousands of rupees in cumulative repayments."
        }
      },
      {
        "@type": "Question",
        "name": "Can you get a 100% LTV mortgage in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. 100% financing for real estate acquisitions is strictly illegal under RBI regulatory frameworks. The central bank enforces mandatory borrower equity to prevent systemic moral hazard and protect the financial system from property price deflation. The absolute highest permissible financing is 90% for affordable housing properties under ₹30 Lakhs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between primary home loan LTV and Loan Against Property (LAP) LTV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Primary home loans are dedicated end-use facilities used to purchase residential real estate, qualifying for maximum LTVs of 75% to 90% and repayment tenures up to 30 years. Conversely, Loan Against Property (LAP) is an unencumbered property mortgage used for multi-purpose commercial, working capital, or personal liquidity. Because LAP funds can be deployed into volatile business ventures, banks enforce conservative LTV caps between 50% and 65% and shorter tenures of 10 to 15 years."
        }
      },
      {
        "@type": "Question",
        "name": "How does employment type (Salaried vs. Self-Employed) affect LTV eligibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While statutory RBI LTV caps apply universally, banks frequently adjust internal credit underwriting parameters based on income volatility. Salaried professionals with verifiable payslips and steady corporate employer profiles routinely receive the maximum statutory LTV (such as 80%). Self-employed business owners, freelancers, and entrepreneurs with cyclical cash flows may face an internal lender haircut, restricting maximum financing to 70% or 75% to compensate for business income variance."
        }
      },
      {
        "@type": "Question",
        "name": "How does property appreciation unlock top-up loans through LTV expansion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When your property appreciates in value over time while regular monthly EMIs amortize your existing principal debt, your effective LTV drops significantly. If a property purchased for ₹50 Lakhs with a ₹40 Lakh loan (80% LTV) appreciates to ₹90 Lakhs while the balance reduces to ₹28 Lakhs, your current LTV is only 31.1%. You can leverage the remaining headroom up to 75% (₹67.5 Lakhs) to secure an unencumbered top-up loan of up to ₹39.5 Lakhs at attractive home loan interest rates."
        }
      },
      {
        "@type": "Question",
        "name": "How does LTV interact with personal Debt-to-Income (DTI/FOIR) limits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LTV and DTI/FOIR act as concurrent underwriting filters. LTV establishes the absolute collateral ceiling (the maximum loan supported by the property's physical valuation), while FOIR establishes the income ceiling (the maximum monthly EMI your verified salary can service under the 50% debt cap). The bank's credit sanction is always capped at the lower of the two limits. High earnings cannot breach statutory LTV caps, nor can high property values bypass salary FOIR constraints."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      
      {/* JSON-LD FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1: EXECUTIVE OVERVIEW & FOUNDATIONAL PRINCIPLES */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Loan to Value (LTV) Calculator: Master Bank Prudential Limits &amp; Mortgage EMI Math
        </h1>
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
          When retail borrowers and commercial real estate investors enter financial negotiations for a mortgage, housing finance facility, or Loan Against Property (LAP), they routinely assume that high net income or an elite CIBIL credit score guarantees full property funding. In institutional banking, however, personal creditworthiness satisfies only half of the underwriting equation. The definitive metric governing credit disbursement is the <strong>Loan-to-Value (LTV) Ratio</strong>.
        </p>
        <p className="mb-4">
          The Loan-to-Value ratio is a foundational financial metric utilized by central banks, prudential regulators, and risk underwriters to quantify credit exposure against the physical asset pledged as collateral. Expressed as a percentage, LTV compares the total loan principal requested against the verifiable fair market valuation of the underlying real estate asset. In simple terms, it measures how much debt capital finances the purchase versus how much unencumbered personal equity ("skin in the game") the borrower must contribute out of pocket.
        </p>
        <p className="mb-4">
          Under statutory directives established by the Reserve Bank of India (RBI) under Section 21 and Section 35A of the Banking Regulation Act, 1949, commercial banks and Housing Finance Companies (HFCs) are strictly prohibited from offering 100% real estate financing. These regulatory caps trace their origins to global Basel III capital adequacy accords and post-2008 macro-prudential frameworks designed to eliminate systemic mortgage defaults. When property prices fluctuate, high-LTV loans quickly trigger "negative equity"—a catastrophic condition where the outstanding principal balance exceeds the liquidated market value of the property, incentivizing strategic borrower default.
        </p>
        <p className="mb-4">
          Our forensic <strong>Loan to Value (LTV) EMI Calculator</strong> models these regulatory underwriting structures with mathematical precision. By incorporating your employment status, collateral classification (residential vs. commercial), independent appraised asset value, interest rate, and repayment tenor, this engine computes your statutory borrowing ceiling, mandates your exact out-of-pocket cash commitment, and projects your Equated Monthly Installment (EMI) schedule.
        </p>
      </section>

      {/* SECTION 2: STEP-BY-STEP PRACTICAL GUIDE & UNDERWRITING METHODOLOGY */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Step-by-Step Practical Guide &amp; Underwriting Mathematical Methodology
        </h2>
        <p className="mb-4">
          Evaluating credit eligibility through the prism of LTV requires navigating both asset valuation protocols and reverse debt amortization formulas. Credit committees process loan files through a rigorous four-phase verification framework:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Phase 1: Dual Valuation &amp; Collateral Benchmark Determination</h3>
            <p className="text-sm text-gray-600 mb-2">
              Lenders never compute LTV on marketing quotes, developer brochures, or preliminary builder demand notes. The statutory collateral benchmark is defined strictly as the <strong>lower</strong> of two figures:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Qualifying Collateral Value = min(Registered Agreement Value, Independent Technical Appraisal)
            </div>
            <p className="text-xs text-gray-500 mt-2">
              The bank dispatches two independent, empaneled chartered engineering firms to perform physical structural audits, local circle rate benchmarking, and comparative sales analyses. If an agreement is executed at ₹90 Lakhs but the technical valuation establishes fair market value at ₹82 Lakhs, the bank applies the LTV cap strictly against ₹82 Lakhs.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Phase 2: Statutory RBI LTV Prudential Slab Mapping</h3>
            <p className="text-sm text-gray-600 mb-2">
              The qualifying collateral value is mapped against the Reserve Bank of India's statutory regulatory matrix (RBI Master Circular on Housing Finance):
            </p>
            <div className="overflow-x-auto my-2">
              <table className="w-full text-left text-xs border-collapse bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                    <th className="py-2 px-3">Property Value / Loan Tier</th>
                    <th className="py-2 px-3">Max Statutory LTV Cap</th>
                    <th className="py-2 px-3">Mandatory Down Payment</th>
                    <th className="py-2 px-3">Regulatory Risk Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-mono">
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold">Tier 1: Up to ₹30 Lakhs</td>
                    <td className="py-2 px-3 text-emerald-700 font-bold">Up to 90%</td>
                    <td className="py-2 px-3 font-bold text-emerald-800">Minimum 10%</td>
                    <td className="py-2 px-3">35% Risk Weight</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold">Tier 2: ₹30 Lakhs to ₹75 Lakhs</td>
                    <td className="py-2 px-3 text-blue-700 font-bold">Up to 80%</td>
                    <td className="py-2 px-3 font-bold text-blue-800">Minimum 20%</td>
                    <td className="py-2 px-3">35% Risk Weight</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-sans font-semibold">Tier 3: Above ₹75 Lakhs</td>
                    <td className="py-2 px-3 text-purple-700 font-bold">Up to 75%</td>
                    <td className="py-2 px-3 font-bold text-purple-800">Minimum 25%</td>
                    <td className="py-2 px-3">50% Risk Weight</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="py-2 px-3 font-sans font-semibold text-amber-950">Commercial Real Estate</td>
                    <td className="py-2 px-3 text-amber-800 font-bold">55% to 65%</td>
                    <td className="py-2 px-3 font-bold text-amber-900">Minimum 35% to 45%</td>
                    <td className="py-2 px-3">75% to 100% Risk Weight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Phase 3: Ancillary Cost Exclusion &amp; Cash Out-of-Pocket Audit</h3>
            <p className="text-sm text-gray-600 mb-2">
              The borrower's true out-of-pocket commitment encompasses far more than the nominal equity percentage. Under RBI regulations, statutory overheads are explicitly excluded from the mortgage:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Total Upfront Cash Outgo = Mandatory Equity Down Payment + Stamp Duty + Registration Fees + GST
            </div>
            <p className="text-xs text-gray-500 mt-2">
              On a ₹1 Crore transaction, stamp duty (5%–7%), registration (1%), and legal documentation easily add ₹6 Lakhs to ₹8 Lakhs. A buyer facing a 25% LTV down payment (₹25 Lakhs) must possess at least ₹32 Lakhs in liquid unencumbered capital before approaching registration.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Phase 4: Monthly Equated Installment (EMI) Calculation</h3>
            <p className="text-sm text-gray-600 mb-2">
              The sanctioned principal (P), determined via P = Collateral Value × LTV Cap, feeds into the standard reducing-balance annuity formula:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              EMI = P × r × [ (1 + r)^n / ((1 + r)^n - 1) ]
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Where $r$ represents the monthly interest rate (Annual Rate / 12 / 100) and $n$ represents total tenor in months (Tenor in Years × 12).
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Input Parameter Configuration Guidelines</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Employment Classification:</strong> Salaried applicants enjoy streamlined underwriting and standard statutory LTV caps. Self-employed borrowers should anticipate internal lender haircuts of 5% to 10% to cushion against business cycle volatility.</li>
          <li><strong>Property Valuation:</strong> Input the realistic expected valuation. For under-construction projects, ensure developer approvals (RERA registration, Commencement Certificate) are verified.</li>
          <li><strong>Collateral Classification:</strong> Differentiate between residential units (primary residences) and commercial premises (retail storefronts, industrial warehouses, office suites). Commercial properties carry higher risk weights and tighter LTV limits.</li>
          <li><strong>Tenor Selection:</strong> Balance monthly cash flow against cumulative interest outgo. While 20- to 30-year tenors compress monthly installments, they compound lifetime borrowing costs.</li>
        </ul>

        <div className="bg-blue-50/70 p-5 rounded-xl border border-blue-200 mt-6 text-sm">
          <h3 className="font-bold text-blue-950 mb-2">Technical Valuation Methodologies: How Empaneled Valuers Audit Assets</h3>
          <p className="text-xs text-blue-900 leading-relaxed mb-2">
            Independent chartered engineers empaneled by lending institutions determine property benchmarks through three standardized valuation approaches:
          </p>
          <ul className="text-xs text-blue-900 space-y-1.5 list-disc pl-5">
            <li><strong>Comparative Market Approach:</strong> Analyzes recent registered sale deeds for identical properties within a 500-meter to 1-kilometer radius, filtering out unverified builder marketing premiums.</li>
            <li><strong>Land &amp; Building Method:</strong> Calculates the value of the Undivided Share of Land (UDS) plus the depreciated structural replacement cost of construction based on building age and materials.</li>
            <li><strong>Circle Rate / Ready Reckoner Floor:</strong> Verifies the statutory minimum valuation mandated by the state government for stamp duty assessment. If market agreement value is abnormally lower than the circle rate, tax penalties under Section 50C apply.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3: REAL-WORLD WORKED SCENARIOS & CASE STUDIES */}
      <section className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Real-World Worked Scenarios &amp; Comprehensive Collateral Case Studies
        </h2>
        <p className="mb-6">
          To see how institutional credit models enforce LTV thresholds, appraisal haircuts, and closing fees in practice, examine four detailed property acquisition profiles:
        </p>

        {/* Case Study 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #1</span>
            <span className="text-sm font-semibold text-gray-500">Affordable Housing Stimulus</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The First-Time Homebuyer: Maximizing the 90% LTV Tier on a ₹28 Lakh Apartment
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Kavita is purchasing a 1BHK starter home in an urban periphery with an agreed base price of ₹28,00,000. She earns ₹45,000 per month as a salaried accounts executive and plans to finance the acquisition across a 20-year tenor at 8.40% interest.
          </p>

          <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200 text-sm space-y-2 mb-4">
            <h4 className="font-bold text-emerald-950">Statutory Tier 1 Underwriting Audit:</h4>
            <p>• <strong>Appraised Collateral Benchmark:</strong> ₹28,00,000 (qualifies for Tier 1 &le; ₹30 Lakhs)</p>
            <p>• <strong>Maximum Permissible LTV:</strong> <strong>90%</strong></p>
            <p>• <strong>Sanctioned Home Loan Principal:</strong> ₹28,00,000 × 90% = <strong>₹25,20,000</strong></p>
            <p>• <strong>Mandatory Equity Down Payment:</strong> ₹28,00,000 × 10% = <strong>₹2,80,000</strong></p>
            <p>• <strong>Monthly Equated Installment (EMI - 20 yrs @ 8.4%):</strong> <strong>₹21,692/month</strong></p>
            <p>• <strong>FOIR Check on ₹45,000 Salary:</strong> ₹21,692 / ₹45,000 = <strong>48.2%</strong> (clears the 50% limit)</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs md:text-sm space-y-1.5">
            <h4 className="font-bold text-gray-900">Total Upfront Cash Obligation:</h4>
            <p>• Mandatory Equity Down Payment (10%): ₹2,80,000</p>
            <p>• Stamp Duty (5% state rate): ₹1,40,000</p>
            <p>• Registration &amp; Document Surcharge (1%): ₹28,000</p>
            <p>• Bank Processing, Valuation &amp; Legal Audit Fees: ₹15,000</p>
            <p className="font-bold text-gray-900 pt-2 border-t border-gray-300">
              Total Liquid Cash Required: ₹4,63,000. Although advertised as requiring only "10% down," mandatory closing taxes increase the real upfront capital requirement to 16.5% of the asset cost.
            </p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #2</span>
            <span className="text-sm font-semibold text-gray-500">Valuation Haircut Dilemma</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Middle-Class Urban Purchase: Absorbing an Appraisal Shortfall on a ₹65 Lakh Flat
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Amit negotiates to purchase a 2BHK resale apartment in Pune for ₹65,00,000. He expects an 80% LTV loan of ₹52,00,000, having budgeted exactly ₹13,00,000 (20%) for his down payment. However, the bank's independent technical valuer inspects the aging building and appraises its fair market collateral value at only ₹58,00,000.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs md:text-sm">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Buyer's Expected Financing (Agreement Value)</h4>
              <p>• Agreement Purchase Price: ₹65,00,000</p>
              <p>• Expected 80% LTV Loan: ₹52,00,000</p>
              <p>• Expected Down Payment: ₹13,00,000</p>
              <p>• Projected 20-Year EMI (@ 8.5%): ₹45,142</p>
              <p className="text-blue-700 font-semibold mt-2">Assumption: Full 80% financing against agreement price.</p>
            </div>

            <div className="bg-red-50 p-4 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-950 mb-2">Bank Underwriting Reality (Appraisal Benchmark)</h4>
              <p>• Technical Appraised Value: ₹58,00,000</p>
              <p>• Sanctioned 80% LTV Loan: <strong>₹46,40,000</strong></p>
              <p>• Revised Required Down Payment: <strong>₹18,60,000</strong></p>
              <p>• Revised 20-Year EMI (@ 8.5%): ₹40,273</p>
              <p className="text-red-700 font-bold mt-2">Capital Shortfall: ₹5,60,000 unexpected cash requirement.</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            Strategic Resolution: Amit bridged the ₹5.6 Lakh valuation gap by deploying matured tax-saving equity investments modeled with our <Link href="/calculator/finance/elss" className="text-blue-700 font-semibold underline hover:text-blue-800">ELSS Calculator</Link> and tapping voluntary PF savings evaluated with our <Link href="/calculator/finance/epf-interest" className="text-blue-700 font-semibold underline hover:text-blue-800">EPF Interest Calculator</Link>.
          </p>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #3</span>
            <span className="text-sm font-semibold text-gray-500">Luxury Tier 3 Underwriting</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Luxury Metro Residence: 75% LTV Cap &amp; Heavy Tax Outlays on ₹2.5 Crores
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Sunil and Neha earn a combined monthly income of ₹4,20,000 and are acquiring a premium luxury condominium in Bengaluru for ₹2,50,00,000. Because the property value comfortably exceeds ₹75 Lakhs, it triggers the strict Tier 3 75% LTV cap.
          </p>

          <div className="bg-purple-50/70 p-5 rounded-xl border border-purple-200 text-sm space-y-2 mb-3">
            <h4 className="font-bold text-purple-950">Tier 3 Financial Architecture:</h4>
            <p>• <strong>Agreed Asset Valuation:</strong> ₹2,50,00,000</p>
            <p>• <strong>Maximum Sanctionable LTV (75% Cap):</strong> ₹2,50,00,000 × 75% = <strong>₹1,87,50,000</strong> (~₹1.875 Crores)</p>
            <p>• <strong>Mandatory 25% Equity Down Payment:</strong> <strong>₹62,50,000</strong></p>
            <p>• <strong>Monthly Equated Installment (25 yrs @ 8.35%):</strong> <strong>₹1,49,150/month</strong></p>
            <p>• <strong>State Stamp Duty (6.6% combined rate):</strong> ₹16,50,000</p>
            <p>• <strong>Registration Charges (1% statutory):</strong> ₹2,50,000</p>
            <p>• <strong>Under-Construction GST (5% non-affordable):</strong> ₹12,50,000</p>
            <p>• <strong>Builder Clubhouse &amp; Corpus Advance:</strong> ₹5,00,000</p>
            <p className="font-bold text-purple-950 pt-2 border-t border-purple-300">
              Total Out-of-Pocket Cash Required: ₹62.5L (equity) + ₹36.5L (taxes &amp; charges) = <strong>₹99,00,000 (~₹1 Crore in cash)</strong>. Even top-tier corporate earners must accumulate nearly 40% of the property value in unencumbered liquidity before closing luxury real estate acquisitions.
            </p>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #4</span>
            <span className="text-sm font-semibold text-gray-500">Asset Class Risk Modeling</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Commercial Storefront vs. Residential Condominium: Risk-Weighted Comparison on ₹1 Crore
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            An investor has ₹1,00,00,000 to deploy and is deciding between acquiring a residential apartment to lease out vs. buying a commercial retail storefront in a shopping complex. Both properties are appraised at exactly ₹1,00,00,000:
          </p>

          <div className="overflow-x-auto my-3">
            <table className="w-full text-left text-xs md:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                  <th className="py-2.5 px-3">Underwriting Parameter</th>
                  <th className="py-2.5 px-3">Residential Property (Flat)</th>
                  <th className="py-2.5 px-3">Commercial Property (Retail Shop)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-mono">
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Asset Value</td>
                  <td className="py-2.5 px-3">₹1,00,00,000</td>
                  <td className="py-2.5 px-3">₹1,00,00,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Maximum Permissible LTV</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">75.0% (Statutory)</td>
                  <td className="py-2.5 px-3 text-amber-700 font-bold">60.0% (Risk-Capped)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans">Max Loan Principal Sanctioned</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">₹75,00,000</td>
                  <td className="py-2.5 px-3 text-amber-700 font-bold">₹60,00,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans">Mandatory Cash Down Payment</td>
                  <td className="py-2.5 px-3">₹25,00,000</td>
                  <td className="py-2.5 px-3 text-red-600 font-bold">₹40,00,000 (+60% more cash)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans">Interest Rate (Annual APR)</td>
                  <td className="py-2.5 px-3 text-blue-700">8.45% (Prime Retail)</td>
                  <td className="py-2.5 px-3 text-red-600 font-bold">10.75% (Commercial CRE)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans">Maximum Allowed Tenor</td>
                  <td className="py-2.5 px-3">25 Years</td>
                  <td className="py-2.5 px-3">12 Years (Capped)</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="py-2.5 px-3 font-sans">Monthly Debt Service (EMI)</td>
                  <td className="py-2.5 px-3 text-blue-800">₹60,084/month</td>
                  <td className="py-2.5 px-3 text-red-700">₹74,896/month (+24.6% higher)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Critical Real Estate Insight: Despite borrowing ₹15 Lakhs LESS capital on the commercial asset (₹60L vs ₹75L), the tighter LTV cap forces ₹15 Lakhs more upfront equity, while higher commercial interest rates and compressed tenors result in a nearly ₹15,000 higher monthly EMI burden.
          </p>
        </div>
      </section>

      {/* SECTION 4: ADVANCED UNDERWRITING NUANCES, EDGE CASES & PITFALLS */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Advanced Underwriting Nuances, Edge Cases &amp; Common Pitfalls
        </h2>
        <p className="mb-6">
          Sophisticated borrowers optimize financing by recognizing how institutional credit committees manipulate LTV matrices to manage risk exposure:
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Risk-Based Pricing (RBP): Lower LTV Yields Lower Interest Rates</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Modern banking software does not apply uniform interest rates across all borrowers. Banks utilize granular <strong>Risk-Based Pricing (RBP) matrices</strong> that map your CIBIL score directly against your requested LTV bracket.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              If an applicant with a 790 CIBIL score borrows at the maximum 80% LTV, the bank may quote 8.75%. If that same borrower increases their personal down payment and requests an LTV of only 65%, the bank's capital risk profile drops, unlocking a prime rate of 8.35%. On a ₹75 Lakh 20-year mortgage, that 40-basis-point interest concession reduces total interest outgo by ₹4,12,800.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Construction-Linked Plans (CLP) and Tranche Disbursals</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When financing under-construction properties, banks never disburse the full sanctioned loan upfront. Disbursements occur in stages ("tranches") linked strictly to verifiable construction milestones: foundation completion, plinth level, individual slab castings, brickwork, and final occupancy certification.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crucially, the statutory LTV cap applies proportionally at every single stage. Furthermore, the bank's credit policy mandates that the borrower's <strong>entire equity down payment must be infused first</strong> before the bank disburses a single rupee of debt. If you are buying a ₹60 Lakh under-construction home with a 20% down payment (₹12 Lakhs), the developer must issue formal receipts confirming receipt of your full ₹12 Lakhs before the bank releases the initial construction tranche.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Unlocking Liquidity Through Property Appreciation &amp; Top-Up Loans</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              LTV is a dynamic ratio that shifts continuously over time as market valuations appreciate and monthly EMIs pay down principal debt. This dynamic shift creates lucrative borrowing opportunities for long-term homeowners.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Consider a homeowner who purchased a flat seven years ago for ₹50 Lakhs with an initial ₹40 Lakh loan (80% LTV). Today, regular amortization has reduced the loan balance to ₹25 Lakhs, while local infrastructure expansion has driven the property's appraised valuation to ₹1,00,00,000 (₹1 Crore). The current effective LTV is just 25% (₹25L / ₹1Cr). The homeowner can approach the bank for a <strong>Top-Up Home Loan</strong> up to 70% or 75% LTV, securing up to ₹50 Lakhs in liquid financing at attractive mortgage rates to fund business expansion or education without selling the underlying asset.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Loan Against Property (LAP) vs. Primary Home Purchase Haircuts</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Borrowers often confuse primary home loans with Loan Against Property (LAP). A primary home loan finances the direct acquisition of real estate for owner-occupation. Lenders perceive residential occupancy as low default risk, extending LTVs up to 90%.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              In contrast, Loan Against Property (LAP) involves mortgaging an existing unencumbered property to extract liquidity for multi-purpose commercial ventures, debt consolidation, or emergency capital. Because the capital flows into speculative or volatile business activities, banks impose conservative LTV haircuts, restricting LAP sanctions strictly to 50%–65% of the property's technical valuation and capping tenors at 10 to 15 years.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. The Dual-Ceiling Convergence: LTV vs. Debt-to-Income (FOIR)</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Institutional credit approvals require simultaneous qualification under two independent risk equations. The <strong>LTV Ratio</strong> establishes the physical collateral ceiling (what the property can support), while the <strong>Fixed Obligation to Income Ratio (FOIR)</strong> establishes the cash-flow repayment ceiling (what your salary can service).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              If an ultra-high earner with ₹5 Lakhs monthly salary seeks a ₹1.5 Crore loan on a property appraised at only ₹1.2 Crores (75% LTV cap = ₹90 Lakhs), the bank sanctions only ₹90 Lakhs, regardless of the applicant's immense salary capacity. Conversely, if an applicant earning ₹40,000 monthly buys a ₹1 Crore luxury apartment with ₹60 Lakhs in cash, the 75% LTV cap would theoretically allow a ₹40 Lakh loan; however, the applicant's salary can service an EMI of only ₹20,000 (supporting only a ₹23 Lakh loan). The bank always sanctions the <strong>lesser of the two caps</strong>. Model your cash-flow ceiling with our <Link href="/calculator/finance/loan-affordability" className="text-blue-700 font-semibold underline hover:text-blue-800">Loan Affordability Calculator</Link>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. The Banned Subvention Schemes &amp; Upfront Disbursal Hazards</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Historically, aggressive developers offered marketing lures known as 80:20 or 75:25 subvention schemes, where buyers paid only 20% down, the bank disbursed the entire 80% loan directly to the developer upfront, and the developer promised to pay all EMIs until possession.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              When developers diverted these funds and projects stalled indefinitely, buyers discovered that the bank legally held them 100% liable for the entire debt on an unbuilt, valueless shell. To eradicate this systemic risk, the RBI issued circular DBOD.BP.BC.No. 51/08.12.015/2013-14, strictly prohibiting upfront lump-sum disbursals and mandating that all disbursements strictly track physical, verified construction milestones.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">7. Negative Equity &amp; Asset Price Deflation Risks</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Borrowers who stretch financing to the absolute statutory ceiling (90% LTV) operate on razor-thin equity margins. If localized market corrections, infrastructure cancellations, or micro-market gluts depress real estate valuations by just 10% to 15%, the property enters "negative equity."
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Under negative equity, the outstanding bank principal exceeds the liquidated market value of the home. In this trap, the homeowner cannot refinance to a lower interest rate, execute a balance transfer to a rival bank, or sell the property without injecting substantial personal cash to satisfy the outstanding mortgage balance before the bank will release the title deeds.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPARISONS & COLLATERAL MATRIX */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Collateral Financing Matrix: Comparing LTV Across Asset Classes
        </h2>
        <p className="mb-4">
          Different collateral asset classes carry divergent liquidation horizons, market volatility, and default recovery timelines. Lending institutions structure LTV limits and interest margins accordingly:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white shadow-xs rounded-xl overflow-hidden border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                <th className="py-3 px-3">Collateral Asset Category</th>
                <th className="py-3 px-3">Regulatory / Typical LTV</th>
                <th className="py-3 px-3">Typical Tenure Span</th>
                <th className="py-3 px-3">Indicative Interest Rate</th>
                <th className="py-3 px-3">Liquidation Risk Profile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-mono">
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Residential Ready-to-Move Home</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">75% to 90%</td>
                <td className="py-3 px-3 font-sans">Up to 30 Years</td>
                <td className="py-3 px-3 text-blue-700">8.35% – 9.25%</td>
                <td className="py-3 px-3 font-sans text-emerald-700">Very Low (Primary Shelter)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Under-Construction Residential</td>
                <td className="py-3 px-3 text-blue-700 font-bold">75% to 80% (Tranche-Based)</td>
                <td className="py-3 px-3 font-sans">Up to 30 Years</td>
                <td className="py-3 px-3 text-blue-700">8.50% – 9.50%</td>
                <td className="py-3 px-3 font-sans text-amber-700">Moderate (Execution &amp; RERA Risk)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Residential Plot / Land Loan</td>
                <td className="py-3 px-3 text-amber-700 font-bold">60% to 70%</td>
                <td className="py-3 px-3 font-sans">10 to 15 Years</td>
                <td className="py-3 px-3 text-amber-700">9.25% – 10.50%</td>
                <td className="py-3 px-3 font-sans text-amber-700">Moderate (Boundary &amp; Title Encroachment)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Commercial Office / Retail Shop</td>
                <td className="py-3 px-3 text-purple-700 font-bold">55% to 65%</td>
                <td className="py-3 px-3 font-sans">10 to 15 Years</td>
                <td className="py-3 px-3 text-red-600 font-bold">10.00% – 12.00%</td>
                <td className="py-3 px-3 font-sans text-red-700">High (Economic Cycle &amp; Vacancy Risk)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Loan Against Property (LAP)</td>
                <td className="py-3 px-3 text-purple-700 font-bold">50% to 65%</td>
                <td className="py-3 px-3 font-sans">10 to 15 Years</td>
                <td className="py-3 px-3 text-red-600 font-bold">9.50% – 11.50%</td>
                <td className="py-3 px-3 font-sans text-amber-700">Moderate to High (Business End-Use)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Gold Loan / Financial Securities</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">50% (Equity) / 75% (Gold)</td>
                <td className="py-3 px-3 font-sans">1 to 3 Years (Overdraft)</td>
                <td className="py-3 px-3 text-blue-700">8.75% – 11.00%</td>
                <td className="py-3 px-3 font-sans text-emerald-700">Instant Liquidity (Daily Mark-to-Market)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Down Payment Liquidity Planning</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Accumulating the required 10% to 25% equity down payment plus statutory closing taxes represents the single greatest hurdle for first-time buyers. Successful purchasers engineer their down payment reserves years in advance by automating equity mutual fund allocations, tracking tax-exempt House Rent Allowance savings under Rule 2A using our <Link href="/calculator/finance/hra" className="text-blue-700 font-semibold underline hover:text-blue-800">HRA Exemption Calculator</Link>, and auditing net monthly liquidity via our <Link href="/calculator/finance/take-home-salary" className="text-blue-700 font-semibold underline hover:text-blue-800">Take-Home Salary Calculator</Link>.
        </p>
      </section>

      {/* SECTION 6: COMPREHENSIVE FREQUENTLY ASKED QUESTIONS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is a Loan-to-Value (LTV) ratio and how is it calculated?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The Loan-to-Value (LTV) ratio is an institutional credit risk metric that measures the proportion of a property's purchase price or appraised market value that a lending institution will finance. It is calculated by dividing the sanctioned loan principal by the lower of the property's verified purchase price or independent appraised market valuation, multiplied by 100. For example, if you purchase an apartment valued at ₹1 Crore and the bank sanctions ₹80 Lakhs, your LTV ratio is exactly 80%, requiring a 20% (₹20 Lakh) personal down payment.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What are the maximum LTV limits permitted by the Reserve Bank of India (RBI)?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under statutory RBI prudential guidelines, residential housing loans are categorized into three value tiers: 1) Loans up to ₹30 Lakhs permit a maximum LTV of up to 90% (minimum 10% borrower equity); 2) Loans between ₹30 Lakhs and ₹75 Lakhs are capped at an 80% LTV (minimum 20% borrower equity); and 3) High-value luxury loans exceeding ₹75 Lakhs are capped at a maximum 75% LTV (minimum 25% borrower equity). Commercial real estate loans typically face tighter internal caps between 55% and 65%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Can stamp duty, registration charges, and brokerage be included in the loan amount?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. The Reserve Bank of India strictly prohibits commercial banks and housing finance companies (HFCs) from capitalizing stamp duty, registration fees, GST, or brokerage into the base property cost when calculating LTV (with a minor regulatory exception for affordable housing units under ₹10 Lakhs). All statutory taxes and administrative closing costs—typically amounting to 5% to 8% of the property value—must be paid entirely out-of-pocket by the borrower in addition to the mandatory equity down payment.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What happens if the bank's independent valuation is lower than the builder's agreement price?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Institutional lenders calculate LTV strictly on the lower figure between the registered agreement value and the independent technical valuation report provided by empaneled chartered engineers. If you agree to buy an apartment for ₹80 Lakhs but the bank's valuer appraises it at ₹72 Lakhs, an 80% LTV cap will be applied to the ₹72 Lakh figure (yielding a ₹57.6 Lakh loan rather than ₹64 Lakhs). The buyer must absorb the resulting ₹6.4 Lakh appraisal shortfall in unencumbered cash before loan disbursement.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does your LTV ratio affect your home loan interest rate?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Lenders utilize risk-based pricing matrices where lower LTV brackets receive preferential discounted interest rates. Borrowers who contribute a large personal down payment and request a conservative LTV (such as 60% to 70%) present lower default risk, often qualifying for prime interest rates 25 to 50 basis points lower than borrowers demanding the maximum 80% or 90% LTV ceiling. Over a 20-year tenure, this interest rate concession saves hundreds of thousands of rupees in cumulative repayments.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Can you get a 100% LTV mortgage in India?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. 100% financing for real estate acquisitions is strictly illegal under RBI regulatory frameworks. The central bank enforces mandatory borrower equity to prevent systemic moral hazard and protect the financial system from property price deflation. The absolute highest permissible financing is 90% for affordable housing properties under ₹30 Lakhs.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the difference between primary home loan LTV and Loan Against Property (LAP) LTV?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Primary home loans are dedicated end-use facilities used to purchase residential real estate, qualifying for maximum LTVs of 75% to 90% and repayment tenures up to 30 years. Conversely, Loan Against Property (LAP) is an unencumbered property mortgage used for multi-purpose commercial, working capital, or personal liquidity. Because LAP funds can be deployed into volatile business ventures, banks enforce conservative LTV caps between 50% and 65% and shorter tenures of 10 to 15 years.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does employment type (Salaried vs. Self-Employed) affect LTV eligibility?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              While statutory RBI LTV caps apply universally, banks frequently adjust internal credit underwriting parameters based on income volatility. Salaried professionals with verifiable payslips and steady corporate employer profiles routinely receive the maximum statutory LTV (such as 80%). Self-employed business owners, freelancers, and entrepreneurs with cyclical cash flows may face an internal lender haircut, restricting maximum financing to 70% or 75% to compensate for business income variance.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does property appreciation unlock top-up loans through LTV expansion?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              When your property appreciates in value over time while regular monthly EMIs amortize your existing principal debt, your effective LTV drops significantly. If a property purchased for ₹50 Lakhs with a ₹40 Lakh loan (80% LTV) appreciates to ₹90 Lakhs while the balance reduces to ₹28 Lakhs, your current LTV is only 31.1%. You can leverage the remaining headroom up to 75% (₹67.5 Lakhs) to secure an unencumbered top-up loan of up to ₹39.5 Lakhs at attractive home loan interest rates.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does LTV interact with personal Debt-to-Income (DTI/FOIR) limits?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              LTV and DTI/FOIR act as concurrent underwriting filters. LTV establishes the absolute collateral ceiling (the maximum loan supported by the property's physical valuation), while FOIR establishes the income ceiling (the maximum monthly EMI your verified salary can service under the 50% debt cap). The bank's credit sanction is always capped at the lower of the two limits. High earnings cannot breach statutory LTV caps, nor can high property values bypass salary FOIR constraints.
            </div>
          </details>
        </div>
      </section>

      {/* SECTION 7: INTERNALLY LINKED FINANCIAL DECISION HUBS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Income &amp; Debt Ceiling</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            LTV defines your collateral limit, but your salary dictates your repayment capacity. Calculate your maximum allowable debt under the 50% FOIR cap using our <Link href="/calculator/finance/loan-affordability" className="text-blue-700 font-bold underline hover:text-blue-800">Loan Affordability Calculator</Link>.
          </p>
        </div>

        <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Commercial Real Estate Debt</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Financing office complexes, warehouses, or industrial plants? Commercial mortgages require DSCR solvency assessments. Model debt payments with our <Link href="/calculator/finance/business-loan" className="text-amber-700 font-bold underline hover:text-amber-800">Business Loan EMI Calculator</Link>.
          </p>
        </div>

        <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Eliminating Consumer Debt</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            High-interest credit card debt destroys underwriting approvals. Free up monthly cash flow and clear card liabilities using our <Link href="/calculator/finance/cc-emi" className="text-purple-700 font-bold underline hover:text-purple-800">Credit Card EMI Calculator</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}