export const calculateLogic = (inputs) => {
    const P = inputs.principal;
    const R = inputs.rate;
    const T = inputs.time;
  
    // Simple Interest Formula: (P * R * T) / 100
    const totalInterest = (P * R * T) / 100;
    const totalAmount = P + totalInterest;
  
    // Generate Year-by-Year Schedule for the PDF & Online Table
    let schedule = [];
    const interestPerYear = (P * R * 1) / 100;
    
    for (let year = 1; year <= T; year++) {
      let cumulativeInterest = interestPerYear * year;
      let currentBalance = P + cumulativeInterest;
  
      schedule.push({
        month: `Year ${year}`, 
        principal: Math.round(P),
        interest: Math.round(cumulativeInterest),
        balance: Math.round(currentBalance)
      });
    }
  
    return {
      summary: [
        { label: 'Principal Amount', value: Math.round(P), isCurrency: true },
        { label: 'Total Interest', value: Math.round(totalInterest), isCurrency: true },
        { label: 'Total Amount', value: Math.round(totalAmount), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Principal Amount', value: Math.round(P) },
        { name: 'Total Interest', value: Math.round(totalInterest) }
      ],
      schedule: schedule 
    };
  };