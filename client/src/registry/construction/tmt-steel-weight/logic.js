export function calculateLogic(inputs) {
    const d = parseFloat(inputs.diameter) || 12;
    const length = parseFloat(inputs.length) || 0;
    const quantity = parseFloat(inputs.quantity) || 0;
    const unit = inputs.unit;
  
    if (length <= 0 || quantity <= 0) return { summary: [] };
  
    // 1. Calculate Unit Weight based on the standard formulas
    let weightPerUnitLength = 0;
  
    if (unit === "meters") {
      // Formula for Kg per Meter: D^2 / 162.28 (162 is the rounded thumb rule)
      weightPerUnitLength = (d * d) / 162.28; 
    } else {
      // Formula for Kg per Foot: D^2 / 533
      weightPerUnitLength = (d * d) / 533; 
    }
  
    // 2. Calculate Total Weights
    const weightPerBar = weightPerUnitLength * length;
    const totalWeightKg = weightPerBar * quantity;
    const totalWeightTons = totalWeightKg / 1000; // 1 Metric Ton = 1000 Kg
  
    // 3. Indian Standard Bundle Logic (For standard 12m / 39.4ft bars)
    let piecesPerBundle = 1;
    if (d === 8) piecesPerBundle = 10;
    else if (d === 10) piecesPerBundle = 7;
    else if (d === 12) piecesPerBundle = 5;
    else if (d === 16) piecesPerBundle = 3;
    else if (d === 20) piecesPerBundle = 2;
    else if (d === 25) piecesPerBundle = 1;
    else if (d === 32) piecesPerBundle = 1;
  
    // Calculate the standard weight of one full 12-meter bundle for the output
    const standardBarWeightMeters = ((d * d) / 162.28) * 12;
    const standardBundleWeight = standardBarWeightMeters * piecesPerBundle;
    
    // Calculate how many bundles the user is equivalent to ordering
    const totalBundles = (quantity / piecesPerBundle).toFixed(2);
  
    return {
      summary: [
        {
          label: "Total Weight (Kg)",
          value: `${totalWeightKg.toFixed(2)} kg`,
          isHighlight: true
        },
        {
          label: "Total Weight (Metric Tons)",
          value: `${totalWeightTons.toFixed(3)} Tons`,
          isHighlight: true
        },
        {
          label: `Weight of 1 Bar (${length} ${unit})`,
          value: `${weightPerBar.toFixed(2)} kg`,
          isHighlight: false
        },
        {
          label: `Total Equivalent Bundles`,
          value: `${totalBundles} Bundles`,
          isHighlight: false
        },
        {
          label: `Standard 12m Bundle Weight (${piecesPerBundle} pieces)`,
          value: `${standardBundleWeight.toFixed(2)} kg`,
          isHighlight: false
        }
      ]
    };
  }