export const calculateLogic = (inputs) => {
    const P = inputs.yearlyInvestment;
    const annualRate = inputs.interestRate;
    const years = inputs.tenure;
  
    const r = annualRate / 100;
  
    let totalInvestment = 0;
    let cumulativeInterest = 0;
    let balance = 0;
    
    // Generate Year-by-Year Schedule for the PDF & Online Table
    let schedule = [];
    
    for (let year = 1; year <= years; year++) {
      totalInvestment += P;
      
      // Interest is calculated on the existing balance + the new deposit made at the start of the year
      let interestForYear = (balance + P) * r;
      cumulativeInterest += interestForYear;
      
      balance = balance + P + interestForYear;
  
      schedule.push({
        month: `Year ${year}`, 
        principal: Math.round(totalInvestment),
        interest: Math.round(cumulativeInterest),
        balance: Math.round(balance)
      });
    }
  
    return {
      summary: [
        { label: 'Total Investment', value: Math.round(totalInvestment), isCurrency: true },
        { label: 'Total Interest', value: Math.round(cumulativeInterest), isCurrency: true },
        { label: 'Maturity Value', value: Math.round(balance), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Total Investment', value: Math.round(totalInvestment) },
        { name: 'Total Interest', value: Math.round(cumulativeInterest) }
      ],
      schedule: schedule 
    };
  };