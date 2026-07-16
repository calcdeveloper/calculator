export const calculateLogic = (inputs) => {
  const basic = inputs.basic || 0;
  const hra = inputs.hra || 0;
  const specialAllowance = inputs.specialAllowance || 0;
  const otherAllowances = inputs.otherAllowances || 0;
  
  const epf = inputs.epf || 0;
  const professionalTax = inputs.professionalTax || 0;
  const tds = inputs.tds || 0;

  // Earnings
  const totalEarnings = basic + hra + specialAllowance + otherAllowances;
  
  // Deductions
  const totalDeductions = epf + professionalTax + tds;

  // Net Take Home
  const netTakeHome = totalEarnings - totalDeductions;

  return {
    summary: [
      { label: 'Total Gross Earnings', value: totalEarnings, isCurrency: true },
      { label: 'Total Deductions', value: totalDeductions, isCurrency: true },
      { label: 'Net Take Home Salary', value: netTakeHome, isCurrency: true, isHighlight: true }
    ],
    chartData: [
      { name: 'Basic Pay', value: basic },
      { name: 'HRA & Allowances', value: hra + specialAllowance + otherAllowances },
      { name: 'Deductions (EPF, PT, TDS)', value: totalDeductions }
    ]
  };
};
