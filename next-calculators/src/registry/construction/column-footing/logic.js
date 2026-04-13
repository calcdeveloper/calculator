export function calculateLogic(inputs) {
    const unit = inputs.unit;
    const shape = inputs.shape;
    
    const colL = parseFloat(inputs.col_length) || 0;
    // Default width to 0 for circular to prevent NaN errors
    const colW = shape === "circular" ? 0 : (parseFloat(inputs.col_width) || 0);
    const colH = parseFloat(inputs.col_height) || 0;
    
    const footL = parseFloat(inputs.foot_length) || 0;
    const footW = parseFloat(inputs.foot_width) || 0;
    const footD = parseFloat(inputs.foot_depth) || 0;
    
    const quantity = parseFloat(inputs.quantity) || 1;
  
    if (colL <= 0 || colH <= 0 || footL <= 0 || footW <= 0 || footD <= 0) {
      return { summary: [] };
    }
    if (shape === "rectangular" && colW <= 0) return { summary: [] };
  
    // 1. Calculate Footing Volume (Rectangular Block)
    const singleFootingVol = footL * footW * footD;
  
    // 2. Calculate Column Volume
    let singleColumnVol = 0;
    if (shape === "rectangular") {
      singleColumnVol = colL * colW * colH;
    } else if (shape === "circular") {
      const radius = colL / 2;
      singleColumnVol = Math.PI * (radius * radius) * colH;
    }
  
    // 3. Totals per Unit (Column + Footing)
    const totalSingleVol = singleFootingVol + singleColumnVol;
    const grandTotalVol = totalSingleVol * quantity;
  
    // 4. Convert Based on Selected Input Unit
    let totalMeters = 0;
    let totalCft = 0;
  
    if (unit === "feet") {
      totalCft = grandTotalVol;
      totalMeters = grandTotalVol / 35.3147; // 1 m³ = 35.3147 CFT
    } else if (unit === "meters") {
      totalMeters = grandTotalVol;
      totalCft = grandTotalVol * 35.3147;
    }
  
    // Calculate 5% Wastage
    const volumeWithWastage = totalMeters * 1.05;
  
    return {
      summary: [
        {
          label: "Total Concrete Volume (m³)",
          value: `${totalMeters.toFixed(3)} m³`,
          isHighlight: true
        },
        {
          label: "Total Concrete Volume (CFT)",
          value: `${totalCft.toFixed(2)} CFT`,
          isHighlight: true
        },
        {
          label: "Total Volume + 5% Wastage",
          value: `${volumeWithWastage.toFixed(3)} m³`,
          isHighlight: false
        },
        {
          label: `Footing Volume (${quantity} pcs)`,
          value: unit === "feet" ? `${(singleFootingVol * quantity).toFixed(2)} CFT` : `${(singleFootingVol * quantity).toFixed(3)} m³`,
          isHighlight: false
        },
        {
          label: `Column Volume (${quantity} pcs)`,
          value: unit === "feet" ? `${(singleColumnVol * quantity).toFixed(2)} CFT` : `${(singleColumnVol * quantity).toFixed(3)} m³`,
          isHighlight: false
        }
      ]
    };
  }