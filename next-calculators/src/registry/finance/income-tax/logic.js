export const calculateLogic = (inputs) => {
  const grossSalary = inputs.grossSalary || 0;
  const otherIncome = inputs.otherIncome || 0;
  const standardDeduction = 75000; 

  let totalIncome = grossSalary + otherIncome;
  let taxableIncome = totalIncome - standardDeduction;
  if (taxableIncome < 0) taxableIncome = 0;

  let tax = 0;
  if (taxableIncome > 1500000) {
    tax += (taxableIncome - 1500000) * 0.30;
    tax += 300000 * 0.20; // 12-15L
    tax += 200000 * 0.15; // 10-12L
    tax += 300000 * 0.10; // 7-10L
    tax += 400000 * 0.05; // 3-7L
  } else if (taxableIncome > 1200000) {
    tax += (taxableIncome - 1200000) * 0.20;
    tax += 200000 * 0.15;
    tax += 300000 * 0.10;
    tax += 400000 * 0.05;
  } else if (taxableIncome > 1000000) {
    tax += (taxableIncome - 1000000) * 0.15;
    tax += 300000 * 0.10;
    tax += 400000 * 0.05;
  } else if (taxableIncome > 700000) {
    tax += (taxableIncome - 700000) * 0.10;
    tax += 400000 * 0.05;
  } else if (taxableIncome > 300000) {
    tax += (taxableIncome - 300000) * 0.05;
  }

  // Section 87A Rebate: if taxable income <= 7,00,000, no tax
  if (taxableIncome <= 700000) {
    tax = 0;
  }
  
  // Marginal relief
  if (taxableIncome > 700000) {
    const incomeExceeding7L = taxableIncome - 700000;
    if (tax > incomeExceeding7L) {
      tax = incomeExceeding7L;
    }
  }

  let cess = tax * 0.04;
  let totalTaxPayable = Math.round(tax + cess);

  return {
    summary: [
      { label: 'Gross Total Income', value: totalIncome, isCurrency: true },
      { label: 'Standard Deduction', value: standardDeduction, isCurrency: true },
      { label: 'Net Taxable Income', value: taxableIncome, isCurrency: true },
      { label: 'Total Tax Payable', value: totalTaxPayable, isCurrency: true, isHighlight: true }
    ],
    chartData: [
      { name: 'In-Hand Income', value: Math.max(0, totalIncome - totalTaxPayable) },
      { name: 'Tax Payable', value: totalTaxPayable }
    ]
  };
};
