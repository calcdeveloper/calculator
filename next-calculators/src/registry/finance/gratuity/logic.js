export const calculateLogic = (inputs) => {
    const { basicSalary, da, years, months, isCovered } = inputs;
  
    const lastDrawnSalary = basicSalary + da;
    let calculatedTenure = 0;
    let gratuityAmount = 0;
  
    if (isCovered === 'yes') {
      // Covered: Tenure > 6 months is rounded up to the next full year
      calculatedTenure = months > 6 ? years + 1 : years;
      // Formula: (15 / 26) * Last Drawn Salary * Tenure
      gratuityAmount = (15 / 26) * lastDrawnSalary * calculatedTenure;
    } else {
      // Not Covered: Only fully completed years are considered (months are ignored)
      calculatedTenure = years;
      // Formula: (15 / 30) * Last Drawn Salary * Tenure
      gratuityAmount = (15 / 30) * lastDrawnSalary * calculatedTenure;
    }
  
    // Current Indian Tax Exemption Limit for Gratuity is ₹20 Lakhs
    const taxExemptLimit = 2000000;
    const taxFreeAmount = Math.min(gratuityAmount, taxExemptLimit);
    const taxableAmount = Math.max(0, gratuityAmount - taxExemptLimit);
  
    return {
      summary: [
        { label: 'Effective Tenure Counted', value: `${calculatedTenure} Years`, isCurrency: false },
        { label: 'Applicable Salary (Basic + DA)', value: Math.round(lastDrawnSalary), isCurrency: true },
        { label: 'Total Gratuity Payable', value: Math.round(gratuityAmount), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Tax-Free Gratuity', value: Math.round(taxFreeAmount) },
        { name: 'Taxable Gratuity (Above 20L)', value: Math.round(taxableAmount) }
      ]
      // Notice: We omitted the 'schedule' array because an amortization table makes no sense for a one-time lump sum payout!
    };
  };