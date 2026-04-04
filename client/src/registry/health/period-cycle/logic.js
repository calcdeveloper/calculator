export function calculateLogic(inputs) {
    const lastPeriodDateStr = inputs.last_period_date;
    const cycleLength = parseInt(inputs.cycle_length) || 28;
    const periodDuration = parseInt(inputs.period_duration) || 5;
  
    if (!lastPeriodDateStr || cycleLength < 20 || cycleLength > 45) {
      return { summary: [] };
    }
  
    // Helper function to add days to a date
    const addDays = (dateStr, days) => {
      const date = new Date(dateStr);
      date.setDate(date.getDate() + days);
      return date;
    };
  
    // Helper function to format date nicely (e.g., "15 Oct 2026")
    const formatDate = (dateObj) => {
      return dateObj.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    };
  
    // 1. Calculate Next Period Start Date
    const nextPeriodStart = addDays(lastPeriodDateStr, cycleLength);
    
    // 2. Calculate Next Period End Date
    const nextPeriodEnd = addDays(nextPeriodStart.toISOString(), periodDuration - 1);
  
    // 3. Calculate Ovulation Date (Standard medical formula: Next Period - 14 Days)
    const lutealPhaseLength = 14; 
    const ovulationDate = addDays(nextPeriodStart.toISOString(), -lutealPhaseLength);
  
    // 4. Calculate Fertile Window (5 days before ovulation + day of ovulation)
    const fertileStart = addDays(ovulationDate.toISOString(), -5);
    const fertileEnd = addDays(ovulationDate.toISOString(), 1);
  
    // 5. Calculate Future Cycle (Cycle 2) for advanced planning
    const cycle2Start = addDays(nextPeriodStart.toISOString(), cycleLength);
  
    return {
      summary: [
        {
          label: "Next Expected Period",
          value: `${formatDate(nextPeriodStart)} to ${formatDate(nextPeriodEnd)}`,
          isHighlight: true
        },
        {
          label: "Estimated Ovulation Date",
          value: formatDate(ovulationDate),
          isHighlight: false
        },
        {
          label: "High Fertility Window",
          value: `${formatDate(fertileStart)} to ${formatDate(fertileEnd)}`,
          isHighlight: true
        },
        {
          label: "Following Period (Cycle 2)",
          value: formatDate(cycle2Start),
          isHighlight: false
        }
      ]
    };
  }