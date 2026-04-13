export function calculateLogic(inputs) {
    const length = parseFloat(inputs.length) || 0;
    const width = parseFloat(inputs.width) || 0;
    const unit = inputs.unit;
    const wastage = parseFloat(inputs.wastage) || 10;
    const mortarThicknessInches = parseFloat(inputs.mortar_thickness) || 1.5;
    const sandRatio = parseFloat(inputs.mortar_ratio) || 6;
  
    if (length <= 0 || width <= 0) return { summary: [] };
  
    // 1. Calculate Area
    let areaSqFt = 0;
    let areaSqM = 0;
  
    if (unit === "feet") {
      areaSqFt = length * width;
      areaSqM = areaSqFt / 10.7639; // 1 Sq.m = 10.7639 Sq.ft
    } else if (unit === "meters") {
      areaSqM = length * width;
      areaSqFt = areaSqM * 10.7639;
    }
  
    // Add Wastage to Area
    const totalStoneSqFt = areaSqFt * (1 + (wastage / 100));
    
    // 2. Calculate Mortar Bed Volume
    // Convert thickness to meters: 1 inch = 0.0254 meters
    const thicknessMeters = mortarThicknessInches * 0.0254;
    const wetVolumeCum = areaSqM * thicknessMeters;
  
    // Dry volume for mortar is approx 33% more than wet volume
    const dryVolumeCum = wetVolumeCum * 1.33;
  
    // 3. Calculate Cement and Sand
    const totalRatio = 1 + sandRatio; // e.g., 1 + 6 = 7
    
    // Cement part = 1 / totalRatio
    const cementVolumeCum = dryVolumeCum * (1 / totalRatio);
    // 1 m³ of cement = 1440 kg. 1 bag = 50 kg.
    const cementBags = Math.ceil((cementVolumeCum * 1440) / 50);
  
    // Sand part = sandRatio / totalRatio
    const sandVolumeCum = dryVolumeCum * (sandRatio / totalRatio);
    // Convert sand back to CFT (1 m³ = 35.3147 CFT)
    const sandCft = sandVolumeCum * 35.3147;
  
    return {
      summary: [
        {
          label: "Total Stone Required (with wastage)",
          value: `${Math.ceil(totalStoneSqFt)} Sq.ft`,
          isHighlight: true
        },
        {
          label: "Base Area (No wastage)",
          value: `${areaSqFt.toFixed(1)} Sq.ft`,
          isHighlight: false
        },
        {
          label: "Cement Required (50kg Bags)",
          value: `${cementBags} Bags`,
          isHighlight: true
        },
        {
          label: "Sand (Badarpur / River Sand)",
          value: `${Math.ceil(sandCft)} CFT`,
          isHighlight: true
        }
      ]
    };
  }