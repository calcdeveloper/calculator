export const calculateLogic = (inputs) => {
    const { costPerKg, purchaseMode, targetValue } = inputs;
    
    const cost = Number(costPerKg);
    const target = Number(targetValue);
  
    let summary = [];
    let rows = [];
  
    try {
      if (isNaN(cost) || isNaN(target) || cost <= 0 || target <= 0) {
        throw new Error("Please enter valid positive numbers.");
      }
  
      if (purchaseMode === 'weight_g' || purchaseMode === 'weight_kg') {
        // ---------------------------------------------------------
        // LOGIC: "Purchase according to weight"
        // ---------------------------------------------------------
        let finalPrice = 0;
        let weightLabel = "";
  
        if (purchaseMode === 'weight_kg') {
          finalPrice = target * cost;
          weightLabel = `${target} kg`;
        } else {
          // weight_g
          finalPrice = (target / 1000) * cost;
          weightLabel = `${target} g`;
        }
  
        summary = [
          { label: `Total Cost for ${weightLabel}`, value: `₹${finalPrice.toFixed(2)}`, isHighlight: true }
        ];
  
        rows = [
          ["Cost of 1 kg", `₹${cost}`],
          ["Purchase Mode", "According to weight"],
          ["Entered Weight", weightLabel],
          ["Final Calculated Cost", `₹${finalPrice.toFixed(2)}`]
        ];
  
      } else if (purchaseMode === 'budget') {
        // ---------------------------------------------------------
        // LOGIC: "Purchase according to budget"
        // ---------------------------------------------------------
        const weightInKg = target / cost;
        const weightInGrams = weightInKg * 1000;
  
        summary = [
          { label: `For ₹${target}, you get`, value: `${weightInGrams.toFixed(2)} g`, isHighlight: true }
        ];
  
        if (weightInKg >= 1) {
          summary.push({ label: 'Weight in kg', value: `${weightInKg.toFixed(3)} kg` });
        }
  
        rows = [
          ["Cost of 1 kg", `₹${cost}`],
          ["Purchase Mode", "According to budget"],
          ["Entered Budget", `₹${target}`],
          ["Calculated Weight", `${weightInGrams.toFixed(2)} g`]
        ];
      }
  
      return { summary, referenceTable: { headers: ["Calculation Details", "Value"], rows } };
  
    } catch (err) {
      return { summary: [{ label: 'Error', value: err.message, isHighlight: true }] };
    }
  };