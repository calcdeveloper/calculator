export const calculateLogic = (inputs) => {
    const P = inputs.investmentAmount;
    const annualRate = inputs.interestRate;
    const years = inputs.tenure;
  
    const r = annualRate / 100;
    
    // NEW: Read the exact frequency selected by the user!
    const n = inputs.compoundingFrequency; 
  
    // Core FD Formula
    const maturityAmount = P * Math.pow(1 + (r / n), n * years);
    const totalInterest = maturityAmount - P;
  
    // Generate Year-by-Year Schedule for the PDF & Online Table
    let schedule = [];
    
    for (let year = 1; year <= years; year++) {
      let yearEndAmount = P * Math.pow(1 + (r / n), n * year);
      let cumulativeInterest = yearEndAmount - P;
  
      schedule.push({
        month: `Year ${year}`, 
        principal: Math.round(P),
        interest: Math.round(cumulativeInterest),
        balance: Math.round(yearEndAmount)
      });
    }
  
    return {
      summary: [
        { label: 'Total Investment', value: P, isCurrency: true },
        { label: 'Total Interest Earned', value: Math.round(totalInterest), isCurrency: true },
        { label: 'Maturity Value', value: Math.round(maturityAmount), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Total Investment', value: P },
        { name: 'Total Interest', value: Math.round(totalInterest) }
      ],
      schedule: schedule 
    };
  };