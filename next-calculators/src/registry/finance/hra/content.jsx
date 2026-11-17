import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I claim HRA tax exemption if I live in my own house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Under Section 10(13A) of the Income Tax Act, HRA tax exemption is strictly contingent upon actual expenditure incurred on rent for residential accommodation. If you occupy a home that you own (either individually or jointly), you cannot claim HRA exemption. The entire HRA component received from your employer will be classified as taxable salary income."
        }
      },
      {
        "@type": "Question",
        "name": "Can I legally pay rent to my parents and claim HRA exemption?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can legally pay rent to your parents and claim HRA exemption, provided your parents are the legal registered owners of the residential property. You must execute a formal registered rental agreement, transfer rent via traceable banking channels (NEFT, UPI, cheque), and collect monthly rent receipts. Your parents must declare this rental income in their annual Income Tax Return (ITR) under 'Income from House Property'."
        }
      },
      {
        "@type": "Question",
        "name": "Can I pay rent to my spouse and claim HRA tax benefits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The relationship between a husband and wife is not considered a commercial landlord-tenant contract under Indian jurisprudence. Multiple income tax appellate tribunals (ITAT) have held that spouses are legally obligated to cohabit together, and paying rent to a spouse lacks commercial reality. Attempting to claim HRA by paying rent to a spouse routinely results in disallowance and scrutiny penalties."
        }
      },
      {
        "@type": "Question",
        "name": "When is it mandatory to submit the landlord's PAN to my employer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Central Board of Direct Taxes (CBDT) circulars, if your aggregate annual house rent payments exceed ₹1,00,000 (which equals just ₹8,333 per month), it is mandatory to report your landlord's Permanent Account Number (PAN) to your employer's payroll department. If the landlord lacks a PAN, they must execute Form 60 declaring absence of taxable income."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities qualify as 'Metro' for the 50% HRA calculation cap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the purpose of Rule 2A under the Income Tax Rules, only four municipal cities qualify for the 50% basic salary cap: Delhi, Mumbai, Kolkata, and Chennai. All other urban centers in India—including major technology hubs like Bengaluru, Hyderabad, Pune, Gurugram, and Noida—are classified as 'Non-Metro' and are restricted to a 40% basic salary ceiling."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim both HRA exemption and Home Loan tax deductions simultaneously?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can simultaneously claim HRA exemption under Section 10(13A) and home loan tax deductions (Section 24b for interest up to ₹2 Lakhs and Section 80C for principal up to ₹1.5 Lakhs) if your owned property and rented residence are in different cities due to employment, or if your purchased house is under construction, or if your owned property is situated too far from your workplace to permit daily commuting."
        }
      },
      {
        "@type": "Question",
        "name": "Is HRA tax exemption available under the New Tax Regime (Section 115BAC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Under the concessional New Tax Regime introduced under Section 115BAC, virtually all exemptions and allowances under Section 10—including House Rent Allowance (Section 10(13A))—are completely disallowed. If house rent forms a substantial portion of your annual tax-saving strategy, you must evaluate whether the Old Tax Regime remains mathematically superior."
        }
      },
      {
        "@type": "Question",
        "name": "What is Section 80GG, and who can claim it instead of HRA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Section 80GG is a special tax deduction available to individuals who pay house rent but do not receive HRA as part of their salary structure (such as self-employed professionals, freelancers, or employees in non-HRA corporate setups). The deduction is capped at the least of: ₹5,000 per month (₹60,000/year), 25% of total income, or actual rent paid minus 10% of total income."
        }
      },
      {
        "@type": "Question",
        "name": "Must I deduct TDS under Section 194-IB if my monthly rent is high?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under Section 194-IB of the Income Tax Act, individual tenants paying monthly rent exceeding ₹50,000 are legally required to deduct Tax Deducted at Source (TDS) at the rate of 5% (or 2% depending on specific statutory amendments) from the rent paid to the landlord. This tax must be remitted using Challan-cum-Statement Form 26QC."
        }
      },
      {
        "@type": "Question",
        "name": "How does a mid-year salary hike or rent increase affect HRA calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rule 2A mandates that HRA exemption cannot be calculated on an annual average basis if any underlying variable (basic salary, rent paid, or residential city) changes mid-year. In such instances, the financial year must be bifurcated into distinct chronological periods, calculating Rule 2A independently for each period and summing the results for annual tax filing."
        }
      }
    ]
  };

  return (
    <div className="space-y-12 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1: EXECUTIVE OVERVIEW & FOUNDATIONAL LEGAL FRAMEWORK */}
      <section>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          HRA Calculator: Calculate House Rent Allowance Exemption, Taxable Salary &amp; Metro Limits
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          For millions of corporate professionals, software engineers, and public-sector employees residing in India&apos;s urban commercial centers, residential house rent represents the single largest nondiscretionary monthly outflow. Acknowledging this substantial living cost burden, the Indian tax code incorporates a powerful fiscal relief mechanism known as the <strong>House Rent Allowance (HRA) exemption</strong>, codified under Section 10(13A) of the Income Tax Act, 1961, and governed by Rule 2A of the Income Tax Rules, 1962.
        </p>
        <p className="mb-5">
          Despite its ubiquitous presence across corporate payslips, HRA remains one of the most widely misunderstood compensation components in India. A widespread misconception among salaried workers is that submitting rental receipts matching their annual HRA allowance automatically converts the entire sum into tax-free cash. Conversely, other taxpayers assume that because HRA is labeled an &quot;allowance,&quot; it is entirely exempt from income tax by default. Neither assumption is legally accurate. The Income Tax Department enforces a rigorous, multi-variable mathematical threshold that determines exactly what portion of your allowance is tax-exempt and what portion is classified as taxable salary income.
        </p>
        <p className="mb-5">
          Under statutory provisions, HRA tax relief is calculated on a comparative basis using three statutory conditions: the actual HRA received, a location-dependent salary ceiling (50% of basic salary for designated Metros, 40% for Non-Metros), and the excess of rent paid over 10% of basic salary. The lowest of these three figures becomes your <strong>Exempt HRA</strong>, while any residual allowance is taxed at your regular marginal income tax slab rate.
        </p>
        <p className="mb-5">
          Our forensic <strong>HRA Calculator</strong> is engineered to eliminate computational uncertainty from your compensation planning. By inputting your annual Basic Salary, Dearness Allowance (if applicable), actual annual rent paid, total HRA disbursed by your employer, and residential city tier, this tool executes the complete Rule 2A algorithmic audit. Whether you are structuring a new employment contract, negotiating annual lease renewals, evaluating rent-to-parent strategies, or deciding whether to stay in the Old Tax Regime or migrate to the New Tax Regime (Section 115BAC), this calculator provides instantaneous, audit-ready precision.
        </p>

        {/* Informational Callout Card */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-600 p-6 rounded-r-2xl my-8">
          <h3 className="text-lg font-bold text-amber-950 mb-2">The Critical Definition of &quot;Salary&quot; for HRA Rule 2A</h3>
          <p className="text-amber-900 text-sm leading-relaxed">
            In HRA computations, &quot;Salary&quot; does NOT mean your total Cost to Company (CTC) or gross payslip earnings. Under Rule 2A, salary is strictly restricted to <strong>Basic Salary + Dearness Allowance (DA if forming part of retirement benefits) + Commission based on a fixed percentage of turnover</strong>. All other compensation components—such as Special Allowance, Performance Bonus, LTA, and employer PF contributions—are legally excluded from the basic wage denominator. To see how your basic wage interacts with your net cash flow, audit your monthly payslip with our <a href="/calculator/finance/take-home-salary" className="text-amber-800 font-semibold underline hover:text-amber-950">Take-Home Salary Calculator</a> and review annual salary structures with our <a href="/calculator/finance/salary" className="text-amber-800 font-semibold underline hover:text-amber-950">Salary Calculator</a>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          The New Tax Regime Dilemma: Is HRA Exemption Truly Lost?
        </h2>
        <p className="mb-4">
          With the enactment of Section 115BAC and subsequent budget reforms establishing the New Tax Regime as the default tax system in India, the strategic importance of HRA has surged dramatically. Under the New Tax Regime, taxpayers receive lower nominal slab rates and an enhanced standard deduction, but are legally barred from claiming any exemptions under Section 10—including Section 10(13A) House Rent Allowance.
        </p>
        <p className="mb-4">
          Consequently, for employees paying substantial urban rent (e.g., ₹25,000 to ₹60,000 per month in high-cost commercial centers), the HRA exemption is often the decisive mathematical factor that makes the Old Tax Regime vastly superior to the New Tax Regime. Before electing your tax regime with HR at the beginning of the fiscal year, you must compute your exact HRA exemption and compare your aggregate deductions against the revised tax slabs.
        </p>
      </section>

      {/* SECTION 2: STEP-BY-STEP PRACTICAL GUIDE & MATHEMATICAL METHODOLOGY */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Step-by-Step Practical Guide &amp; Mathematical Computational Framework
        </h2>
        <p className="mb-6">
          The statutory mechanics governing House Rent Allowance exemptions under Section 10(13A) and Rule 2A are strictly defined. The assessing software executed by the Income Tax Department and your employer&apos;s payroll processor calculates three independent values. The <strong>least (minimum)</strong> of these three numbers is declared tax-free:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">1. The Three Statutory Conditions of Rule 2A</h3>
        <div className="space-y-4 my-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wide mb-2">Condition 1</span>
            <h4 className="text-lg font-bold text-gray-900 mb-1">Actual HRA Received from Employer</h4>
            <p className="text-sm text-gray-600">
              The gross Rupee amount disbursed by your employer under the explicit salary head &quot;House Rent Allowance&quot; during the relevant tax year. You can never claim an exemption greater than what your employer has actually provided.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-bold uppercase tracking-wide mb-2">Condition 2</span>
            <h4 className="text-lg font-bold text-gray-900 mb-1">Location-Based Basic Salary Ceiling (50% or 40%)</h4>
            <p className="text-sm text-gray-600">
              If your rented accommodation is situated in one of the four designated Metropolitan cities (<strong>New Delhi, Mumbai, Kolkata, or Chennai</strong>), the ceiling is <strong>50% of your Basic Salary + DA</strong>. If your rented accommodation is located in any other city across India (including Bengaluru, Hyderabad, Pune, Ahmedabad, Gurugram, and Noida), the ceiling is strictly clamped at <strong>40% of Basic Salary + DA</strong>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-bold uppercase tracking-wide mb-2">Condition 3</span>
            <h4 className="text-lg font-bold text-gray-900 mb-1">Actual Rent Paid Minus 10% of Basic Salary</h4>
            <p className="text-sm text-gray-600">
              The tax code operates on the principle that every salaried citizen should comfortably allocate up to 10% of their core basic wages toward personal shelter. Therefore, the government only grants tax relief on the rent paid <em>in excess</em> of that 10% baseline: <strong>[Total Rent Paid] - [10% of (Basic Salary + DA)]</strong>.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 text-center my-6 shadow-sm">
          <div className="text-md md:text-xl font-mono font-bold text-indigo-700 tracking-wider">
            Exempt HRA = min(Condition 1, Condition 2, Condition 3)
          </div>
          <div className="text-sm font-mono text-gray-700 mt-2">
            Taxable HRA = Actual HRA Received - Exempt HRA
          </div>
          <p className="text-xs text-gray-500 mt-3 font-sans">
            The Taxable HRA portion is added directly to your gross salary income and taxed according to your applicable income tax slab rate.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. The Non-Averaging Rule: Why Period-Wise Calculations Are Mandatory</h3>
        <p className="mb-4">
          A critical mistake committed by novice taxpayers and generic web calculators is annual averaging. If any of the following events occur during the financial year, <strong>Rule 2A prohibits computing HRA on an aggregate 12-month average</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
          <li><strong>Mid-Year Salary Increment / Appraisal:</strong> If your Basic Salary increases in July or October, the 10% threshold and the 40%/50% caps shift instantly.</li>
          <li><strong>Rent Revisions or Lease Renewals:</strong> If your monthly rent increases from ₹25,000 to ₹30,000 midway through the year.</li>
          <li><strong>City Relocation:</strong> If you transfer from Pune (40% non-metro) to Mumbai (50% metro), the statutory percentage cap changes.</li>
          <li><strong>Change of Employment:</strong> Moving from one employer to another with different HRA structures.</li>
        </ul>
        <p className="text-sm text-gray-600">
          In all such scenarios, you must split the financial year into distinct chronological periods (e.g., Period 1: April to September; Period 2: October to March), calculate Rule 2A independently for each time block, and sum the individual exempt portions to determine your true annual exemption.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Section 80GG: Rent Deduction for Non-HRA Individuals</h3>
        <p className="mb-4">
          What happens if you pay substantial rent but your employer does not provide HRA, or you are an independent self-employed consultant or freelancer?
        </p>
        <p className="mb-4">
          Under Section 80GG of the Income Tax Act, non-HRA taxpayers can claim a specialized deduction for rent paid on furnished or unfurnished residential accommodation. The deduction is capped at the <strong>lowest</strong> of the following three parameters:
        </p>
        <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-xs md:text-sm space-y-2">
          <p>1. Fixed statutory limit: <strong>₹5,00,00 per month (₹60,000 per year)</strong></p>
          <p>2. <strong>25% of Total Adjusted Income</strong></p>
          <p>3. <strong>Actual Rent Paid minus 10% of Total Adjusted Income</strong></p>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Note: Section 80GG cannot be claimed if you, your spouse, or your minor child own residential accommodation at the place where you reside or perform the duties of your employment.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Payroll Verification Pipeline: Form 12BB, Form 16 &amp; Direct ITR Claims</h3>
        <p className="mb-4">
          To successfully convert theoretical HRA calculations into actual tax-free monthly payslip credits, employees must navigate the formal employer payroll verification cycle:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
          <li><strong>Form 12BB Declaration:</strong> At the inception of the fiscal year (April/May), you submit an initial estimate of your annual rent to HR payroll via Form 12BB to ensure accurate monthly TDS deductions.</li>
          <li><strong>Proof Submission Window (January – February):</strong> Employers require physical or digital proof verification before final payroll processing. You must upload signed rent receipts, a registered or notarized lease agreement, and the landlord&apos;s PAN (if annual rent exceeds ₹1,00,000).</li>
          <li><strong>Form 16 Reconciliation:</strong> Once verified, your employer reflects your tax-free allowance in Part B of Form 16 under the specific line item <em>&apos;Allowances to the extent exempt under Section 10&apos;</em>.</li>
          <li><strong>Direct ITR Claims (Missed Deadlines):</strong> If you forgot to submit rent receipts to your employer before the payroll freeze, do not panic! You retain the legal right to claim the HRA exemption directly while filing your annual Income Tax Return (ITR-1 or ITR-2) under &apos;Allowances Exempt u/s 10&apos;. Ensure you preserve digital bank statements and receipts to counter potential queries under Section 143(1).</li>
        </ul>
      </section>

      {/* SECTION 3: REAL-WORLD WORKED SCENARIOS & CASE STUDIES */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Real-World Worked Case Studies: Unlocking the Real Numbers
        </h2>
        <p className="mb-6">
          To illustrate how Rule 2A functions across varying geographic, compensation, and family scenarios, let us analyze four detailed real-world case studies:
        </p>

        {/* Case Study 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #1</span>
            <span className="text-sm font-semibold text-gray-500">Tech Hub Anomaly</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Bengaluru Tech Lead: High Metro Rents under a 40% Non-Metro Ceiling
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Karthik is a senior software engineer in Bengaluru earning an Annual Basic Salary of ₹15,00,000 and receiving an Annual HRA of ₹7,50,000 (₹62,500/month). He rents a 3BHK apartment in Indiranagar for ₹50,000 per month (₹6,00,000 annually).
          </p>

          <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200 text-sm space-y-2 mb-4">
            <h4 className="font-bold text-amber-950">Statutory Rule 2A Computation:</h4>
            <p>• <strong>Condition 1 (Actual HRA Received):</strong> ₹7,50,000</p>
            <p>• <strong>Condition 2 (40% of Basic for Non-Metro Bengaluru):</strong> 40% of ₹15,00,000 = <strong>₹6,00,000</strong></p>
            <p>• <strong>Condition 3 (Rent Paid - 10% of Basic):</strong> ₹6,00,000 - (10% of ₹15,00,000) = ₹6,00,000 - ₹1,50,000 = <strong>₹4,50,000</strong></p>
            <p className="font-bold text-amber-950 pt-2 border-t border-amber-300">
              Exempt HRA = min(₹7,50,000, ₹6,00,000, ₹4,50,000) = ₹4,50,000
            </p>
            <p className="text-xs text-amber-900">
              Taxable HRA = ₹7,50,000 - ₹4,50,000 = <strong>₹3,00,000</strong>. Karthik must pay income tax on this ₹3,00,000 at his marginal 31.2% slab rate (incurring ₹93,600 in tax). Despite paying ₹6 Lakhs in rent, the 10% basic salary subtraction clamped his exemption at ₹4.5 Lakhs.
            </p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #2</span>
            <span className="text-sm font-semibold text-gray-500">Corporate Relocation</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Mid-Year City Transfer &amp; Salary Appraisal: Pune to Mumbai
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Neha works for an FMCG conglomerate. From April to September (6 months), she was based in Pune paying ₹20,000/month rent with ₹50,000/month Basic and ₹25,000/month HRA. In October, she was promoted and transferred to the Mumbai headquarters, where her Basic rose to ₹75,000/month, HRA became ₹37,500/month, and rent escalated to ₹40,000/month.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs md:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                  <th className="py-2.5 px-3">Computation Parameter</th>
                  <th className="py-2.5 px-3">Period 1: Pune (6 Mos, Non-Metro)</th>
                  <th className="py-2.5 px-3">Period 2: Mumbai (6 Mos, Metro)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-mono">
                <tr>
                  <td className="py-2 px-3 font-sans">Basic Salary</td>
                  <td className="py-2 px-3">₹3,00,000 (6 × ₹50k)</td>
                  <td className="py-2 px-3">₹4,50,000 (6 × ₹75k)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">HRA Received</td>
                  <td className="py-2 px-3">₹1,50,000 (6 × ₹25k)</td>
                  <td className="py-2 px-3">₹2,25,000 (6 × ₹37.5k)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">Rent Paid</td>
                  <td className="py-2 px-3">₹1,20,000 (6 × ₹20k)</td>
                  <td className="py-2 px-3">₹2,40,000 (6 × ₹40k)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">Condition 1 (Actual HRA)</td>
                  <td className="py-2 px-3">₹1,50,000</td>
                  <td className="py-2 px-3">₹2,25,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">Condition 2 (40% vs 50%)</td>
                  <td className="py-2 px-3">40% of ₹3L = ₹1,20,000</td>
                  <td className="py-2 px-3">50% of ₹4.5L = ₹2,25,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">Condition 3 (Rent - 10% Basic)</td>
                  <td className="py-2 px-3">₹1.2L - ₹30k = ₹90,000</td>
                  <td className="py-2 px-3">₹2.4L - ₹45k = ₹1,95,000</td>
                </tr>
                <tr className="bg-emerald-50 font-bold">
                  <td className="py-2 px-3 font-sans text-emerald-950">Exempt HRA (Minimum)</td>
                  <td className="py-2 px-3 text-emerald-800">₹90,000</td>
                  <td className="py-2 px-3 text-emerald-800">₹1,95,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600">
            Total Annual Exempt HRA = ₹90,000 + ₹1,95,000 = <strong>₹2,85,000</strong>. Total Annual Taxable HRA = ₹3,75,000 - ₹2,85,000 = <strong>₹90,000</strong>. By calculating period-wise rather than blending figures, Neha accurately reflects her heightened metro rental costs.
          </p>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #3</span>
            <span className="text-sm font-semibold text-gray-500">Family Tax Planning</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Paying Rent to Parents: Complete Legal Compliance &amp; Tax Arbitrage
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Divya, a senior consultant in Gurugram earning ₹20 Lakhs per annum, resides in a property legally registered solely in her retired mother&apos;s name. Her mother has no independent taxable income. Divya executes a formal registered lease deed agreeing to pay rent of ₹35,000 per month (₹4,20,000 annually) via automated bank transfers.
          </p>
          <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200 text-sm space-y-2">
            <h4 className="font-bold text-emerald-950">Tax Optimization Results:</h4>
            <p className="text-emerald-900">1. <strong>Divya&apos;s HRA Exemption:</strong> Divya claims an HRA exemption of ₹3,40,000 under Section 10(13A). Being in the 30% tax bracket, this reduces her direct tax outflow by <strong>₹1,06,080</strong>.</p>
            <p className="text-emerald-900">2. <strong>Mother&apos;s Rental Income Declaration:</strong> The mother reports gross rental receipts of ₹4,20,000 in her ITR under &apos;Income from House Property&apos;.</p>
            <p className="text-emerald-900">3. <strong>Statutory Standard Deduction (Section 24a):</strong> The mother receives a mandatory 30% deduction on rental income (₹1,26,000) for maintenance, reducing her net taxable rental income to ₹2,94,000.</p>
            <p className="text-emerald-900">4. <strong>Mother&apos;s Net Tax Liability:</strong> Because ₹2,94,000 is well below the basic exemption limit (and eligible for rebate under Section 87A), the mother pays <strong>₹0 in income tax</strong>!</p>
            <p className="font-bold text-emerald-950 pt-2 border-t border-emerald-300">
              Net Family Tax Arbitrage: Divya&apos;s household saves ₹1,06,080 in cold hard cash annually with 100% legal compliance and complete documentation.
            </p>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #4</span>
            <span className="text-sm font-semibold text-gray-500">Dual Housing Claims</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Simultaneous HRA Exemption and Home Loan Tax Deductions
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Amit purchased a residential flat in Noida for ₹75 Lakhs using a bank home loan. However, his employer&apos;s office is situated in Cyber City, Gurugram. Due to the punishing 3-hour daily inter-city commute across state borders, Amit rents an apartment in Gurugram for ₹28,000/month while his Noida home is occupied by his elderly parents.
          </p>
          <div className="bg-purple-50/70 p-5 rounded-xl border border-purple-200 text-sm space-y-2">
            <p>• <strong>HRA Exemption Claim:</strong> Under Section 10(13A), Amit legally claims HRA exemption of ₹2,80,000 for the Gurugram rented flat, submitting valid lease agreements and rent receipts.</p>
            <p>• <strong>Home Loan Interest Deduction:</strong> Under Section 24(b), Amit claims the maximum ₹2,00,000 interest deduction against his Noida mortgage.</p>
            <p>• <strong>Home Loan Principal Repayment:</strong> Under Section 80C, Amit claims ₹1,50,000 for principal repayment alongside his EPF contributions.</p>
            <p className="font-bold text-purple-950 pt-2 border-t border-purple-300">
              Cumulative Tax Deduction: Amit reduces his gross taxable income by a staggering ₹6,30,000 (₹2.8L HRA + ₹2.0L Section 24b + ₹1.5L Section 80C), saving nearly ₹2,00,000 in income tax annually!
            </p>
            <p className="text-xs text-purple-800">
              Assessing Officer Note: When claiming dual benefits, ensure you preserve employer relocation orders or commute distance affidavits to justify why living in the owned property was practically unfeasible. Evaluate your overall debt capacity with our <a href="/calculator/finance/loan-affordability" className="text-blue-600 font-semibold underline hover:text-blue-800">Loan Affordability Calculator</a>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC PITFALLS, COMPLIANCE TRAPS & LANDLORD VERIFICATION */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Strategic Pitfalls, Compliance Traps &amp; Automated IT Department Scrutiny
        </h2>
        <p className="mb-6">
          The Income Tax Department has deployed sophisticated artificial intelligence systems and automated data integration via the Annual Information Statement (AIS) to cross-verify HRA claims. Understanding compliance mandates protects you from punitive reassessments:
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. The Mandatory Landlord PAN Threshold (₹1,00,000/Year)</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If your total rent paid exceeds ₹1,00,000 per financial year (merely ₹8,334 per month), CBDT Circular No. 08/2013 mandates that you report the landlord&apos;s PAN to your employer. The employer reports this PAN in Form 24Q quarterly returns.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              If your landlord refuses to provide their PAN, your employer cannot legally grant HRA exemption in your Form 16, resulting in maximum TDS deduction. While you can technically claim the exemption directly when filing your ITR, doing so without a valid PAN or Form 60 declaration almost guarantees an automated defective return notice under Section 139(9).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Mandatory 5% Tenant TDS Deduction (Section 194-IB)</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Many tenants renting luxury or executive apartments are unaware of their statutory tax withholding obligations. Under Section 194-IB, if an individual or HUF pays monthly rent exceeding <strong>₹50,000</strong> to a resident landlord, the tenant is legally mandated to deduct <strong>5% TDS</strong> from the rent paid in the final month of the tenancy (or financial year).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              This tax must be deposited using Challan-cum-Statement Form 26QC within 30 days, and the tenant must furnish Form 16C to the landlord. Failure to deduct or deposit this TDS attracts severe late fees (₹200/day under Section 234E) and 1.5% monthly penal interest!
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. The Rent-to-Spouse Legal Prohibition</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Attempting to pay rent to a husband or wife is one of the most frequently rejected tax dodges in India. In landmark rulings, tax benches have held that because marriage entails a mutual legal obligation to live together under Hindu, Christian, and Special Marriage Acts, a commercial landlord-tenant contract cannot exist between spouses. Conversely, paying rent to parents, adult children, or siblings is legally permissible because they maintain distinct financial entities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Disallowance of Maintenance, Utility &amp; Parking Surcharges</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Only pure accommodation rental payments qualify for HRA exemption. If your monthly lease charges ₹30,000 for rent plus ₹5,000 for society maintenance, electricity, club charges, and parking, the ₹5,000 component must be strictly excised from your Rule 2A computation. Clubbing utility fees into rental claims during an audit triggers immediate partial disallowance and interest penalties under Section 234B and 234C.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Flatmates and Shared Tenancy: Structuring Pro-Rata Claims</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              In high-cost urban centers like Bengaluru, Mumbai, and Gurugram, young professionals frequently co-lease luxury multi-bedroom apartments. For example, three colleagues collectively lease a 3BHK flat for ₹75,000 per month, each paying an equal share of ₹25,000.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              To claim HRA without friction, all three flatmates must ensure their individual names are explicitly listed as joint co-tenants on the registered lease deed. Furthermore, avoid the common trap of one flatmate paying the total ₹75,000 in a lump sum while collecting cash from the other two. Each individual tenant must transfer their specific ₹25,000 share directly from their personal bank account to the landlord, and obtain individualized monthly rent receipts reflecting their pro-rata contribution.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. AIS Surveillance &amp; Automated Cross-Matching of Rental Income</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The Directorate of Income Tax (Systems) now utilizes the Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) to automatically cross-match tenant HRA claims against the landlord&apos;s Permanent Account Number.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              When an employee enters their landlord&apos;s PAN in Form 12BB, the gross rental figure is automatically populated in the landlord&apos;s digital AIS tax ledger. If the landlord fails to report this exact rental revenue under &apos;Income from House Property&apos; in their annual ITR, an automated compliance notice is issued. Never submit synthetic or inflated rent receipts: digital bank statements (UPI, NEFT, IMPS) are now the primary forensic evidentiary standard required during tax scrutiny.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: HOUSING TAX RELIEF COMPARISON MATRIX */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Tax Relief Comparison: HRA vs. Section 80GG vs. Section 24(b) vs. Section 80EEA
        </h2>
        <p className="mb-6">
          To optimize your housing-related tax deductions, evaluate how HRA compares against alternative residential property tax provisions in India:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4">Statutory Section</th>
                <th className="py-3 px-4">Target Beneficiary</th>
                <th className="py-3 px-4">Maximum Tax Benefit</th>
                <th className="py-3 px-4">Eligible City Tiers</th>
                <th className="py-3 px-4">Ownership Restrictions</th>
                <th className="py-3 px-4">Available in New Regime?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">Section 10(13A) (HRA)</td>
                <td className="py-3 px-4">Salaried employees receiving HRA</td>
                <td className="py-3 px-4 text-emerald-700 font-bold">No upper limit (Formula-based)</td>
                <td className="py-3 px-4">Metro (50%) &amp; Non-Metro (40%)</td>
                <td className="py-3 px-4">Cannot own rented property</td>
                <td className="py-3 px-4 text-red-600 font-semibold">No (Old Regime only)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">Section 80GG</td>
                <td className="py-3 px-4">Self-employed &amp; Non-HRA staff</td>
                <td className="py-3 px-4">₹5,000/month (₹60,000/year cap)</td>
                <td className="py-3 px-4">All Indian cities</td>
                <td className="py-3 px-4">Cannot own home at workplace</td>
                <td className="py-3 px-4 text-red-600 font-semibold">No (Old Regime only)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">Section 24(b) (Interest)</td>
                <td className="py-3 px-4">Home loan borrowers</td>
                <td className="py-3 px-4 text-emerald-700 font-bold">₹2,00,000/year (Self-occupied)</td>
                <td className="py-3 px-4">Pan-India</td>
                <td className="py-3 px-4">Must own mortgaged asset</td>
                <td className="py-3 px-4 text-amber-600 font-semibold">Only for rented property</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">Section 80C (Principal)</td>
                <td className="py-3 px-4">Home loan borrowers</td>
                <td className="py-3 px-4">Up to ₹1,50,000/year</td>
                <td className="py-3 px-4">Pan-India</td>
                <td className="py-3 px-4">5-year lock-in on sale</td>
                <td className="py-3 px-4 text-red-600 font-semibold">No (Old Regime only)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">Section 80EEA</td>
                <td className="py-3 px-4">First-time affordable buyers</td>
                <td className="py-3 px-4">Up to ₹1,50,000 additional</td>
                <td className="py-3 px-4">Value &lt; ₹45 Lakhs</td>
                <td className="py-3 px-4">Must be first residential home</td>
                <td className="py-3 px-4 text-red-600 font-semibold">No (Old Regime only)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          To model your complete tax portfolio under Chapter VI-A, explore equity tax deductions with our <a href="/calculator/finance/elss" className="text-blue-600 font-semibold underline hover:text-blue-800">ELSS Calculator</a> and monitor statutory retirement contributions using our <a href="/calculator/finance/epf-interest" className="text-blue-600 font-semibold underline hover:text-blue-800">EPF Interest Calculator</a>.
        </p>
      </section>

      {/* SECTION 6: COMPREHENSIVE FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>Can I claim HRA tax exemption if I live in my own house?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              No. Under Section 10(13A) of the Income Tax Act, HRA tax exemption is strictly contingent upon actual expenditure incurred on rent for residential accommodation. If you occupy a home that you own (either individually or jointly), you cannot claim HRA exemption. The entire HRA component received from your employer will be classified as taxable salary income.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>Can I legally pay rent to my parents and claim HRA exemption?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Yes, you can legally pay rent to your parents and claim HRA exemption, provided your parents are the legal registered owners of the residential property. You must execute a formal registered rental agreement, transfer rent via traceable banking channels (NEFT, UPI, cheque), and collect monthly rent receipts. Your parents must declare this rental income in their annual Income Tax Return (ITR) under 'Income from House Property'.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>Can I pay rent to my spouse and claim HRA tax benefits?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              No. The relationship between a husband and wife is not considered a commercial landlord-tenant contract under Indian jurisprudence. Multiple income tax appellate tribunals (ITAT) have held that spouses are legally obligated to cohabit together, and paying rent to a spouse lacks commercial reality. Attempting to claim HRA by paying rent to a spouse routinely results in disallowance and scrutiny penalties.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>When is it mandatory to submit the landlord's PAN to my employer?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Under Central Board of Direct Taxes (CBDT) circulars, if your aggregate annual house rent payments exceed ₹1,00,000 (which equals just ₹8,333 per month), it is mandatory to report your landlord's Permanent Account Number (PAN) to your employer's payroll department. If the landlord lacks a PAN, they must execute Form 60 declaring absence of taxable income.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>Which cities qualify as 'Metro' for the 50% HRA calculation cap?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              For the purpose of Rule 2A under the Income Tax Rules, only four municipal cities qualify for the 50% basic salary cap: Delhi, Mumbai, Kolkata, and Chennai. All other urban centers in India—including major technology hubs like Bengaluru, Hyderabad, Pune, Gurugram, and Noida—are classified as 'Non-Metro' and are restricted to a 40% basic salary ceiling.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>Can I claim both HRA exemption and Home Loan tax deductions simultaneously?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Yes. You can simultaneously claim HRA exemption under Section 10(13A) and home loan tax deductions (Section 24b for interest up to ₹2 Lakhs and Section 80C for principal up to ₹1.5 Lakhs) if your owned property and rented residence are in different cities due to employment, or if your purchased house is under construction, or if your owned property is situated too far from your workplace to permit daily commuting.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>Is HRA tax exemption available under the New Tax Regime (Section 115BAC)?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              No. Under the concessional New Tax Regime introduced under Section 115BAC, virtually all exemptions and allowances under Section 10—including House Rent Allowance (Section 10(13A))—are completely disallowed. If house rent forms a substantial portion of your annual tax-saving strategy, you must evaluate whether the Old Tax Regime remains mathematically superior.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>What is Section 80GG, and who can claim it instead of HRA?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Section 80GG is a special tax deduction available to individuals who pay house rent but do not receive HRA as part of their salary structure (such as self-employed professionals, freelancers, or employees in non-HRA corporate setups). The deduction is capped at the least of: ₹5,000 per month (₹60,000/year), 25% of total income, or actual rent paid minus 10% of total income.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>Must I deduct TDS under Section 194-IB if my monthly rent is high?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Yes. Under Section 194-IB of the Income Tax Act, individual tenants paying monthly rent exceeding ₹50,000 are legally required to deduct Tax Deducted at Source (TDS) at the rate of 5% (or 2% depending on specific statutory amendments) from the rent paid to the landlord. This tax must be remitted using Challan-cum-Statement Form 26QC.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-indigo-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-indigo-50/50 rounded-xl">
              <span>How does a mid-year salary hike or rent increase affect HRA calculation?</span>
              <span className="text-indigo-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Rule 2A mandates that HRA exemption cannot be calculated on an annual average basis if any underlying variable (basic salary, rent paid, or residential city) changes mid-year. In such instances, the financial year must be bifurcated into distinct chronological periods, calculating Rule 2A independently for each period and summing the results for annual tax filing.
            </div>
          </details>
        </div>
      </section>

    </div>
  );
}
