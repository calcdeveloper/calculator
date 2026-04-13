export function calculateLogic(inputs) {
    const length = parseFloat(inputs.length) || 0;
    const width = parseFloat(inputs.width) || 0;
    const height = parseFloat(inputs.height) || 0;
    const unit = inputs.unit;
    const material = inputs.material;
  
    if (length <= 0 || width <= 0 || height <= 0) return { summary: [] };
  
    // 1. Convert all dimensions to Cubic Feet (CFT)
    let volumeCFT = 0;
  
    if (unit === "feet") {
      // Assuming decimal feet (e.g., 10.5 feet)
      volumeCFT = length * width * height;
    } else if (unit === "inches") {
      // Convert inches to CFT: (L * W * H) / 1728
      volumeCFT = (length * width * height) / 1728;
    } else if (unit === "meters") {
      // Convert meters to CFT: 1 Cubic Meter = 35.3147 CFT
      const volumeCuM = length * width * height;
      volumeCFT = volumeCuM * 35.3147;
    }
  
    // 2. Calculate Brass
    // The Golden Rule of Indian Construction: 1 Brass = 100 CFT
    const totalBrass = volumeCFT / 100;
  
    // 3. Estimate Weight (Tonnage)
    // Average densities per CFT:
    // River Sand: ~45 kg / CFT
    // Aggregate (20mm): ~43 kg / CFT
    // Loose Soil: ~35 kg / CFT
    
    let densityPerCft = 45; 
    if (material === "aggregate") densityPerCft = 43;
    if (material === "soil") densityPerCft = 35;
  
    const totalWeightKg = volumeCFT * densityPerCft;
    const totalTonnage = totalWeightKg / 1000; // Convert Kg to Metric Tons
  
    return {
      summary: [
        {
          label: "Total Volume in Brass",
          value: `${totalBrass.toFixed(2)} Brass`,
          isHighlight: true
        },
        {
          label: "Total Volume in CFT",
          value: `${Math.round(volumeCFT)} CFT`,
          isHighlight: true
        },
        {
          label: "Estimated Weight (Metric Tons)",
          value: `${totalTonnage.toFixed(2)} Tons`,
          isHighlight: false
        },
        {
          label: "Estimated Weight (Kg)",
          value: `${Math.round(totalWeightKg)} kg`,
          isHighlight: false
        }
      ]
    };
  }