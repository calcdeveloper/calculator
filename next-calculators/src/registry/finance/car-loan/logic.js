export const calculateLogic = (inputs) => {
    const { carPrice, downPayment, rate, tenure } = inputs;
  
    // Ensure down payment isn't more than the car price
    const actualDownPayment = Math.min(carPrice, downPayment);
    const loanAmount = carPrice - actualDownPayment;
    
    const monthlyRate = (rate / 100) / 12;
    const totalMonths = tenure * 12;
  
    let emi = 0;
    let totalAmountPayable = 0;
    let totalInterest = 0;
  
    if (loanAmount > 0 && monthlyRate > 0) {
      // Standard EMI Formula
      emi = loanAmount * monthlyRate * (Math.pow(1 + monthlyRate, totalMonths) / (Math.pow(1 + monthlyRate, totalMonths) - 1));
      totalAmountPayable = emi * totalMonths;
      totalInterest = totalAmountPayable - loanAmount;
    } else if (loanAmount > 0) {
      // 0% Interest Edge Case
      emi = loanAmount / totalMonths;
      totalAmountPayable = loanAmount;
      totalInterest = 0;
    }
  
    const trueCostOfCar = carPrice + totalInterest;
  
    // Generate Year-by-Year Amortization Schedule
    let schedule = [];
    let balance = loanAmount;
  
    for (let year = 1; year <= tenure; year++) {
      let interestForYear = 0;
      let principalForYear = 0;
  
      for (let month = 1; month <= 12; month++) {
        if (balance <= 0) break;
        const interestPayment = balance * monthlyRate;
        const principalPayment = emi - interestPayment;
        
        interestForYear += interestPayment;
        principalForYear += principalPayment;
        balance -= principalPayment;
      }
  
      schedule.push({
        month: `Year ${year}`, 
        principal: Math.round(principalForYear),
        interest: Math.round(interestForYear),
        balance: Math.max(0, Math.round(balance))
      });
    }
  
    return {
      summary: [
        { label: 'Required Loan Amount', value: Math.round(loanAmount), isCurrency: true },
        { label: 'Total Interest Payable', value: Math.round(totalInterest), isCurrency: true },
        { label: 'True Cost of Car', value: Math.round(trueCostOfCar), isCurrency: true },
        { label: 'Monthly EMI', value: Math.round(emi), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Principal Loan Amount', value: Math.round(loanAmount) },
        { name: 'Total Interest', value: Math.round(totalInterest) }
      ],
      schedule: schedule 
    };
  };