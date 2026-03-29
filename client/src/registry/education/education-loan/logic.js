export const calculateLogic = (inputs) => {
    const principal = Number(inputs.loanAmount) || 0;
    const annualRate = Number(inputs.interestRate) || 0;
    const years = Number(inputs.repaymentTenure) || 0;
    const moratoriumMonths = Number(inputs.moratoriumMonths) || 0;
  
    try {
      if (principal <= 0 || annualRate <= 0 || years <= 0) {
        throw new Error("Please enter valid loan details. Amount, rate, and tenure must be greater than 0.");
      }
  
      // Formatting helper
      const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  
      // 1. Moratorium calculations
      const moratoriumInterest = (principal * annualRate * (moratoriumMonths / 12)) / 100;
      const revisedPrincipal = principal + moratoriumInterest;
  
      // 2. EMI Calculation
      const monthlyRate = annualRate / 12 / 100;
      const totalRepaymentMonths = years * 12;
      const mathPower = Math.pow(1 + monthlyRate, totalRepaymentMonths);
      const emi = (revisedPrincipal * monthlyRate * mathPower) / (mathPower - 1);
  
      const totalRepaymentAmount = emi * totalRepaymentMonths;
      const totalInterestPaid = (totalRepaymentAmount - revisedPrincipal) + moratoriumInterest;
  
      // 3. GENERATE AMORTIZATION SCHEDULE
      let currentBalance = revisedPrincipal;
      let scheduleRows = [];
  
      // Add Moratorium Phase as Row 1
      if (moratoriumMonths > 0) {
        scheduleRows.push([
          "Study Phase (Moratorium)", 
          "₹0", 
          "₹0", 
          formatCurrency(moratoriumInterest), 
          formatCurrency(revisedPrincipal)
        ]);
      }
  
      // Calculate yearly breakdown
      for (let year = 1; year <= years; year++) {
        let yearlyInterest = 0;
        let yearlyPrincipal = 0;
  
        for (let month = 1; month <= 12; month++) {
          let interestForMonth = currentBalance * monthlyRate;
          let principalForMonth = emi - interestForMonth;
  
          yearlyInterest += interestForMonth;
          yearlyPrincipal += principalForMonth;
          currentBalance -= principalForMonth;
        }
  
        // Prevent negative balances due to tiny JS math rounding
        if (currentBalance < 0) currentBalance = 0;
  
        scheduleRows.push([
          `Year ${year}`,
          formatCurrency(emi * 12),
          formatCurrency(yearlyPrincipal),
          formatCurrency(yearlyInterest),
          formatCurrency(currentBalance)
        ]);
      }
  
      return {
        summary: [
          { label: 'Monthly EMI', value: formatCurrency(emi), isHighlight: true },
          { label: 'Total Payable', value: formatCurrency(totalRepaymentAmount + moratoriumInterest) }
        ],
        referenceTable: {
          headers: ["Timeline", "EMI Paid", "Principal Paid", "Interest Paid", "Remaining Balance"],
          rows: scheduleRows
        }
      };
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };