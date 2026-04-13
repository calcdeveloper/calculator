export const calculateLogic = (inputs) => {
    const { currentAge, retirementAge, lifeExpectancy, monthlyExpenses, inflationRate, expectedReturn } = inputs;
  
    // 1. Time Horizons
    const yearsToRetire = Math.max(1, retirementAge - currentAge);
    const yearsInRetirement = Math.max(1, lifeExpectancy - retirementAge); // New!
  
    const inflationDecimal = inflationRate / 100;
    const returnDecimal = expectedReturn / 100;
  
    // 2. Future expenses at the start of retirement
    const futureMonthlyExpenses = monthlyExpenses * Math.pow(1 + inflationDecimal, yearsToRetire);
    const futureAnnualExpenses = futureMonthlyExpenses * 12;
  
    // 3. Real Rate of Return during retirement 
    // (Assuming their corpus still earns the expected return, but purchasing power is eaten by inflation)
    const realReturn = ((1 + returnDecimal) / (1 + inflationDecimal)) - 1;
  
    // 4. Target Corpus: Present Value of an Annuity Due
    // Calculates exactly how much is needed to withdraw the futureAnnualExpenses for 'yearsInRetirement'
    let targetCorpus = 0;
    if (realReturn > 0) {
      targetCorpus = futureAnnualExpenses * ((1 - Math.pow(1 + realReturn, -yearsInRetirement)) / realReturn) * (1 + realReturn);
    } else {
      // Failsafe if inflation matches or beats returns
      targetCorpus = futureAnnualExpenses * yearsInRetirement;
    }
  
    // 5. Monthly SIP Required to reach the target corpus by retirement age
    const monthlyRate = returnDecimal / 12;
    const totalMonths = yearsToRetire * 12;
    
    const monthlySipRequired = targetCorpus * (monthlyRate / (Math.pow(1 + monthlyRate, totalMonths) - 1));
    const totalInvestment = monthlySipRequired * totalMonths;
    const totalWealthGained = targetCorpus - totalInvestment;
  
    // Generate Year-by-Year Schedule (Accumulation Phase)
    let schedule = [];
    let currentBalance = 0;
    let cumulativeInvestment = 0;
  
    for (let year = 1; year <= yearsToRetire; year++) {
      for (let month = 1; month <= 12; month++) {
        currentBalance = (currentBalance + monthlySipRequired) * (1 + monthlyRate);
        cumulativeInvestment += monthlySipRequired;
      }
      
      schedule.push({
        month: `Age ${currentAge + year}`, 
        principal: Math.round(cumulativeInvestment),
        interest: Math.round(currentBalance - cumulativeInvestment),
        balance: Math.round(currentBalance)
      });
    }
  
    return {
      summary: [
        { label: `Monthly Expenses at Age ${retirementAge}`, value: Math.round(futureMonthlyExpenses), isCurrency: true },
        { label: `Corpus Needed for ${yearsInRetirement} Yrs`, value: Math.round(targetCorpus), isCurrency: true },
        { label: 'Required Monthly SIP', value: Math.round(monthlySipRequired), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Total Invested', value: Math.round(totalInvestment) },
        { name: 'Wealth Gained', value: Math.round(totalWealthGained) }
      ],
      schedule: schedule 
    };
  };