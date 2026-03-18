export const calculateLogic = (inputs) => {
    const P = inputs.investmentAmount;
    const annualRate = inputs.expectedReturn;
    const years = inputs.timePeriod;
  
    const r = annualRate / 100;
  
    // Lumpsum Compounding Formula
    const expectedValue = P * Math.pow(1 + r, years);
    const totalWealthGained = expectedValue - P;
  
    // Generate Year-by-Year Schedule for the PDF & Online Table
    let schedule = [];
    
    for (let year = 1; year <= years; year++) {
      let yearEndValue = P * Math.pow(1 + r, year);
      let wealthGainedSoFar = yearEndValue - P;
  
      schedule.push({
        month: `Year ${year}`, // Reusing the 'month' column header dynamically
        principal: Math.round(P), // Principal remains the exact same every year
        interest: Math.round(wealthGainedSoFar), // Cumulative wealth gained
        balance: Math.round(yearEndValue) // Total corpus
      });
    }
  
    return {
      summary: [
        { label: 'Total Investment', value: P, isCurrency: true },
        { label: 'Total Wealth Gained', value: Math.round(totalWealthGained), isCurrency: true },
        { label: 'Expected Final Value', value: Math.round(expectedValue), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Total Investment', value: P },
        { name: 'Wealth Gained', value: Math.round(totalWealthGained) }
      ],
      schedule: schedule 
    };
  };