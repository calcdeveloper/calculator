export const calculateLogic = (inputs) => {
  const principal = inputs.principal || 0;
  const tenure = inputs.tenure || 0;
  const interestRate = inputs.interestRate || 0;
  const processingFeePercent = inputs.processingFee || 0;

  if (principal <= 0 || tenure <= 0 || interestRate <= 0) {
    return {
      summary: [
        { label: 'Monthly EMI', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Extra Cost', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Payable', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  const monthlyRate = interestRate / 12 / 100;
  const emi = principal * monthlyRate * (Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalInterest = (emi * tenure) - principal;

  // Credit cards in India charge 18% GST on the Interest component every month
  const gstOnInterest = totalInterest * 0.18;

  // Processing fee is usually charged upfront in the first month
  const processingFee = principal * (processingFeePercent / 100);
  const gstOnProcessingFee = processingFee * 0.18;

  const totalExtraCost = totalInterest + gstOnInterest + processingFee + gstOnProcessingFee;
  const totalPayable = principal + totalExtraCost;

  return {
    summary: [
      { label: 'Monthly EMI (Base)', value: Math.round(emi), isCurrency: true, isHighlight: true },
      { label: 'Total Extra Cost (Fees+GST)', value: Math.round(totalExtraCost), isCurrency: true, isHighlight: true },
      { label: 'Total Amount Payable', value: Math.round(totalPayable), isCurrency: true },
      { label: 'Effective Interest Rate', value: `${((totalExtraCost / principal) * 100 * (12 / tenure)).toFixed(2)}%` }
    ],
    chartData: [
      { name: 'Principal', value: principal },
      { name: 'Total Interest', value: Math.round(totalInterest) },
      { name: 'GST (18%)', value: Math.round(gstOnInterest + gstOnProcessingFee) },
      { name: 'Processing Fee', value: Math.round(processingFee) }
    ],
    breakup: [
      { label: 'Principal Amount', value: principal },
      { label: 'Bank Interest', value: Math.round(totalInterest) },
      { label: '18% GST on Interest', value: Math.round(gstOnInterest) },
      { label: 'Processing Fee', value: Math.round(processingFee) },
      { label: '18% GST on Processing Fee', value: Math.round(gstOnProcessingFee) },
      { label: 'Total Extra Cost to you', value: Math.round(totalExtraCost), isTotal: true },
      { label: 'Total Amount Payable', value: Math.round(totalPayable), isTotal: true }
    ]
  };
};
