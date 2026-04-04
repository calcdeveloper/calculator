export function calculateLogic(inputs) {
    const shape = inputs.shape;
    const unit = inputs.unit;
    
    const length = parseFloat(inputs.length) || 0;
    const width = parseFloat(inputs.width) || 0;
    const diameter = parseFloat(inputs.diameter) || 0;
    const depth = parseFloat(inputs.depth) || 0;
  
    if (depth <= 0) return { summary: [] };
    if (shape === "rectangular" && (length <= 0 || width <= 0)) return { summary: [] };
    if (shape === "cylindrical" && diameter <= 0) return { summary: [] };
  
    // 1. Calculate Physical Volume
    let volume = 0;
  
    if (shape === "rectangular") {
      volume = length * width * depth;
    } else if (shape === "cylindrical") {
      const radius = diameter / 2;
      volume = Math.PI * (radius * radius) * depth;
    }
  
    // 2. Convert Volume to Liters
    let capacityLiters = 0;
    let volumeCft = 0;
    let volumeCum = 0;
  
    if (unit === "feet") {
      volumeCft = volume;
      volumeCum = volume / 35.3147;
      // 1 Cubic Foot = 28.3168 Liters
      capacityLiters = volumeCft * 28.3168; 
    } else if (unit === "meters") {
      volumeCum = volume;
      volumeCft = volume * 35.3147;
      // 1 Cubic Meter = 1000 Liters
      capacityLiters = volumeCum * 1000; 
    }
  
    // Calculate equivalent family days based on standard Indian BIS norm (135 Liters per person per day)
    const familyOfFourDaily = 135 * 4; // 540 liters/day
    const daysSupply = (capacityLiters / familyOfFourDaily).toFixed(1);
  
    return {
      summary: [
        {
          label: "Total Tank Capacity",
          value: `${Math.round(capacityLiters).toLocaleString("en-IN")} Liters`,
          isHighlight: true
        },
        {
          label: "Internal Volume",
          value: unit === "feet" ? `${volumeCft.toFixed(2)} CFT` : `${volumeCum.toFixed(2)} m³`,
          isHighlight: false
        },
        {
          label: "Water Supply Estimate (Family of 4)",
          value: `~${daysSupply} Days`,
          isHighlight: false
        }
      ]
    };
  }