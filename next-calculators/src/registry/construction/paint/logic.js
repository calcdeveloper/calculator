export function calculateLogic(inputs) {
    const length = parseFloat(inputs.length) || 0;
    const width = parseFloat(inputs.width) || 0;
    const height = parseFloat(inputs.height) || 0;
    const ceiling = inputs.ceiling;
    const doors = parseFloat(inputs.doors) || 0;
    const windows = parseFloat(inputs.windows) || 0;
    const paintType = inputs.paint_type;
    const coats = parseInt(inputs.coats) || 2;
  
    if (length <= 0 || width <= 0 || height <= 0) return { summary: [] };
  
    // 1. Calculate Gross Wall Area
    // Perimeter = 2 * (Length + Width)
    const perimeter = 2 * (length + width);
    const grossWallArea = perimeter * height;
  
    // 2. Calculate Ceiling Area (If included)
    const ceilingArea = ceiling === "yes" ? (length * width) : 0;
  
    // 3. Calculate Deductions (Doors and Windows)
    // Standard Indian Door is ~21 Sq.ft (7x3). Window is ~16 Sq.ft (4x4).
    const deductions = (doors * 21) + (windows * 16);
  
    // 4. Calculate Net Paintable Area
    let netArea = (grossWallArea + ceilingArea) - deductions;
    if (netArea < 0) netArea = 0; // Prevent negative area
  
    // 5. Determine Coverage Rate (Sq.ft per Liter) based on Indian Standards
    let coveragePerLiter = 0;
  
    if (paintType === "luxury_interior") {
      coveragePerLiter = coats === 2 ? 140 : 250;
    } else if (paintType === "standard_interior") {
      coveragePerLiter = coats === 2 ? 120 : 220;
    } else if (paintType === "exterior") {
      coveragePerLiter = coats === 2 ? 60 : 110; // Exterior paints are much thicker
    }
  
    // 6. Calculate Liters Required
    const paintLiters = netArea / coveragePerLiter;
    
    // Primer Coverage (Standard 1 coat is ~100-120 sq.ft per liter)
    const primerLiters = netArea / 110;
  
    return {
      summary: [
        {
          label: "Total Paint Required",
          value: `${Math.ceil(paintLiters)} Liters`,
          isHighlight: true
        },
        {
          label: "Wall Primer Required (1 Coat)",
          value: `${Math.ceil(primerLiters)} Liters`,
          isHighlight: true
        },
        {
          label: "Net Paintable Area",
          value: `${netArea.toFixed(1)} Sq.ft`,
          isHighlight: false
        },
        {
          label: "Estimated Paint Coverage",
          value: `${coveragePerLiter} Sq.ft / Liter`,
          isHighlight: false
        }
      ]
    };
  }