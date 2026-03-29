export const calculateLogic = (inputs) => {
    const { calcMode, totalUnits, previousReading, currentReading, costPerUnit, fixedCharges } = inputs;
    
    const cost = Number(costPerUnit);
    const fixed = Number(fixedCharges) || 0; // Default to 0 if left blank
  
    let units = 0;
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(cost) || cost < 0) {
        throw new Error("Please enter a valid cost per unit.");
      }
  
      if (calcMode === 'readings') {
        const prev = Number(previousReading);
        const curr = Number(currentReading);
  
        if (isNaN(prev) || isNaN(curr) || prev < 0 || curr < 0) {
          throw new Error("Please enter valid positive meter readings.");
        }
        if (curr < prev) {
          throw new Error("Current reading cannot be less than the previous reading.");
        }
        units = curr - prev;
      } else {
        units = Number(totalUnits);
        if (isNaN(units) || units < 0) {
          throw new Error("Please enter valid positive units consumed.");
        }
      }
  
      // Mathematical Calculation
      const energyCharge = units * cost;
      const finalBill = energyCharge + fixed;
  
      summary = [
        { label: 'Total Estimated Bill', value: `₹${finalBill.toFixed(2)}`, isHighlight: true },
        { label: 'Total Units Consumed', value: `${units} kWh` }
      ];
  
      rows = [
        ["Units Consumed", `${units} kWh`],
        ["Cost per Unit", `₹${cost.toFixed(2)}`],
        ["Energy Charges (Units × Cost)", `₹${energyCharge.toFixed(2)}`],
        ["Fixed Charges / Duty", `₹${fixed.toFixed(2)}`],
        ["Total Bill Payable", `₹${finalBill.toFixed(2)}`]
      ];
  
      return { summary, referenceTable: { headers: ["Bill Breakdown", "Amount"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };