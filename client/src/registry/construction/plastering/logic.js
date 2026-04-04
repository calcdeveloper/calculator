export function calculateLogic(inputs) {
    const length = parseFloat(inputs.wall_length) || 0;
    const height = parseFloat(inputs.wall_height) || 0;
    const unit = inputs.unit;
    const thicknessMm = parseFloat(inputs.plaster_thickness) || 12;
    const mortarRatio = parseFloat(inputs.mortar_ratio) || 4;
    const unevennessFactor = parseFloat(inputs.unevenness) || 20;
  
    if (length <= 0 || height <= 0) return { summary: [] };
  
    // 1. Convert dimensions to Meters
    let lengthM = length;
    let heightM = height;
    if (unit === "feet") {
      lengthM = length * 0.3048;
      heightM = height * 0.3048;
    }
    
    const areaSqm = lengthM * heightM;
    const areaSqft = areaSqm * 10.7639;
    const thicknessM = thicknessMm / 1000;
  
    // 2. Calculate Wet Volume
    const exactWetVolume = areaSqm * thicknessM;
  
    // Add allowance for filling joints, uneven brickwork, and wastage
    const adjustedWetVolume = exactWetVolume * (1 + unevennessFactor / 100);
  
    // 3. Convert Wet Volume to Dry Volume
    // Dry volume of mortar is 33% more than wet volume
    const dryVolume = adjustedWetVolume * 1.33;
  
    // 4. Calculate Cement and Sand based on Ratio
    const totalRatio = 1 + mortarRatio; // e.g., 1 + 4 = 5
    
    // Cement Calculation
    const cementVolumeCum = dryVolume * (1 / totalRatio);
    const cementKg = cementVolumeCum * 1440; // Density of cement = 1440 kg/m3
    const cementBags = cementKg / 50; // 1 Bag = 50 kg
  
    // Sand Calculation
    const sandVolumeCum = dryVolume * (mortarRatio / totalRatio);
    const sandCFT = sandVolumeCum * 35.3147; // 1 Cubic Meter = 35.3147 CFT
  
    return {
      summary: [
        {
          label: "Cement Required (50kg Bags)",
          value: `${Math.ceil(cementBags * 10) / 10} Bags`, // Rounds to 1 decimal
          isHighlight: true
        },
        {
          label: "Sand Required (Cubic Feet / CFT)",
          value: `${Math.ceil(sandCFT)} CFT`,
          isHighlight: true
        },
        {
          label: "Plastering Area",
          value: `${Math.round(areaSqft)} Sq.Ft (${areaSqm.toFixed(1)} m²)`,
          isHighlight: false
        },
        {
          label: "Dry Mortar Volume",
          value: `${dryVolume.toFixed(3)} m³`,
          isHighlight: false
        }
      ]
    };
  }