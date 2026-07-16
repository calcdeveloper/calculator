export const calculateLogic = (inputs) => {
  const cityType = inputs.cityType || 'metro';
  const basic = inputs.basic || 0;
  const hraReceived = inputs.hraReceived || 0;
  const rentPaid = inputs.rentPaid || 0;

  // Condition 1: Actual HRA Received
  const condition1 = hraReceived;

  // Condition 2: 50% or 40% of Basic Salary
  const percentage = cityType === 'metro' ? 0.50 : 0.40;
  const condition2 = basic * percentage;

  // Condition 3: Rent Paid minus 10% of Basic Salary
  let condition3 = rentPaid - (0.10 * basic);
  if (condition3 < 0) condition3 = 0; // Exemption can't be negative

  // Exempt HRA is the minimum of the three conditions
  let exemptHRA = Math.min(condition1, condition2, condition3);
  if (exemptHRA < 0) exemptHRA = 0;

  // Taxable HRA is the remainder
  let taxableHRA = hraReceived - exemptHRA;
  if (taxableHRA < 0) taxableHRA = 0;

  return {
    summary: [
      { label: 'Exempt HRA (Tax Free)', value: exemptHRA, isCurrency: true, isHighlight: true },
      { label: 'Taxable HRA', value: taxableHRA, isCurrency: true }
    ],
    chartData: [
      { name: 'Exempt HRA', value: exemptHRA },
      { name: 'Taxable HRA', value: taxableHRA }
    ],
    // Passing intermediate values for detailed breakdown in UI if needed (though CalculatorClient handles generic visualization)
    details: {
      condition1,
      condition2,
      condition3
    }
  };
};
