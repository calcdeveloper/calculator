export const calculateLogic = (inputs) => {
    const P = inputs.monthlyDeposit;
    const annualRate = inputs.interestRate;
    const years = inputs.tenure;
  
    const r = annualRate / 100;
    const n = 4; // Quarterly compounding
    const totalMonths = years * 12;
  
    let totalInvestment = P * totalMonths;
    let maturityAmount = 0;
  
    // Calculate Maturity: Each monthly deposit earns interest for its remaining time
    for (let i = 1; i <= totalMonths; i++) {
      const timeInYears = (totalMonths - i + 1) / 12;
      maturityAmount += P * Math.pow(1 + (r / n), n * timeInYears);
    }
  
    const totalInterest = maturityAmount - totalInvestment;
  
    // Generate Year-by-Year Schedule for the PDF & Online Table
    let schedule = [];
    
    for (let year = 1; year <= years; year++) {
      let monthsInYear = year * 12;
      let currentMaturity = 0;
      let cumulativeInvestment = P * monthsInYear;
  
      // Calculate maturity exactly at the end of this specific year
      for (let i = 1; i <= monthsInYear; i++) {
        const timeInYears = (monthsInYear - i + 1) / 12;
        currentMaturity += P * Math.pow(1 + (r / n), n * timeInYears);
      }
  
      let cumulativeInterest = currentMaturity - cumulativeInvestment;
  
      schedule.push({
        month: `Year ${year}`, 
        principal: Math.round(cumulativeInvestment),
        interest: Math.round(cumulativeInterest),
        balance: Math.round(currentMaturity)
      });
    }
  
    return {
      summary: [
        { label: 'Total Investment', value: Math.round(totalInvestment), isCurrency: true },
        { label: 'Total Interest Earned', value: Math.round(totalInterest), isCurrency: true },
        { label: 'Maturity Value', value: Math.round(maturityAmount), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Total Investment', value: Math.round(totalInvestment) },
        { name: 'Total Interest', value: Math.round(totalInterest) }
      ],
      schedule: schedule 
    };
  };