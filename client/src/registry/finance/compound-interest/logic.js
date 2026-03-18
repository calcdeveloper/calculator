export const calculateLogic = (inputs) => {
    const P = inputs.principal;
    const R = inputs.rate / 100; // Decimal form
    const T = inputs.time;
    const N = Number(inputs.frequency); // Times compounded per year
  
    // Final Compound Interest Formula: A = P(1 + r/n)^(nt)
    const finalAmount = P * Math.pow(1 + (R / N), N * T);
    const totalInterest = finalAmount - P;
  
    // Generate Year-by-Year Schedule for the Table/PDF
    let schedule = [];
    
    for (let year = 1; year <= T; year++) {
      // Calculate the balance at the end of each specific year
      let currentBalance = P * Math.pow(1 + (R / N), N * year);
      let cumulativeInterest = currentBalance - P;
  
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
        { label: 'Total Interest Earned', value: Math.round(totalInterest), isCurrency: true },
        { label: 'Total Maturity Amount', value: Math.round(finalAmount), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Principal Amount', value: Math.round(P) },
        { name: 'Compound Interest', value: Math.round(totalInterest) }
      ],
      schedule: schedule 
    };
  };