export function calculateLogic(inputs) {
    const length = parseFloat(inputs.length) || 0;
    const width = parseFloat(inputs.width) || 0;
    const thickness = parseFloat(inputs.thickness) || 0;
    const unit = inputs.unit;
    const thicknessUnit = inputs.thickness_unit;
    const steelRule = parseFloat(inputs.steel_rule) || 80;
  
    if (length <= 0 || width <= 0 || thickness <= 0) return { summary: [] };
  
    // 1. Convert everything to Meters for standardized calculations
    let lengthM = unit === "feet" ? length * 0.3048 : length;
    let widthM = unit === "feet" ? width * 0.3048 : width;
    
    let thicknessM = 0;
    if (thicknessUnit === "inches") {
      thicknessM = thickness * 0.0254; // 1 inch = 0.0254 meters
    } else if (thicknessUnit === "mm") {
      thicknessM = thickness / 1000;
    }
  
    // 2. Calculate Concrete Volume
    const volumeCum = lengthM * widthM * thicknessM;
    const volumeCft = volumeCum * 35.3147; // 1 Cubic Meter = 35.3147 CFT
  
    // 3. Calculate Steel using Thumb Rule
    // Steel required = Concrete Volume in m³ * Steel Thumb Rule Factor
    const totalSteelKg = volumeCum * steelRule;
    const totalSteelTons = totalSteelKg / 1000;
  
    // 4. Calculate approximate concrete bags (If they are hand-mixing using M20 ratio)
    // Dry volume = Wet Volume * 1.54. Cement part for M20 (1:1.5:3) = 1/5.5
    const dryVolumeCum = volumeCum * 1.54;
    const cementCum = dryVolumeCum * (1 / 5.5);
    const cementBags = Math.ceil((cementCum * 1440) / 50); 
  
    return {
      summary: [
        {
          label: "Concrete Volume (Cubic Meters)",
          value: `${volumeCum.toFixed(2)} m³`,
          isHighlight: true
        },
        {
          label: "Concrete Volume (CFT)",
          value: `${volumeCft.toFixed(2)} CFT`,
          isHighlight: true
        },
        {
          label: "Estimated Steel Needed (Kg)",
          value: `${Math.ceil(totalSteelKg)} kg`,
          isHighlight: true
        },
        {
          label: "Estimated Steel (Metric Tons)",
          value: `${totalSteelTons.toFixed(2)} Tons`,
          isHighlight: false
        },
        {
          label: "Cement Bags (If mixing M20 on-site)",
          value: `${cementBags} Bags`,
          isHighlight: false
        }
      ]
    };
  }