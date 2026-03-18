export const calculateLogic = (inputs) => {
    const amount = inputs.amount;
    const rate = Number(inputs.gstRate);
    const type = inputs.calcType;
  
    let baseAmount = 0;
    let totalGst = 0;
    let finalAmount = 0;
  
    if (type === 'add') {
      baseAmount = amount;
      totalGst = amount * (rate / 100);
      finalAmount = amount + totalGst;
    } else {
      // Reverse calculating (removing) GST
      finalAmount = amount;
      baseAmount = amount * (100 / (100 + rate));
      totalGst = finalAmount - baseAmount;
    }
  
    // Split into Central and State GST
    const cgst = totalGst / 2;
    const sgst = totalGst / 2;
  
    return {
      summary: [
        { label: 'Net Base Amount', value: Math.round(baseAmount), isCurrency: true },
        { label: `Total GST (${rate}%)`, value: Math.round(totalGst), isCurrency: true },
        { label: 'CGST + SGST Split', value: `₹${Math.round(cgst)} + ₹${Math.round(sgst)}`, isCurrency: false },
        { label: type === 'add' ? 'Total Billed Amount' : 'Original Base Price', value: Math.round(finalAmount), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Base Amount', value: Math.round(baseAmount) },
        { name: 'CGST (Central)', value: Math.round(cgst) },
        { name: 'SGST (State)', value: Math.round(sgst) }
      ]
      // Note: We are deliberately omitting the 'schedule' array here because a year-by-year amortization table doesn't make sense for a one-time invoice tax. Your Master Engine safely ignores the table if this is missing!
    };
  };