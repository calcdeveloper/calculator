export const calculateLogic = (inputs) => {
    const P = inputs.loanAmount;
    const annualRate = inputs.interestRate;
    const years = inputs.loanTenure;
  
    const r = annualRate / 12 / 100;
    const n = years * 12;
  
    const emi = P * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;
  
    // Generate Month-by-Month Amortization Schedule
    let balance = P;
    let schedule = [];
    
    for (let month = 1; month <= n; month++) {
      let interestForMonth = balance * r;
      let principalForMonth = emi - interestForMonth;
      balance -= principalForMonth;
      
      // Prevent tiny negative floating point numbers
      if (balance < 0) balance = 0;
  
      schedule.push({
        month: month,
        principal: Math.round(principalForMonth),
        interest: Math.round(interestForMonth),
        balance: Math.round(balance)
      });
    }
  
    return {
      summary: [
        { label: 'Principal Amount', value: P, isCurrency: true },
        { label: 'Total Interest', value: Math.round(totalInterest), isCurrency: true },
        { label: 'Total Amount Payable', value: Math.round(totalAmount), isCurrency: true },
        { label: 'Monthly EMI', value: Math.round(emi), isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Principal Amount', value: P },
        { name: 'Total Interest', value: Math.round(totalInterest) }
      ],
      schedule: schedule // Passes the data to our dynamic table/PDF generator!
    };
  };