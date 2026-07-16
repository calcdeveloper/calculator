export const calculateLogic = (inputs) => {
  const ctc = inputs.ctc || 0;
  const basicPercent = inputs.basicPercent || 50;
  const employerPfPercent = inputs.employerPfPercent || 0;
  const employeePfPercent = inputs.employeePfPercent || 0;
  const professionalTaxMonthly = inputs.professionalTax || 0;

  // Annual Calculations
  const basic = ctc * (basicPercent / 100);
  const employerPf = basic * (employerPfPercent / 100);
  
  // Gross Salary is CTC minus Employer contributions (like Employer PF)
  const grossSalary = ctc - employerPf;
  const allowances = grossSalary - basic; // Remaining part of gross salary is allowances (HRA, Special, etc.)

  // Deductions
  const employeePf = basic * (employeePfPercent / 100);
  const professionalTaxAnnual = professionalTaxMonthly * 12;
  const totalDeductions = employeePf + professionalTaxAnnual;

  // Net Salary
  const netTakeHome = grossSalary - totalDeductions;

  // Monthly Calculations
  const monthlyGross = Math.round(grossSalary / 12);
  const monthlyTakeHome = Math.round(netTakeHome / 12);
  const monthlyDeductions = Math.round(totalDeductions / 12);

  return {
    summary: [
      { label: 'Monthly Gross Salary', value: monthlyGross, isCurrency: true },
      { label: 'Monthly Deductions', value: monthlyDeductions, isCurrency: true },
      { label: 'Annual Take Home', value: Math.round(netTakeHome), isCurrency: true },
      { label: 'Monthly Take Home', value: monthlyTakeHome, isCurrency: true, isHighlight: true }
    ],
    chartData: [
      { name: 'Basic Salary', value: Math.round(basic) },
      { name: 'Allowances', value: Math.round(allowances) },
      { name: 'Deductions (EPF + PT)', value: Math.round(totalDeductions) }
    ]
  };
};
