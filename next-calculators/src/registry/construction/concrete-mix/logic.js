export function calculateLogic(inputs) {
    const volume = parseFloat(inputs.volume) || 0;
    const unit = inputs.unit;
    const grade = inputs.grade;
    const wastage = parseFloat(inputs.wastage) || 5;
  
    if (volume <= 0) return { summary: [] };
  
    // 1. Convert Input to Cubic Meters (Wet Volume)
    let wetVolumeCum = volume;
    if (unit === "cft") {
      // 1 Cubic Meter = 35.3147 CFT
      wetVolumeCum = volume / 35.3147;
    }
  
    // Add Wastage
    wetVolumeCum = wetVolumeCum * (1 + wastage / 100);
  
    // 2. Convert Wet Volume to Dry Volume
    // In concrete, dry volume is 54% more than wet volume
    const dryVolumeFactor = 1.54;
    const dryVolumeCum = wetVolumeCum * dryVolumeFactor;
  
    // 3. Determine Mix Ratios based on IS Code
    let cementPart = 1, sandPart = 1.5, aggPart = 3; // Default M20
    
    if (grade === "M10") { cementPart = 1; sandPart = 3; aggPart = 6; }
    else if (grade === "M15") { cementPart = 1; sandPart = 2; aggPart = 4; }
    else if (grade === "M20") { cementPart = 1; sandPart = 1.5; aggPart = 3; }
    else if (grade === "M25") { cementPart = 1; sandPart = 1; aggPart = 2; }
  
    const totalRatio = cementPart + sandPart + aggPart;
  
    // 4. Calculate Cement
    const cementVolumeCum = dryVolumeCum * (cementPart / totalRatio);
    // Density of cement = 1440 kg/m³
    const cementKg = cementVolumeCum * 1440;
    const cementBags = cementKg / 50; // 1 Bag = 50 kg
  
    // 5. Calculate Sand
    const sandVolumeCum = dryVolumeCum * (sandPart / totalRatio);
    const sandCFT = sandVolumeCum * 35.3147;
  
    // 6. Calculate Aggregate (Gitti)
    const aggVolumeCum = dryVolumeCum * (aggPart / totalRatio);
    const aggCFT = aggVolumeCum * 35.3147;
  
    return {
      summary: [
        {
          label: "Cement Required (50kg Bags)",
          value: `${Math.ceil(cementBags * 10) / 10} Bags`,
          isHighlight: true
        },
        {
          label: "Sand Required (CFT)",
          value: `${Math.ceil(sandCFT)} CFT`,
          isHighlight: true
        },
        {
          label: "Aggregate Required (CFT)",
          value: `${Math.ceil(aggCFT)} CFT`,
          isHighlight: true
        },
        {
          label: "Total Dry Material Volume",
          value: `${dryVolumeCum.toFixed(2)} m³`,
          isHighlight: false
        }
      ]
    };
  }